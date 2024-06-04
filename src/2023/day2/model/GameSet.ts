import { Colors } from './Colors';

export class GameSet {
    red = 0;
    blue = 0;
    green = 0;

    constructor(gameSet: string) {
        const colors = gameSet.trim().split(',');
        colors.forEach((color) => {
            const [count, colorName] = color.trim().split(' ');
            switch (colorName) {
                case Colors.RED:
                    this.red = parseInt(count);
                    break;
                case Colors.GREEN:
                    this.green = parseInt(count);
                    break;
                case Colors.BLUE:
                    this.blue = parseInt(count);
                    break;
            }
        });
    }
}
