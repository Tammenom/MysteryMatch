import React from "react";
import WebsiteViews from "../../constantsViews";
import { NavP } from "../../styles/HomeSectionStyle";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  setActiveView: (view: WebsiteViews) => void;
}

const Navbar: React.FC<Props> = ({ setActiveView }) => {
  return (
    <nav>
      <button onClick={() => setActiveView(WebsiteViews.HOME)}>Home</button>
      <button onClick={() => setActiveView(WebsiteViews.RULES)}>Regeln</button>
      <button onClick={() => setActiveView(WebsiteViews.SETTINGS)}>
        Einstellungen
      </button>
      <button onClick={() => setActiveView(WebsiteViews.GAME)}>Spiel</button>
    </nav>
  );
};

export default Navbar;
