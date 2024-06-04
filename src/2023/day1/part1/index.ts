import { retrieveData, parseToArray } from '../../utils/readDataFromText';

const DATA_PATH = './src/2023/day1/data.txt';

const calibrationRows = parseToArray(retrieveData(DATA_PATH));

const getNumbersFromString = (row: string) => {
    const numbersFromRows = row.match(/\d/g)?.join('');
    return numbersFromRows
        ? Number.parseInt(
              [
                  numbersFromRows[0],
                  numbersFromRows[numbersFromRows.length - 1],
              ].join(''),
          )
        : 0;
};

export default () =>
    calibrationRows.map(getNumbersFromString).reduce((a, b) => a + b);
