import React from "react";

const NamesBar: React.FC<{ names: string[] }> = ({ names }) => {
  return (
    <div>
      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
};

export default NamesBar;
