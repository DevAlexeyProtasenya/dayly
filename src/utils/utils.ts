import { parseData, retrieveData } from './retrieveData';

export const getData = (): string[] => {
  const data = parseData(retrieveData('./src/data.txt')).map((el: string) =>
    el.split('|')[1].trim(),
  );
  return data;
};
