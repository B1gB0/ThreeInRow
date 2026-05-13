using System.Collections.Generic;
using Project.Scripts.HexCore;
using Project.Scripts.InputSystem;
using Project.Scripts.UI;
using UnityEngine;

namespace Project.Scripts.Game
{
	public class EntryPoint : MonoBehaviour
	{
		[Header("Основные ссылки")]
		[SerializeField]
		private HexGrid _hexGrid;

		[SerializeField]
		private HexStack[] _initialStacks;

		[SerializeField]
		private HexStack _dragHexStackPrefab;

		[SerializeField]
		private Transform[] _dragHexStackSpawnPoints;

		[SerializeField]
		private EndGame _endGame;

		[SerializeField]
		private ChainReactionOfHex _chainReactionOfHex;

		[SerializeField]
		private TutorialPointer _tutorialPointer;

		[SerializeField]
		private float _dragSpawnDuration = 0.5f;

		[Header("Таймер")]
		[SerializeField]
		private float _gameDuration = 60f;

		[SerializeField]
		private TimerView _timerView;

		private List<HexStack> _activeStacks = new List<HexStack>();

		private List<HexStack> _dragStacks = new List<HexStack>();

		private float _remainingTime;

		private void Start()
		{
			_remainingTime = _gameDuration;
			HexStack[] initialStacks = _initialStacks;
			foreach (HexStack stackPrefab in initialStacks)
			{
				HexStack hexStack = Object.Instantiate(stackPrefab);
				PlaceStackRandomly(hexStack);
				hexStack.GetServices(_tutorialPointer, _chainReactionOfHex, this, _hexGrid);
				_activeStacks.Add(hexStack);
			}
			RespawnDragStacks();
		}

		private void Update()
		{
			if (!(_remainingTime <= 0f))
			{
				_remainingTime -= Time.deltaTime;
				_timerView?.SetProgress(_remainingTime / _gameDuration);
				if (_remainingTime <= 0f)
				{
					_remainingTime = 0f;
					_timerView.Hide();
					_endGame.ShowEndCard();
					_tutorialPointer.gameObject.SetActive(false);
				}
			}
		}

		public List<HexStack> GetActiveDragStacks()
		{
			_dragStacks.RemoveAll(delegate(HexStack stack)
			{
				int result;
				if (!(stack == null))
				{
					DragHandler component = stack.GetComponent<DragHandler>();
					result = (((object)component == null || !component.enabled) ? 1 : 0);
				}
				else
				{
					result = 1;
				}
				return (byte)result != 0;
			});
			return _dragStacks;
		}

		public void OnDragStackPlaced(HexStack usedStack)
		{
			if (_dragStacks.Contains(usedStack))
			{
				_dragStacks.Remove(usedStack);
				if (_dragStacks.Count == 0)
				{
					RespawnDragStacks();
				}
			}
		}

		private void RespawnDragStacks()
		{
			_dragStacks.Clear();
			for (int i = 0; i < _dragHexStackSpawnPoints.Length; i++)
			{
				Transform spawnPoint = _dragHexStackSpawnPoints[i];
				Vector3 targetPos = spawnPoint.position;
				Vector3 startPos = targetPos + -Vector3.forward * 5.5f;
				HexStack newStack = Object.Instantiate(_dragHexStackPrefab, startPos, Quaternion.identity);
				newStack.GetServices(_tutorialPointer, _chainReactionOfHex, this, _hexGrid);
				_dragStacks.Add(newStack);
				newStack.MoveToPosition(targetPos, _dragSpawnDuration);
			}
		}

		private void PlaceStackRandomly(HexStack stack)
		{
			List<HexCell> emptyCells = _hexGrid.GetEmptyCells();
			if (emptyCells.Count != 0)
			{
				HexCell cell = emptyCells[Random.Range(0, emptyCells.Count)];
				cell.PlaceStack(stack);
				stack.SetCurrentCell(cell);
			}
		}
	}
}
