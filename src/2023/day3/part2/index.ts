import { parseToArray, retrieveData } from '../../utils/readDataFromText';
import { getNumberIndexes } from '../getNumberIndexes';
import { transformPositionToNumber } from '../transformPositionToNumber';

const DATA_PATH = './src/2023/day3/data.txt';

const inputData = parseToArray(retrieveData(DATA_PATH));

const symbols = inputData.map((str) => str.split(''));

const starIndexes: {
    x: number;
    y: number;
}[] = [];

for (let i = 0; i < symbols.length; i++) {
    let start: { x: number; y: number } | undefined;
    for (let j = 0; j < symbols[i].length; j++) {
        if (/\*/.test(symbols[i][j]) && !start) {
            starIndexes.push({ x: i, y: j });
        }
    }
}

const groupedGearNumberPositions = starIndexes
    .map((el) => {
        const { x, y } = el;
        const numberInnerPosition: { x: number; y: number }[] = [];
        if (y - 1 >= 0 && /\d/.test(symbols[x][y - 1])) {
            numberInnerPosition.push({ x: x, y: y - 1 });
        }
        if (y + 1 < symbols[x].length && /\d/.test(symbols[x][y + 1])) {
            numberInnerPosition.push({ x: x, y: y + 1 });
        }
        if (x - 1 >= 0 && /\d/.test(symbols[x - 1][y])) {
            numberInnerPosition.push({ x: x - 1, y: y });
        } else {
            if (x - 1 >= 0 && y - 1 >= 0 && /\d/.test(symbols[x - 1][y - 1])) {
                numberInnerPosition.push({ x: x - 1, y: y - 1 });
            }
            if (
                x - 1 >= 0 &&
                y + 1 < symbols[x].length &&
                /\d/.test(symbols[x - 1][y + 1])
            ) {
                numberInnerPosition.push({ x: x - 1, y: y + 1 });
            }
        }
        if (x + 1 < symbols.length && /\d/.test(symbols[x + 1][y])) {
            console.log('here', x, y);
            numberInnerPosition.push({ x: x + 1, y: y });
        } else {
            if (
                x + 1 < symbols.length &&
                y - 1 >= 0 &&
                /\d/.test(symbols[x + 1][y - 1])
            ) {
                numberInnerPosition.push({ x: x + 1, y: y - 1 });
            }
            if (
                x + 1 < symbols.length &&
                y + 1 < symbols[x].length &&
                /\d/.test(symbols[x + 1][y + 1])
            ) {
                numberInnerPosition.push({ x: x + 1, y: y + 1 });
            }
        }
        return numberInnerPosition;
    })
    .filter((el) => el.length === 2);

console.log(groupedGearNumberPositions);

const indexes = getNumberIndexes(symbols);

const numbersPosition = groupedGearNumberPositions.map((gearNumbersPosition) =>
    gearNumbersPosition
        .map((numPos) =>
            indexes.find(
                ({ startX, startY, endY }) =>
                    numPos.x === startX &&
                    numPos.y <= endY &&
                    numPos.y >= startY,
            ),
        )
        .filter(
            (
                el,
            ): el is {
                startX: number;
                startY: number;
                endX: number;
                endY: number;
            } => !!el,
        ),
);

const numbers = numbersPosition.map((el) =>
    transformPositionToNumber(el, symbols),
);

export default () => numbers.reduce((acc, el) => acc + el[0] * el[1], 0);
