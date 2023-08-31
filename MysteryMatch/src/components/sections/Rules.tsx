// Rules.tsx
import React from "react";
import WebsiteSections from "./ConstantsSections";
import { RulesDiv } from "../../styles/Sections.styles";

interface Props {
  setActiveView: (view: WebsiteSections) => void;
}

const Rules: React.FC<Props> = ({ setActiveView }) => {
  return (
    <RulesDiv>
      <div className="basis-4/12 flex flex-col justify-center">
        <div className="flex flex-row justify-center">
          <h1 className="text-8xl  font-bold  text-white py-7 px-28">
            Gameplay
          </h1>
        </div>
      </div>

      <div className="basis-4/10 flex flex-col justify-center">
        <div className="flex flex-row justify-center">
          <p className="text-xl   bg-primary-100/50 font-bold  text-white py-7 px-28">
            The goal of "Mystery Matches" is to find and uncover as many pairs
            of cards with the same image as possible. The cards are laid out
            face down. Players take turns. In each turn, a player flips over two
            cards of their choice. If the revealed cards have the same image,
            the player forms a pair and earns a point. If the revealed cards
            have different images, they are turned face down again in their
            original positions. The game ends when all pairs have been found and
            there are no more cards left on the playing field. The player with
            the most points wins.
          </p>
        </div>
      </div>
      <div className="basis-4/12 flex flex-col justify-center">
        <div className="flex flex-row justify-center">
          <button
            className="text-3xl py-7 px-6 bg-primary-100/50 hover:bg-middle-purple/50 hover:border-white hover:border-double border-4 border-transparent"
            onClick={() => setActiveView(WebsiteSections.SETTINGS)}
          >
            "Okay let's play!"
          </button>
        </div>
      </div>
    </RulesDiv>
  );
};

export default Rules;
