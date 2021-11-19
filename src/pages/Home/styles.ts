import { Button } from "@material-ui/core";
import { styled } from "@material-ui/system";

export const XpBar = styled("div")`
  display: grid;
  grid-template-columns: 60px 840px 60px;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  gap: 10px;
  color: #666666;
  padding-top: 20px;

  div {
    background: #dcdde0;
    height: 4px;
    transform: translate(0, 50%);
  }
`;

export const MainContainer = styled("div")`
  * {
    margin: 0;
    padding: 0;
  }

  display: grid;
  margin-top: 80px;
  grid-template: "grid1 grid2";
  justify-content: center;
  gap: 100px;

  .c-grid1 {
    width: 390px;
    grid-area: "grid1";
    display: flex;
    flex-direction: column;
    gap: 32px;

    .c-user-container {
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
    }

    .c-challenges-count {
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid #ccc;
      padding: 0 0 10px 0;
      color: #666666;

      p:first-child {
        font-size: 18px;
      }
      p:last-child {
        font-size: 24px;
      }
    }

    .c-timer-container {
      font-family: "Rajdhani", sans-serif;
      display: flex;
      width: 390px;
      align-items: center;
      justify-content: center;
      div {
        display: flex;
        p {
          font-size: 120px;
          background: #fff;
          border: 1px solid #f0f1f3;
          border-radius: 0.1em;
          padding: 15px;
          box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.05);
          color: rgba(46, 56, 77, 1);
        }
        p:first-child {
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
        }
        p:last-child {
          border-top-left-radius: 0px;
          border-bottom-left-radius: 0px;
        }
      }

      span {
        font-size: 120px;
        color: rgba(46, 56, 77, 1);
      }
    }
  }

  .c-grid2 {
    grid-area: "grid2";
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.05);
    width: 470px;
    height: 500px;

    .c-new-cycle {
      display: none;
      flex-direction: column;
      gap: 50px;
      justify-content: center;
      align-items: center;

      h1 {
        font-size: 24px;
        color: rgba(102, 102, 102, 1);
        width: 251px;
      }

      img {
        width: 59px;
        height: 80px;
      }

      p {
        font-size: 16px;
        color: rgba(102, 102, 102, 1);
        width: 220px;
      }
    }

    .c-challenges {
      padding: 25px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 25px;
      width: 468px;
      height: 500px;
      h3 {
        font-size: 20px;
        font-weight: 600;
        color: rgba(89, 101, 224, 1);
      }

      hr {
        width: 340px;
        height: 0;
        border: 1px solid #dcdde0;
      }
      img {
        width: 140px;
        height: 112px;
      }
      h2 {
        font-size: 30px;
        font-weight: 600;
        font-size: 30px;
        color: rgba(46, 56, 77, 1);
      }
      p {
        font-size: 16px;
        width: 346px;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        text-align: center;
      }
      .c-buttons-container {
        display: flex;
        gap: 8px;
        button {
          width: 174px;
          height: 50px;
          border: 0px;
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          border-radius: 5px;
          cursor: pointer;
          &:hover {
            filter: brightness(0.9);
          }
        }
        .c-red-button {
          background: rgba(232, 63, 91, 1);
        }
        .c-green-button {
          background: rgba(76, 214, 43, 1);
        }
      }
    }
  }
`;

export const ButtonStyled = styled(Button)`
  padding: 30px 50px;
  height: 80px;
  width: 390px;
  cursor: pointer;
  font-weight: 600;
  text-transform: none;
`;

export const StartButton = styled(ButtonStyled)`
  color: #fff;
  background: #5965e0;
  &:hover {
    background: #4953b8;
  }
`;

export const CancelButton = styled(ButtonStyled)`
  color: rgba(102, 102, 102, 1);
  background: #fff;
  box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.05);
  &:hover {
    background: rgba(232, 63, 91, 1);
    color: #fff;

    img {
      filter: sepia(100%) saturate(0%) brightness(200%);
    }
  }
`;

export const CycleEnded = styled("div")`
  border-bottom: 2px solid rgba(76, 214, 43, 1);
  display: flex;
  width: 389px;
  height: 80px;
`;
