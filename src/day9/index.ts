import { getParsedData } from '../utils/retrieveData';
import { LengthFinder } from './LengthFindet';
import { LocationChecker } from './LocationChecker';

const parsedData = getParsedData();

const smallerElements: Array<[number, number]> = [];

const getStartPoints = () => {
    for (let row = 0; row < parsedData.length; row++) {
        for (let column = 0; column < parsedData[row].length; column++) {
            if (new LocationChecker(parsedData, column, row).isSmaller()) {
                smallerElements.push([row, column]);
            }
        }
    }
    return smallerElements;
};

const lengths = getStartPoints().map((startPoint) =>
    new LengthFinder(startPoint, parsedData).findAroundPositions(),
);

export const getResult = () => {
    const sorted = lengths.sort((a, b) => b - a);
    console.log(sorted);

    return sorted[0] * sorted[1] * sorted[2];
    // return new LengthFinder(
    //     getStartPoints()[18],
    //     parsedData,
    // ).findAroundPositions();
};
