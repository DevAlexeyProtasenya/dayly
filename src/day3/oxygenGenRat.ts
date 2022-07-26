export const oxygenGenRat = (i = 0, data: Array<string>): string => {
  if (data.length > 1) {
    const neaded = findNeaded(i, data, true);
    const filteredData = data.filter((el: string) => el[i] === neaded);
    return oxygenGenRat(i + 1, filteredData);
  } else {
    return data[0];
  }
};

export const CO2GenRat = (i: number, data: Array<string>): string => {
  if (data.length > 1) {
    const neaded = findNeaded(i, data, false);
    const filteredData = data.filter((el: string) => el[i] === neaded);
    return CO2GenRat(i + 1, filteredData);
  } else {
    return data[0];
  }
};

const findNeaded = (i: number, data: Array<string>, oxygen: boolean) => {
  let zero = 0;
  let one = 0;
  data.forEach((el: string) => {
    el[i] === '0' ? zero++ : one++;
  });
  if (oxygen) {
    return zero > one ? '0' : '1';
  } else {
    return one < zero ? '1' : '0';
  }
};
