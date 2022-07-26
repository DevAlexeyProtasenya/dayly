export const calculateLanternfish = (data: number[]) => {
  const DAYS_AMOUNT = 20;
  for (let i = 0; i < DAYS_AMOUNT; i++) {
    let count = 0;
    for (let a = 0; a < data.length; a++) {
      data[a] = data[a] - 1;
      if (data[a] < 0) {
        count++;
        data[a] = 6;
      }
    }
    for (let j = 0; j < count; j++) {
      data.push(8);
    }
  }
  return data.length;
};
