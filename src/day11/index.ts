import { splitToNumbers } from '../utils/retrieveData';
import { FlashChecker } from './FlashChecker';

const data = splitToNumbers();

export const step1result = new FlashChecker(data, 100).countResult();
