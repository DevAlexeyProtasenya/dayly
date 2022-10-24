export class FlashChecker {
    field: number[][];

    positions: [number, number][] = [];

    numberOfPhase: number;

    result: number = 0;

    constructor(field: number[][], numberOfPhase: number) {
        this.field = field;
        this.numberOfPhase = numberOfPhase;
    }

    countResult() {
        for (let i = 0; i < this.numberOfPhase; i++) {
            this.increaseByOne();
            this.increaseAroundNine();
        }
        console.log(this.result);
    }

    increaseByOne() {
        this.field = this.field.map((el) => el.map((char) => char + 1));
    }

    private findTen() {
        this.field.forEach((el, indexRow) =>
            el.forEach((char, indexCol) => {
                if (char === 10) {
                    this.positions.push([indexRow, indexCol]);
                }
            }),
        );
        return this.positions;
    }

    increaseAroundNine() {
        const ten = this.findTen();
        if (ten.length) {
            this.positions.forEach(([row, column]) => {
                this.increaseAround(row, column);
            });
            this.positions = [];
            this.increaseAroundNine();
        }
    }

    increaseAround(row: number, column: number) {
        this.increaseTopLeft(row, column);
        this.increaseTop(row, column);
        this.increaseTopRight(row, column);
        this.increaseLeft(row, column);
        this.increaseRight(row, column);
        this.increaseBottomLeft(row, column);
        this.increaseBottom(row, column);
        this.increaseBottomRight(row, column);

        this.field[row][column] = 0;
        this.result += 1;
        this.positions.shift();
    }

    private increaseTopLeft(row: number, column: number) {
        if (row > 0 && column > 0) {
            this.increasedIfNeeded(row - 1, column - 1);
        }
    }

    private increaseTop(row: number, column: number) {
        if (row > 0) {
            this.increasedIfNeeded(row - 1, column);
        }
    }

    private increaseTopRight(row: number, column: number) {
        if (row > 0 && column < this.field[0].length - 1) {
            this.increasedIfNeeded(row - 1, column + 1);
        }
    }

    private increaseLeft(row: number, column: number) {
        if (column > 0) {
            this.increasedIfNeeded(row, column - 1);
        }
    }

    private increaseRight(row: number, column: number) {
        if (column < this.field[0].length - 1) {
            this.increasedIfNeeded(row, column + 1);
        }
    }

    private increaseBottomLeft(row: number, column: number) {
        if (row < this.field.length - 1 && column > 0) {
            this.increasedIfNeeded(row + 1, column - 1);
        }
    }

    private increaseBottom(row: number, column: number) {
        if (row < this.field.length - 1) {
            this.increasedIfNeeded(row + 1, column);
        }
    }

    private increaseBottomRight(row: number, column: number) {
        if (row < this.field.length - 1 && column < this.field[0].length - 1) {
            this.increasedIfNeeded(row + 1, column + 1);
        }
    }

    private increasedIfNeeded(row: number, column: number) {
        if (this.field[row][column] !== 10 && this.field[row][column] !== 0) {
            this.field[row][column] += 1;
        }
    }
}
