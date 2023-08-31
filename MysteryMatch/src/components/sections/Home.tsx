import React from "react";
import WebsiteSections from "./ConstantsSections";
import { HomeDiv } from "../../styles/Sections.styles";

interface Props {
  setActiveView: (view: WebsiteSections) => void;
}

const Home: React.FC<Props> = ({ setActiveView }) => {
  return (
    <HomeDiv>
      <div className="basis-1/3 flex flex-col justify-center">
        <div className="flex flex-row justify-center">
          <h1 className="text-9xl  font-bold  text-white py-7 px-28 bg-primary-100/30 ">
            Mystery Match
          </h1>
        </div>
      </div>

      <div className="basis-1/2 flex flex-col justify-center">
        <div className="flex flex-row justify-center">
          <button
            className="text-5xl py-7 px-6 bg-primary-100/30 hover:bg-middle-purple/50 hover:border-white hover:border-double border-4 border-transparent"
            onClick={() => setActiveView(WebsiteSections.SETTINGS)}
          >
            Start a new Game!
          </button>
        </div>
      </div>
    </HomeDiv>
  );
};

export default Home;
