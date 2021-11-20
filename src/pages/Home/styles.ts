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
  }
`;
