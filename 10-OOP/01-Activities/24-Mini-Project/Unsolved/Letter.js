class Letter {
    constructor(whichLet, isGuessed) {
        this.whichLet = whichLet;
        this.isGuessed = isGuessed;
    }

    printLetter () {
        if (this.isGuessed) {
            return this.whichLet;
        } else {
            return "_";
        }
    }

    guessWork (char) {
        if (char === this.whichLet) {
            this.isGuessed = true;
        }
    }
}

module.exports = Letter;