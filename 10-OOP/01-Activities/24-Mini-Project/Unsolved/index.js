const Word = require("./Word.js");
const Letter = require("./Letter.js");
const prompt = require("prompt");

let turnCount = 10;

const game = () => {
    
    const word = new Word("test");
    prompt.start();
    word.printWord();
    if (turnCount > 0) {
        
        console.log("Guesses Left: " + turnCount); 
        prompt.get("guess", function (err, res) {
            console.log(res)
            word.guessLetter(res.guess);
            word.printWord();
            turnCount--;
            game();
        })
    }
}

game();