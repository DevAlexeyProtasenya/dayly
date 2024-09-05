export const transformPositionToNumber = (
    positions: {
        startX: number;
        startY: number;
        endX: number;
        endY: number;
    }[],
    symbols: string[][],
) =>
    positions.map((pos) => {
        const { startY, startX, endY } = pos;
        const partNumArray: string[] = [];
        for (let i = startY; i <= endY; i++) {
            partNumArray.push(symbols[startX][i]);
        }
        return Number.parseInt(partNumArray.join(''));
    });
