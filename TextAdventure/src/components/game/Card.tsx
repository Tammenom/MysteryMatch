import React from "react";
import { CardType } from "./Setup";
import { Wrapper, FrontImg, BackImg } from "../../styles/Card.styles";

type Props = {
  card: CardType;
  callback: (card: CardType) => void;
};

const Card: React.FC<Props> = ({ card, callback }) => {
  const handleClick = () => {
    if (card.clickable) callback(card);
  };

  return (
    <Wrapper onClick={handleClick}>
      <FrontImg
        className="my-1 xs:mx-1  rounded border md:max-w-40 md:max-h-40 sm:max-w-30 md:max-h-30 xs:max-w-20 xs:max-h-20"
        flipped={card.flipped}
        src={card.frontImage}
        alt="card-front"
      />
      <BackImg
        className="my-1  xs:mx-1 rounded border md:max-w-40 md:max-h-40 sm:max-w-30 md:max-h-30 xs:max-w-20 xs:max-h-20"
        flipped={card.flipped}
        src={card.backImage}
        alt="card-back"
      />
    </Wrapper>
  );
};

export default Card;
