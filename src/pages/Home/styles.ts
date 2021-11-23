import { styled } from "@material-ui/system";

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
