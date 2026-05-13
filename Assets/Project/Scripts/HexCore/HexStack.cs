using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
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

        private Coroutine _moveRoutine;
        private Hex _currentHexPrefab;
        private HexCell _currentCell;

        public int Count => _hexagons.Count;
        public HexCell CurrentCell => _currentCell;

        private void Start()
        {
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
                _currentHexPrefab = firstColor;
                for (int i = 0; i < firstCount; i++)
                    AddHexagon(); // создаём новый гекс из CurrentHexPrefab

                // Меняем CurrentHexPrefab для второго цвета
                _currentHexPrefab = secondColor;
                for (int i = 0; i < count - firstCount; i++)
                    AddHexagon();
            }
            else
            {
                _currentHexPrefab = _possibleColors[Random.Range(0, _possibleColors.Length)];
                for (int i = 0; i < count; i++)
                    AddHexagon(); // без параметров!
            }
        }

        public void SetCurrentCell(HexCell cell)
        {
            _currentCell = cell;
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

        public void AddExistingHex(Hex hexInstance)
        {
            if (hexInstance == null) return;

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

        private void AddHexagon()
        {
            if (_currentHexPrefab == null)
            {
                Debug.LogWarning("[HexStack] CurrentHexPrefab is null");
                return;
            }

            Hex newHex = Instantiate(_currentHexPrefab, transform);
            newHex.transform.localPosition = new Vector3(0f, _hexagons.Count * 0.15f + 0.15f, 0f);
            _hexagons.Add(newHex);
        }

        private void Shuffle<T>(List<T> list)
        {
            for (int i = 0; i < list.Count; i++)
            {
                int randomIndex = Random.Range(i, list.Count);
                T temp = list[i];
                list[i] = list[randomIndex];
                list[randomIndex] = temp;
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

        public IEnumerator TryRemoveTopColorGroup(Hex sample)
        {
            int sameCount = 0;
            for (int i = _hexagons.Count - 1; i >= 0; i--)
            {
                if (_hexagons[i].HexColor == sample.HexColor)
                    sameCount++;
                else
                    break;
            }

            if (sameCount < 10) yield break;

            List<Hex> toRemove = new List<Hex>();
            for (int i = 0; i < sameCount; i++)
            {
                Hex top = _hexagons[^1];
                _hexagons.RemoveAt(_hexagons.Count - 1);
                toRemove.Add(top);
            }

            foreach (var hex in toRemove)
            {
                hex.OnHide();
                yield return new WaitForSeconds(0.1f);
            }

            yield return new WaitForSeconds(0.3f);

            if (_hexagons.Count == 0)
            {
                if (CurrentCell != null)
                {
                    CurrentCell.RemoveStack();
                    _currentCell = null;
                }

                Destroy(gameObject);
            }
        }
    }
}