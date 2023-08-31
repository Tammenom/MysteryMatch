import React from "react";
import WebsiteViews from "../../constantsViews";
import Logo from "@/img/Logo.png";
import { NavP } from "../../styles/HomeSectionStyle";

interface Props {
  setActiveView: (view: WebsiteViews) => void;
}

const Navbar: React.FC<Props> = ({ setActiveView }) => {
  return (
    <div className="z-1 position:fixed">
      <nav className="bg-primary-100 py-3 flex flex-row">
        <img
          className="max-h-10 flex-none"
          alt="logo"
          src={Logo}
          onClick={() => setActiveView(WebsiteViews.HOME)}
        />
        <div className="max-h-12 grow flex flex-row justify-start ">
          <NavP>
            <button onClick={() => setActiveView(WebsiteViews.HOME)}>
              HOME
            </button>
          </NavP>
          <NavP>
            <button onClick={() => setActiveView(WebsiteViews.RULES)}>
              RULES
            </button>
          </NavP>
          <NavP>
            <button onClick={() => setActiveView(WebsiteViews.SETTINGS)}>
              SETTINGS
            </button>
          </NavP>
        </div>

        <button
          className="font-bold flex-none mx-4 px-2 hover:font-bold"
          onClick={() => setActiveView(WebsiteViews.GAME)}
        >
          PLAY NOW!
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
