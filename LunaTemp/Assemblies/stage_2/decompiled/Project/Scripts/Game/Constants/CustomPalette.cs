using UnityEngine;

namespace Project.Scripts.Game.Constants
{
	[CreateAssetMenu(fileName = "ColorPalette", menuName = "Colors/Color Palette")]
	public class CustomPalette : ScriptableObject
	{
		[SerializeField]
		private ColorEntry[] colors;

		public Color GetColor(ColorName colorName)
		{
			ColorEntry[] array = colors;
			for (int i = 0; i < array.Length; i++)
			{
				ColorEntry entry = array[i];
				if (entry.Name == colorName)
				{
					return entry.Color;
				}
			}
			return Color.magenta;
		}
	}
}
