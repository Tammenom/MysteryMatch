// Settings.tsx
import React from "react";
import WebsiteViews from "../../constantsViews";

interface Props {
  setActiveView: (view: WebsiteViews) => void;
}

const Settings: React.FC<Props> = ({ setActiveView }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Einstellungen</h2>
      {/* Platzhalter für weitere Komponenten */}
      <button onClick={() => setActiveView(WebsiteViews.GAME)}>
        Zum Spiel
      </button>
    </div>
  );
};

export default Settings;
