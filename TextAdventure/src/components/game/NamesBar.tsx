import React from "react";

const NamesBar: React.FC<{ name: string; wonGames: number }> = ({
  name,
  wonGames,
}) => {
  return (
    <div>
      <li>
        <p>{name}</p>
      </li>
      <li>
        <p>{wonGames}</p>
      </li>
    </div>
  );
};

export default NamesBar;
