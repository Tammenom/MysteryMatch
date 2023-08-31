import React, { useState } from "react";
import { namesArray, updateNamesArray } from "./settingsOptions"; // Importiere das Array aus dem data.ts Modul
import NamesList from "../other/NamesList";

const SettingView: React.FC = () => {
  const maxPlayers = 8;
  const [message, setMessage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [namesArr, setNames] = useState<string[]>(namesArray);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleNameSubmit = () => {
    if (name.trim() !== "") {
      if (namesArray.length <= maxPlayers) {
        namesArray.push(name);
        setNames(namesArray);
        setName("");
        console.log(namesArray);
        console.log(namesArr);
      } else {
        setMessage("Maximale Spieleranzahl erreicht!");
        setTimeout(() => {
          setMessage(null);
        }, 1500);
      }
    }
  };

  const handleDeleteName = (index: number) => {
    const updatedNamesArray = [...namesArray];
    updatedNamesArray.splice(index, 0);
    updateNamesArray(index);
    setNames(updatedNamesArray);
    console.log("Pew");
    console.log(namesArray);
    console.log(namesArr);
  };

  return (
    <div className="flex flex-col">
      <h2 className="self-center font-bold text-1xl py-2">
        Enter Player here.
      </h2>
      <input
        className="text-gray-800 self-center text-2xl py-2"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <button
        className="text-2xl  px-3 self-center bg-primary-100/50 hover:bg-middle-purple/50 hover:border-white/80 hover:border-double border-4 border-white/0"
        onClick={handleNameSubmit}
      >
        Add Player
      </button>
      {message && <p>{message}</p>}

      <NamesList names={namesArray} onButtonClick={handleDeleteName} />
    </div>
  );
};

export default SettingView;
