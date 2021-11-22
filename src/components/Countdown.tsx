import { useCountdown } from "../hooks/useCountdown";
import {
  TimerStyle,
  CancelButton,
  CycleEnded,
  StartButton,
} from "../styles/components/TimerStyle";
import playarrow from "../assets/icons/playarrow.svg";
import close from "../assets/icons/close.svg";
import check from "../assets/icons/check.svg";

export function Countdown() {
  const {
    hasFinished,
    resetCountdown,
    isActive,
    startCountdown,
    minutes,
    seconds,
  } = useCountdown();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <>
      <TimerStyle className={"c-timer-container"}>
        <div>
          <p>{minuteLeft}</p>
          <p>{minuteRight}</p>
        </div>
        <span>:</span>
        <div>
          <p>{secondLeft}</p>
          <p>{secondRight}</p>
        </div>
      </TimerStyle>

      {!isActive && !hasFinished ? (
        <StartButton
          onClick={() => {
            startCountdown();
          }}>
          Iniciar um ciclo <img src={playarrow} alt='' />
        </StartButton>
      ) : null}
      {isActive ? (
        <CancelButton
          onClick={() => {
            resetCountdown();
          }}>
          Abandonar o ciclo
          <img src={close} alt='' />
        </CancelButton>
      ) : null}
      {hasFinished && !isActive ? (
        <CycleEnded>
          <span>Ciclo encerrado</span>
          <img src={check} alt='Check' />
        </CycleEnded>
      ) : null}
    </>
  );
}
