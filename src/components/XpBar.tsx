import { useChallenges } from "../hooks/useChallenges";
import {
  XpBarContainer,
  XpBarProgress,
  CurrentExpStyle,
} from "../styles/components/XpBarStyle";

export default function XpBar() {
  const { experienceForNextLevel, currentExperience } = useChallenges();

  return (
    <XpBarContainer>
      <p>0 px</p>
      <XpBarProgress
        sx={{
          "&::after": {
            width: `${(currentExperience / experienceForNextLevel) * 100}%`,
          },
        }}>
        <CurrentExpStyle
          sx={{
            left: `${(currentExperience / experienceForNextLevel) * 100}%`,
          }}>
          {currentExperience > 0 ? `${currentExperience} xp` : null}
        </CurrentExpStyle>
      </XpBarProgress>
      <p>{experienceForNextLevel} px</p>
    </XpBarContainer>
  );
}
