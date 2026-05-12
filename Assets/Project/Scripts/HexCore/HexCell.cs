using System.Collections;
using UnityEngine;

namespace Project.Scripts.HexCore
{
    public class HexCell : MonoBehaviour
    {
        [SerializeField] private Material _highlightMaterial;
        [SerializeField] private Material _defaultMaterial;
        [SerializeField] private MeshRenderer _meshRenderer;
        [SerializeField] private ParticleSystem _effect;
        [SerializeField] private AudioSource _audioSource;
        [SerializeField] private AudioClip _destroyClip;
        
        public Vector2Int Coordinates { get; private set; }
        public Vector3 WorldPosition { get; private set; }

        // Текущий стек, который находится в ячейке (null, если ячейка пуста)
        public HexStack CurrentStack { get; private set; }

        [field: SerializeField] public bool IsEmpty { get; private set; } = true;

        public void Initialize(Vector2Int coord, Vector3 worldPos)
        {
            Coordinates = coord;
            WorldPosition = worldPos;
            transform.position = worldPos;
            IsEmpty = true;
        }

        public void PlaceStack(HexStack stack)
        {
            if (!IsEmpty)
                return;

            CurrentStack = stack;
            IsEmpty = false;
            stack.transform.SetParent(transform);
            
            StartCoroutine(MoveToCell(stack));
        }

        public void RemoveStack()
        {
            _audioSource.PlayOneShot(_destroyClip);
            _effect.Play();
            
            if (CurrentStack != null)
            {
                CurrentStack = null;
                IsEmpty = true;
            }
        }
        
        public void SetHighlight(bool state)
        {
            if (state)
            {
                if (_meshRenderer != null && _highlightMaterial != null)
                    _meshRenderer.material = _highlightMaterial;
            }
            else
            {
                if (_meshRenderer != null && _defaultMaterial != null)
                    _meshRenderer.material = _defaultMaterial;
            }
        }
        
        private IEnumerator MoveToCell(HexStack stack)
        {
            Vector3 startPos = stack.transform.position;
            Vector3 endPos = transform.position;
            
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