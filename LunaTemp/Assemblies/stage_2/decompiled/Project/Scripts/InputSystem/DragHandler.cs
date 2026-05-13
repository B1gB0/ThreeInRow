using System.Collections;
using Project.Scripts.Game;
using Project.Scripts.HexCore;
using Project.Scripts.UI;
using UnityEngine;
using UnityEngine.EventSystems;

namespace Project.Scripts.InputSystem
{
	[RequireComponent(typeof(HexStack))]
	public class DragHandler : MonoBehaviour, IBeginDragHandler, IEventSystemHandler, IDragHandler, IEndDragHandler
	{
		[Header("Настройки перетаскивания")]
		[SerializeField]
		private float _liftHeight = 0.5f;

		[SerializeField]
		private float _returnDuration = 0.25f;

		[SerializeField]
		private AudioSource _audioSource;

		[SerializeField]
		private AudioClip _pickupClip;

		private HexStack _stack;

		private Camera _mainCamera;

		private HexGrid _hexGrid;

		private TutorialPointer _tutorialPointer;

		private ChainReactionOfHex _chainReaction;

		private EntryPoint _entryPoint;

		private bool _isDragging;

		private HexCell _originalCell;

		private HexCell _highlightedCell;

		private Vector3 _originalPosition;

		private void Awake()
		{
			_stack = GetComponent<HexStack>();
			_mainCamera = Camera.main;
		}

		public void GetServices(TutorialPointer tutorialPointer, ChainReactionOfHex chainReaction, EntryPoint entryPoint, HexGrid hexGrid)
		{
			_tutorialPointer = tutorialPointer;
			_chainReaction = chainReaction;
			_entryPoint = entryPoint;
			_hexGrid = hexGrid;
		}

		public void OnBeginDrag(PointerEventData eventData)
		{
			_audioSource.PlayOneShot(_pickupClip);
			_isDragging = true;
			_originalCell = _stack.CurrentCell;
			_originalPosition = base.transform.position;
			_originalCell?.RemoveStack();
			Vector3 lifted = base.transform.position;
			lifted.y = _liftHeight;
			base.transform.position = lifted;
			_tutorialPointer?.OnPlayerStartedDrag();
			_tutorialPointer?.CompleteTutorial();
		}

		public void OnDrag(PointerEventData eventData)
		{
			if (_isDragging)
			{
				if (TryGetPointOnLiftPlane(eventData, out var point))
				{
					base.transform.position = new Vector3(point.x, _liftHeight, point.z);
				}
				HighlightCellUnderStack();
			}
		}

		public void OnEndDrag(PointerEventData eventData)
		{
			_isDragging = false;
			RemoveHighlight();
			HexCell targetCell = GetCellUnderStack();
			if (targetCell != null && targetCell.IsEmpty)
			{
				targetCell.PlaceStack(_stack);
				_stack.SetCurrentCell(targetCell);
				_chainReaction?.StartChainReaction(targetCell);
				base.enabled = false;
				_entryPoint?.OnDragStackPlaced(_stack);
			}
			else
			{
				StartCoroutine(ReturnToOriginalPosition());
			}
			_tutorialPointer.OnTutorial();
		}

		private bool TryGetPointOnLiftPlane(PointerEventData eventData, out Vector3 point)
		{
			point = Vector3.zero;
			Ray ray = _mainCamera.ScreenPointToRay(eventData.position);
			if (new Plane(Vector3.up, new Vector3(0f, _liftHeight, 0f)).Raycast(ray, out var enter))
			{
				point = ray.GetPoint(enter);
				return true;
			}
			return false;
		}

		private HexCell GetCellUnderStack()
		{
			if (_hexGrid == null)
			{
				return null;
			}
			Vector2Int coord = _hexGrid.WorldToAxial(base.transform.position);
			return _hexGrid.GetCell(coord);
		}

		private void HighlightCellUnderStack()
		{
			HexCell cell = GetCellUnderStack();
			if (!(cell == _highlightedCell))
			{
				RemoveHighlight();
				if (cell != null && cell.IsEmpty)
				{
					_highlightedCell = cell;
					_highlightedCell.SetHighlight(true);
				}
			}
		}

		private void RemoveHighlight()
		{
			if (_highlightedCell != null)
			{
				_highlightedCell.SetHighlight(false);
				_highlightedCell = null;
			}
		}

		private IEnumerator ReturnToOriginalPosition()
		{
			Collider col = GetComponent<Collider>();
			if ((bool)col)
			{
				col.enabled = false;
			}
			yield return _stack.MoveToPosition(_originalPosition, _returnDuration);
			if (_originalCell != null)
			{
				_originalCell.PlaceStack(_stack);
				_stack.SetCurrentCell(_originalCell);
			}
			if ((bool)col)
			{
				col.enabled = true;
			}
		}
	}
}
