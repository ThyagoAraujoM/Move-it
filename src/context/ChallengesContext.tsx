import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import challenges from "../challenge.json";
import useAuth from "../hooks/useAuth";

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
  resetCurrentLevelAndXp: () => void;
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
  const [experienceForNextLevel, setExperienceForNextLevel] = useState(
    level * 150
  );
  const [modalLevelUp, setModalLevelUp] = useState(false);
  const { user, setUser, saveNewXp, saveNewLevel } = useAuth();

  useEffect(() => {
    if (user && (user.level !== level || user.xp !== currentExperience)) {
      setLevel(user.level);
      setCurrentExperience(user.xp);
      setExperienceForNextLevel(user.level * 150);
    }
  }, [user, setUser]);

  useEffect(() => {
    if (user && user.level !== level) {
      let newUserState = user;
      newUserState.level = level;
      saveNewLevel(newUserState);
    }
  }, [level, setLevel]);

  useEffect(() => {
    if (user && user.xp !== currentExperience) {
      let newUserState = user;
      newUserState.xp = currentExperience;
      saveNewXp(newUserState);
    }
  }, [currentExperience, setCurrentExperience]);

  function newChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge as Challenge);

    // new Audio("../assets/notification.mp3").play();

    // if (Notification.permission === "granted") {
    //   new Notification("Novo desafio 🎉", {
    //     body: `Valendo ${challenge.amount} de xp!`,
    //     silent: false,
    //   });
    // }
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

  function resetCurrentLevelAndXp() {
    setLevel(1);
    setCurrentExperience(0);
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
        resetCurrentLevelAndXp,
      }}>
      {children}
    </ChallengesContext.Provider>
  );
}
