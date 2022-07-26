import { parseToArray, retrieveData } from './retrieveData';

export const getHorisontalPositions = (): number[] => {
  const stringFuels = parseToArray(retrieveData('./src/data.txt'));
  return stringFuels.map((el: string) => parseInt(el));
};

export const getFuel = (
  horizontalPositions: number[],
  selectedPosition: number,
): number => {
  return horizontalPositions.reduce((acc: number, current: number) => {
    return acc + Math.abs(current - selectedPosition);
  }, 0);
};

export const getFuelPart2 = (
  horizontalPositions: number[],
  selectedPosition: number,
): number => {
  return horizontalPositions.reduce((acc: number, current: number) => {
    let fuel = 0;
    for (let i = 0; i < Math.abs(current - selectedPosition); i++) {
      fuel += i + 1;
    }
    return acc + fuel;
  }, 0);
};
