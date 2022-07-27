import { getData } from './utils/utils';

const lengths = [2, 3, 4, 7];

console.log(
  getData()
    .join(' ')
    .split(' ')
    .filter((el: string) => lengths.includes(el.length)).length,
);
