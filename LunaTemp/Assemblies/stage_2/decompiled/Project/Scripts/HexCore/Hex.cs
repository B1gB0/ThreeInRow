using DG.Tweening;
using Project.Scripts.Game.Constants;
using UnityEngine;

namespace Project.Scripts.HexCore
{
	public class Hex : MonoBehaviour
	{
		private const float ShowScale = 1f;

		private const float HideScale = 0f;

		private const float DurationShow = 0.4f;

		private const float DurationHide = 0.3f;

		[SerializeField]
		private ColorName _hexColor;

		[SerializeField]
		private AudioSource _audioSource;

		[SerializeField]
		private AudioClip _moveClip;

		[SerializeField]
		private AudioClip _destroyClip;

		public ColorName HexColor => _hexColor;

		public void OnHide()
		{
			_audioSource.PlayOneShot(_destroyClip);
			AnimateScale(base.transform, true);
		}

		public void OnPlayMoveSound()
		{
			_audioSource.PlayOneShot(_moveClip);
		}

		private void AnimateScale(Transform target, bool isDisableTarget = false)
		{
			if (IsTargetValid(target))
			{
				if (!isDisableTarget)
				{
					target.gameObject.SetActive(true);
				}
				Sequence scaleSequence = CreateScaleSequence(target, isDisableTarget);
				scaleSequence.OnComplete(DeleteGameObject);
			}
		}

		private void DeleteGameObject()
		{
			base.gameObject.transform.DOKill(true);
			Object.Destroy(base.gameObject);
		}

		private Sequence CreateScaleSequence(Transform target, bool isDisableTarget)
		{
			target.DOKill(true);
			if (!isDisableTarget)
			{
				target.localScale = Vector3.zero;
			}
			return DOTween.Sequence().Append((!isDisableTarget) ? target.DOScale(1f, 0.4f) : target.DOScale(0f, 0.3f)).SetEase((!isDisableTarget) ? Ease.OutBounce : Ease.OutSine)
				.SetUpdate(true);
		}

		private bool IsTargetValid(Transform target)
		{
			return target != null && target.gameObject != null;
		}
	}
}
