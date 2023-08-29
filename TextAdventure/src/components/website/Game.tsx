import React, { useState, useEffect } from "react";
import WebsiteViews from "../../constantsViews";
import GameScreen from "../game/GameScreen";
import { namesArray } from "../../data";
import NamesBar from "../game/NamesBar";

interface Props {
  setActiveView: (view: WebsiteViews) => void;
}
interface Card {
  src: string;
  // Weitere Karten-Attribute, falls vorhanden
}

interface Player {
  playerId: number;
  playerName: string;
  playerscore: number;
}

function RenderGameScreen() {
  return <GameScreen />;
}

const Game: React.FC<Props> = ({ setActiveView }) => {
  const updateGame = () => {
    console.log("Helllooo");
  };

  useEffect(() => {
    updateGame();
  }, []);

  const [isRendered, setIsRendered] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);
  const [startBText, setStartBText] = useState("Starte Spiel!");

  const handleStartButtonClick = () => {
    setIsRendered(!isRendered);
    setShowStartButton(false);
    setStartBText("Starte ein neues Spiel!");
  };

  const handleExitButtonClick = () => {
    setIsRendered(false);
    setShowStartButton(true);
    setStartBText("Starte Spiel!");
  };

  return (
    <div>
      <NamesBar names={namesArray} />

      {showStartButton ? (
        <button onClick={handleStartButtonClick}>{startBText}</button>
      ) : (
        <button onClick={handleStartButtonClick}>
          Starte ein neues Spiel.
        </button>
      )}

      {isRendered && !showStartButton && (
        <button onClick={handleExitButtonClick}>Beende das Spiel.</button>
      )}

      {isRendered && <RenderGameScreen />}
    </div>
  );
};
export default Game;
