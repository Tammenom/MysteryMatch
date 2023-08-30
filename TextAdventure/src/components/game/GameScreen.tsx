import React, { useState, useEffect } from "react";
import WebsiteViews from "../../constantsViews";
import { createBoard, numberOfCards } from "../../setup";
import { shuffleArray } from "../../utils";
import { CardType } from "../../setup";
import { GameGrid } from "../../App.styles";
import Card from "../game/Card";
import { namesArray } from "../../data";
import NamesBar from "./NamesBar";

interface Card {
  src: string;
  // Weitere Karten-Attribute, falls vorhanden
}

interface Player {
  name: string;
  playerId: number;
  score: number;
}

const addDefaultPlayerByName = (
  newName: string,
  newPlayerId: number
): Player => {
  const newPlayer: Player = {
    playerId: newPlayerId,
    name: newName,
    score: 0,
  };
  return newPlayer;
};

const createPlayersFromArray = (namesArray: string[]): Player[] => {
  const playerObjects: Player[] = namesArray.map((name, index) => {
    return addDefaultPlayerByName(name, index);
  });

  return playerObjects;
};

const findPlayerWithHighestScore = (players: Player[]): Player | undefined => {
  if (players.length === 0) {
    return undefined;
  }

  let highestScorePlayer = players[0];

  for (const player of players) {
    if (player.score > highestScorePlayer.score) {
      highestScorePlayer = player;
    }
  }

  return highestScorePlayer;
};

const GameScreen: React.FC = () => {
  const [cards, setCards] = React.useState<CardType[]>(
    shuffleArray(createBoard(numberOfCards))
  );

  const [gameWon, setGameWon] = React.useState(false);
  const [matchedPairs, setMatchedPairs] = React.useState(0);
  const [clickedCard, setClickedCard] = React.useState<undefined | CardType>(
    undefined
  );
  const [playersArr, setPlayersArr] = useState<Player[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [eventLog, setEventLog] = useState("");

  React.useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      const playerWithHighestScore = findPlayerWithHighestScore(playersArr);
      setEventLog(
        "Spiel vorbei. " + playerWithHighestScore?.name + " hat gewonnen!"
      );
    }
  }, [matchedPairs]);

  const handleCardklick = (currentClickedCard: CardType) => {
    if (!gameWon) {
      setCards((prev) =>
        prev.map((card) =>
          card.id === currentClickedCard.id
            ? {
                ...card,
                flipped: true,
                clickable: false,
              }
            : card
        )
      );
      const updateGame = () => {};
      console.log(currentPlayer);
      //When first card keep it flipped
      if (!clickedCard) {
        setClickedCard({ ...currentClickedCard });
        return;
      }

      //Match

      if (clickedCard.matchingCardId === currentClickedCard.id) {
        setMatchedPairs((prev) => prev + 1);
        setCards((prev) =>
          prev.map((card) =>
            card.id === clickedCard.id || card.id === currentClickedCard.id
              ? { ...card, clickable: false }
              : card
          )
        );
        updatePlayerScore(playersArr, currentPlayer);
        setClickedCard(undefined);
        updateCurrentPlayer();
        return;
      }

      //No match
      setTimeout(() => {
        setCards((prev) =>
          prev.map((card) =>
            card.id === clickedCard.id || card.id === currentClickedCard.id
              ? {
                  ...card,
                  flipped: false,
                  clickable: true,
                }
              : card
          )
        );
      }, 1000);
      updateCurrentPlayer();
      setClickedCard(undefined);
    }
  };
  useEffect(() => {
    createPlayers();
    setCurrentPlayer(0);
    setEventLogToPlayerTurn(0);
    console.log("Player at start is: " + currentPlayer);
  }, []);

  const createPlayers = () => {
    const playersArray: Player[] = createPlayersFromArray(namesArray);
    setPlayersArr(playersArray);
    console.log("wow");
    console.log(playersArr);
  };

  const updatePlayerScore = (playerArray: Player[], playerIndex: number) => {
    playerArray.forEach((player, index) => {
      if (player.playerId === playerIndex) {
        player.score = player.score + 1;
        console.log(player);
      }
    });
  };

  const updateCurrentPlayer = () => {
    var newPlayerTurn = currentPlayer;
    if (newPlayerTurn < playersArr.length - 1) {
      newPlayerTurn = newPlayerTurn + 1;
    } else {
      newPlayerTurn = 0;
    }
    setCurrentPlayer(newPlayerTurn);
    setEventLogToPlayerTurn(newPlayerTurn);
  };

  const setEventLogToPlayerTurn = (currPlayer: number) => {
    playersArr.forEach((player) => {
      if (player.playerId === currPlayer) {
        setEventLog(player.name + " ist am Zug.");
      }
    });
  };

  return (
    <div>
      <div>
        <h2>Score:</h2>
        {playersArr.map((player, index) => (
          <NamesBar key={index} name={player.name} wonGames={player.score} />
        ))}
        <h1>{eventLog}</h1>
      </div>
      <GameGrid>
        {cards.map((card) => (
          <Card key={card.id} card={card} callback={handleCardklick} />
        ))}
      </GameGrid>
    </div>
  );
};

export default GameScreen;
