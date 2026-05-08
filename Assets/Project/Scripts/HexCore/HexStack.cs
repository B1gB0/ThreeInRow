using System.Collections;
using System.Collections.Generic;
using Project.Scripts.InputSystem;
using Project.Scripts.UI;
using UnityEngine;

namespace Project.Scripts.HexCore
{
    public class HexStack : MonoBehaviour
    {
        private readonly List<Hex> _hexagons = new ();
        
        [SerializeField] private Hex[] _possibleColors;
        [SerializeField] private int _maxHexagons = 10;
        [SerializeField] private DragHandler _dragHandler;
        
        private Vector3 _originalPosition;
        private HexCell _originalCell;
        
        public int Count => _hexagons.Count;
        public HexCell CurrentCell { get; set; }
        public Hex CurrentHexPrefab { get; private set; } // Префаб одного шестиугольника в стопке
        
        private void Start()
        {
            CurrentHexPrefab = _possibleColors[Random.Range(0, _possibleColors.Length)];
            int count = Random.Range(1, 4); // начальное количество в стопке от 1 до 3
            for (int i = 0; i < count; i++)
                AddHexagon();
        }

        public void GetServices(TutorialPointer tutorialPointer, ChainReactionOfHex chainReactionOfHex)
        {
            _dragHandler.GetServices(tutorialPointer, chainReactionOfHex);
        }

        public void AddHexagon()
        {
            if (_hexagons.Count >= _maxHexagons)
                return;

            Hex hex = Instantiate(CurrentHexPrefab, transform);
            // Визуальное смещение по Y для имитации стопки
            hex.transform.localPosition = new Vector3(0f, _hexagons.Count * 0.2f, 0f);
            _hexagons.Add(hex);
        }

        public void RemoveHexagon()
        {
            if (_hexagons.Count == 0)
                return;

            Hex hex = _hexagons[_hexagons.Count - 1];
            _hexagons.Remove(hex);
            Destroy(hex.gameObject);
        }

        // Запоминаем исходную позицию перед началом перетаскивания
        public void RememberOriginalPosition(HexCell cell)
        {
            _originalPosition = transform.position;
            _originalCell = cell;
        }

        // Возврат на исходную позицию
        public IEnumerator ReturnToOriginal()
        {
            // ... анимация возврата
            yield break;
        }
    }
}