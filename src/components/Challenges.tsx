import levelup from "../assets/icons/level-up.svg";
import body from "../assets/icons/body.svg";
import eye from "../assets/icons/eye.svg";
import { ChallengesStyle } from "../styles/components/ChallengesStyle";
import { useCountdown } from "../hooks/useCountdown";

export function Challenges() {
  const { hasFinished } = useCountdown();

  return (
    <ChallengesStyle>
      {!hasFinished ? (
        <div className={"c-new-cycle"}>
          <h1>Inicie um ciclo para receber desafios</h1>
          <img src={levelup} alt='' />
          <p>Avance de level completando os desafios.</p>
        </div>
      ) : null}

      {false ? (
        <div className={"c-challenges"}>
          <h3 className={"c-xp"}>Ganhe 400 xp</h3>
          <hr />
          <img src={body} alt='' />
          <h2 className={"c-title"}>Exercite-se</h2>
          <p>
            É agora Diegão, bora lá meu parça. <br /> Caminhe por 3 minutos e
            estique suas pernas pra você ficar saudável.
          </p>
          <div className={"c-buttons-container"}>
            <button className={"c-red-button"}>Falhei</button>
            <button className={"c-green-button"}>Completei</button>
          </div>
        </div>
      ) : null}

      {false ? (
        <div className={"c-challenges"}>
          <h3 className={"c-xp"}>Ganhe 400 xp</h3>
          <hr />
          <img src={eye} alt='' />
          <h2 className={"c-title"}>Mova os olhos</h2>
          <p>
            É agora Diegão, bora lá meu parça. <br /> Caminhe por 3 minutos e
            estique suas pernas pra você ficar saudável.
          </p>
          <div className={"c-buttons-container"}>
            <button className={"c-red-button"}>Falhei</button>
            <button className={"c-green-button"}>Completei</button>
          </div>
        </div>
      ) : null}
    </ChallengesStyle>
  );
}
