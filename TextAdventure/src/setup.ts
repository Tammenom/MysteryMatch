//back cover for cards
import cardCover from "./img/cardcover.jpg";

// images for cards
import card1 from "./img/card1.jpg";
import card2 from "./img/card2.jpg";
import card3 from "./img/card3.jpg";
import card4 from "./img/card4.jpg";
import card5 from "./img/card5.jpg";
import card6 from "./img/card6.jpg";
import card7 from "./img/card7.jpg";
import card8 from "./img/card8.jpg";
import card9 from "./img/card9.jpg";
import card10 from "./img/card10.jpg";
import card11 from "./img/card11.jpg";
import card12 from "./img/card12.jpg";
import card100 from "./img/card13.jpg";

import path from "path";
interface Card {
  src: string;
  // Weitere Karten-Attribute, falls vorhanden
}

//standart type for card

export type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
};

export var numberOfCards: number = 3;

export const updateNumberOfCards = (newNumber: number) => {
  numberOfCards = newNumber;
};

const imagePaths: string[] = [];

function generateCardArray(length: number): string[] {
  for (let i = 0; i < length; i++) {
    const imagePath = `/img/card${i}.jpg`;
    imagePaths.push(imagePath);
  }

  return imagePaths;
}

//const cards: string[] = generateCardArray(cardsInGame);

const cards: string[] = [
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card100,
];

export const createBoard = (numberOfCards: number): CardType[] =>
  Array.from({ length: numberOfCards * 2 }).map((_, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: cardCover,
    frontImage: cards[i % numberOfCards],
    clickable: true,
    matchingCardId: `card${
      i < numberOfCards ? i + numberOfCards : i - numberOfCards
    }`,
  }));

//
