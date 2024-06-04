import { parseToArray, retrieveData } from '../../utils/readDataFromText';
import { Game } from '../model/Game';

const DATA_PATH = './src/2023/day2/data.txt';

const gamesString = parseToArray(retrieveData(DATA_PATH));

const getSum = () => {
    const games = gamesString.map((game) => new Game(game));
    return games
        .filter((game) => !game.isImpossible())
        .reduce((acc, current) => acc + current.id, 0);
};

export default getSum;
