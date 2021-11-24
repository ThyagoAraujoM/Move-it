import { useCountdown } from "../hooks/useCountdown";
import {
  TimerStyle,
  CancelButton,
  CycleEnded,
  StartButton,
  IncreaseDurationButton,
  DecreaseDurationButton,
} from "../styles/components/TimerStyle";
import playarrow from "../assets/icons/playarrow.svg";
import close from "../assets/icons/close.svg";
import check from "../assets/icons/check.svg";
import upArrow from "../assets/icons/upArrow.svg";
import downArrow from "../assets/icons/downArrow.svg";

export function Countdown() {
  const {
    hasFinished,
    resetCountdown,
    isActive,
    startCountdown,
    minutes,
    seconds,
    increaseDuration,
    decreaseDuration,
  } = useCountdown();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <>
      <TimerStyle>
        <IncreaseDurationButton
          disabled={!hasFinished && !isActive ? false : true}
          onClick={() => {
            increaseDuration();
          }}>
          <img src={upArrow} alt='Up arrow' />
        </IncreaseDurationButton>
        <div className={"c-timer-container"}>
          <div>
            <p>{minuteLeft}</p>
            <p>{minuteRight}</p>
          </div>
          <span>:</span>
          <div>
            <p>{secondLeft}</p>
            <p>{secondRight}</p>
          </div>
        </div>
        <DecreaseDurationButton
          disabled={!hasFinished && !isActive ? false : true}
          onClick={() => {
            decreaseDuration();
          }}>
          <img src={downArrow} alt='Arrow Down' />
        </DecreaseDurationButton>
      </TimerStyle>

      {!isActive && !hasFinished ? (
        <StartButton
          onClick={() => {
            startCountdown();
          }}>
          Iniciar um ciclo <img src={playarrow} alt='Start Cycle' />
        </StartButton>
      ) : null}
      {isActive ? (
        <CancelButton
          onClick={() => {
            resetCountdown();
          }}>
          Abandonar o ciclo
          <img src={close} alt='Cancel Countdown' />
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
