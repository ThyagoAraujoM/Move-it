import { Button } from "@material-ui/core";
import { styled } from "@material-ui/system";

export const TimerStyle = styled("div")`
  .c-timer-container {
    font-family: "Rajdhani", sans-serif;
    display: flex;
    max-width: 390px;
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
      p:first-of-type {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      }
      p:last-of-type {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
      }
    }

    span {
      font-size: 120px;
      color: rgba(46, 56, 77, 1);
    }

    @media (max-width: 768px) {
      div {
        p {
          font-size: 80px;
          border-radius: 0.1em;
          padding: 15px;
        }
      }
      span {
        font-size: 80px;
      }
    }
  }
`;

export const DecreaseDurationButton = styled(Button)`
  width: 90%;
  background: rgba(232, 63, 91, 1);
  margin-top: 10px;
  &:hover {
    background: rgba(232, 63, 91, 1);
    filter: brightness(0.9);
  }
  img {
    width: 15px;
    filter: invert(100%) brightness(2);
  }

  &:disabled {
    opacity: 0.2;
  }
`;

export const IncreaseDurationButton = styled(Button)`
  width: 90%;
  background: #5965e0;
  margin-bottom: 10px;
  &:hover {
    background: #4953b8;
  }
  img {
    width: 15px;
    filter: brightness(2);
  }

  &:disabled {
    opacity: 0.2;
  }
`;

export const ButtonStyled = styled(Button)`
  padding: 30px 50px;
  height: 80px;
  max-width: 390px;
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
  background: #fff;
  border-bottom: 4px solid rgba(76, 214, 43, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 389px;
  height: 80px;
  border-radius: 5px;
  box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.05);
  color: rgba(102, 102, 102, 1);
  span {
    font-weight: 600;
    font-size: 20px;
  }
  img {
    transform: translate(0, 3px);
  }
`;
