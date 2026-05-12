using System.Collections;
using Project.Scripts.UI;
using UnityEngine;
using UnityEngine.UI;

namespace Project.Scripts.Game
{
    public class EndGame : MonoBehaviour
    {
        [SerializeField] private CanvasGroup _endGameCanvasGroup;
        [SerializeField] private Button _playNowButton;
        [SerializeField] private TutorialPointer _tutorialPointer;

        private void Start()
        {
            _playNowButton.onClick.AddListener(OnPlayNowClicked);
        }

        public void ShowEndCard()
        {
            _tutorialPointer?.CompleteTutorial();
            StartCoroutine(FadeIn());
        }

        private IEnumerator FadeIn()
        {
            float t = 0f;
            while (t < 1f)
            {
                t += Time.deltaTime * 2f;
                _endGameCanvasGroup.alpha = t;
                yield return null;
            }
            _endGameCanvasGroup.alpha = 1f;
            _endGameCanvasGroup.interactable = true;
            _endGameCanvasGroup.blocksRaycasts = true;
        }

        private void OnPlayNowClicked()
        {
            Luna.Unity.LifeCycle.GameEnded();
            Luna.Unity.Playable.InstallFullGame();
        }
    }
}