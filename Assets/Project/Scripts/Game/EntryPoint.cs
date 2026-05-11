using System.Collections.Generic;
using Project.Scripts.HexCore;
using Project.Scripts.UI;
using UnityEngine;

namespace Project.Scripts.Game
{
    public class EntryPoint : MonoBehaviour
    {
        [SerializeField] private HexGrid _hexGrid;
        [SerializeField] private HexStack[] _initialStacks;
        [SerializeField] private HexStack _dragHexStack;
        [SerializeField] private Transform[] _dragHexStackPointSpawn;
        [SerializeField] private EndGame _endGame;
        [SerializeField] private ChainReactionOfHex _chainReactionOfHex;
        [SerializeField] private TutorialPointer _tutorialPointer;

        private List<HexStack> _activeStacks = new();

        private void Start()
        {
            // Размещаем стартовые стопки в случайных пустых ячейках
            foreach (var stack in _initialStacks)
            {
                HexStack hexStack = Instantiate(stack);
                hexStack.GetServices(_tutorialPointer, _chainReactionOfHex);
                PlaceStackRandomly(hexStack);
                _activeStacks.Add(hexStack);
            }

            foreach (var spawnPoint in _dragHexStackPointSpawn)
            {
                HexStack hexStack = Instantiate(_dragHexStack, spawnPoint.position, Quaternion.identity);
                hexStack.GetServices(_tutorialPointer, _chainReactionOfHex);
            }
        }

        private void PlaceStackRandomly(HexStack stack)
        {
            // Поиск случайной пустой ячейки
            List<HexCell> emptyCells = _hexGrid.GetEmptyCells();
            if (emptyCells.Count == 0) return;

            HexCell cell = emptyCells[Random.Range(0, emptyCells.Count)];
            cell.PlaceStack(stack);
            stack.CurrentCell = cell;
        }

        public void OnStackRemoved(HexStack stack)
        {
            _activeStacks.Remove(stack);
            if (_activeStacks.Count == 0)
            {
                // Все стопки сложились — показываем пэкшот
                _endGame.ShowEndCard();
            }
        }
    }
}