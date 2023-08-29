interface Player {
  name: string;
  playerId: number;
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

export const addDefaultPlayerByName = (name: string) => {
  const newPlayer: Player = {
    playerId: playerArray.length,
    name: name,
    wonGames: 0,
    isCurrentPlayer: false,
    score: 0,
  };
  playerArray.push(newPlayer);
  updatePlayerIds;
};

export const deletePlayer = (index: number) => {
  playerArray.splice(index, 1);
  updatePlayerIds;
};

export const getPlayerNames = (): string[] => {
  return playerArray.map((player) => player.name);
};

const updatePlayerIds = (playerArray: Player[]) => {
  playerArray.forEach((player, index) => {
    player.playerId = index;
  });
};
