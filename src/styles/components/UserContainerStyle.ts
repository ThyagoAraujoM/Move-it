import { Button } from "@material-ui/core";
import { styled } from "@material-ui/system";

export const UserContainer = styled("div")`
  display: grid;
  height: 88px;
  width: 308px;
  gap: 20px;
  grid-template:
    "user-avatar user-info"
    "user-avatar user-info" / 90px 200px;

  .c-user-avatar {
    grid-area: user-avatar;
    width: 88px;
    border-radius: 50%;
  }

  .c-user-info {
    grid-area: user-info;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 10px;

    .c-user-name {
      font-size: 24px;
      color: #2e384d;
    }

    .c-user-level {
      display: flex;
      gap: 5px;
      align-items: center;
      color: #666666;
      justify-content: space-between;
      width: 100%;
      .c-deleteIcon {
        width: 20px;
        cursor: pointer;
        padding: 5px;
        &:hover {
          background: #ea433463;
          border-radius: 5px;
        }
      }
    }
  }
`;

export const SignInContainer = styled("div")`
  display: flex;
  height: 88px;
  width: 100%;
  gap: 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .c-user-level {
    display: flex;
    gap: 5px;
    align-items: center;
    color: #666666;
  }
`;

export const SignInButton = styled(Button)`
  background: #ea4335;
  color: #fff;
  font-size: 12px;
  padding: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  &:hover {
    background: #ea4335;
    filter: brightness(0.9);
  }
`;
