import { retrieveData, parseToArray } from '../../utils/retrieveData';

export const parseData = (path: string) => {
  const data = retrieveData(path);
  const parsedData = parseToArray(data).map((el) =>
    el
      .split('->')
      .map((elem) => elem.split(',').map((element) => parseInt(element)))
      .reduce((a, b) => a.concat(b)),
  );
  return parsedData;
};
