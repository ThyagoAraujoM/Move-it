import { Container } from "@material-ui/core";
import React from "react";
import { MainContainer, XpBar } from "./styles";

import { CompletedChallenges } from "../../components/CompletedChallenges";
import { Countdown } from "../../components/Countdown";
import { User } from "../../components/User";
import { Challenges } from "../../components/Challenges";

export default function Index() {
  return (
    <Container sx={{ height: "100vh" }}>
      <XpBar>
        <p>0 px</p>
        <div></div>
        <p>600 px</p>
      </XpBar>
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
    </Container>
  );
}
