using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Project.Scripts.HexCore
{
    public class ChainReactionOfHex : MonoBehaviour
    {
        private const float SPEED_INCREASE = 0.3f; // 30%
        
        private readonly Vector2Int[] _neighbourOffsets = new Vector2Int[]
        {
            new Vector2Int(1, 0), new Vector2Int(1, -1), new Vector2Int(0, -1),
            new Vector2Int(-1, 0), new Vector2Int(-1, 1), new Vector2Int(0, 1)
        };
        
        [SerializeField] private AnimationCurve _moveCurve;
        
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
                yield return StartCoroutine(MoveHexagonsTo(startCell, neighbor));
            }

            // Удаление заполненных стопок
            if (startCell.CurrentStack.Count >= 10)
            {
                yield return StartCoroutine(DissolveStack(startCell));
            }

            // Увеличиваем скорость для следующего шага
            _currentSpeedMultiplier += SPEED_INCREASE;

            // Проверяем, не осталось ли ещё возможных перемещений
            // (рекурсивный вызов для соседей)
        }

        private List<HexCell> GetSameColorNeighbors(HexCell cell)
        {
            List<HexCell> sameColor = new List<HexCell>();
            HexGrid grid = GetComponent<HexGrid>(); // или ссылка через синглтон
            foreach (var offset in _neighbourOffsets)
            {
                Vector2Int neighborCoord = cell.Coordinates + offset;
                HexCell neighbor = grid.GetCell(neighborCoord);
                if (neighbor != null 
                    && !neighbor.IsEmpty && neighbor.CurrentStack.CurrentHexPrefab == cell.CurrentStack.CurrentHexPrefab)
                {
                    sameColor.Add(neighbor);
                }
            }
            return sameColor;
        }

        private IEnumerator MoveHexagonsTo(HexCell from, HexCell to)
        {
            // ... анимация перемещения с использованием _moveCurve и _currentSpeedMultiplier
            yield return null;
        }

        private IEnumerator DissolveStack(HexCell cell)
        {
            // ... анимация исчезновения
            cell.RemoveStack();
            yield return null;
        }
    }
}