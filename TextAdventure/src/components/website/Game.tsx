import React, { useState } from "react";
import WebsiteViews from "../../constantsViews";
import { createBoard } from "../../setup";
import { shuffleArray } from "../../utils";
import { CardType } from "../../setup";
import { GameGrid } from "../../App.styles";
import Card from "../game/Card";

interface Props {
  setActiveView: (view: WebsiteViews) => void;
}
interface Card {
  src: string;
  // Weitere Karten-Attribute, falls vorhanden
}

const Game: React.FC<Props> = ({ setActiveView }) => {
  const [cards, setCards] = React.useState<CardType[]>(
    shuffleArray(createBoard())
  );
  const [gameWon, setGameWon] = React.useState(false);
  const [matchedPairs, setMatchedPairs] = React.useState(0);
  const [clickedCard, setClickedCard] = React.useState<undefined | CardType>(
    undefined
  );
  const handleCardklick = (currentClickedCard: CardType) => {
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
      setClickedCard(undefined);
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
    setClickedCard(undefined);
  };

  return (
    <div>
      <GameGrid>
        {cards.map((card) => (
          <Card key={card.id} card={card} callback={handleCardklick} />
        ))}
      </GameGrid>
    </div>
  );
};

export default Game;
