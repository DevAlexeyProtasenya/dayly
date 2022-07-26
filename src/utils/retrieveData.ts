import fs from 'fs';
import path from 'path';

export const retrieveData = (relativePath: string): string => {
  const data = fs.readFileSync(path.resolve(relativePath));
  return data.toString();
};

export const parseToArray = (data: string): Array<string> => {
  const parsedData: Array<string> = data.split(',');
  return parsedData;
};
