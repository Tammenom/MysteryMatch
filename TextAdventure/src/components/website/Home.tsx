import React from "react";
import WebsiteViews from "../../constantsViews";

interface Props {
  setActiveView: (view: WebsiteViews) => void;
}

const Home: React.FC<Props> = ({ setActiveView }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Magic Match</h1>
      <p>Willkommen bei Magic Match! Hier findest du...</p>
      <button onClick={() => setActiveView(WebsiteViews.SETTINGS)}>
        Jetzt spielen!
      </button>
    </div>
  );
};

export default Home;
