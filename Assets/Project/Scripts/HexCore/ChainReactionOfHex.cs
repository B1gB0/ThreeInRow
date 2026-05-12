using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Project.Scripts.HexCore
{
    public class ChainReactionOfHex : MonoBehaviour
    {
        private const float Speed = 0.3f; // 30%

        private readonly Vector2Int[] _neighbourOffsets = new Vector2Int[]
        {
            new Vector2Int(1, 0), new Vector2Int(1, -1), new Vector2Int(0, -1),
            new Vector2Int(-1, 0), new Vector2Int(-1, 1), new Vector2Int(0, 1)
        };
        
        [SerializeField] private AnimationCurve _moveCurve;
        [SerializeField] private HexGrid _hexGrid;
        [SerializeField] private float _baseMoveDuration = 0.3f;
        
        private float _currentSpeedMultiplier = 1f;

        public void StartChainReaction(HexCell startCell)
        {
            StartCoroutine(ProcessChain(startCell));
        }

        private IEnumerator ProcessChain(HexCell startCell)
        {
            // Поиск соседей того же цвета и перемещение шестиугольников
            List<HexCell> neighbors = GetSameColorNeighbors(startCell);
            foreach (var neighbor in neighbors)
            {
                yield return StartCoroutine(MoveOneHex(startCell, neighbor));
            }

            // Удаление заполненных стопок
            if (startCell.CurrentStack.Count >= 10)
            {
                yield return StartCoroutine(DissolveStack(startCell));
            }

            // Увеличиваем скорость для следующего шага
            _currentSpeedMultiplier += Speed;

            // Проверяем, не осталось ли ещё возможных перемещений
            // (рекурсивный вызов для соседей)
        }

        private List<HexCell> GetSameColorNeighbors(HexCell cell)
        {
            List<HexCell> sameColor = new List<HexCell>();

            foreach (var offset in _neighbourOffsets)
            {
                Vector2Int neighborCoord = cell.Coordinates + offset;
                HexCell neighbor = _hexGrid.GetCell(neighborCoord);
                if (neighbor != null 
                    && !neighbor.IsEmpty && neighbor.CurrentStack.CurrentHexPrefab == cell.CurrentStack.CurrentHexPrefab)
                {
                    sameColor.Add(neighbor);
                }
            }
            return sameColor;
        }

        private IEnumerator MoveOneHex(HexCell from, HexCell to)
        {
            // Убираем один гекс из источника (визуально верхний)
            Hex movedHex = from.CurrentStack.RemoveTopHex(); // метод нужно добавить в HexStack
            if (movedHex == null) yield break;

            // Начальная и конечная точки (позиции самих стопок + смещение по высоте)
            Vector3 startPos = from.transform.position + Vector3.up * (from.CurrentStack.Count * 0.15f);
            Vector3 endPos = to.transform.position + Vector3.up * (to.CurrentStack.Count * 0.15f);

            float duration = _baseMoveDuration / _currentSpeedMultiplier;
            float elapsed = 0f;

            while (elapsed < duration)
            {
                elapsed += Time.deltaTime;
                float t = _moveCurve.Evaluate(Mathf.Clamp01(elapsed / duration));
                movedHex.transform.position = Vector3.Lerp(startPos, endPos, t);
                yield return null;
            }

            // Добавляем гекс в целевую стопку
            to.CurrentStack.AddHexagon(movedHex); // метод AddHexagon с параметром
            _currentSpeedMultiplier += Speed;
        }

        private IEnumerator DissolveStack(HexCell cell)
        {
            // Простая анимация исчезновения (можно заменить на партиклы)
            float t = 0f;
            Vector3 originalScale = cell.CurrentStack.transform.localScale;
            while (t < 0.3f)
            {
                t += Time.deltaTime;
                cell.CurrentStack.transform.localScale = Vector3.Lerp(originalScale, Vector3.zero, t / 0.3f);
                yield return null;
            }
            cell.RemoveStack();
        }
    }
}