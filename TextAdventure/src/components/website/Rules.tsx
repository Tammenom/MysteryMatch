// Rules.tsx
import React from "react";
import WebsiteViews from "../../constantsViews";

interface Props {
  setActiveView: (view: WebsiteViews) => void;
}

const Rules: React.FC<Props> = ({ setActiveView }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Regeln</h2>
      <p>Hier findest du die Regeln des Spiels...</p>
      <button onClick={() => setActiveView(WebsiteViews.SETTINGS)}>
        Zu den Einstellungen
      </button>
    </div>
  );
};

export default Rules;
