import levelImg from "../assets/icons/level.svg";
import useAuth from "../hooks/useAuth";
import { useChallenges } from "../hooks/useChallenges";
import {
  UserContainer,
  SignInButton,
  SignInContainer,
} from "../styles/components/UserContainerStyle";
import googleIcon from "../assets/icons/google.svg";
import deleteIcon from "../assets/icons/delete.svg";

export function User() {
  const {
    level,
    currentExperience,
    resetCurrentDatas,
    challengesCompleted,
    setModalResetData,
  } = useChallenges();
  const { user, signInWithGoogle } = useAuth();

  function handleLogin() {
    let actualLevel = level - 1;
    try {
      signInWithGoogle(actualLevel, currentExperience, challengesCompleted);
    } catch (error) {
      return;
    }
  }

  return (
    <>
      {user ? (
        <UserContainer>
          <img
            className={"c-user-avatar"}
            src={user.avatar}
            alt='User Avatar'
          />
          <div className={"c-user-info"}>
            <h3 className={"c-user-name"}>{user.name}</h3>

            <p className={"c-user-level"}>
              <div>
                <img src={levelImg} alt='LevelImg' /> Level {level}
              </div>
              <img
                src={deleteIcon}
                onClick={() => {
                  setModalResetData(true);
                }}
                alt='Delete Icon'
                className={"c-deleteIcon"}
              />
            </p>
          </div>
        </UserContainer>
      ) : (
        <SignInContainer>
          <SignInButton
            onClick={() => {
              handleLogin();
            }}>
            <img src={googleIcon} alt='' /> Entre com sua conta do google
          </SignInButton>
          <p className={"c-user-level"}>
            <img src={levelImg} alt='Level' /> Level {level}
          </p>
        </SignInContainer>
      )}
    </>
  );
}
