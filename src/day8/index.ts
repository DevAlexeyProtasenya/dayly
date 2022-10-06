import { parseToArray } from '../utils/retrieveData';
import { Digit } from './Digit';

const data = parseToArray();

export const number = data.reduce((acc, curr) => {
    return acc + (parseInt(new Digit(curr[0]).findNumber(curr[1])) || 0);
}, 0);
