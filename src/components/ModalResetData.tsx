import React from "react";
import { useChallenges } from "../hooks/useChallenges";
import close from "../assets/icons/close.svg";
import {
  ModalContainer,
  ModalBox,
  CloseButton,
  ConfirmButton,
} from "../styles/components/ModalResetDataStyle";

export default function ModalResetData() {
  const {
    level,
    modalResetData,
    setModalResetData,
    challengesCompleted,
    resetCurrentDatas,
    calcTotalXp,
  } = useChallenges();

  return modalResetData ? (
    <ModalContainer>
      <ModalBox>
        <h2>Apagar dados atuais</h2>
        <h4>
          Level: {level} | Xp Total: {calcTotalXp()} | Desafios Completos:
          {challengesCompleted}
        </h4>
        <div>
          <p>Tem certeza que quer apagar todos os dados.</p>
          <p>Perderá todo o xp acumulado, level e desafios completados</p>
        </div>
        <div className={"c-buttons-container"}>
          <CloseButton
            onClick={() => {
              setModalResetData(false);
            }}>
            Calcelar
          </CloseButton>
          <ConfirmButton
            onClick={() => {
              resetCurrentDatas();
              setModalResetData(false);
            }}>
            Confirmar
          </ConfirmButton>
        </div>
      </ModalBox>
    </ModalContainer>
  ) : null;
}
