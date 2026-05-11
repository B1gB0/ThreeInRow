using System.Collections;
using Project.Scripts.HexCore;
using Project.Scripts.UI;
using UnityEngine;
using UnityEngine.EventSystems;

namespace Project.Scripts.InputSystem
{
    [RequireComponent(typeof(HexStack))]
    public class DragHandler : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
    {
        [Header("Настройки перетаскивания")]
        [SerializeField] private float _liftHeight = 0.5f;
        [SerializeField] private float _raycastDistance = 1f;
        [SerializeField] private float _returnDuration = 0.25f;

        private HexStack _stack;
        private Camera _mainCamera;

        // Ссылки на сервисы
        private TutorialPointer _tutorialPointer;
        private ChainReactionOfHex _chainReaction;

        // Состояния перетаскивания
        private bool _isDragging;
        private Vector3 _dragPlanePoint; // точка на плоскости XZ (на высоте _liftHeight), куда указывает мышь
        private HexCell _originalCell; // ячейка, из которой взяли стек
        private HexCell _highlightedCell; // текущая подсвеченная ячейка

        private void Awake()
        {
            _stack = GetComponent<HexStack>();
            _mainCamera = Camera.main;
        }

        // Вызывается извне, чтобы передать сервисы (туториал, цепная реакция)
        public void GetServices(TutorialPointer tutorialPointer, ChainReactionOfHex chainReactionOfHex)
        {
            _tutorialPointer = tutorialPointer;
            _chainReaction = chainReactionOfHex;
        }

        // Начало перетаскивания
        public void OnBeginDrag(PointerEventData eventData)
        {
            _isDragging = true;

            // Запоминаем исходную ячейку и позицию
            _originalCell = _stack.CurrentCell;

            // Открепляем стек от ячейки
            _originalCell?.RemoveStack();

            // Поднимаем стек на заданную высоту, сохраняя XZ из текущей позиции
            Vector3 liftedPos = transform.position;
            liftedPos.y = _liftHeight;
            transform.position = liftedPos;

            // Оповещаем туториал о начале взаимодействия
            _tutorialPointer?.OnPlayerStartedDrag();
        }

        // В процессе перетаскивания
        public void OnDrag(PointerEventData eventData)
        {
            if (!_isDragging) return;

            // Получаем точку на плоскости XZ на высоте _liftHeight,
            // куда указывает курсор (палец)
            if (TryGetPointOnLiftPlane(eventData, out Vector3 point))
            {
                // Перемещаем стек только по X и Z, высота остаётся _liftHeight
                transform.position = new Vector3(point.x, _liftHeight, point.z);
            }

            // Ищем ячейку под стеком и подсвечиваем её
            HighlightCellUnderStack();
        }

        // Завершение перетаскивания
        public void OnEndDrag(PointerEventData eventData)
        {
            _isDragging = false;

            // Убираем подсветку, если была
            RemoveHighlight();

            // Пытаемся найти ячейку под стеком
            HexCell cell = GetCellUnderStack();

            if (cell != null && cell.IsEmpty)
            {
                // Ставим стек в найденную ячейку
                cell.PlaceStack(_stack);
                _stack.CurrentCell = cell;
                // Запускаем цепную реакцию
                _chainReaction?.StartChainReaction(cell);
            }
            else
            {
                // Ячейка не найдена или занята — возвращаем стек на исходную позицию
                StartCoroutine(ReturnToOriginalCell());
                if (_originalCell != null)
                    _originalCell.PlaceStack(_stack);
            }
        }

        private IEnumerator ReturnToOriginalCell()
        {
            // Отключаем коллайдер на время анимации, чтобы не сработали повторные OnMouseDown
            Collider col = GetComponent<Collider>();
            if (col) col.enabled = false;

            // Запускаем плавное перемещение в исходную точку
            yield return _stack.MoveToPosition(_stack.OriginalPosition, _returnDuration);

            // После завершения анимации возвращаем стек в ячейку
            if (_originalCell != null)
            {
                _originalCell.PlaceStack(_stack); // PlaceStack внутри может сделать свою анимацию,
                // но старт и финиш совпадают -> просто присвоит флаги
                _stack.CurrentCell = _originalCell;
            }

            if (col) col.enabled = true;
        }

        /// <summary>
        /// Луч из камеры через позицию указателя до пересечения с плоскостью Y = _liftHeight.
        /// Возвращает true и мировую точку пересечения, если луч попал в плоскость.
        /// </summary>
        private bool TryGetPointOnLiftPlane(PointerEventData eventData, out Vector3 point)
        {
            point = Vector3.zero;
            Ray ray = _mainCamera.ScreenPointToRay(eventData.position);
            Plane plane = new Plane(Vector3.up, new Vector3(0, _liftHeight, 0));

            if (plane.Raycast(ray, out float enter))
            {
                point = ray.GetPoint(enter);
                return true;
            }

            return false;
        }

        /// <summary>
        /// Подсвечивает ячейку, над которой находится стек (если она пустая).
        /// Предыдущая подсветка снимается.
        /// </summary>
        private void HighlightCellUnderStack()
        {
            HexCell cell = GetCellUnderStack();
            if (cell == _highlightedCell)
                return;

            // Убираем старую подсветку
            RemoveHighlight();

            // Если ячейка существует и пуста — подсвечиваем
            if (cell != null && cell.IsEmpty)
            {
                _highlightedCell = cell;
                _highlightedCell.SetHighlight(true); // метод нужно добавить в HexCell
            }
        }

        /// <summary>
        /// Находит HexCell под стеком, используя луч вниз.
        /// Можно заменить на Physics.OverlapSphere / BoxCast, если точнее.
        /// </summary>
        private HexCell GetCellUnderStack()
        {
            Vector3 origin = transform.position + Vector3.up * 0.1f; // небольшой отступ вверх
            RaycastHit hit;
            if (Physics.Raycast(origin, Vector3.down, out hit, _raycastDistance))
            {
                return hit.collider.GetComponent<HexCell>();
            }

            return null;
        }

        private void RemoveHighlight()
        {
            if (_highlightedCell != null)
            {
                _highlightedCell.SetHighlight(false);
                _highlightedCell = null;
            }
        }
    }
}