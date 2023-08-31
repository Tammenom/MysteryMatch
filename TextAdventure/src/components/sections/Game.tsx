import React, { useState, useEffect } from "react";
import WebsiteSections from "./constantsSections";
import GameScreen from "../game/GameScreen";
import { namesArray } from "../settings/settingsOptions";
import NamesBar from "../game/ScoreBoard";
import { GameDiv } from "../../styles/HomeSectionStyle";

interface Props {
  setActiveView: (view: WebsiteSections) => void;
}
interface Card {
  src: string;
}

interface Player {
  name: string;
  playerId: number;
  wonGames: number;
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

const Game: React.FC<Props> = () => {
  const [isRendered, setIsRendered] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);
  const [startBText, setStartBText] = useState("Start a new Game");
  const [playersArr, setPlayersArr] = useState<Player[]>([]);

  useEffect(() => {
    updateGame();
  }, []);

  const updateGame = () => {
    createPlayers();
  };

  const createPlayers = () => {
    const playersArray: Player[] = createPlayersFromArray(namesArray);
    setPlayersArr(playersArray);
    console.log(playersArr);
  };

  const handleGameEnd = (playerId: Number) => {
    const newPlayerArray: Player[] = playersArr;

    newPlayerArray.forEach((player) => {
      if (player.playerId === playerId) {
        player.wonGames = player.wonGames + 1;
      }
    });
    setPlayersArr(newPlayerArray);
    console.log("Spieler mit höchstem Score:" + playerId);
  };

  const handleStartButtonClick = () => {
    setIsRendered(true);
    setShowStartButton(false);
    setStartBText("End Game");
  };

  const handleExitButtonClick = () => {
    setIsRendered(false);
    setShowStartButton(true);
    setStartBText("Start a new Game");
  };

  return (
    <GameDiv>
      {showStartButton ? (
        <button
          className="  basis-1/12  font-bold  text-lg  px-2 mx-5 self-center border-white bg-primary-100/50 hover:bg-middle-purple/50 hover:border-white hover:border-double border-2 border-transparent"
          onClick={handleStartButtonClick}
        >
          {startBText}
        </button>
      ) : (
        <button
          className="  basis-1/12  font-bold  text-lg  px-2 mx-5 self-center border-white bg-primary-100/50 hover:bg-middle-purple/50 hover:border-white hover:border-double border-2 border-transparent"
          onClick={handleExitButtonClick}
        >
          {startBText}
        </button>
      )}
      {!isRendered && (
        <div className="self-center ">
          <h1 className="text-2xl basis-1/12 self-center  font-bold   text-white py-3 px-28">
            Won Games:
          </h1>
          <div className="flex basis-1/12 flex-row justify-center">
            {playersArr.map((player, index) => (
              <NamesBar
                key={index}
                name={player.name}
                wonGames={player.wonGames}
              />
            ))}
          </div>
        </div>
      )}

      {isRendered && <GameScreen onGameEnd={handleGameEnd} />}
    </GameDiv>
  );
};
export default Game;
