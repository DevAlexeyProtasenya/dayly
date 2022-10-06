export class Digit {
    one!: string;
    two!: string;
    three!: string;
    four!: string;
    five!: string;
    six!: string;
    seven!: string;
    eight!: string;
    nine!: string;
    zero!: string;

    constructor(data: string) {
        this.transformData(data.split(' '));
    }

    transformData(data: string[]) {
        data.forEach((el) => {
            switch (el.length) {
                case 2:
                    this.one = el;
                    break;
                case 3:
                    this.seven = el;
                    break;
                case 4:
                    this.four = el;
                    break;
                case 7:
                    this.eight = el;
                    break;
                default:
                    break;
            }
        });
        let fiveNumbers = data.filter((el) => el.length === 5);
        let sixNumbers = data.filter((el) => el.length === 6);
        fiveNumbers = this.setThree(fiveNumbers);
        sixNumbers = this.setNine(sixNumbers);
        fiveNumbers = this.setFive(fiveNumbers);
        sixNumbers = this.setSix(sixNumbers);
        this.zero = sixNumbers[0];
        this.two = fiveNumbers[0];
    }

    private setThree(fiveString: string[]) {
        const sevenLetters = this.seven!.split('');
        const newFiveString = fiveString.filter((el) => {
            if (this.getCountOfSimilarElem(sevenLetters, el.split('')) === 3) {
                this.three = el;
                return false;
            }
            return true;
        });
        return newFiveString;
    }

    private setNine(sixString: string[]) {
        const threeLetters = this.three!.split('');
        const newSixString = sixString.filter((el) => {
            if (this.getCountOfSimilarElem(threeLetters, el.split('')) === 5) {
                this.nine = el;
                return false;
            }
            return true;
        });
        return newSixString;
    }

    private setFive(fiveString: string[]) {
        const nineLetter = this.nine!.split('');
        const newFiveString = fiveString.filter((el) => {
            if (this.getCountOfSimilarElem(nineLetter, el.split('')) === 5) {
                this.five = el;
                return false;
            }
            return true;
        });
        return newFiveString;
    }

    private setSix(sixString: string[]) {
        const fiveLetter = this.five!.split('');
        const newSixString = sixString.filter((el) => {
            if (this.getCountOfSimilarElem(fiveLetter, el.split('')) === 5) {
                this.six = el;
                return false;
            }
            return true;
        });
        return newSixString;
    }

    private getCountOfSimilarElem(array1: string[], array2: string[]): number {
        let count = 0;
        array1.forEach((el1) => {
            if (array2.some((el2) => el2 === el1)) {
                count++;
            }
        });
        return count;
    }

    findNumber(data: string) {
        const numbers = data.split(' ');
        const number = numbers.reduce((acc, curr) => {
            return acc + this.findDigit(curr);
        }, '');
        console.log(this);

        return number;
    }

    private findDigit(stringDigit: string): string {
        if (
            this.getCountOfSimilarElem(
                stringDigit.split(''),
                this.zero.split(''),
            ) === Math.max(stringDigit.length, this.zero.length)
        ) {
            return '0';
        } else if (
            this.getCountOfSimilarElem(
                stringDigit.split(''),
                this.one.split(''),
            ) === Math.max(stringDigit.length, this.one.length)
        ) {
            return '1';
        } else if (
            this.getCountOfSimilarElem(
                stringDigit.split(''),
                this.two.split(''),
            ) === Math.max(stringDigit.length, this.two.length)
        ) {
            return '2';
        } else if (
            this.getCountOfSimilarElem(
                stringDigit.split(''),
                this.three.split(''),
            ) === Math.max(stringDigit.length, this.three.length)
        ) {
            return '3';
        } else if (
            this.getCountOfSimilarElem(
                stringDigit.split(''),
                this.four.split(''),
            ) === Math.max(stringDigit.length, this.four.length)
        ) {
            return '4';
        } else if (
            this.getCountOfSimilarElem(
                stringDigit.split(''),
                this.five.split(''),
            ) === Math.max(stringDigit.length, this.five.length)
        ) {
            return '5';
        } else if (
            this.getCountOfSimilarElem(
                stringDigit.split(''),
                this.six.split(''),
            ) === Math.max(stringDigit.length, this.six.length)
        ) {
            return '6';
        } else if (
            this.getCountOfSimilarElem(
                stringDigit.split(''),
                this.seven.split(''),
            ) === Math.max(stringDigit.length, this.seven.length)
        ) {
            return '7';
        } else if (
            this.getCountOfSimilarElem(
                stringDigit.split(''),
                this.eight.split(''),
            ) === Math.max(stringDigit.length, this.eight.length)
        ) {
            return '8';
        } else if (
            this.getCountOfSimilarElem(
                stringDigit.split(''),
                this.nine.split(''),
            ) === Math.max(stringDigit.length, this.nine.length)
        ) {
            return '9';
        }
        return '';
    }
}
