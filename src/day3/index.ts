import { splitToRows } from '../utils/retrieveData';
import { letters } from './Letters';

const rows = splitToRows();

const findCommonSymbol = (row1: string, row2: string) => {
    const splittedRow1 = row1.split('');
    const splittedRow2 = row2.split('');
    const result = splittedRow1.find((elRow1) => {
        return splittedRow2.find((elRow2) => elRow1 === elRow2);
    });
    return result || '';
};

const getCommonSymbols = () => {
    return rows.map((row) => {
        const part1 = row.slice(0, row.length / 2);
        const part2 = row.slice(row.length / 2, row.length);
        return findCommonSymbol(part1, part2);
    });
};

const transformLetterToNumber = (letterToTransform: string): number => {
    let result = 0;
    letters.forEach((letter, index) => {
        if (letter === letterToTransform) {
            result = index + 1;
        }
    });
    return result;
};

export default getCommonSymbols()
    .map(transformLetterToNumber)
    .reduce((prev, next) => prev + next);
