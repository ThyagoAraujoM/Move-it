import { Container } from "@material-ui/core";
import React from "react";
import { MainContainer } from "./styles";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { CompletedChallenges } from "../../components/CompletedChallenges";
import { Countdown } from "../../components/Countdown";
import { User } from "../../components/User";
import { Challenges } from "../../components/Challenges";
import XpBar from "../../components/XpBar";
import ModalLevelUp from "../../components/ModalLevelUp";
import flaviconIcon from "../../assets/favicon.png";
import ModalResetData from "../../components/ModalResetData";

export default function Index() {
  return (
    <HelmetProvider>
      <Container sx={{ minHeight: "100vh", height: "100%" }}>
        <Helmet>
          <link rel='icon' href={flaviconIcon} />
        </Helmet>
        <XpBar />
        <MainContainer>
          <div className={"c-grid1"}>
            <User />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div className={"c-grid2"}>
            <Challenges />
          </div>
        </MainContainer>
        <ModalLevelUp />
        <ModalResetData />
      </Container>
    </HelmetProvider>
  );
}
