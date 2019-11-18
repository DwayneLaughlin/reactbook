

class Letter {
    constructor(character, correct,){
        this.character = character;
        this.correct = false;
    }

    letterCheck(guess){
        if(guess === this.character){
            this.correct===true;
        }
    }

    letterTrue(){
        if(this.correct === true){
            return this.character;
        }
    }
    
   
}