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
            OriginalPosition = transform.position;
            
            // Определяем количество гексов в стопке
            int count = _isRandom
                ? Random.Range(_minHexagons, _maxHexagons + 1) // включаем max
                : Mathf.Clamp(_noRandomCount, _minHexagons, _maxHexagons);

            if (_isTwoColors)
            {
                // Нужно минимум 2 разных префаба
                if (_possibleColors.Length < 2)
                {
                    Debug.LogError("[HexStack] Для двухцветной стопки нужно хотя бы 2 префаба в possibleColors!");
                    return;
                }

                // Выбираем два различных цвета случайным образом
                List<Hex> shuffled = new List<Hex>(_possibleColors);
                Shuffle(shuffled);
                Hex firstColor = shuffled[0];
                Hex secondColor = shuffled[1];

                // Случайная точка разделения: хотя бы по одному гексу каждого цвета
                int firstColorCount = Random.Range(4, count); // от 1 до count-1

                // Заполняем сначала первым цветом, потом вторым
                for (int i = 0; i < count; i++)
                {
                    Hex prefabToSpawn = (i < firstColorCount) ? firstColor : secondColor;
                    AddHexagon(prefabToSpawn);
                }
            }
            else
            {
                // Обычная одноцветная стопка
                CurrentHexPrefab = _possibleColors[Random.Range(0, _possibleColors.Length)];
                for (int i = 0; i < count; i++)
                {
                    AddHexagon();
                }
            }
        }

        public void GetServices(TutorialPointer tutorialPointer, ChainReactionOfHex chainReactionOfHex)
        {
            if (_dragHandler != null)
                _dragHandler.GetServices(tutorialPointer, chainReactionOfHex);
        }

        /// <summary>
        /// Добавляет гекс поверх стопки, используя текущий основной префаб (CurrentHexPrefab).
        /// </summary>
        public void AddHexagon()
        {
            if (CurrentHexPrefab == null)
            {
                Debug.LogWarning("[HexStack] CurrentHexPrefab не задан, добавление невозможно.");
                return;
            }
            AddHexagon(CurrentHexPrefab);
        }

        /// <summary>
        /// Добавляет гекс поверх стопки, используя указанный префаб.
        /// </summary>
        public void AddHexagon(Hex prefab)
        {
            if (_hexagons.Count >= _maxHexagons)
                return;

            Hex hex = Instantiate(prefab, transform);
            hex.transform.localPosition = new Vector3(0f, _hexagons.Count * 0.15f + 0.15f, 0f);
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
        
        public Hex RemoveTopHex()
        {
            if (_hexagons.Count == 0) return null;
            Hex top = _hexagons[_hexagons.Count - 1];
            _hexagons.RemoveAt(_hexagons.Count - 1);
            return top;
        }

        public Coroutine MoveToPosition(Vector3 target, float duration, System.Action onComplete = null)
        {
            if (_moveRoutine != null)
                StopCoroutine(_moveRoutine);
            _moveRoutine = StartCoroutine(MoveRoutine(target, duration, onComplete));
            return _moveRoutine;
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