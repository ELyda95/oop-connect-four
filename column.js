export class Column {
    constructor() {
        this.tokens = [null, null, null, null, null, null];
    }
    add(player) {
        for (let i = 5; i >= 0; i--) {
            if (this.tokens[i] === null) {
                this.tokens[i] = player;
                break;
            }
        }
    }

    getTokenAt(rowIndex) {
        return this.tokens[rowIndex];
    }

    isFull() {
        return this.tokens[0] !== null;
    }
}