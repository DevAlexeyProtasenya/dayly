import { Points } from './Points';

export class IncorrectFinder {
    private characterRow: string[];
    private elements: string[] = [];

    constructor(characterRow: string[]) {
        this.characterRow = characterRow;
    }

    findIncorrect(): number {
        for (let character of this.characterRow) {
            switch (character) {
                case '(':
                case '[':
                case '{':
                case '<':
                    this.elements.push(character);
                    break;
                case ')': {
                    const elementsLength = this.elements.length;
                    if (this.elements[elementsLength - 1] === '(') {
                        this.elements.pop();
                    } else {
                        return Points[')'];
                    }
                    break;
                }
                case ']': {
                    const elementsLength = this.elements.length;
                    if (this.elements[elementsLength - 1] === '[') {
                        this.elements.pop();
                    } else {
                        return Points[']'];
                    }
                    break;
                }
                case '}': {
                    const elementsLength = this.elements.length;
                    if (this.elements[elementsLength - 1] === '{') {
                        this.elements.pop();
                    } else {
                        return Points['}'];
                    }
                    break;
                }
                case '>': {
                    const elementsLength = this.elements.length;
                    if (this.elements[elementsLength - 1] === '<') {
                        this.elements.pop();
                    } else {
                        return Points['>'];
                    }
                    break;
                }
                default: {
                    return 0;
                }
            }
        }
        return 0;
    }

    private setResultCharacters() {
        for (let character of this.characterRow) {
            switch (character) {
                case '(':
                case '[':
                case '{':
                case '<':
                    this.elements.push(character);
                    break;
                case ')': {
                    const elementsLength = this.elements.length;
                    if (this.elements[elementsLength - 1] === '(') {
                        this.elements.pop();
                    }
                    break;
                }
                case ']': {
                    const elementsLength = this.elements.length;
                    if (this.elements[elementsLength - 1] === '[') {
                        this.elements.pop();
                    }
                    break;
                }
                case '}': {
                    const elementsLength = this.elements.length;
                    if (this.elements[elementsLength - 1] === '{') {
                        this.elements.pop();
                    }
                    break;
                }
                case '>': {
                    const elementsLength = this.elements.length;
                    if (this.elements[elementsLength - 1] === '<') {
                        this.elements.pop();
                    }
                    break;
                }
                default: {
                }
            }
        }
    }

    findResult = () => {
        this.setResultCharacters();
        let result = 0;
        this.elements.reverse().forEach((character) => {
            result *= 5;
            switch (character) {
                case '(':
                    result += Points[')'];
                    break;
                case '[':
                    result += Points[']'];
                    break;
                case '{':
                    result += Points['}'];
                    break;
                case '<':
                    result += Points['>'];
                    break;
                default:
                    break;
            }
        });
        return result;
    };
}
