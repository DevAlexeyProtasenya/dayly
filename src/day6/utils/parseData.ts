import { retrieveData } from '../../utils/retrieveData';

const parseData = (path: string) => {
  const data = retrieveData(path);
  return data.split(',').map((el) => parseInt(el));
};

export default parseData;
