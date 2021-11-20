import { styled } from "@material-ui/system";

export const ChallengesStyle = styled("div")`
  .c-new-cycle {
    display: flex;
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
`;
