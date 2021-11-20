import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";

export function useChallenges() {
  const value = useContext(ChallengesContext);

  return value;
}
