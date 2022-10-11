import { getParsedData } from '../utils/retrieveData';
import { LocationChecker } from './LocationChecker';

const parsedData = getParsedData();

let result = 0;

export const getResult = () => {
    for (let i = 0; i < parsedData.length; i++) {
        for (let j = 0; j < parsedData[i].length; j++) {
            result += new LocationChecker(parsedData, j, i).getResult();
        }
    }
    return result;
};
