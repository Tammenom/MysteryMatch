interface Player {
  name: string;
  playerID: number;
  wonGames: number;
  isCurrentPlayer: boolean;
  score: number;
}

export const playerArray: Player[] = [];

export const namesArray: string[] = [];

export const updateNamesArray = (index: number) => {
  namesArray.splice(index, 1);
  console.log("Index given: " + index + " Names array in data: " + namesArray);
};

export const addDefaultPlayer = (index: number) => {
  playerArray.splice(index, 1);
};

export const deletePlayer = (index: number) => {
  playerArray.splice(index, 1);
};
