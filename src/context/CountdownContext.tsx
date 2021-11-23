import { createContext, ReactNode, useEffect, useState } from "react";
import { useChallenges } from "../hooks/useChallenges";

interface CountdownContextData {
  isActive: boolean;
  startCountdown: () => void;
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  resetCountdown: () => void;
}

type CountdownProviderProps = {
  children: ReactNode;
};

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { newChallenge } = useChallenges();
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0.1 * 10);
  const [hasFinished, setHasFinished] = useState(false);

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      try {
        newChallenge();
      } catch (error) {
        console.log(error);
      }
      newChallenge();
      setHasFinished(true);
      setIsActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, time]);

  function startCountdown() {
    setIsActive(!isActive);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 10);
    setHasFinished(false);
  }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <CountdownContext.Provider
      value={{
        isActive,
        startCountdown,
        minutes,
        seconds,
        hasFinished,
        resetCountdown,
      }}>
      {children}
    </CountdownContext.Provider>
  );
}
