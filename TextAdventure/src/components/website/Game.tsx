import React, { useState } from "react";
import WebsiteViews from "../../constantsViews";
import CardImages from "../../ConstantsCards";

interface Props {
  setActiveView: (view: WebsiteViews) => void;
}
interface Card {
  src: string;
  // Weitere Karten-Attribute, falls vorhanden
}

const Game: React.FC<Props> = ({ setActiveView }) => {
  const [cards, setCards] = useState<Card[]>([]); // Hier den Card[]-Typ hinzugefügt
  const [turns, setTurns] = useState<number>(0); // Hier den number-Typ hinzugefügt

  const shuffleCards = () => {
    const shuffledCards = [...CardImages, ...CardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card }));

    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <div>
      <h1>Magic Memory</h1>
      <button onClick={shuffleCards}>Starte ein neues Spiel</button>
    </div>
  );
};

export default Game;
