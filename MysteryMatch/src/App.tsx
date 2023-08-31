import "./index.css";
import React, { useState } from "react";
import Navbar from "./components/other/Navbar";
import Home from "./components/sections/Home";
import Rules from "./components/sections/Rules";
import Settings from "./components/sections/Settings";
import Game from "./components/sections/Game";
import WebsiteSections from "./components/sections/ConstantsSections";

const App: React.FC = () => {
  const [activeView, setActiveView] = useState(WebsiteSections.HOME);

  const renderView = () => {
    switch (activeView) {
      case WebsiteSections.HOME:
        return <Home setActiveView={setActiveView} />;
      case WebsiteSections.RULES:
        return <Rules setActiveView={setActiveView} />;
      case WebsiteSections.SETTINGS:
        return <Settings setActiveView={setActiveView} />;
      case WebsiteSections.GAME:
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
