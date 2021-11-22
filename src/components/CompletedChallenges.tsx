import { useChallenges } from "../hooks/useChallenges";
import { ChallengesCount } from "../styles/components/CompletedChallengeStyle";

export function CompletedChallenges() {
  const { challengesCompleted } = useChallenges();
  return (
    <ChallengesCount>
      <p>Desafios completos</p>
      <p>{challengesCompleted}</p>
    </ChallengesCount>
  );
}
