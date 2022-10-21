import { splitToCharacters } from '../utils/retrieveData';
import { IncorrectFinder } from './IncorrectFinder';

const correctRows: string[][] = [];

const getCorrectRows = () => {
    const retrievedData = splitToCharacters();
    return retrievedData.filter(
        (curr) => !new IncorrectFinder(curr).findIncorrect(),
    );
};

export const getResult = () => {
    const correctRows = getCorrectRows();
    const results = correctRows
        .map((row) => new IncorrectFinder(row).findResult())
        .sort((a, b) => a - b);
    return results[Math.floor(results.length / 2)];
};
