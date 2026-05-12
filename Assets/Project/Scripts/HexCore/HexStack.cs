using System.Collections;
using System.Collections.Generic;
using Project.Scripts.Game;
using Project.Scripts.InputSystem;
using Project.Scripts.UI;
using UnityEngine;

namespace Project.Scripts.HexCore
{
    public class HexStack : MonoBehaviour
    {
        private readonly List<Hex> _hexagons = new();

        [Header("Цвета / префабы гексов")]
        [SerializeField] private Hex[] _possibleColors;

        [Header("Количество гексов")]
        [SerializeField] private int _minHexagons = 1;

        [SerializeField] private int _maxHexagons = 10;
        [SerializeField] private bool _isRandom = true;
        [SerializeField] private int _noRandomCount;

        [Header("Два цвета")]
        [SerializeField] private bool _isTwoColors;

        [Header("Ссылки")]
        [SerializeField] private DragHandler _dragHandler;

        public int SpawnPointIndex { get; set; } = -1;
        public Hex CurrentHexPrefab { get; private set; }

        public int Count => _hexagons.Count;
        public HexCell CurrentCell { get; set; }
        public Vector3 OriginalPosition { get; private set; }

        private Coroutine _moveRoutine;

        private void Start()
        {
            // Определяем количество гексов
            int count = _isRandom
                ? Random.Range(_minHexagons, _maxHexagons + 1)
                : Mathf.Clamp(_noRandomCount, _minHexagons, _maxHexagons);

            if (_isTwoColors)
            {
                if (_possibleColors.Length < 2)
                {
                    Debug.LogError("Need at least 2 prefabs for two-color stack");
                    return;
                }

                List<Hex> shuffled = new List<Hex>(_possibleColors);
                Shuffle(shuffled);
                Hex firstColor = shuffled[0];
                Hex secondColor = shuffled[1];
                int firstCount = Random.Range(1, count);

                // Устанавливаем CurrentHexPrefab для первого цвета
                CurrentHexPrefab = firstColor;
                for (int i = 0; i < firstCount; i++)
                    AddHexagon(); // создаём новый гекс из CurrentHexPrefab

                // Меняем CurrentHexPrefab для второго цвета
                CurrentHexPrefab = secondColor;
                for (int i = 0; i < count - firstCount; i++)
                    AddHexagon();
            }
            else
            {
                CurrentHexPrefab = _possibleColors[Random.Range(0, _possibleColors.Length)];
                for (int i = 0; i < count; i++)
                    AddHexagon(); // без параметров!
            }
        }

        public void GetServices(
            TutorialPointer tutorialPointer,
            ChainReactionOfHex chainReactionOfHex,
            EntryPoint entryPoint,
            HexGrid hexGrid)
        {
            if (_dragHandler != null)
                _dragHandler.GetServices(tutorialPointer, chainReactionOfHex, entryPoint, hexGrid);
        }

        public void AddHexagon(Hex hexInstance)
        {
            if (_hexagons.Count >= _maxHexagons)
            {
                Destroy(hexInstance.gameObject);
                return;
            }

            hexInstance.transform.SetParent(transform);
            hexInstance.transform.localPosition = new Vector3(0f, _hexagons.Count * 0.15f + 0.15f, 0f);
            _hexagons.Add(hexInstance);
        }

        public void AddExistingHex(Hex hexInstance)
        {
            if (hexInstance == null) return;

            // Нельзя добавлять префаб! Проверяем, что это инстанс в сцене
            if (hexInstance.gameObject.scene.name == null)
            {
                Debug.LogError("[HexStack] Пытаемся добавить префаб вместо инстанса!");
                return;
            }

            hexInstance.transform.SetParent(transform);
            hexInstance.transform.localPosition = new Vector3(0f, _hexagons.Count * 0.15f + 0.15f, 0f);
            _hexagons.Add(hexInstance);
        }

