export const namesArray: string[] = [];

export const updateNamesArray = (index: number) => {
  namesArray.splice(index, 1);
  console.log("Index given: " + index + " Names array in data: " + namesArray);
};
