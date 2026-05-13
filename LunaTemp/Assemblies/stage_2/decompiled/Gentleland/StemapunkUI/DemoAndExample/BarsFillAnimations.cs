using UnityEngine;
using UnityEngine.UI;

namespace Gentleland.StemapunkUI.DemoAndExample
{
	public class BarsFillAnimations : MonoBehaviour
	{
		private Slider[] sliders;

		private float[] shifts;

		private float[] fillTimeInSeconds;

		private float[] durations = new float[6] { 0.75f, 1f, 1.2f, 1.5f, 2f, 3f };

		private void Start()
		{
			sliders = Object.FindObjectsOfType<Slider>();
			shifts = new float[sliders.Length];
			fillTimeInSeconds = new float[sliders.Length];
			for (int i = 0; i < sliders.Length; i++)
			{
				float number = durations[Mathf.RoundToInt(Random.Range(0, durations.Length))];
				fillTimeInSeconds[i] = number;
				shifts[i] = Random.Range(0f, fillTimeInSeconds[i]);
			}
		}

		private void Update()
		{
			for (int i = 0; i < sliders.Length; i++)
			{
				float t = (shifts[i] + Time.realtimeSinceStartup) % (fillTimeInSeconds[i] * 2f);
				float fill = ((!(t > fillTimeInSeconds[i])) ? (t / fillTimeInSeconds[i]) : (1f - (t - fillTimeInSeconds[i]) / fillTimeInSeconds[i]));
				sliders[i].value = fill;
			}
		}
	}
}
