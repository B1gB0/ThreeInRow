using UnityEngine;
using UnityEngine.UI;

namespace Project.Scripts.UI
{
	public class TimerView : MonoBehaviour
	{
		[SerializeField]
		private Image _fillImage;

		public void SetProgress(float progress)
		{
			if (_fillImage != null)
			{
				_fillImage.fillAmount = Mathf.Clamp01(progress);
			}
		}

		public void Hide()
		{
			base.gameObject.SetActive(false);
		}
	}
}
