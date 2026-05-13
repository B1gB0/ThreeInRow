using UnityEngine;

namespace Gentleland.StemapunkUI.DemoAndExample
{
	public class CharacterStat : MonoBehaviour
	{
		private int value;

		private void Start()
		{
		}

		public void Increment()
		{
			value++;
		}

		public void Decrement()
		{
			value--;
		}
	}
}
