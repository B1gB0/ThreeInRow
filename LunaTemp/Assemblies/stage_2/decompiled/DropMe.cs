using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class DropMe : MonoBehaviour, IDropHandler, IEventSystemHandler, IPointerEnterHandler, IPointerExitHandler
{
	public Image containerImage;

	public Image receivingImage;

	private Color normalColor;

	public Color highlightColor = Color.yellow;

	public void OnEnable()
	{
		if (containerImage != null)
		{
			normalColor = containerImage.color;
		}
	}

	public void OnDrop(PointerEventData data)
	{
		containerImage.color = normalColor;
		if (!(receivingImage == null))
		{
			Sprite dropSprite = GetDropSprite(data);
			if (dropSprite != null)
			{
				receivingImage.overrideSprite = dropSprite;
			}
		}
	}

	public void OnPointerEnter(PointerEventData data)
	{
		if (!(containerImage == null))
		{
			Sprite dropSprite = GetDropSprite(data);
			if (dropSprite != null)
			{
				containerImage.color = highlightColor;
			}
		}
	}

	public void OnPointerExit(PointerEventData data)
	{
		if (!(containerImage == null))
		{
			containerImage.color = normalColor;
		}
	}

	private Sprite GetDropSprite(PointerEventData data)
	{
		GameObject originalObj = data.pointerDrag;
		if (originalObj == null)
		{
			return null;
		}
		DragMe dragMe = originalObj.GetComponent<DragMe>();
		if (dragMe == null)
		{
			return null;
		}
		Image srcImage = originalObj.GetComponent<Image>();
		if (srcImage == null)
		{
			return null;
		}
		return srcImage.sprite;
	}
}
