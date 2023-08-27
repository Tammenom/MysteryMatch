//back cover for cards
import cardCover from "/img/cardcover.jpg";

// images for cards
import card1 from "/img/card1.jpg";
import card2 from "/img/card2.jpg";
import card3 from "/img/card3.jpg";
import card4 from "/img/card4.jpg";
import card5 from "/img/card5.jpg";
import card6 from "/img/card6.jpg";
import card7 from "/img/card7.jpg";
import card8 from "/img/card8.jpg";
import card9 from "/img/card9.jpg";
import card10 from "/img/card10.jpg";
import card11 from "/img/card11.jpg";
import card12 from "/img/card12.jpg";
import card13 from "/img/card13.jpg";

//standart type for card

export type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
};

var cardsInGame: number = 8;

function generateCardArray(length: number): string[] {
  const cardArray: string[] = [];

  for (let i = 0; i < length; i++) {
    const card = `card${i + 1}`;
    cardArray.push(card);
  }

  return cardArray;
}

const cards: string[] = generateCardArray(cardsInGame);

export const createBoard = (): CardType[] =>
  [...cards, ...cards].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: cardCover,
    frontImage: card,
    clickable: true,
    matchingCardId:
      i < card.length ? `card${i + cards.length}` : `cards${i - cards.length}`,
  }));

//
