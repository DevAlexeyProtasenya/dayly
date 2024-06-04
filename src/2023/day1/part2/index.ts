import { retrieveData, parseToArray } from '../../utils/readDataFromText';
import { Numbers, numbersMap, regex, reverseRegex } from '../Numbers';

const DATA_PATH = './src/2023/day1/data.txt';

const calibrationRows = parseToArray(retrieveData(DATA_PATH));

const getNumbersFromString = (row: string) => {
    const first = row.match(regex)?.[0];
    const last = row.split('').reverse().join('').match(reverseRegex)?.[0];

    return first && last
        ? parseInt(
              [
                  toNumber(first),
                  toNumber(last.split('').reverse().join('')),
              ].join(''),
          )
        : 0;
};

const toNumber = (str: string) =>
    str.match(/\d/) ? str : numbersMap.get(str as Numbers)?.toString();

export default () =>
    calibrationRows.map(getNumbersFromString).reduce((a, b) => a + b, 0);
