const transpose = (m: number[][]) => m[0].map((_, i) => m.map((x) => x[i]));

const initWinArrays = (arrays: number[][][]) => {
  return arrays.map(() => false);
};

export const findWinner = (numbers: number[], arrays: number[][][]) => {
  const result1 = { number: -1, index: -1 };
  const result2 = { number: -1, index: -1 };
  const winArrays: boolean[] = initWinArrays(arrays);
  numbers.every((number) => {
    for (let a = 0; a < arrays.length; a++) {
      for (let i = 0; i < arrays[a].length; i++) {
        for (let j = 0; j < arrays[a][0].length; j++) {
          if (number === arrays[a][i][j]) {
            arrays[a][i][j] = -1;
            if (checkOnWinner(arrays[a])) {
              winArrays[a] = true;
              if (checkOnWinners(winArrays)) {
                result2.number = number;
                result2.index = a;
                return false;
              }
              result1.number = number;
              result1.index = a;
            }
          }
        }
      }
    }
    return true;
  });
  return result2;
};

const checkOnWinner = (array: number[][]) => {
  const transposeArray = transpose(array);
  for (let i = 0; i < array.length; i++) {
    let rows = 0;
    let cols = 0;
    for (let j = 0; j < array[0].length; j++) {
      if (-1 === array[i][j]) {
        rows++;
      }
      if (-1 === transposeArray[i][j]) {
        cols++;
      }
    }
    if (rows === 5 || cols === 5) return true;
  }
  return false;
};

export const calculateLeft = (array: number[][]) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
      if (array[i][j] !== -1) {
        sum += array[i][j];
      }
    }
  }
  return sum;
};

export const checkOnWinners = (array: boolean[]): boolean => {
  return array.every((el) => {
    return el;
  });
};
