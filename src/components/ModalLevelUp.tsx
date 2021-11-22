import React from "react";
import { useChallenges } from "../hooks/useChallenges";
import close from "../assets/icons/close.svg";
import {
  ModalContainer,
  ModalBox,
  CloseButton,
} from "../styles/components/ModalLevelUpStyle";

export default function ModalLevelUp() {
  const { level, modalLevelUp, setModalLevelUp } = useChallenges();

  return modalLevelUp ? (
    <ModalContainer>
      <ModalBox>
        <CloseButton
          onClick={() => {
            setModalLevelUp(false);
          }}>
          <img src={close} alt='' />
        </CloseButton>
        <h1>{level}</h1>
        <h2>Parabéns</h2>
        <p>Você alcançou um novo level.</p>
      </ModalBox>
    </ModalContainer>
  ) : null;
}
