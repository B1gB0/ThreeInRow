using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

[RequireComponent(typeof(Image))]
public class DragMe : MonoBehaviour, IBeginDragHandler, IEventSystemHandler, IDragHandler, IEndDragHandler
{
	public bool dragOnSurfaces = true;

	private Dictionary<int, GameObject> m_DraggingIcons = new Dictionary<int, GameObject>();

	private Dictionary<int, RectTransform> m_DraggingPlanes = new Dictionary<int, RectTransform>();

	public void OnBeginDrag(PointerEventData eventData)
	{
		Canvas canvas = FindInParents<Canvas>(base.gameObject);
		if (!(canvas == null))
		{
			m_DraggingIcons[eventData.pointerId] = new GameObject("icon");
			m_DraggingIcons[eventData.pointerId].transform.SetParent(canvas.transform, false);
			m_DraggingIcons[eventData.pointerId].transform.SetAsLastSibling();
			Image image = m_DraggingIcons[eventData.pointerId].AddComponent<Image>();
			CanvasGroup group = m_DraggingIcons[eventData.pointerId].AddComponent<CanvasGroup>();
			group.blocksRaycasts = false;
			image.sprite = GetComponent<Image>().sprite;
			image.SetNativeSize();
			if (dragOnSurfaces)
			{
				m_DraggingPlanes[eventData.pointerId] = base.transform as RectTransform;
			}
			else
			{
				m_DraggingPlanes[eventData.pointerId] = canvas.transform as RectTransform;
			}
			SetDraggedPosition(eventData);
		}
	}

	public void OnDrag(PointerEventData eventData)
	{
		if (m_DraggingIcons[eventData.pointerId] != null)
		{
			SetDraggedPosition(eventData);
		}
	}

	private void SetDraggedPosition(PointerEventData eventData)
	{
		if (dragOnSurfaces && eventData.pointerEnter != null && eventData.pointerEnter.transform as RectTransform != null)
		{
			m_DraggingPlanes[eventData.pointerId] = eventData.pointerEnter.transform as RectTransform;
		}
		RectTransform rt = m_DraggingIcons[eventData.pointerId].GetComponent<RectTransform>();
		if (RectTransformUtility.ScreenPointToWorldPointInRectangle(m_DraggingPlanes[eventData.pointerId], eventData.position, eventData.pressEventCamera, out var globalMousePos))
		{
			rt.position = globalMousePos;
			rt.rotation = m_DraggingPlanes[eventData.pointerId].rotation;
		}
	}

	public void OnEndDrag(PointerEventData eventData)
	{
		if (m_DraggingIcons[eventData.pointerId] != null)
		{
			Object.Destroy(m_DraggingIcons[eventData.pointerId]);
		}
		m_DraggingIcons[eventData.pointerId] = null;
	}

	public static T FindInParents<T>(GameObject go) where T : Component
	{
		if (go == null)
		{
			return null;
		}
		T comp = go.GetComponent<T>();
		if ((Object)comp != (Object)null)
		{
			return comp;
		}
		Transform t = go.transform.parent;
		while (t != null && (Object)comp == (Object)null)
		{
			comp = t.gameObject.GetComponent<T>();
			t = t.parent;
		}
		return comp;
	}
}
