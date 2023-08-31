// Settings.tsx
import React from "react";
import WebsiteSections from "./constantsSections";
import SettingView from "../settings/SettingsView";
import { SettingsDiv } from "../../styles/HomeSectionStyle";
import CardOptions from "../game/CardsOptions";

interface Props {
  setActiveView: (view: WebsiteSections) => void;
}

const Settings: React.FC<Props> = ({ setActiveView }) => {
  return (
    <SettingsDiv>
      <div className="basis-3/12 flex flex-col justify-center">
        <h1 className="text-8xl self-center font-bold  text-white py-7 px-28">
          Settings
        </h1>
      </div>
      <div className="basis-2/10 flex flex-col justify-center">
        <p className="text-2xl self-center  font-bold   text-white py-7 px-28">
          Stop! Before you start the game, you must first enter all the players!
        </p>
      </div>
      <div className=" self-center flex flex-row justify-center">
        <SettingView />
      </div>
      <CardOptions />

      <div className="basis-4/10 flex flex-col justify-center">
        <button
          className="text-2xl py-4 px-3 self-center bg-primary-100/50 hover:bg-middle-purple/50 hover:border-white hover:border-double border-4 border-transparent"
          onClick={() => setActiveView(WebsiteSections.GAME)}
        >
          Play the Game!
        </button>
      </div>
    </SettingsDiv>
  );
};

export default Settings;
