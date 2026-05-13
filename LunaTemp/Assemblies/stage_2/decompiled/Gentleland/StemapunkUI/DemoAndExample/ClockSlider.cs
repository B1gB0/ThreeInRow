using UnityEngine;

namespace Gentleland.StemapunkUI.DemoAndExample
{
	public class ClockSlider : MonoBehaviour
	{
		[SerializeField]
		private float minZRotation;

		[SerializeField]
		private float maxZRotation;

		[SerializeField]
		private float m_value;

		public float Value
		{
			get
			{
				return m_value;
			}
			set
			{
				m_value = value;
				UpdateRotation();
			}
		}

		private void OnValidate()
		{
			UpdateRotation();
		}

		private void UpdateRotation()
		{
			float Zrotation = Mathf.Lerp(minZRotation, maxZRotation, m_value);
			base.transform.localRotation = Quaternion.Euler(base.transform.localRotation.x, base.transform.localRotation.y, Zrotation);
		}
	}
}
