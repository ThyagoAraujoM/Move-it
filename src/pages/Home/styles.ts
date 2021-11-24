import { styled } from "@material-ui/system";

export const MainContainer = styled("div")`
  * {
    margin: 0;
    padding: 0;
  }
  background: #f2f3f5;
  grid-template: "grid1 grid2" / 1fr 1fr;
  justify-content: center;
  display: grid;
  margin: 0 auto 0 auto;
  gap: 5%;
  max-width: 1000px;
  height: 100%;
  padding: 80px 0 40px 0;

  .c-grid1 {
    max-width: 390px;
    grid-area: "grid1";
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .c-grid2 {
    grid-area: "grid2";
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.05);
    max-width: 470px;
    min-height: 500px;
    width: 100%;
  }

  @media (max-width: 900px) {
    grid-template: "grid1" 1fr "grid2" 1fr / 1fr;
    height: 100%;
    .c-grid1 {
      margin: 0 auto;
    }

    .c-grid2 {
      margin: 0 auto;
      max-width: 390px;
      min-height: 450px;
    }
  }
`;
