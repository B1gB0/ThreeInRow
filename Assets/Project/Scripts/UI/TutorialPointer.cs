using UnityEngine;

namespace Project.Scripts.UI
{
    public class TutorialPointer : MonoBehaviour
    {
        [SerializeField] private GameObject _handObject;
        [SerializeField] private Transform[] _stackPositions;
        [SerializeField] private float _idleTimeToShow = 2f;

        private bool _tutorialCompleted = false;
        private float _lastInteractionTime;

        private void Awake()
        {
            // Гарантируем, что рука выключена при старте
            if (_handObject != null)
                _handObject.SetActive(false);
        }

        private void Start()
        {
            ShowTutorial();
        }

        private void Update()
        {
            if (_tutorialCompleted) return;

            if (Time.time - _lastInteractionTime > _idleTimeToShow && _handObject != null && !_handObject.activeSelf)
            {
                ShowTutorial();
            }
        }

        public void ShowTutorial()
        {
            if (_handObject == null || _tutorialCompleted) return;
            if (_handObject.activeSelf) return; // уже активно

            // Выбираем случайную позицию и перемещаем руку
            int rand = Random.Range(0, _stackPositions.Length);
            _handObject.transform.position = _stackPositions[rand].position;
            _handObject.SetActive(true);
        }

        public void OnPlayerStartedDrag()
        {
            _lastInteractionTime = Time.time;
            if (_handObject != null && _handObject.activeSelf)
            {
                _handObject.SetActive(false);
            }

            if (!_tutorialCompleted)
            {
                _tutorialCompleted = true;
            }
        }
    }
}