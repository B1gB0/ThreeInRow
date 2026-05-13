using UnityEngine;
using UnityEngine.UI;

[RequireComponent(typeof(Selectable))]
public class KeyFieldUnSelect : MonoBehaviour
{
	[SerializeField]
	private Selectable selectable;

	public void UnSelect()
	{
		if (selectable != null)
		{
			selectable.Select();
		}
	}
}
