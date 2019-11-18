const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile)

const htmlStr = `  
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div>${answers.myName}</div>
</body>
</html>`;
const myName = "dwayne"

writeFileAsync('index.html', htmlStr).then(() => {
 
})
.catch((err) => {
    console.log(err)
})

inquirer.prompt([{
    type: 'input',
    name: 'myName',
    message: 'How you doin?'
}])
.then(answers =>{
    console.log(myName);

})