import React, { useState, createElement } from "react";
import "./App.css";
import Lobby from "./App/lobby";
import Game from "./App/game";
import { SCREEN } from "./App/constants";

function App() {
  const [screen, setScreen] = useState(SCREEN.LOBBY);
  const [score, setScore] = useState(0);
  const [userName, setUsername] = useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        flexDirection: "row",
        color: "white",
        font: "18px Arial",
      }}
    >
      {screen === SCREEN.LOBBY ? (
        <Lobby
          userName={userName}
          setUsername={setUsername}
          setScreen={setScreen}
        />
      ) : screen === SCREEN.GAME_OVER ? (
        `Kaybettiniz, Skorunuz: ${score}`
      ) : (
        <Game userName={userName} setScreen={setScreen} setScore={setScore} />
      )}
    </div>
  );
}

export default App;
