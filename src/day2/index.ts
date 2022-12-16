import { splitByPair } from '../utils/retrieveData';
import { OpponentChoose, PlayerChoose } from './GameChoose';

const gamePairs = splitByPair();

const getGameScore = (pair: [OpponentChoose, PlayerChoose]) => {
    const [opponentChoose, playerChoose] = pair;
    switch (opponentChoose) {
        case OpponentChoose.Paper:
            switch (playerChoose) {
                case PlayerChoose.Paper:
                    return 2 + 3;
                case PlayerChoose.Rock:
                    return 1 + 0;
                case PlayerChoose.Scissors:
                    return 3 + 6;
            }
        case OpponentChoose.Rock:
            switch (playerChoose) {
                case PlayerChoose.Paper:
                    return 2 + 6;
                case PlayerChoose.Rock:
                    return 1 + 3;
                case PlayerChoose.Scissors:
                    return 3 + 0;
            }
        case OpponentChoose.Scissors:
            switch (playerChoose) {
                case PlayerChoose.Paper:
                    return 2 + 0;
                case PlayerChoose.Rock:
                    return 1 + 6;
                case PlayerChoose.Scissors:
                    return 3 + 3;
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
