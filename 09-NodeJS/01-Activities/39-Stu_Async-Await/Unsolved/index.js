const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  // code goes in "try" section
  try {
    const animals = [];
    const files = ['dog.json', 'cat.json', 'goldfish.json','hamster.json'];

    for (let file of files){
     const fileString = await readFileAsync(file, 'utf8');
     animals.push(fileString) 
    }
  } catch(err) {

  }
}

combineAnimals();
