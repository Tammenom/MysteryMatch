import React, { useState } from "react";
import { updateNumberOfCards, numberOfCards } from "./Setup";

const CardOptions: React.FC = () => {
  const maxCards = 20;
  const minCards = 3;
  const [cardsNumber, setCards] = useState(numberOfCards);

  const handleAddCard = () => {
    if (cardsNumber < maxCards) {
      const newCardNumber = cardsNumber + 1;
      setCards(newCardNumber);
      updateNumberOfCards(cardsNumber);
    }
  };

  const handlePullCard = () => {
    if (cardsNumber > minCards) {
      const newCardNumber = cardsNumber - 1;
      setCards(newCardNumber);
      updateNumberOfCards(cardsNumber);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <h2 className="self-center font-bold text-xl py-2">
        Set how many cards you want to play with.
      </h2>
      <div className="flex flex-row self-center ">
        <button
          className="text-2xl  px-3 self-center bg-primary-100/50 hover:bg-middle-purple/50 hover:border-white/80 hover:border-double border-4 border-white/0"
          onClick={handlePullCard}
        >
          -
        </button>
        <p className="text-black bg-white text-2xl px-4">{cardsNumber * 2}</p>
        <button
          className="text-2xl  px-3 self-center bg-primary-100/50 hover:bg-middle-purple/50 hover:border-white/80 hover:border-double border-4 border-white/0"
          onClick={handleAddCard}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CardOptions;
