export enum Numbers {
  ONE = 'one',
  TWO = 'two',
  THREE = 'three',
  FOUR = 'four',
  FIVE = 'five',
  SIX = 'six',
  SEVEN = 'seven',
  EIGHT = 'eight',
  NINE = 'nine',
}

export const regex = /(\d|one|two|three|four|five|six|seven|eight|nine)/g;

export const reverseRegex =
  /(\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin)/g;

export const numbersMap = new Map([
  [Numbers.ONE, 1],
  [Numbers.TWO, 2],
  [Numbers.THREE, 3],
  [Numbers.FOUR, 4],
  [Numbers.FIVE, 5],
  [Numbers.SIX, 6],
  [Numbers.SEVEN, 7],
  [Numbers.EIGHT, 8],
  [Numbers.NINE, 9],
]);
