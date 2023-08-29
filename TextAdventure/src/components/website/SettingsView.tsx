import React, { useState, useEffect } from "react";
import { namesArray, updateNamesArray } from "../../data"; // Importiere das Array aus dem data.ts Modul
import { debug } from "console";
import NamesBar from "../game/NamesBar";
import NamesList from "../game/NamesList";

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
    updateNamesArray(index); // Array in data aktualisieren

    setNames(updatedNamesArray); // Aktualisiere namesArr statt namesArray

    console.log("Pew");
    console.log(namesArray);
    console.log(namesArr);
  };

  return (
    <div>
      <h2>Settings View</h2>
      <input type="text" value={name} onChange={handleNameChange} />
      <button onClick={handleNameSubmit}>Hinzufügen</button>
      {message && <p>{message}</p>}

      <h3>Namen Liste:</h3>

      <NamesList names={namesArray} onButtonClick={handleDeleteName} />
    </div>
  );
};

export default SettingView;
