using Project.Scripts.HexCore;
using Project.Scripts.UI;
using UnityEngine;

namespace Project.Scripts.InputSystem
{
    [RequireComponent(typeof(HexStack))]
    public class DragHandler : MonoBehaviour
    {
        private TutorialPointer _tutorialPointer;
        private ChainReactionOfHex _chainReaction;
        
        private HexStack _stack;
        private Camera _mainCamera;
        private Vector3 _dragOffset;
        private bool _isDragging = false;
        private HexCell _originalCell;

        private void Awake()
        {
            _stack = GetComponent<HexStack>();
            _mainCamera = Camera.main;
        }

        public void OnMouseDown()
        {
            _isDragging = true;
            _dragOffset = transform.position - GetMouseWorldPos();
            _originalCell = _stack.CurrentCell;
            _stack.RememberOriginalPosition(_originalCell);

            // Открепляем стек от ячейки
            if (_originalCell != null)
                _originalCell.RemoveStack();

            // Оповещаем TutorialManager о первом взаимодействии
            _tutorialPointer.OnPlayerStartedDrag();
        }

        public void OnMouseDrag()
        {
            if (!_isDragging) return;
            transform.position = GetMouseWorldPos() + _dragOffset;
        }

        public void OnMouseUp()
        {
            _isDragging = false;

            // Ищем ячейку под стеком
            RaycastHit2D hit = Physics2D.Raycast(transform.position, Vector2.zero);
            if (hit.collider != null)
            {
                HexCell cell = hit.collider.GetComponent<HexCell>();
                if (cell != null && cell.IsEmpty)
                {
                    // Ставим стек в ячейку
                    cell.PlaceStack(_stack);
                    _stack.CurrentCell = cell;
                    // Запускаем цепную реакцию
                    _chainReaction.StartChainReaction(cell);
                    return;
                }
            }

            // Если не нашли подходящую ячейку, возвращаем стек на исходную позицию
            StartCoroutine(_stack.ReturnToOriginal());
            if (_originalCell != null)
                _originalCell.PlaceStack(_stack);
        }

        public void GetServices(TutorialPointer tutorialPointer, ChainReactionOfHex chainReactionOfHex)
        {
            _tutorialPointer = tutorialPointer;
            _chainReaction = chainReactionOfHex;
        }

        private Vector3 GetMouseWorldPos()
        {
            Vector3 mouse = Input.mousePosition;
            mouse.z = -_mainCamera.transform.position.z;
            return _mainCamera.ScreenToWorldPoint(mouse);
        }
    }
}