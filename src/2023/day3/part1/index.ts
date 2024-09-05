import { parseToArray, retrieveData } from '../../utils/readDataFromText';
import { getNumberIndexes } from '../getNumberIndexes';
import { transformPositionToNumber } from '../transformPositionToNumber';

const DATA_PATH = './src/2023/day3/data.txt';

const inputData = parseToArray(retrieveData(DATA_PATH));

const symbols = inputData.map((str) => str.split(''));

const indexes = getNumberIndexes(symbols);

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

const partNumbers = transformPositionToNumber(partNumberPositions, symbols);

export default () => partNumbers.reduce((acc, el) => acc + el, 0);
