import React from "react";
import WebsiteSections from "../sections/constantsSections";
import Logo from "@/img/Logo.png";
import { NavP } from "../../styles/HomeSectionStyle";

interface Props {
  setActiveView: (view: WebsiteSections) => void;
}

const Navbar: React.FC<Props> = ({ setActiveView }) => {
  return (
    <div className="z-1 position:fixed">
      <nav className="bg-primary-100 py-2 flex flex-row">
        <img
          className="max-h-12 flex-none"
          alt="logo"
          src={Logo}
          onClick={() => setActiveView(WebsiteSections.HOME)}
        />
        <div className="max-h-14 grow flex flex-row justify-start ">
          <NavP>
            <button onClick={() => setActiveView(WebsiteSections.HOME)}>
              HOME
            </button>
          </NavP>
          <NavP>
            <button onClick={() => setActiveView(WebsiteSections.RULES)}>
              RULES
            </button>
          </NavP>
          <NavP>
            <button onClick={() => setActiveView(WebsiteSections.SETTINGS)}>
              SETTINGS
            </button>
          </NavP>
        </div>

        <button
          className="text-lg py-1 px-2 mx-5 self-center border-white bg-primary-100/50 hover:bg-middle-purple/50 hover:border-white hover:border-double border-2 border-transparent"
          onClick={() => setActiveView(WebsiteSections.SETTINGS)}
        >
          PLAY NOW!
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
