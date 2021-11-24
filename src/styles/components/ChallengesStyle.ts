import { styled } from "@material-ui/system";

export const ChallengesStyle = styled("div")`
  max-width: 390px;

  .c-new-cycle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    .c-grid1 {
      margin: 0 auto;
    }
    h1 {
      font-size: 24px;
      color: rgba(102, 102, 102, 1);
      max-width: 251px;
    }

    img {
      width: 59px;
      height: 80px;
    }

    p {
      font-size: 16px;
      color: rgba(102, 102, 102, 1);
      max-width: 220px;
    }
  }

  .c-challenges {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    padding: 25px;

    h3 {
      font-size: 20px;
      font-weight: 600;
      color: rgba(89, 101, 224, 1);
    }

    hr {
      max-width: 340px;
      height: 0;
      border: 1px solid #dcdde0;
    }
    img {
      max-width: 140px;
      max-height: 112px;
    }
    h2 {
      font-size: 30px;
      font-weight: 600;
      font-size: 30px;
      color: rgba(46, 56, 77, 1);
    }
    p {
      font-size: 16px;
      max-width: 346px;
      color: rgba(102, 102, 102, 1);
      text-align: center;
    }
    .c-buttons-container {
      display: flex;
      justify-content: center;
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

      @media (max-width: 600px) {
        button {
          width: 100px;
        }
      }
    }
  }
`;
