import React from "react";

const NamesBar: React.FC<{ name: string; wonGames: number }> = ({
  name,
  wonGames,
}) => {
  return (
    <div className="flex flex-col justify-center">
      <p className="text-xl self-center     text-white  px-8">{name}</p>

      <p className="text-xl self-center  font-bold   text-white  px-8">
        {wonGames}
      </p>
    </div>
  );
};

export default NamesBar;
