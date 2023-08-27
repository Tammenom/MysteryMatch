import "./styles/tailwind.css";
import "./styles/index.css";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/website/Navbar";
import Home from "./components/website/Home";
import Rules from "./components/website/Rules";
import Settings from "./components/website/Settings";
import Game from "./components/website/Game";
import WebsiteViews from "./constantsViews";

const App: React.FC = () => {
  const [activeView, setActiveView] = useState(WebsiteViews.HOME);

  const renderView = () => {
    switch (activeView) {
      case WebsiteViews.HOME:
        return <Home setActiveView={setActiveView} />;
      case WebsiteViews.RULES:
        return <Rules setActiveView={setActiveView} />;
      case WebsiteViews.SETTINGS:
        return <Settings setActiveView={setActiveView} />;
      case WebsiteViews.GAME:
        return <Game setActiveView={setActiveView} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar setActiveView={setActiveView} />

      {/* Render der aktuellen Ansicht */}
      {renderView()}
    </div>
  );
};

export default App;
