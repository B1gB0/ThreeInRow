using UnityEngine;

namespace Project.Scripts.UI
{
    public abstract class View : MonoBehaviour
    {
        public virtual void Show() { }
        public virtual void Hide() { }
    }
}
