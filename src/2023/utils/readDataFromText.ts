import fs from 'fs';
import path from 'path';

export const retrieveData = (relativePath: string): string => {
  const data = fs.readFileSync(path.resolve(relativePath));
  return data.toString();
};

export const parseToArray = (data: string): Array<string> =>
  data.replace(/(\r\n|\r|\n)/gm, '/').split('/');
