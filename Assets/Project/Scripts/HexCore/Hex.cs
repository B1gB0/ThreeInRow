using DG.Tweening;
using UnityEngine;

namespace Project.Scripts.HexCore
{
    public class Hex : MonoBehaviour
    {
        private const float ShowScale = 1f;
        private const float HideScale = 0f;

        private const float DurationShow = 0.4f;
        private const float DurationHide = 0.3f;

        [field: SerializeField] public HexColor _hexColor { get; private set; }

        public void OnHide()
        {
            AnimateScale(transform, true);
        }

        private void AnimateScale(Transform target, bool isDisableTarget = false)
        {
            if (!IsTargetValid(target))
                return;

            if (!isDisableTarget)
                target.gameObject.SetActive(true);

            var scaleSequence = CreateScaleSequence(target, isDisableTarget);

            scaleSequence.OnComplete(DeleteGameObject);
        }

        private void DeleteGameObject()
        {
            gameObject.transform.DOKill(true);
            Destroy(gameObject);
        }

        private Sequence CreateScaleSequence(Transform target, bool isDisableTarget)
        {
            target.DOKill(true);

            if (!isDisableTarget)
                target.localScale = Vector3.zero;

            Sequence scaleSequence = DOTween.Sequence()
                .Append(!isDisableTarget
                    ? target.DOScale(ShowScale, DurationShow)
                    : target.DOScale(HideScale, DurationHide))
                .SetEase(!isDisableTarget ? Ease.OutBounce : Ease.OutSine)
                .SetUpdate(true);
            return scaleSequence;
        }

        private bool IsTargetValid(Transform target)
        {
            return target != null && target.gameObject != null;
        }
    }
}