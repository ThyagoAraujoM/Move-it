import level from "../assets/icons/level.svg";
import { UserContainer } from "../styles/components/UserContainer";

export function User() {
  return (
    <UserContainer>
      <img
        className={"c-user-avatar"}
        src='https://github.com/ThyagoAraujoM.png'
        alt=''
      />
      <div className={"c-user-info"}>
        <h3 className={"c-user-name"}>Diego Fernandes</h3>
        <p className={"c-user-level"}>
          <img src={level} alt='' /> Level 1
        </p>
      </div>
    </UserContainer>
  );
}
