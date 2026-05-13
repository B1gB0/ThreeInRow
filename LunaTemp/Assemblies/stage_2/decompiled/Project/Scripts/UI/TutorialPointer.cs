using System.Collections.Generic;
using DG.Tweening;
using Project.Scripts.Game;
using Project.Scripts.HexCore;
using UnityEngine;

namespace Project.Scripts.UI
{
	public class TutorialPointer : MonoBehaviour
	{
		[SerializeField]
		private GameObject _handObject;

		[SerializeField]
		private RectTransform _handRect;

		[SerializeField]
		private Canvas _parentCanvas;

		[SerializeField]
		private EntryPoint _entryPoint;

		[Header("Animation")]
		[SerializeField]
		private float _idleTimeToShow = 2f;

		[SerializeField]
		private float _distance = 30f;

		[SerializeField]
		private float _duration = 0.6f;

		private bool _tutorialCompleted;

		private float _lastInteractionTime;

		private Tween _handTween;

		private void Awake()
		{
			if (_handObject != null)
			{
				_handObject.SetActive(false);
			}
			if (_parentCanvas == null && _handRect != null)
			{
				_parentCanvas = _handRect.GetComponentInParent<Canvas>();
			}
		}

		private void Start()
		{
			ShowTutorial();
		}

		private void Update()
		{
			if (!_tutorialCompleted && Time.time - _lastInteractionTime > _idleTimeToShow && _handObject != null && !_handObject.activeSelf)
			{
				ShowTutorial();
			}
		}

		public void ShowTutorial()
		{
			if (_handObject == null || _tutorialCompleted || _handObject.activeSelf || _entryPoint == null)
			{
				return;
			}
			List<HexStack> activeStacks = _entryPoint.GetActiveDragStacks();
			if (activeStacks != null && activeStacks.Count != 0)
			{
				HexStack targetStack = activeStacks[Random.Range(0, activeStacks.Count)];
				Vector3 worldPos = targetStack.transform.position;
				if (_parentCanvas != null)
				{
					Camera cam = _parentCanvas.worldCamera ?? Camera.main;
					Vector2 screenPoint = RectTransformUtility.WorldToScreenPoint(cam, worldPos);
					RectTransformUtility.ScreenPointToLocalPointInRectangle(_parentCanvas.GetComponent<RectTransform>(), screenPoint, (_parentCanvas.renderMode == RenderMode.ScreenSpaceOverlay) ? null : cam, out var localPoint);
					_handRect.anchoredPosition = localPoint;
				}
				else
				{
					_handObject.transform.position = Camera.main.WorldToScreenPoint(worldPos);
				}
				_handObject.SetActive(true);
				Vector2 startPos = _handRect.anchoredPosition;
				_handTween?.Kill();
				_handTween = _handRect.DOAnchorPosY(startPos.y + _distance, _duration / 2f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
			}
		}

		public void OnPlayerStartedDrag()
		{
			_lastInteractionTime = Time.time;
			if (_handObject != null && _handObject.activeSelf)
			{
				_handObject.SetActive(false);
				_handTween?.Kill();
			}
		}

		public void CompleteTutorial()
		{
			if (!_tutorialCompleted)
			{
				_tutorialCompleted = true;
				if (_handObject != null && _handObject.activeSelf)
				{
					_handObject.SetActive(false);
					_handTween?.Kill();
				}
			}
		}

		public void OnTutorial()
		{
			_tutorialCompleted = false;
		}
	}
}
