import { splitByPair } from '../utils/retrieveData';
import { OpponentChoose, PlayerChoose } from './GameChoose';

const gamePairs = splitByPair();

const getGameScore = (pair: [OpponentChoose, PlayerChoose]) => {
    const [opponentChoose, playerChoose] = pair;
    switch (opponentChoose) {
        case OpponentChoose.Paper:
            switch (playerChoose) {
                case PlayerChoose.Loose:
                    return 1 + 0;
                case PlayerChoose.Draw:
                    return 2 + 3;
                case PlayerChoose.Win:
                    return 3 + 6;
            }
        case OpponentChoose.Rock:
            switch (playerChoose) {
                case PlayerChoose.Loose:
                    return 3 + 0;
                case PlayerChoose.Draw:
                    return 1 + 3;
                case PlayerChoose.Win:
                    return 2 + 6;
            }
        case OpponentChoose.Scissors:
            switch (playerChoose) {
                case PlayerChoose.Loose:
                    return 2 + 0;
                case PlayerChoose.Draw:
                    return 3 + 3;
                case PlayerChoose.Win:
                    return 1 + 6;
            }
    }
};

export const getTotalScore = (): number => {
    return gamePairs.reduce((prev, curr) => {
        return (
            prev +
            getGameScore([curr[0] as OpponentChoose, curr[1] as PlayerChoose])
        );
    }, 0);
};
