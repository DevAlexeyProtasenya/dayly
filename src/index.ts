import {
  getFuel,
  getFuelPart2,
  getHorisontalPositions,
} from './utils/countFuel';

const horizontalPositions = getHorisontalPositions().sort(
  (a: number, b: number) => a - b,
);

const max = Math.max(...horizontalPositions);
const fuels: number[] = [];
for (let i = 0; i < max; i++) {
  fuels.push(getFuelPart2(horizontalPositions, i));
}
console.log(Math.min(...fuels));
