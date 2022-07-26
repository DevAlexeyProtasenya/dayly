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
