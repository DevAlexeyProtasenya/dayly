import parseData from '../utils/parseData';
import { calculateLanternfish } from './part1';

const DATA_PATH = './src/day6/data/data.txt';
const data = parseData(DATA_PATH);

export default console.log(calculateLanternfish(data));
