import { GameSet } from './GameSet';

export class Game {
    private MAX_RED = 12;
    private MAX_GREEN = 13;
    private MAX_BLUE = 14;

    id: number;

    sets: GameSet[];

    minBlue = 0;

    minGreen = 0;

    minRed = 0;

    constructor(game: string) {
        const [id, sets] = game.split(':');
        this.id = parseInt(id.trim().split(' ')[1]);
        const splitSets = sets.trim().split(';');
        this.sets = splitSets.map((splitSet) => new GameSet(splitSet));
        this.setMinValues();
    }

    isImpossible = () => {
        return !!this.sets.find(
            (set) =>
                set.red > this.MAX_RED ||
                set.green > this.MAX_GREEN ||
                set.blue > this.MAX_BLUE,
        );
    };

    setMinValues = () => {
        this.sets.forEach((set) => {
            if (this.minBlue < set.blue) {
                this.minBlue = set.blue;
            }
            if (this.minRed < set.red) {
                this.minRed = set.red;
            }
            if (this.minGreen < set.green) {
                this.minGreen = set.green;
            }
        });
    };
}
