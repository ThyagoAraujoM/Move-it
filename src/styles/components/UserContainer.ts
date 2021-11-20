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
    }
  }
`;
