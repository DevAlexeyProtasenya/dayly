export class LengthFinder {
    private resultMap: Map<number, [number, number][]> = new Map();
    private allPositions: [number, number][] = [];
    private depth: number = 0;
    private fieldValue: number[][];
    private count: number = 1;

    constructor(startPoint: [number, number], fieldValue: number[][]) {
        this.fieldValue = fieldValue;
        this.resultMap.set(this.depth, [startPoint]);
    }

    findAroundPositions(): number {
        const positions = this.resultMap.get(this.depth);
        if (positions) {
            positions.forEach((position) => {
                const [row, column] = position;
                this.checkLeft(row, column);
                this.checkRight(row, column);
                this.checkTop(row, column);
                this.checkBottom(row, column);
            });
            if (this.resultMap.get(this.depth + 1)) {
                this.depth += 1;
                return this.findAroundPositions();
            } else {
                return this.count;
            }
        } else {
            return this.count;
        }
    }

    private checkLeft(row: number, column: number) {
        if (column > 0) {
            const leftValue = this.fieldValue[row][column - 1];
            const currentValue = this.fieldValue[row][column];
            if (currentValue < leftValue && leftValue !== 9) {
                this.setElement(row, column - 1);
            }
        }
    }

    private checkRight(row: number, column: number) {
        if (column !== this.fieldValue[0].length - 1) {
            const rightValue = this.fieldValue[row][column + 1];
            const currentValue = this.fieldValue[row][column];
            if (currentValue < rightValue && rightValue !== 9) {
                this.setElement(row, column + 1);
            }
        }
    }

    private checkTop(row: number, column: number) {
        if (row !== 0) {
            const topValue = this.fieldValue[row - 1][column];
            const currentValue = this.fieldValue[row][column];
            if (currentValue < topValue && topValue !== 9) {
                this.setElement(row - 1, column);
            }
        }
    }

    private checkBottom(row: number, column: number) {
        if (row !== this.fieldValue.length - 1) {
            const leftValue = this.fieldValue[row + 1][column];
            const currentValue = this.fieldValue[row][column];
            if (currentValue < leftValue && leftValue !== 9) {
                this.setElement(row + 1, column);
            }
        }
    }

    private setElement(row: number, column: number) {
        const previousValues = this.resultMap.get(this.depth + 1);
        const newValues: [number, number][] = previousValues
            ? [...previousValues]
            : [];
        const oldValue = this.allPositions.find((position) => {
            const [oldRow, oldColumn] = position;
            return row === oldRow && column === oldColumn;
        });
        if (!oldValue) {
            this.resultMap.set(this.depth + 1, [...newValues, [row, column]]);
            this.allPositions.push([row, column]);
            this.count++;
        }
    }
}
