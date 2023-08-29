import React from "react";

interface Props {
  names: string[];
  onButtonClick: (index: number) => void;
}

const NamesList: React.FC<Props> = ({ names, onButtonClick }) => {
  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name}
            <button onClick={() => onButtonClick(index)}>Löschen</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NamesList;
