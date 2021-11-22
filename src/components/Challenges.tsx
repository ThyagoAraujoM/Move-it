import levelup from "../assets/icons/level-up.svg";
import body from "../assets/icons/body.svg";
import eye from "../assets/icons/eye.svg";
import { ChallengesStyle } from "../styles/components/ChallengesStyle";
import { useChallenges } from "../hooks/useChallenges";
import { useCountdown } from "../hooks/useCountdown";

export function Challenges() {
  const { activeChallenge, challengeComplete, resetChallenge } =
    useChallenges();
  const { resetCountdown } = useCountdown();

  function handleChallengeSucceeded() {
    challengeComplete();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <ChallengesStyle>
      {!activeChallenge ? (
        <div className={"c-new-cycle"}>
          <h1>Inicie um ciclo para receber desafios</h1>
          <img src={levelup} alt='' />
          <p>Avance de level completando os desafios.</p>
        </div>
      ) : (
        <div className={"c-challenges"}>
          <h3 className={"c-xp"}>Ganhe {activeChallenge.amount} xp</h3>
          <hr />
          <img src={activeChallenge.type === "body" ? body : eye} alt='' />
          <h2 className={"c-title"}>
            {activeChallenge.type === "body" ? "Exercite-se" : "Mova os olhos"}
          </h2>
          <p>{activeChallenge.description}</p>
          <div className={"c-buttons-container"}>
            <button
              className={"c-red-button"}
              onClick={() => {
                handleChallengeFailed();
              }}>
              Falhei
            </button>
            <button
              className={"c-green-button"}
              onClick={() => {
                handleChallengeSucceeded();
              }}>
              Completei
            </button>
          </div>
        </div>
      )}
    </ChallengesStyle>
  );
}
