import { splitToRows } from '../utils/retrieveData';

const data = splitToRows();

const elfsCalory: number[] = [];
let elfCalory = 0;
data.forEach((calory) => {
    if (calory) {
        elfCalory += parseInt(calory);
    } else {
        elfsCalory.push(elfCalory);
        elfCalory = 0;
    }
});

const findThreeMaxSum = (elfsCalory: number[]) => {
    elfsCalory.sort((a, b) => b - a);
    return elfsCalory[0] + elfsCalory[1] + elfsCalory[2];
};

export default findThreeMaxSum(elfsCalory);
