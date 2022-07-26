export const calculateLanternfish = (data: number[]) => {
  const DAYS_AMOUNT = 256;
  const array = '0'
    .repeat(9)
    .split('')
    .map((el) => parseInt(el));
  data.forEach((el) => array[el]++);
  for (let i = 0; i < DAYS_AMOUNT; i++) {
    const zero = array[0];
    array.shift();
    array.push(zero);
    if (zero) {
      array[6] += zero;
    }
  }
  return array.reduce((a, b) => a + b);
};
