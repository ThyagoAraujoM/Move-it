import { createContext, useState } from "react";
import challenges from "../../challenge.json";

type Challenge = {};

type ChallengesContextType = {
  level: number;
  challengesCompleted: number;
  startNewChallenge: () => void;
};

export const ChallengesContext = createContext({} as ChallengesContextType);

export function ChallengesProvider() {
  const [level, setLevel] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState<Challenge>(null);

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge as Challenge);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        challengesCompleted,
        startNewChallenge,
      }}></ChallengesContext.Provider>
  );
}
