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
  name: string;
  playerId: number;
  wonGames: number;
}

function RenderGameScreen() {
  return <GameScreen />;
}

const addDefaultPlayerByName = (
  newName: string,
  newPlayerId: number
): Player => {
  const newPlayer: Player = {
    playerId: newPlayerId,
    name: newName,
    wonGames: 0,
  };

  return newPlayer;
};

const createPlayersFromArray = (namesArray: string[]): Player[] => {
  const playerObjects: Player[] = namesArray.map((name, index) => {
    return addDefaultPlayerByName(name, index);
  });

  return playerObjects;
};

const Game: React.FC<Props> = ({ setActiveView }) => {
  const updateGame = () => {
    createPlayers();
  };

  useEffect(() => {
    updateGame();
  }, []);

  const [isRendered, setIsRendered] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);
  const [startBText, setStartBText] = useState("Starte Spiel!");
  const [playersArr, setPlayersArr] = useState<Player[]>([]);

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

  const createPlayers = () => {
    const playersArray: Player[] = createPlayersFromArray(namesArray);
    setPlayersArr(playersArray);
    console.log(playersArr);
  };

  return (
    <div>
      <div>
        {playersArr.map((player, index) => (
          <NamesBar key={index} name={player.name} wonGames={player.wonGames} />
        ))}
      </div>

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
