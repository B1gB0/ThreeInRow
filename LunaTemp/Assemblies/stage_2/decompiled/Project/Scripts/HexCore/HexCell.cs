using System.Collections;
using UnityEngine;

namespace Project.Scripts.HexCore
{
	public class HexCell : MonoBehaviour
	{
		[SerializeField]
		private Material _highlightMaterial;

		[SerializeField]
		private Material _defaultMaterial;

		[SerializeField]
		private MeshRenderer _meshRenderer;

		[SerializeField]
		private ParticleSystem _effect;

		[SerializeField]
		private AudioSource _audioSource;

		[SerializeField]
		private AudioClip _destroyClip;

		private Vector2Int _coordinates;

		private Vector3 _worldPosition;

		private bool _isEmpty = true;

		private HexStack _currentStack;

		public Vector2Int Coordinates => _coordinates;

		public Vector3 WorldPosition => _worldPosition;

		public bool IsEmpty => _isEmpty;

		public HexStack CurrentStack => _currentStack;

		public void Initialize(Vector2Int coord, Vector3 worldPos)
		{
			_coordinates = coord;
			_worldPosition = worldPos;
			base.transform.position = worldPos;
			_isEmpty = true;
		}

		public void PlaceStack(HexStack stack)
		{
			if (IsEmpty)
			{
				_currentStack = stack;
				_isEmpty = false;
				stack.transform.SetParent(base.transform);
				StartCoroutine(MoveToCell(stack));
			}
		}

		public void RemoveStack()
		{
			_audioSource.PlayOneShot(_destroyClip);
			_effect.Play();
			if (CurrentStack != null)
			{
				_currentStack = null;
				_isEmpty = true;
			}
		}

		public void SetHighlight(bool state)
		{
			if (state)
			{
				if (_meshRenderer != null && _highlightMaterial != null)
				{
					_meshRenderer.material = _highlightMaterial;
				}
			}
			else if (_meshRenderer != null && _defaultMaterial != null)
			{
				_meshRenderer.material = _defaultMaterial;
			}
		}

		private IEnumerator MoveToCell(HexStack stack)
		{
			Vector3 startPos = stack.transform.position;
			Vector3 endPos = base.transform.position;
			float t = 0f;
			while (t < 1f)
			{
				t += Time.deltaTime * 5f;
				stack.transform.position = Vector3.Lerp(startPos, endPos, t);
				yield return null;
			}
			stack.transform.position = endPos;
		}
	}
}
