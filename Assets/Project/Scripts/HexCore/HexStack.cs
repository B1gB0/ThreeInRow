using System.Collections;
using System.Collections.Generic;
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
        [SerializeField] private int _noRandomCount; // используется, когда _isRandom == false

        [Header("Два цвета")]
        [SerializeField] private bool _isTwoColors;

        [Header("Ссылки")]
        [SerializeField] private DragHandler _dragHandler;

        // Текущий префаб для одиночного цвета (оставлен для обратной совместимости)
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
                    AddHexagon();   // создаём новый гекс из CurrentHexPrefab

                // Меняем CurrentHexPrefab для второго цвета
                CurrentHexPrefab = secondColor;
                for (int i = 0; i < count - firstCount; i++)
                    AddHexagon();
            }
            else
            {
                CurrentHexPrefab = _possibleColors[Random.Range(0, _possibleColors.Length)];
                for (int i = 0; i < count; i++)
                    AddHexagon();   // без параметров!
            }
        }

        public void GetServices(TutorialPointer tutorialPointer, ChainReactionOfHex chainReactionOfHex)
        {
            if (_dragHandler != null)
                _dragHandler.GetServices(tutorialPointer, chainReactionOfHex);
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

            if (_hexagons.Count >= _maxHexagons)
            {
                Destroy(hexInstance.gameObject);
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
            for (int i = 0; i < count; i++)
            {
                if (_hexagons.Count == 0) break;
                Hex hex = _hexagons[^1];
                _hexagons.RemoveAt(_hexagons.Count - 1);
                Destroy(hex.gameObject);
            }

            if (_hexagons.Count == 0)
            {
                CurrentCell?.RemoveStack();
                // Если ячейки нет, просто уничтожаем объект
                if (CurrentCell == null) Destroy(gameObject);
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
        // ==============================
    }
}