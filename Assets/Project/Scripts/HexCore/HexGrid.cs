using System.Collections.Generic;
using UnityEngine;

namespace Project.Scripts.HexCore
{
    public class HexGrid : MonoBehaviour
    {
        private const float OffsetY = 0.62f;

        private readonly Dictionary<Vector2Int, HexCell> _cells = new();

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
        
        public Vector2Int WorldToAxial(Vector3 worldPos)
        {
            // Обратные формулы для flat‑top
            float q = (2f / 3f * worldPos.x) / _cellSpacing;
            float r = (-1f / 3f * worldPos.x + Mathf.Sqrt(3f) / 3f * worldPos.z) / _cellSpacing;

            return CubeRound(q, r);
        }

        private void GenerateGrid()
        {
            for (int q = -_gridRadius; q <= _gridRadius; q++)
            {
                int r1 = Mathf.Max(-_gridRadius, -q - _gridRadius);
                int r2 = Mathf.Min(_gridRadius, -q + _gridRadius);
                for (int r = r1; r <= r2; r++)
                {
                    Vector2Int coord = new Vector2Int(q, r);
                    Vector3 worldPos = transform.position + AxialToWorld(q, r);
                    HexCell cellGO = Instantiate(_hexCellPrefab, worldPos, Quaternion.identity, transform);
                    HexCell cell = cellGO.GetComponent<HexCell>();
                    cell.Initialize(coord, worldPos);
                    _cells.Add(coord, cell);
                }
            }
        }

        private Vector2Int CubeRound(float q, float r)
        {
            float s = -q - r;
            int rq = Mathf.RoundToInt(q);
            int rr = Mathf.RoundToInt(r);
            int rs = Mathf.RoundToInt(s);

            float qDiff = Mathf.Abs(rq - q);
            float rDiff = Mathf.Abs(rr - r);
            float sDiff = Mathf.Abs(rs - s);

            if (qDiff > rDiff && qDiff > sDiff)
                rq = -rr - rs;
            else if (rDiff > sDiff)
                rr = -rq - rs;

            return new Vector2Int(rq, rr);
        }

        private Vector3 AxialToWorld(int q, int r)
        {
            float x = _cellSpacing * (3f / 2f * q);
            float z = _cellSpacing * (Mathf.Sqrt(3f) / 2f * q + Mathf.Sqrt(3f) * r);
            return new Vector3(x, OffsetY, z);
        }
    }
}