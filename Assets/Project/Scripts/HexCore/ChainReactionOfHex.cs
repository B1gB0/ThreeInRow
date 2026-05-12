using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Project.Scripts.HexCore
{
    public class ChainReactionOfHex : MonoBehaviour
    {
        private const float SpeedIncrease = 0.3f;

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

        private int CountTopSameColor(HexStack stack, Hex sample)
        {
            int count = 0;
            for (int i = stack.Count - 1; i >= 0; i--)
            {
                if (stack.GetHexAt(i).HexColor == sample.HexColor)
                    count++;
                else
                    break;
            }

            return count;
        }

        private IEnumerator ProcessChain(HexCell startCell)
        {
            while (startCell != null && !startCell.IsEmpty)
            {
                HexStack startStack = startCell.CurrentStack;

                if (startStack.Count == 0)
                {
                    startCell.RemoveStack();
                    yield break;
                }

                Hex topHex = startStack.GetTopHex();
                if (topHex == null) yield break;

                List<HexCell> sameColorNeighbors = GetSameTopColorNeighbors(startCell, topHex);
                if (sameColorNeighbors.Count == 0)
                    yield break;

                foreach (var neighbor in sameColorNeighbors)
                {
                    if(startCell.CurrentStack.GetTopHex().HexColor == topHex.HexColor)
                        _currentSpeedMultiplier += SpeedIncrease;
                    
                    while (!startCell.IsEmpty &&
                           startCell.CurrentStack.GetTopHex() != null &&
                           startCell.CurrentStack.GetTopHex().HexColor == topHex.HexColor &&
                           neighbor != null && !neighbor.IsEmpty)
                    {
                        yield return StartCoroutine(MoveOneHex(startCell, neighbor));

                        if (startCell.IsEmpty)
                            yield break;
                        
                        if (startCell.CurrentStack.GetTopHex().HexColor != topHex.HexColor)
                            break;
                    }
                    
                    if (startCell.IsEmpty)
                        yield break;

                    if (startCell.CurrentStack.GetTopHex().HexColor != topHex.HexColor)
                        break;
                }
                
                foreach (var neighbor in sameColorNeighbors)
                {
                    if (neighbor == null || neighbor.IsEmpty) continue;

                    int sameCount = CountTopSameColor(neighbor.CurrentStack, topHex);
                    if (sameCount >= 10)
                    {
                        yield return StartCoroutine(DissolveTopTen(neighbor, topHex));
                    }
                }
            }
        }

        private List<HexCell> GetSameTopColorNeighbors(HexCell cell, Hex sample)
        {
            List<HexCell> result = new List<HexCell>();
            foreach (var offset in _neighbourOffsets)
            {
                Vector2Int coord = cell.Coordinates + offset;
                HexCell neighbor = _hexGrid.GetCell(coord);
                if (neighbor == null || neighbor.IsEmpty) continue;

                Hex neighborTop = neighbor.CurrentStack.GetTopHex();
                if (neighborTop != null)
                {
                    bool same = neighborTop.HexColor == sample.HexColor;

                    if (same)
                        result.Add(neighbor);
                }
            }

            return result;
        }

        private IEnumerator MoveOneHex(HexCell from, HexCell to)
        {
            Hex movedHex = from.CurrentStack.RemoveTopHex();
            movedHex.OnPlayMoveSound();
            if (movedHex == null) yield break;

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

            to.CurrentStack.AddExistingHex(movedHex);

            if (from.CurrentStack.Count == 0)
                from.RemoveStack();
        }

        private IEnumerator DissolveTopTen(HexCell cell, Hex sample)
        {
            HexStack stack = cell.CurrentStack;
            var collider = stack.GetComponent<Collider>();
            if (collider) collider.enabled = false;
            
            yield return stack.TryRemoveTopColorGroup(sample);

            if (!cell.IsEmpty && collider) collider.enabled = true;
        }
    }
}