        public Coroutine MoveToPosition(Vector3 target, float duration, System.Action onComplete = null)
        {
            if (_moveRoutine != null)
                StopCoroutine(_moveRoutine);
            _moveRoutine = StartCoroutine(MoveRoutine(target, duration, onComplete));
            return _moveRoutine;
        }

        public Hex GetTopHexPrefab()
        {
            var top = GetTopHex();
            return
                top != null
                    ? top
                    : null; // или можно возвращать сам объект, а сравнивать через GetType или ссылку на префаб
        }

        public Hex GetTopHex() => _hexagons.Count > 0 ? _hexagons[^1] : null;

        public Hex GetHexAt(int index) => (index >= 0 && index < _hexagons.Count) ? _hexagons[index] : null;

        public Hex RemoveTopHex()
        {
            if (_hexagons.Count == 0) return null;
            Hex top = _hexagons[^1];
            _hexagons.RemoveAt(_hexagons.Count - 1);
            top.transform.SetParent(null);
            return top;
        }

        public void RemoveTopHexes(int count)
        {
            int toRemove = Mathf.Min(count, _hexagons.Count); // не удаляем больше, чем есть
            for (int i = 0; i < toRemove; i++)
            {
                // Удаляем последний элемент (верхний)
                Hex hex = _hexagons[_hexagons.Count - 1];
                _hexagons.RemoveAt(_hexagons.Count - 1);
                if (hex != null) Destroy(hex.gameObject);
            }

            // Если стек полностью опустел — удаляем его из ячейки и уничтожаем объект
            if (_hexagons.Count == 0)
            {
                if (CurrentCell != null)
                    CurrentCell.RemoveStack();
                else
                    Destroy(gameObject);
            }
        }

        private void AddHexagon()
        {
            if (CurrentHexPrefab == null)
            {
                Debug.LogWarning("[HexStack] CurrentHexPrefab is null");
                return;
            }

            // Инстанцируем копию префаба как дочерний объект
            Hex newHex = Instantiate(CurrentHexPrefab, transform);
            newHex.transform.localPosition = new Vector3(0f, _hexagons.Count * 0.15f + 0.15f, 0f);
            _hexagons.Add(newHex);
        }

        // Вспомогательный метод для случайного перемешивания списка
        private void Shuffle<T>(List<T> list)
        {
            for (int i = 0; i < list.Count; i++)
            {
                int randomIndex = Random.Range(i, list.Count);
                (list[i], list[randomIndex]) = (list[randomIndex], list[i]);
            }
        }

        private IEnumerator MoveRoutine(Vector3 target, float duration, System.Action onComplete)
        {
            Vector3 start = transform.position;
            float elapsed = 0f;
            while (elapsed < duration)
            {
                elapsed += Time.deltaTime;
                float t = Mathf.Clamp01(elapsed / duration);
                // можно добавить кривую (AnimationCurve) для "easing"
                transform.position = Vector3.Lerp(start, target, t);
                yield return null;
            }

            transform.position = target;
            onComplete?.Invoke();
            _moveRoutine = null;
        }
        
        public void TryRemoveTopColorGroup(Hex sample)
        {
            int sameCount = 0;
            for (int i = _hexagons.Count - 1; i >= 0; i--)
            {
                if (_hexagons[i]._hexColor == sample._hexColor)
                    sameCount++;
                else
                    break;
            }

            if (sameCount < 10) return;

            for (int i = 0; i < sameCount; i++)
            {
                Hex top = _hexagons[_hexagons.Count - 1];
                _hexagons.RemoveAt(_hexagons.Count - 1);
                Destroy(top.gameObject);
            }

            if (_hexagons.Count == 0)
            {
                if (CurrentCell != null)
                {
                    CurrentCell.RemoveStack();   // ячейка становится пустой
                    CurrentCell = null;
                }
                Destroy(gameObject);
            }
        }
    }
}