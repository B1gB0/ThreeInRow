using System.Collections;
using UnityEngine;

namespace Project.Scripts.HexCore
{
    public class HexCell : MonoBehaviour
    {
        private const float OffsetY = 0.62f;
        
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
            // Анимация плавного перемещения стека в ячейку (здесь просто устанавливаем позицию)
            StartCoroutine(MoveToCell(stack));
        }

        public void RemoveStack()
        {
            if (CurrentStack != null)
            {
                Destroy(CurrentStack.gameObject);
                CurrentStack = null;
                IsEmpty = true;
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