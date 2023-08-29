// Settings.tsx
import React from "react";
import WebsiteViews from "../../constantsViews";
import SettingView from "./SettingsView";

interface Props {
  setActiveView: (view: WebsiteViews) => void;
}

const Settings: React.FC<Props> = ({ setActiveView }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Einstellungen</h2>
      <SettingView />
      <button onClick={() => setActiveView(WebsiteViews.GAME)}>
        Zum Spiel
      </button>
    </div>
  );
};

export default Settings;
