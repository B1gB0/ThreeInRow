using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Project.Scripts.HexCore
{
	public class ChainReactionOfHex : MonoBehaviour
	{
		private const float SpeedIncrease = 0.3f;

		private readonly Vector2Int[] _neighbourOffsets = new Vector2Int[6]
		{
			new Vector2Int(1, 0),
			new Vector2Int(1, -1),
			new Vector2Int(0, -1),
			new Vector2Int(-1, 0),
			new Vector2Int(-1, 1),
			new Vector2Int(0, 1)
		};

		[SerializeField]
		private AnimationCurve _moveCurve;

		[SerializeField]
		private HexGrid _hexGrid;

		[SerializeField]
		private float _baseMoveDuration = 0.3f;

		private float _currentSpeedMultiplier = 1f;

		private Coroutine _currentReaction;

		public void StartChainReaction(HexCell startCell)
		{
			if (_currentReaction != null)
			{
				StopCoroutine(_currentReaction);
			}
			_currentSpeedMultiplier = 1f;
			_currentReaction = StartCoroutine(ProcessChain(startCell));
		}

		private int CountTopSameColor(HexStack stack, Hex sample)
		{
			int count = 0;
			int i = stack.Count - 1;
			while (i >= 0 && stack.GetHexAt(i).HexColor == sample.HexColor)
			{
				count++;
				i--;
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
					break;
				}
				Hex topHex = startStack.GetTopHex();
				if (topHex == null)
				{
					break;
				}
				List<HexCell> sameColorNeighbors = GetSameTopColorNeighbors(startCell, topHex);
				if (sameColorNeighbors.Count == 0)
				{
					break;
				}
				foreach (HexCell neighbor2 in sameColorNeighbors)
				{
					if (startCell.CurrentStack.GetTopHex().HexColor == topHex.HexColor)
					{
						_currentSpeedMultiplier += 0.3f;
					}
					while (!startCell.IsEmpty && startCell.CurrentStack.GetTopHex() != null && startCell.CurrentStack.GetTopHex().HexColor == topHex.HexColor && neighbor2 != null && !neighbor2.IsEmpty)
					{
						yield return StartCoroutine(MoveOneHex(startCell, neighbor2));
						if (startCell.IsEmpty)
						{
							yield break;
						}
						if (startCell.CurrentStack.GetTopHex().HexColor != topHex.HexColor)
						{
							break;
						}
					}
					if (startCell.IsEmpty)
					{
						yield break;
					}
					if (startCell.CurrentStack.GetTopHex().HexColor != topHex.HexColor)
					{
						break;
					}
				}
				foreach (HexCell neighbor in sameColorNeighbors)
				{
					if (!(neighbor == null) && !neighbor.IsEmpty)
					{
						int sameCount = CountTopSameColor(neighbor.CurrentStack, topHex);
						if (sameCount >= 10)
						{
							yield return StartCoroutine(DissolveTopTen(neighbor, topHex));
						}
					}
				}
			}
		}

		private List<HexCell> GetSameTopColorNeighbors(HexCell cell, Hex sample)
		{
			List<HexCell> result = new List<HexCell>();
			Vector2Int[] neighbourOffsets = _neighbourOffsets;
			foreach (Vector2Int offset in neighbourOffsets)
			{
				Vector2Int coord = cell.Coordinates + offset;
				HexCell neighbor = _hexGrid.GetCell(coord);
				if (!(neighbor == null) && !neighbor.IsEmpty)
				{
					Hex neighborTop = neighbor.CurrentStack.GetTopHex();
					if (neighborTop != null && neighborTop.HexColor == sample.HexColor)
					{
						result.Add(neighbor);
					}
				}
			}
			return result;
		}

		private IEnumerator MoveOneHex(HexCell from, HexCell to)
		{
			Hex movedHex = from.CurrentStack.RemoveTopHex();
			movedHex.OnPlayMoveSound();
			if (!(movedHex == null))
			{
				Vector3 startPos = movedHex.transform.position;
				Vector3 endPos = to.transform.position + Vector3.up * ((float)to.CurrentStack.Count * 0.15f + 0.15f);
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
				{
					from.RemoveStack();
				}
			}
		}

		private IEnumerator DissolveTopTen(HexCell cell, Hex sample)
		{
			HexStack stack = cell.CurrentStack;
			Collider collider = stack.GetComponent<Collider>();
			if ((bool)collider)
			{
				collider.enabled = false;
			}
			yield return stack.TryRemoveTopColorGroup(sample);
			if (!cell.IsEmpty && (bool)collider)
			{
				collider.enabled = true;
			}
		}
	}
}
