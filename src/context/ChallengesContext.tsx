import { off } from "process";
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
  resetCurrentDatas: () => void;
  modalResetData: boolean;
  setModalResetData: Dispatch<SetStateAction<boolean>>;
  calcTotalXp: () => number;
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
  const [modalResetData, setModalResetData] = useState(false);
  const [experienceForNextLevel, setExperienceForNextLevel] = useState(
    level * 150
  );
  const [modalLevelUp, setModalLevelUp] = useState(false);
  const {
    user,
    setUser,
    saveNewData,
    loadLocalStorage,
    resetStorageDatas,
    setResetStorageDatas,
  } = useAuth();

  useEffect(() => {
    if (!user) {
      let value = loadLocalStorage();

      setLevel(value.level);
      setCurrentExperience(value.xp);
      setExperienceForNextLevel(value.level * 150);
      setChallengesCompleted(value.completedChallenges);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user && (user.level !== level || user.xp !== currentExperience)) {
      setLevel(user.level);
      setCurrentExperience(user.xp);
      setExperienceForNextLevel(user.level * 150);
      setChallengesCompleted(user.challengesCompleted);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, setUser]);

  useEffect(() => {
    if (user && user.xp !== currentExperience) {
      let newUserState = user;
      newUserState.level = level;
      newUserState.xp = currentExperience;
      newUserState.challengesCompleted = challengesCompleted;
      saveNewData(newUserState);
    } else {
      let currentSessionStorage = {
        level: level,
        xp: currentExperience,
        completedChallenges: challengesCompleted,
      };
      localStorage.setItem(
        "currentSession",
        JSON.stringify(currentSessionStorage)
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    level,
    setLevel,
    challengesCompleted,
    setChallengesCompleted,
    currentExperience,
    setCurrentExperience,
  ]);

  useEffect(() => {
    if (resetStorageDatas) {
      resetCurrentDatas();
      setResetStorageDatas(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetStorageDatas]);

  function newChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge as Challenge);

    new Audio("../assets/notification.mp3").play();

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

  function resetCurrentDatas() {
    setLevel(1);
    setCurrentExperience(0);
    setChallengesCompleted(0);
    setExperienceForNextLevel(150);
    let currentSessionStorage = {
      level: 1,
      xp: 0,
      completedChallenges: 0,
    };

    localStorage.setItem(
      "currentSession",
      JSON.stringify(currentSessionStorage)
    );
  }

  function calcTotalXp() {
    let totalGainedXp = 0;
    for (let i = 0; i < level; i++) {
      totalGainedXp += i * 150;
    }
    return totalGainedXp + currentExperience;
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
        resetCurrentDatas,
        modalResetData,
        setModalResetData,
        calcTotalXp,
      }}>
      {children}
    </ChallengesContext.Provider>
  );
}
