import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import challenges from "../challenge.json";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextType {
  level: number;
  challengesCompleted: number;
  newChallenge: () => void;
  activeChallenge: Challenge | undefined;
  currentExperience: number;
  experienceForNextLevel: number;
  challengeComplete: () => void;
  resetChallenge: () => void;
  setModalLevelUp: Dispatch<SetStateAction<boolean>>;
  modalLevelUp: boolean;
}

type ChallengesProviderProps = {
  children: ReactNode;
};

export const ChallengesContext = createContext({} as ChallengesContextType);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState<Challenge>();
  const [currentExperience, setCurrentExperience] = useState(0);
  const [experienceForNextLevel, setExperienceForNextLevel] = useState(200);
  const [modalLevelUp, setModalLevelUp] = useState(false);

  function newChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge as Challenge);

    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {
      new Notification("Novo desafio 🎉", {
        body: `Valendo ${challenge.amount} de xp!`,
        silent: false,
      });
    }
  }

  function challengeComplete() {
    if (!activeChallenge) {
      return;
    }

    let { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceForNextLevel) {
      finalExperience = finalExperience - experienceForNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setChallengesCompleted(challengesCompleted + 1);
    setActiveChallenge(undefined);
  }

  function levelUp() {
    setLevel(level + 1);
    setExperienceForNextLevel(level * 150);
    setModalLevelUp(true);
  }

  function resetChallenge() {
    setActiveChallenge(undefined);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        challengesCompleted,
        newChallenge,
        activeChallenge,
        currentExperience,
        experienceForNextLevel,
        challengeComplete,
        resetChallenge,
        setModalLevelUp,
        modalLevelUp,
      }}>
      {children}
    </ChallengesContext.Provider>
  );
}
