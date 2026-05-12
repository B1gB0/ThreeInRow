using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Project.Scripts.HexCore
{
    public class ChainReactionOfHex : MonoBehaviour
    {
        private const float SpeedIncrease = 0.3f; // 30% ускорения за шаг

        private readonly Vector2Int[] _neighbourOffsets = new Vector2Int[]
        {
            new Vector2Int(1, 0), new Vector2Int(1, -1), new Vector2Int(0, -1),
            new Vector2Int(-1, 0), new Vector2Int(-1, 1), new Vector2Int(0, 1)
        };

        [SerializeField] private AnimationCurve _moveCurve;
        [SerializeField] private HexGrid _hexGrid;
        [SerializeField] private float _baseMoveDuration = 0.3f;

        private float _currentSpeedMultiplier = 1f;
        private Coroutine _currentReaction;

        public void StartChainReaction(HexCell startCell)
        {
            if (_currentReaction != null)
                StopCoroutine(_currentReaction);

            _currentSpeedMultiplier = 1f;
            _currentReaction = StartCoroutine(ProcessChain(startCell));
        }

        private IEnumerator ProcessChain(HexCell startCell)
        {
            // Работаем, пока в поставленном стеке есть гексы
            while (startCell != null && !startCell.IsEmpty)
            {
                HexStack startStack = startCell.CurrentStack;
                if (startStack.Count == 0)
                {
                    startCell.RemoveStack();
                    yield break;
                }

                // Текущий верхний цвет в поставленном стеке
                Hex topHex = startStack.GetTopHex();
                if (topHex == null) yield break;

                // Ищем соседей, у которых верхний гекс такого же цвета (префаба)
                List<HexCell> sameColorNeighbors = GetSameTopColorNeighbors(startCell, topHex);

                // Если подходящих соседей нет — реакция останавливается
                if (sameColorNeighbors.Count == 0)
                    yield break;

                foreach (var neighbor in sameColorNeighbors)
                {
                    // Переносим из startCell в neighbor, пока верхний цвет startCell совпадает с topHex
                    // и сосед существует и не пуст (на случай, если сосед удалился в процессе)
                    while (!startCell.IsEmpty &&
                           startCell.CurrentStack.GetTopHex() != null &&
                           startCell.CurrentStack.GetTopHex()._prefabReference == topHex._prefabReference &&
                           neighbor != null && !neighbor.IsEmpty)
                    {
                        // Перенос одного гекса из start в neighbor
                        yield return StartCoroutine(MoveOneHex(startCell, neighbor));

                        // Проверяем, не набралось ли 10 верхних одинакового цвета у соседа
                        if (CountTopSameColor(neighbor.CurrentStack, topHex) >= 10)
                        {
                            yield return StartCoroutine(DissolveTopTen(neighbor, topHex));

                            // Если сосед после удаления опустел — выходим из while по этому соседу
                            if (neighbor.IsEmpty)
                                break;
                        }

                        // Увеличиваем скорость после каждого перемещения
                        _currentSpeedMultiplier += SpeedIncrease;
                    }

                    // После переноса к этому соседу проверяем startCell:
                    if (startCell.IsEmpty)
                        yield break; // start опустел, реакция завершена

                    // Обновляем topHex — возможно, верхний цвет изменился
                    topHex = startStack.GetTopHex();
                    if (topHex == null)
                        yield break; // start опустел

                    // Ищем новых соседей для нового верхнего цвета
                    sameColorNeighbors = GetSameTopColorNeighbors(startCell, topHex);
                    break; // выходим из foreach, чтобы заново обработать новый список соседей
                }
            }
        }

        /// <summary>
        /// Подсчитывает, сколько верхних гексов в стеке имеют тот же префаб, что и sample.
        /// </summary>
        private int CountTopSameColor(HexStack stack, Hex sample)
        {
            int count = 0;
            for (int i = stack.Count - 1; i >= 0; i--)
            {
                if (stack.GetHexAt(i)._prefabReference == sample._prefabReference)
                    count++;
                else
                    break;
            }
            return count;
        }

        /// <summary>
        /// Возвращает соседей, у которых верхний гекс того же префаба, что и образец.
        /// </summary>
        private List<HexCell> GetSameTopColorNeighbors(HexCell cell, Hex sample)
        {
            List<HexCell> result = new List<HexCell>();
            foreach (var offset in _neighbourOffsets)
            {
                Vector2Int coord = cell.Coordinates + offset;
                HexCell neighbor = _hexGrid.GetCell(coord);
                if (neighbor == null || neighbor.IsEmpty) continue;

                Hex neighborTop = neighbor.CurrentStack.GetTopHex();
                if (neighborTop != null && neighborTop._prefabReference == sample._prefabReference)
                {
                    result.Add(neighbor);
                }
            }
            return result;
        }

        /// <summary>
        /// Анимация перемещения одного гекса из from в to.
        /// </summary>
        private IEnumerator MoveOneHex(HexCell from, HexCell to)
        {
            Hex movedHex = from.CurrentStack.RemoveTopHex();
            if (movedHex == null) yield break;

            // Начальная позиция — текущая, конечная — над to
            Vector3 startPos = movedHex.transform.position;
            Vector3 endPos = to.transform.position + Vector3.up * (to.CurrentStack.Count * 0.15f + 0.15f);

            float duration = _baseMoveDuration / _currentSpeedMultiplier;
            float elapsed = 0f;

            while (elapsed < duration)
            {
                elapsed += Time.deltaTime;
                float t = _moveCurve.Evaluate(Mathf.Clamp01(elapsed / duration));
                movedHex.transform.position = Vector3.Lerp(startPos, endPos, t);
                yield return null;
            }

            // Добавляем в целевой стек
            to.CurrentStack.AddExistingHex(movedHex);

            // Если исходный стек опустел полностью — удаляем его
            if (from.CurrentStack.Count == 0)
                from.RemoveStack();
        }

        /// <summary>
        /// Удаляет 10 верхних гексов указанного префаба из стека (с анимацией).
        /// </summary>
        private IEnumerator DissolveTopTen(HexCell cell, Hex sample)
        {
            HexStack stack = cell.CurrentStack;
            var collider = stack.GetComponent<Collider>();
            if (collider) collider.enabled = false;

            // Можно добавить анимацию исчезновения/сжатия
            yield return new WaitForSeconds(0.2f / _currentSpeedMultiplier);

            stack.RemoveTopHexes(10); // удалит ровно 10 верхних

            // Если стек опустел — RemoveStack уже вызван внутри RemoveTopHexes
            if (!cell.IsEmpty && collider) collider.enabled = true;
        }
    }
}