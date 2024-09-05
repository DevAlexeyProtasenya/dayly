import { parseToArray, retrieveData } from '../../utils/readDataFromText';

const DATA_PATH = './src/2023/day4/data.txt';

const inputData = parseToArray(retrieveData(DATA_PATH));

const cards = inputData
    .map((card) => card.split(':')[1])
    .map((card) => {
        const [winnerNumbers, cardNumbersStr] = card.split('|');
        const winnerNumbersSet = new Set<number>();
        winnerNumbers
            .trim()
            .split(' ')
            .forEach((winnerNumber) => {
                winnerNumbersSet.add(Number.parseInt(winnerNumber.trim()));
            });
        const cardNumbers: number[] = cardNumbersStr
            .trim()
            .replaceAll('  ', ' ')
            .split(' ')
            .map((el) => Number.parseInt(el.trim()));
        return {
            winnerNumbersSet,
            cardNumbers,
        };
    });

const result = cards.reduce((acc, curr) => {
    const { winnerNumbersSet, cardNumbers } = curr;
    let score = 0;
    cardNumbers.forEach((num) => {
        if (winnerNumbersSet.has(num)) {
            score = score === 0 ? score + 1 : score * 2;
        }
    });
    return acc + score;
}, 0);

export default () => result;
