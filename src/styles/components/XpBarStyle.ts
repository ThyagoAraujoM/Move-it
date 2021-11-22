import { styled } from "@material-ui/system";

export const XpBarContainer = styled("div")`
  display: grid;
  grid-template-columns: 60px 840px 60px;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  gap: 10px;
  color: #666666;
  padding-top: 20px;
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
