import { parseData } from '../utils/retrieveData';
import { initArray, filterArray, fillArray, countCross } from '../utils/utils';

const DATA_PATH = './src/day5/data/data.txt';

const ROW_AMOUNT = 1000;
const COLUMN_AMOUNT = 1000;

const initalArray = initArray(ROW_AMOUNT, COLUMN_AMOUNT);
const lines = parseData(DATA_PATH);
const filteredLines = filterArray(lines);

export default console.log(countCross(fillArray(initalArray, filteredLines)));
