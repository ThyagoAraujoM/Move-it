import { Container } from "@material-ui/core";
import React from "react";
import {
  ButtonStyled,
  CancelButton,
  MainContainer,
  StartButton,
  XpBar,
} from "./styles";
import level from "../../assets/icons/level.svg";
import levelup from "../../assets/icons/level-up.svg";
import playarrow from "../../assets/icons/playarrow.svg";
import body from "../../assets/icons/body.svg";
import eye from "../../assets/icons/eye.svg";
import close from "../../assets/icons/close.svg";

export default function index() {
  return (
    <Container sx={{ height: "100vh" }}>
      <XpBar>
        <p>0 px</p>
        <div></div>
        <p>600 px</p>
      </XpBar>
      <MainContainer>
        <div className={"c-grid1"}>
          <div className={"c-user-container"}>
            <img
              className={"c-user-avatar"}
              src='https://github.com/ThyagoAraujoM.png'
              alt=''
            />
            <div className={"c-user-info"}>
              <h3 className={"c-user-name"}>Diego Fernandes</h3>
              <p className={"c-user-level"}>
                <img src={level} alt='' /> Level 1
              </p>
            </div>
          </div>
          <div className={"c-challenges-count"}>
            <p>Desafios completos</p>
            <p>00</p>
          </div>
          <div className={"c-timer-container"}>
            <div>
              <p>2</p>
              <p>5</p>
            </div>
            <span>:</span>
            <div>
              <p>0</p>
              <p>0</p>
            </div>
          </div>
          {false ? (
            <StartButton>
              Iniciar um ciclo <img src={playarrow} alt='' />
            </StartButton>
          ) : null}
          <CancelButton>
            <span> Abandonar ciclo </span>
            <img src={close} alt='' />
          </CancelButton>
        </div>
        <div className={"c-grid2"}>
          <div className={"c-new-cycle"}>
            <h1>Inicie um ciclo para receber desafios</h1>
            <img src={levelup} alt='' />
            <p>Avance de level completando os desafios.</p>
          </div>

          <div className={"c-challenges"}>
            <h3 className={"c-xp"}>Ganhe 400 xp</h3>
            <hr />
            <img src={body} alt='' />
            <h2 className={"c-title"}>Exercite-se</h2>
            <p>
              É agora Diegão, bora lá meu parça. <br /> Caminhe por 3 minutos e
              estique suas pernas pra você ficar saudável.
            </p>
            <div className={"c-buttons-container"}>
              <button className={"c-red-button"}>Falhei</button>
              <button className={"c-green-button"}>Completei</button>
            </div>
          </div>
          {false ? (
            <div className={"c-challenges"}>
              <h3 className={"c-xp"}>Ganhe 400 xp</h3>
              <hr />
              <img src={eye} alt='' />
              <h2 className={"c-title"}>Mova os olhos</h2>
              <p>
                É agora Diegão, bora lá meu parça. <br /> Caminhe por 3 minutos
                e estique suas pernas pra você ficar saudável.
              </p>
              <div className={"c-buttons-container"}>
                <button className={"c-red-button"}>Falhei</button>
                <button className={"c-green-button"}>Completei</button>
              </div>
            </div>
          ) : null}
        </div>
      </MainContainer>
    </Container>
  );
}
