var fs = require("fs");
fs.appendFile("log.txt", process.argv[2], '\n', function(err){
    if (err) {
        console.log(err)
    } else {
        console.log("you")
    }
})