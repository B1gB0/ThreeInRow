using System;
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
		private readonly List<Hex> _hexagons = new List<Hex>();

		[Header("Цвета / префабы гексов")]
		[SerializeField]
		private Hex[] _possibleColors;

		[Header("Количество гексов")]
		[SerializeField]
		private int _minHexagons = 1;

		[SerializeField]
		private int _maxHexagons = 10;

		[SerializeField]
		private bool _isRandom = true;

		[SerializeField]
		private int _noRandomCount;

		[Header("Два цвета")]
		[SerializeField]
		private bool _isTwoColors;

		[Header("Ссылки")]
		[SerializeField]
		private DragHandler _dragHandler;

		private Coroutine _moveRoutine;

		private Hex _currentHexPrefab;

		private HexCell _currentCell;

		public int Count => _hexagons.Count;

		public HexCell CurrentCell => _currentCell;

		private void Start()
		{
			int count = (_isRandom ? UnityEngine.Random.Range(_minHexagons, _maxHexagons + 1) : Mathf.Clamp(_noRandomCount, _minHexagons, _maxHexagons));
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
				int firstCount = UnityEngine.Random.Range(1, count);
				_currentHexPrefab = firstColor;
				for (int k = 0; k < firstCount; k++)
				{
					AddHexagon();
				}
				_currentHexPrefab = secondColor;
				for (int j = 0; j < count - firstCount; j++)
				{
					AddHexagon();
				}
			}
			else
			{
				_currentHexPrefab = _possibleColors[UnityEngine.Random.Range(0, _possibleColors.Length)];
				for (int i = 0; i < count; i++)
				{
					AddHexagon();
				}
			}
		}

		public void SetCurrentCell(HexCell cell)
		{
			_currentCell = cell;
		}

		public void GetServices(TutorialPointer tutorialPointer, ChainReactionOfHex chainReactionOfHex, EntryPoint entryPoint, HexGrid hexGrid)
		{
			if (_dragHandler != null)
			{
				_dragHandler.GetServices(tutorialPointer, chainReactionOfHex, entryPoint, hexGrid);
			}
		}

		public void AddExistingHex(Hex hexInstance)
		{
			if (!(hexInstance == null))
			{
				if (hexInstance.gameObject.scene.name == null)
				{
					Debug.LogError("[HexStack] Пытаемся добавить префаб вместо инстанса!");
					return;
				}
				hexInstance.transform.SetParent(base.transform);
				hexInstance.transform.localPosition = new Vector3(0f, (float)_hexagons.Count * 0.15f + 0.15f, 0f);
				_hexagons.Add(hexInstance);
			}
		}

		public Coroutine MoveToPosition(Vector3 target, float duration, Action onComplete = null)
		{
			if (_moveRoutine != null)
			{
				StopCoroutine(_moveRoutine);
			}
			_moveRoutine = StartCoroutine(MoveRoutine(target, duration, onComplete));
			return _moveRoutine;
		}

		public Hex GetTopHex()
		{
			object result;
			if (_hexagons.Count <= 0)
			{
				result = null;
			}
			else
			{
				List<Hex> hexagons = _hexagons;
				result = hexagons[hexagons.Count - 1];
			}
			return (Hex)result;
		}

		public Hex GetHexAt(int index)
		{
			return (index >= 0 && index < _hexagons.Count) ? _hexagons[index] : null;
		}

		public Hex RemoveTopHex()
		{
			if (_hexagons.Count == 0)
			{
				return null;
			}
			List<Hex> hexagons = _hexagons;
			Hex top = hexagons[hexagons.Count - 1];
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
			Hex newHex = UnityEngine.Object.Instantiate(_currentHexPrefab, base.transform);
			newHex.transform.localPosition = new Vector3(0f, (float)_hexagons.Count * 0.15f + 0.15f, 0f);
			_hexagons.Add(newHex);
		}

		private void Shuffle<T>(List<T> list)
		{
			for (int i = 0; i < list.Count; i++)
			{
				int randomIndex = UnityEngine.Random.Range(i, list.Count);
				T temp = list[i];
				list[i] = list[randomIndex];
				list[randomIndex] = temp;
			}
		}

		private IEnumerator MoveRoutine(Vector3 target, float duration, Action onComplete)
		{
			Vector3 start = base.transform.position;
			float elapsed = 0f;
			while (elapsed < duration)
			{
				elapsed += Time.deltaTime;
				float t = Mathf.Clamp01(elapsed / duration);
				base.transform.position = Vector3.Lerp(start, target, t);
				yield return null;
			}
			base.transform.position = target;
			onComplete?.Invoke();
			_moveRoutine = null;
		}

		public IEnumerator TryRemoveTopColorGroup(Hex sample)
		{
			int sameCount = 0;
			int j = _hexagons.Count - 1;
			while (j >= 0 && _hexagons[j].HexColor == sample.HexColor)
			{
				sameCount++;
				j--;
			}
			if (sameCount < 10)
			{
				yield break;
			}
			List<Hex> toRemove = new List<Hex>();
			for (int i = 0; i < sameCount; i++)
			{
				List<Hex> hexagons = _hexagons;
				Hex top = hexagons[hexagons.Count - 1];
				_hexagons.RemoveAt(_hexagons.Count - 1);
				toRemove.Add(top);
			}
			foreach (Hex hex in toRemove)
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
				UnityEngine.Object.Destroy(base.gameObject);
			}
		}
	}
}
