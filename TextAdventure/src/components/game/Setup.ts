//back cover for cards
import cardCover from "../../img/cardcover.jpg";

// images for cards
import card1 from "../../img/card1.jpg";
import card2 from "../../img/card2.jpg";
import card3 from "../../img/card3.jpg";
import card4 from "../../img/card4.jpg";
import card5 from "../../img/card5.jpg";
import card6 from "../../img/card6.jpg";
import card7 from "../../img/card7.jpg";
import card8 from "../../img/card8.jpg";
import card9 from "../../img/card9.jpg";
import card10 from "../../img/card10.jpg";
import card11 from "../../img/card11.jpg";
import card12 from "../../img/card12.jpg";
import card13 from "../../img/card13.jpg";
import card14 from "../../img/card14.jpg";
import card15 from "../../img/card15.jpg";
import card16 from "../../img/card16.jpg";
import card17 from "../../img/card17.jpg";
import card18 from "../../img/card18.jpg";
import card19 from "../../img/card19.jpg";
import card20 from "../../img/card20.jpg";
import card21 from "../../img/card21.jpg";
import card22 from "../../img/card22.jpg";
import card23 from "../../img/card23.jpg";
import card24 from "../../img/card24.jpg";
import card25 from "../../img/card25.jpg";
import card26 from "../../img/card26.jpg";

/*
Import per Image hat nicht funktioniert.
const imagePaths: string[] = [];

function generateCardArray(length: number): string[] {
  for (let i = 0; i < length; i++) {
    const imagePath = `/img/card${i}.jpg`;
    imagePaths.push(imagePath);
  }

  return imagePaths;
}
*/

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

export const shuffleArray = (arr: any[]): any[] => {
  return arr
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);
};

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
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card21,
  card22,
  card23,
  card24,
  card25,
  card26,
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
