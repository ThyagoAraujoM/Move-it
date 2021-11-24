import { createContext, ReactNode, useEffect, useState } from "react";
import { useChallenges } from "../hooks/useChallenges";

interface CountdownContextData {
  minutes: number;
  seconds: number;
  isActive: boolean;
  hasFinished: boolean;
  resetCountdown: () => void;
  startCountdown: () => void;
  increaseDuration: () => void;
  decreaseDuration: () => void;
}

type CountdownProviderProps = {
  children: ReactNode;
};

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0.1 * 601);
  const [defaultTime, setDefaultTime] = useState(61);
  const [hasFinished, setHasFinished] = useState(false);
  const { newChallenge } = useChallenges();

  useEffect(() => {
    let storageTime = localStorage.getItem("storageTime");
    storageTime =
      storageTime != null ? JSON.parse(storageTime) : "Nenhum valor";

    if (storageTime != null && typeof storageTime === "number") {
      setDefaultTime(storageTime);
      setTime(storageTime);
    }
  }, []);

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
    setTime(defaultTime);
    setHasFinished(false);
  }

  function increaseDuration() {
    setTime(time + 60);
    setDefaultTime(defaultTime + 60);
    localStorage.setItem("storageTime", JSON.stringify(defaultTime + 60));
  }

  function decreaseDuration() {
    setDefaultTime(defaultTime - 60);
    setTime(time - 60);
    localStorage.setItem("storageTime", JSON.stringify(defaultTime - 60));
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
        increaseDuration,
        decreaseDuration,
      }}>
      {children}
    </CountdownContext.Provider>
  );
}
