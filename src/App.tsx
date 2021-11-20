import React from "react";

import "./App.css";
import { CountdownProvider } from "./context/CountdownContext";
import Home from "./pages/Home";

function App() {
  return (
    <div className='App'>
      <CountdownProvider>
        <Home />
      </CountdownProvider>
    </div>
  );
}

export default App;
