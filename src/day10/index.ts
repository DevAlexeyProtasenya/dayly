import { splitToCharacters } from '../utils/retrieveData';
import { IncorrectFinder } from './IncorrectFinder';

export const getResult = () => {
    const retrievedData = splitToCharacters();
    return retrievedData.reduce((acc, curr) => {
        return acc + new IncorrectFinder(curr).findIncorrect();
    }, 0);
};
