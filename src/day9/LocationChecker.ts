export class LocationChecker {
    top: number;
    left: number;
    array: number[][];

    constructor(array: number[][], left: number, top: number) {
        this.top = top;
        this.left = left;
        this.array = array;
    }

    private checkIsLeftSmaller() {
        if (
            this.left !== 0 &&
            this.array[this.top][this.left] >=
                this.array[this.top][this.left - 1]
        ) {
            return true;
        }
        return false;
    }

    private checkIsRightSmaller() {
        if (
            this.left !== this.array[0].length - 1 &&
            this.array[this.top][this.left] >=
                this.array[this.top][this.left + 1]
        ) {
            return true;
        }
        return false;
    }

    private checkIsTopSmaller() {
        if (
            this.top !== 0 &&
            this.array[this.top][this.left] >=
                this.array[this.top - 1][this.left]
        ) {
            return true;
        }
        return false;
    }

    private checkIsBottomSmaller() {
        if (
            this.top !== this.array.length - 1 &&
            this.array[this.top][this.left] >=
                this.array[this.top + 1][this.left]
        ) {
            return true;
        }
        return false;
    }

    getResult() {
        return this.checkIsBottomSmaller() ||
            this.checkIsLeftSmaller() ||
            this.checkIsRightSmaller() ||
            this.checkIsTopSmaller()
            ? 0
            : this.array[this.top][this.left] + 1;
    }
}
