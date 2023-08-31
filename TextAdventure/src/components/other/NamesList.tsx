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
          <li className="text-xl  px-3 self-center" key={index}>
            <div className=" flex flex-row-reverse  ">
              <button
                className="text-lg flex mx-1 my-1  self-center bg-primary-100/50 hover:bg-middle-purple/50 hover:border-white/80 hover:border-double border-4 border-white/0"
                onClick={() => onButtonClick(index)}
              >
                Delete
              </button>
              <p className="text-white text-lg px-1 py-1  flex self-center  bg-primary-100/50">
                {name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NamesList;
