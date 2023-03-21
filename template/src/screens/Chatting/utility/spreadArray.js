export const spreadArray = (data = []) => {
  const newArray = [];
  if (data) {
    for (const row of data) {
      for (const innerData of row) {
        newArray.push(innerData);
      }
    }
  }

  return newArray;
};
