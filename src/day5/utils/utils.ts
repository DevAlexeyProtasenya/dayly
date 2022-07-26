export const initArray = (rowNumber: number, columnNumber: number) => {
  const initialArray = [];
  for (let i = 0; i < columnNumber; i++) {
    const row = [];
    for (let j = 0; j < rowNumber; j++) {
      row.push(0);
    }
    initialArray.push(row);
  }
  return initialArray;
};

export const filterArray = (array: number[][]) => {
  return array.filter((elem) => elem[0] === elem[2] || elem[1] === elem[3]);
};

export const fillArray = (initArray: number[][], lines: number[][]) => {
  lines.forEach((line) => {
    if (line[0] === line[2]) {
      if (line[1] > line[3]) {
        while (line[1] >= line[3]) {
          initArray[line[0]][line[1]] += 1;
          line[1]--;
        }
      } else {
        while (line[1] <= line[3]) {
          initArray[line[0]][line[1]] += 1;
          line[1]++;
        }
      }
    } else if (line[1] === line[3]) {
      if (line[0] > line[2]) {
        while (line[2] <= line[0]) {
          initArray[line[0]][line[1]] += 1;
          line[0]--;
        }
      } else {
        while (line[0] <= line[2]) {
          initArray[line[0]][line[1]] += 1;
          line[0]++;
        }
      }
    } else if (line[0] > line[2]) {
      if (line[1] > line[3]) {
        while (line[0] >= line[2] && line[1] >= line[3]) {
          initArray[line[2]][line[3]] += 1;
          line[3]++;
          line[2]++;
        }
      } else {
        while (line[0] >= line[2] && line[1] <= line[3]) {
          initArray[line[2]][line[3]] += 1;
          line[3]--;
          line[2]++;
        }
      }
    } else {
      if (line[1] > line[3]) {
        while (line[0] <= line[2] && line[1] >= line[3]) {
          initArray[line[2]][line[3]] += 1;
          line[3]++;
          line[2]--;
        }
      } else {
        while (line[0] <= line[2] && line[1] <= line[3]) {
          initArray[line[2]][line[3]] += 1;
          line[3]--;
          line[2]--;
        }
      }
    }
  });
  console.log(initArray.map((el) => el.join(',')));
  return initArray;
};

export const countCross = (array: number[][]) => {
  let count = 0;
  array.forEach((el) =>
    el.forEach((elem) => {
      if (elem > 1) {
        count++;
      }
    }),
  );
  return count;
};
