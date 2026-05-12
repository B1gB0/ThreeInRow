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
        [SerializeField] private HexGrid _hexGrid;
        [SerializeField] private HexStack[] _initialStacks;
        [SerializeField] private HexStack _dragHexStackPrefab;
        [SerializeField] private Transform[] _dragHexStackSpawnPoints;
        [SerializeField] private EndGame _endGame;
        [SerializeField] private ChainReactionOfHex _chainReactionOfHex;
        [SerializeField] private TutorialPointer _tutorialPointer;
        [SerializeField] private float _dragSpawnDuration = 0.5f;

        [Header("Таймер")]
        [SerializeField] private float _gameDuration = 60f;      // общее время игры
        [SerializeField] private TimerView _timerView;           // ссылка на вьюху

        private List<HexStack> _activeStacks = new();
        private List<HexStack> _dragStacks = new();
        private float _remainingTime;

        private void Start()
        {
            _remainingTime = _gameDuration;

            foreach (var stackPrefab in _initialStacks)
            {
                HexStack hexStack = Instantiate(stackPrefab);
                PlaceStackRandomly(hexStack);
                hexStack.GetServices(_tutorialPointer, _chainReactionOfHex, this, _hexGrid);
                _activeStacks.Add(hexStack);
            }

            RespawnDragStacks();
        }

        private void Update()
        {
            if (_remainingTime <= 0f) return;

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

        public List<HexStack> GetActiveDragStacks()
        {
            _dragStacks.RemoveAll(stack => stack == null || stack.GetComponent<DragHandler>()?.enabled != true);
            return _dragStacks;
        }

        public void OnDragStackPlaced(HexStack usedStack)
        {
            if (!_dragStacks.Contains(usedStack))
                return;

            _dragStacks.Remove(usedStack);

            if (_dragStacks.Count == 0)
            {
                RespawnDragStacks();
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

                HexStack newStack = Instantiate(_dragHexStackPrefab, startPos, Quaternion.identity);
                newStack.SpawnPointIndex = i;
                newStack.GetServices(_tutorialPointer, _chainReactionOfHex, this, _hexGrid);
                _dragStacks.Add(newStack);

                newStack.MoveToPosition(targetPos, _dragSpawnDuration);
            }
        }

        private void PlaceStackRandomly(HexStack stack)
        {
            List<HexCell> emptyCells = _hexGrid.GetEmptyCells();
            if (emptyCells.Count == 0) return;

            HexCell cell = emptyCells[Random.Range(0, emptyCells.Count)];
            cell.PlaceStack(stack);
            stack.CurrentCell = cell;
        }
    }
}