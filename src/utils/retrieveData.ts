import fs from 'fs';
import path from 'path';

const DATA_PATH = 'src/data.txt';

const retrieveData = (relativePath: string): string => {
    const data = fs.readFileSync(path.resolve(relativePath));
    return data.toString();
};

const splitToRows = (): Array<string> => {
    const retrievedData = retrieveData(DATA_PATH);
    const rows: Array<string> = retrievedData
        .replace(/(\r\n|\r|\n)/gm, '/')
        .split('/');
    return rows;
};

export const getParsedData = (): Array<Array<number>> => {
    const rows = splitToRows();
    return rows.map((row) => row.split('').map((el) => parseInt(el)));
};
