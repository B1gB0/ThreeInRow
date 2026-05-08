using System.Collections.Generic;
using UnityEngine;

namespace Project.Scripts.HexCore
{
    public class HexGrid : MonoBehaviour
    {
        private const float OffsetY = 0.62f;
        
        private readonly Dictionary<Vector2Int, HexCell> _cells = new ();
        
        [Header("Настройки сетки")]
        [SerializeField] private int _gridRadius = 3; // Радиус сетки в гексах

        [SerializeField] private float _cellSpacing = 1.1f; // Расстояние между центрами ячеек
        [SerializeField] private HexCell _hexCellPrefab; // Префаб ячейки поля

        private void Start()
        {
            GenerateGrid();
        }

        public HexCell GetCell(Vector2Int coord)
        {
            _cells.TryGetValue(coord, out HexCell cell);
            return cell;
        }

        public bool IsCellEmpty(Vector2Int coord)
        {
            return _cells.TryGetValue(coord, out HexCell cell) && cell.IsEmpty;
        }
        
        public List<HexCell> GetEmptyCells()
        {
            List<HexCell> emptyCells = new List<HexCell>();
            foreach (var cell in _cells.Values)
            {
                if (cell.IsEmpty)
                    emptyCells.Add(cell);
            }
            return emptyCells;
        }

        /// <summary>
        /// Генерирует гексагональную сетку. Координаты используются "осевые" (q, r).
        /// </summary>
        private void GenerateGrid()
        {
            for (int q = -_gridRadius; q <= _gridRadius; q++)
            {
                int r1 = Mathf.Max(-_gridRadius, -q - _gridRadius);
                int r2 = Mathf.Min(_gridRadius, -q + _gridRadius);
                for (int r = r1; r <= r2; r++)
                {
                    Vector2Int coord = new Vector2Int(q, r);
                    Vector3 worldPos = AxialToWorld(q, r);
                    HexCell cellGO = Instantiate(_hexCellPrefab, worldPos, Quaternion.identity, transform);
                    HexCell cell = cellGO.GetComponent<HexCell>();
                    cell.Initialize(coord, worldPos);
                    _cells.Add(coord, cell);
                }
            }
        }

        /// <summary>
        /// Преобразует аксиальные координаты (q, r) в мировые (Vector3).
        /// </summary>
        private Vector3 AxialToWorld(int q, int r)
        {
            float x = _cellSpacing * (Mathf.Sqrt(3f) * q + Mathf.Sqrt(3f) / 2f * r);
            float y = _cellSpacing * (3f / 2f * r);
            return new Vector3(x, OffsetY, y);
        }
    }
}