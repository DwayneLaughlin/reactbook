var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function requestHandler (request, response){
    response.end("I did it")
}

var server = http.createServer(requestHandler);
server.listen(PORT1, function(){
    console.log("we made it server1" + PORT1)
});

var server2 = http.createServer(requestHandler)
server2.listen(PORT2, function(){
    console.log("we made it server2" + PORT2)
});