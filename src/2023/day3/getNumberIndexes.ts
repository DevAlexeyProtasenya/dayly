export const getNumberIndexes = (symbols: string[][]) => {
    const indexes: {
        startX: number;
        startY: number;
        endX: number;
        endY: number;
    }[] = [];

    for (let i = 0; i < symbols.length; i++) {
        let start: { x: number; y: number } | undefined;
        for (let j = 0; j < symbols[i].length; j++) {
            if (/\d/.test(symbols[i][j]) && !start) {
                start = { x: i, y: j };
            }
            if (start && !/\d/.test(symbols[i][j])) {
                indexes.push({
                    startX: start.x,
                    startY: start.y,
                    endX: i,
                    endY: j - 1,
                });
                start = undefined;
            }
            if (start && j === symbols[i].length - 1) {
                indexes.push({
                    startX: start.x,
                    startY: start.y,
                    endX: i,
                    endY: j,
                });
                start = undefined;
            }
        }
    }
    return indexes;
};
