import fs from 'fs';
import path from 'path';

const DATA_PATH = 'src/data.txt';

export const retrieveData = (relativePath: string): string => {
  const data = fs.readFileSync(path.resolve(relativePath));
  return data.toString();
};

export const parseToArray = (): Array<Array<string>> => {
  const retrievedData = retrieveData(DATA_PATH);
  const parsedData: Array<string> = retrievedData
    .replace(/(\r\n|\r|\n)/gm, '/')
    .split('/');
  return parsedData.map((partData) =>
    partData.split('|').map((data) => data.trim()),
  );
};
