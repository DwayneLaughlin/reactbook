var http = require('http');
var port = 5000;
var server = http.createServer(handleRequest);

function handleRequest (res, req){
    var requestData = "";

    req.on("data", function(data){
        requestData += data;

    });
    req.on("end", function(){
        
    })
}
