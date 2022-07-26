import { getFuel, getHorisontalPositions } from './utils/countFuel';

const horizontalPositions = getHorisontalPositions().sort(
  (a: number, b: number) => a - b,
);

const fuels = horizontalPositions.map((position: number) =>
  getFuel(horizontalPositions, position),
);

console.log(fuels.sort((a: number, b: number) => a - b)[0]);
