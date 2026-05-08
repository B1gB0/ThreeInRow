using DG.Tweening;
using UnityEngine;

namespace Project.Scripts.HexCore
{
    public class Hex : MonoBehaviour
    {
        private const float MoveDistance = 15f;

        private const float ShowScale = 1f;
        private const float HideScale = 0f;

        private const float DurationShow = 0.4f;
        private const float DurationHide = 0.3f;

        private const float SmallPause = 0.1f;
        private const float BigPause = 0.5f;

        [field: SerializeField] public Material Material { get; private set; }
        
        public void OnHide()
        {
            AnimateScale(transform, true);
        }
        
        public void AnimateMove(
            Transform target,
            Transform showPoint,
            Transform hidePoint,
            bool isDisableTarget = false,
            bool isSetParentToPoint = false)
        {
            target.DOKill(true);

            if (!isDisableTarget)
            {
                target.gameObject.SetActive(true);
                target.localPosition = hidePoint.localPosition;
            }

            Sequence _ = DOTween.Sequence()
                .Append(!isDisableTarget
                    ? target.DOMove(showPoint.position, DurationShow)
                    : target.DOMove(hidePoint.position, DurationHide))
                .SetEase(!isDisableTarget ? Ease.InSine : Ease.OutSine)
                .SetUpdate(true)
                .OnComplete(() =>
                {
                    TryOffGameObject(target, isDisableTarget);

                    if (isSetParentToPoint)
                    {
                        target.SetParent(isDisableTarget ? hidePoint : showPoint);
                    }
                });
        }
        
        public void AnimateScale(Transform target, bool isDisableTarget = false)
        {
            if (!IsTargetValid(target))
                return;
            
            if(!isDisableTarget)
                target.gameObject.SetActive(true);

            var scaleSequence = CreateScaleSequence(target, isDisableTarget);

            scaleSequence.OnComplete(() =>
            {
                TryOffGameObject(target, isDisableTarget);
            });
        }
        
        private void TryOffGameObject(Transform target, bool isDisableTarget)
        {
            if (isDisableTarget && IsTargetValid(target))
                target.gameObject.SetActive(false);
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