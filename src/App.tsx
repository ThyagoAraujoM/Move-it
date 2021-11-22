import React from "react";

import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import { ChallengesProvider } from "./context/ChallengesContext";
import { CountdownProvider } from "./context/CountdownContext";
import Home from "./pages/Home";

function App() {
  return (
    <div className='App'>
      <AuthContextProvider>
        <ChallengesProvider>
          <CountdownProvider>
            <Home />
          </CountdownProvider>
        </ChallengesProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
