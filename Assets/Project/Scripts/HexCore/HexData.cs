using UnityEngine;

namespace Project.Scripts.HexCore
{
    public class HexData : ScriptableObject
    {
        [field: SerializeField] public Color Color { get; private set; }
    }
}