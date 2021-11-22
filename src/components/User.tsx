import levelImg from "../assets/icons/level.svg";
import useAuth from "../hooks/useAuth";
import { useChallenges } from "../hooks/useChallenges";
import {
  UserContainer,
  SignInButton,
  SignInContainer,
} from "../styles/components/UserContainerStyle";
import googleIcon from "../assets/icons/google.svg";

export function User() {
  const { level } = useChallenges();
  const { user, signInWithGoogle } = useAuth();
  return (
    <>
      {user ? (
        <UserContainer>
          <img className={"c-user-avatar"} src={user.avatar} alt='' />
          <div className={"c-user-info"}>
            <h3 className={"c-user-name"}>{user.name}</h3>
            <p className={"c-user-level"}>
              <img src={levelImg} alt='' /> Level {level}
            </p>
          </div>
        </UserContainer>
      ) : (
        <SignInContainer>
          <SignInButton
            onClick={() => {
              signInWithGoogle();
            }}>
            <img src={googleIcon} alt='' /> Entre com sua conta do google
          </SignInButton>
          <p className={"c-user-level"}>
            <img src={levelImg} alt='' /> Level {level}
          </p>
        </SignInContainer>
      )}
    </>
  );
}
