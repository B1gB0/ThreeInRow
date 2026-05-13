using System.Collections.Generic;
using UnityEngine;

namespace Project.Scripts.HexCore
{
	public class HexGrid : MonoBehaviour
	{
		private const float OffsetY = 0.62f;

		private readonly Dictionary<Vector2Int, HexCell> _cells = new Dictionary<Vector2Int, HexCell>();

		[Header("Настройки сетки")]
		[SerializeField]
		private int _gridRadius = 3;

		[SerializeField]
		private float _cellSpacing = 1.1f;

		[SerializeField]
		private HexCell _hexCellPrefab;

		private void Start()
		{
			GenerateGrid();
		}

		public HexCell GetCell(Vector2Int coord)
		{
			_cells.TryGetValue(coord, out var cell);
			return cell;
		}

		public bool IsCellEmpty(Vector2Int coord)
		{
			HexCell cell;
			return _cells.TryGetValue(coord, out cell) && cell.IsEmpty;
		}

		public List<HexCell> GetEmptyCells()
		{
			List<HexCell> emptyCells = new List<HexCell>();
			foreach (HexCell cell in _cells.Values)
			{
				if (cell.IsEmpty)
				{
					emptyCells.Add(cell);
				}
			}
			return emptyCells;
		}

		public Vector2Int WorldToAxial(Vector3 worldPos)
		{
			float q = 2f / 3f * worldPos.x / _cellSpacing;
			float r = (-1f / 3f * worldPos.x + Mathf.Sqrt(3f) / 3f * worldPos.z) / _cellSpacing;
			return CubeRound(q, r);
		}

		private void GenerateGrid()
		{
			for (int q = -_gridRadius; q <= _gridRadius; q++)
			{
				int r2 = Mathf.Max(-_gridRadius, -q - _gridRadius);
				int r3 = Mathf.Min(_gridRadius, -q + _gridRadius);
				for (int r = r2; r <= r3; r++)
				{
					Vector2Int coord = new Vector2Int(q, r);
					Vector3 worldPos = base.transform.position + AxialToWorld(q, r);
					HexCell cellGO = Object.Instantiate(_hexCellPrefab, worldPos, Quaternion.identity, base.transform);
					HexCell cell = cellGO.GetComponent<HexCell>();
					cell.Initialize(coord, worldPos);
					_cells.Add(coord, cell);
				}
			}
		}

		private Vector2Int CubeRound(float q, float r)
		{
			float s = 0f - q - r;
			int rq = Mathf.RoundToInt(q);
			int rr = Mathf.RoundToInt(r);
			int rs = Mathf.RoundToInt(s);
			float qDiff = Mathf.Abs((float)rq - q);
			float rDiff = Mathf.Abs((float)rr - r);
			float sDiff = Mathf.Abs((float)rs - s);
			if (qDiff > rDiff && qDiff > sDiff)
			{
				rq = -rr - rs;
			}
			else if (rDiff > sDiff)
			{
				rr = -rq - rs;
			}
			return new Vector2Int(rq, rr);
		}

		private Vector3 AxialToWorld(int q, int r)
		{
			float x = _cellSpacing * (1.5f * (float)q);
			float z = _cellSpacing * (Mathf.Sqrt(3f) / 2f * (float)q + Mathf.Sqrt(3f) * (float)r);
			return new Vector3(x, 0.62f, z);
		}
	}
}
