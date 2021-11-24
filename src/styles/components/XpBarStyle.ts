import { styled } from "@material-ui/system";

export const XpBarContainer = styled("div")`
  display: grid;
  grid-template-columns: 60px 1fr 100px;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  gap: 10px;
  color: #666666;
  padding-top: 20px;
  span {
    font-size: 14px;
  }

  @media (max-width: 400px) {
    grid-template-columns: 60px 1fr 60px;
    font-size: 10px;

    span {
      font-size: 8px;
    }
  }
`;

export const XpBarProgress = styled("div")`
  background: #dcdde0;
  height: 4px;
  transform: translate(0, 50%);
  position: relative;

  &::after {
    content: " ";
    background: #4cd62b;
    height: 4px;
    position: absolute;
    left: 0;
  }
`;

export const CurrentExpStyle = styled("p")`
  position: absolute;
  transform: translate(-50%, 0%);
`;
