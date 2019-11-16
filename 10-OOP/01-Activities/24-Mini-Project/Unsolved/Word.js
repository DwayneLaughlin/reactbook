let Letter = require('./Letter.js');

class Word {
    constructor(wordStr) {
        const tmpArr = [];
        for(var i = 0; i < wordStr.length; i++) {
            var tmp = wordStr.charAt(i);
            // console.log(tmp);
            var newLetter = new Letter(tmp, false);
            tmpArr.push(newLetter);
        }

        this.wordArr = tmpArr;
    }

    printInfo() {
        console.log("The Word is " + this.wordArr);
    }

    printWord() {
        let output = "";

        for (var l in this.wordArr) {
            if (this.wordArr[l].isGuessed) {
                output += this.wordArr[l].whichLet + " ";
            } else {
                output += "_ "
            }
            
        }

        console.log(output);
    }

    guessLetter(char) {
        for (var l in this.wordArr) {
            this.wordArr[l].guessWork(char);
        }
    }

}

module.exports = Word;
