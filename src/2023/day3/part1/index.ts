import { parseToArray, retrieveData } from '../../utils/readDataFromText';

const DATA_PATH = './src/2023/day3/data.txt';

const inputData = parseToArray(retrieveData(DATA_PATH));
console.log(inputData);

const symbols = inputData.map((str) => str.split(''));

const indexes: {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
}[] = [];

for (let i = 0; i < symbols.length; i++) {
    let start: { x: number; y: number } | undefined;
    for (let j = 0; j < symbols[i].length; j++) {
        if (/\d/.test(symbols[i][j]) && !start) {
            start = { x: i, y: j };
        }
        if (start && !/\d/.test(symbols[i][j])) {
            indexes.push({
                startX: start.x,
                startY: start.y,
                endX: i,
                endY: j - 1,
            });
            start = undefined;
        }
        if (start && j === symbols[i].length - 1) {
            indexes.push({
                startX: start.x,
                startY: start.y,
                endX: i,
                endY: j,
            });
            start = undefined;
        }
    }
}

const partNumberPositions = indexes.filter((el) => {
    const { startY, startX, endY } = el;
    if (
        (startY - 1 >= 0 && '.' !== symbols[startX][startY - 1]) ||
        (endY + 1 < symbols[0].length && '.' !== symbols[startX][endY + 1])
    ) {
        return true;
    }
    for (let i = startY - 1; i <= endY + 1; i++) {
        if (
            (i >= 0 &&
                i < symbols[0].length &&
                startX + 1 < symbols.length &&
                '.' !== symbols[startX + 1][i]) ||
            (i >= 0 &&
                i < symbols[0].length &&
                startX - 1 >= 0 &&
                '.' !== symbols[startX - 1][i])
        ) {
            return true;
        }
    }
    return false;
});

const partNumbers = partNumberPositions.map((pos) => {
    const { startY, startX, endY } = pos;
    const partNumArray: string[] = [];
    for (let i = startY; i <= endY; i++) {
        partNumArray.push(symbols[startX][i]);
    }
    return Number.parseInt(partNumArray.join(''));
});

console.log(partNumbers.toString());

export default () => partNumbers.reduce((acc, el) => acc + el, 0);

// function parseDay3Input(input: string) {
//     return input
//         .trim()
//         .split(/[\r\n]+/g)
//         .map((row) => {
//             const chars = row.split('');
//
//             const cells: any[] = [];
//             for (let col = 0; col < chars.length; col++) {
//                 const value = chars[col];
//                 const isNum = /\d/.test(value);
//                 let num;
//                 if (isNum && cells[col - 1]?.num) {
//                     num = cells[col - 1].num;
//                 } else if (isNum) {
//                     let numStr = value;
//                     num = {
//                         startCol: col,
//                         endCol: col,
//                         value: 0,
//                     };
//                     for (let j = col + 1; j < chars.length; j++) {
//                         if (/\d/.test(chars[j])) {
//                             numStr += chars[j];
//                             num.endCol++;
//                         } else break;
//                     }
//                     num.value = Number(numStr);
//                 }
//                 cells.push({
//                     col,
//                     value,
//                     isSymbol: /[^\d.]/.test(value),
//                     isGear: value === '*',
//                     num,
//                 });
//             }
//             return cells;
//         });
// }
//
// function solveDay3Part1(input: string) {
//     const rows = parseDay3Input(input);
//     const nums = [];
//     const alreadyAdded = new Set();
//     for (let r = 0; r < rows.length; r++) {
//         const row = rows[r];
//         for (let col = 0; col < row.length; col++) {
//             const cell = row[col];
//             if (!cell.num || alreadyAdded.has(cell.num)) continue;
//             outer: for (let i = -1; i <= 1; i++) {
//                 for (let j = -1; j <= 1; j++) {
//                     if (i === 0 && j === 0) continue; // skip self
//                     const otherCellRow = r + i;
//                     const otherCellCol = col + j;
//                     const otherCell = rows[otherCellRow]?.[otherCellCol];
//                     if (!otherCell || !otherCell.isSymbol) continue;
//                     alreadyAdded.add(cell.num);
//                     nums.push(cell.num.value);
//                     break outer;
//                 }
//             }
//         }
//     }
//     console.log(nums.length);
//     return nums.reduce((sum, num) => sum + num, 0);
// }
// export default () => solveDay3Part1(retrieveData(DATA_PATH));
