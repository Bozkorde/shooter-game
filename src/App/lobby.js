import React from "react";
import { SCREEN } from "./constants";

function Lobby({ userName, setScreen, setUsername }) {
  return (
    <div style={{ width: "center", height: "center" }}>
      <input
        style={{ height: "30px", width: "100%" }}
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Adınızı Girin"
      />
      <button
        style={{
          marginTop: "16px",
          backgroundColor: "#4169e1",
          color: "white",
          width: "103.5%",
          height: "30px",
        }}
        type="submit"
        onClick={() => setScreen(SCREEN.PLAYING)}
      >
        BAŞLA
      </button>

      <a
        href="https://github.com/Bozkorde"
        target="_blank"
        style={{ color: "white" }}
      >
        Github
      </a>
    </div>
  );
}

export default Lobby;
