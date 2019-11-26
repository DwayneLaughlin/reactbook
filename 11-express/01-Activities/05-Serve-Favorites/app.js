var http = require("http");
var fs = require("fs");
var port = 9090


var server = http.createServer(handleRequest);
function handleRequest (req, res){
    var path = req.url

    switch (path) {

        case "/": //    / = "root"
          return displayRoot(res);
      
        case "/food":
          return displayFood(res);
      
        case "/movies":
            return displayMovies(res);
        case "/css":
            return displayCSS(res)
    }

    function displayFood(url, res){
        var myHTML = "<html>" +
        "<body><h1>My Portfolio</h1>" +
        "<a href='/'>Go Home</a>" +
        "</body></html>";

        res.writeHead(200, {"Content-Type": "test/html"});
        res.end(myHTML)
    }

    function displayFood(url, res){
        var myHTML = "<html>" +
        "<body><h1>My Portfolio</h1>" +
        "<a href='/'>Go Home</a>" +
        "</body></html>";

        res.writeHead(200, {"Content-Type": "test/html"});
        res.end(myHTML)
    }

    function displayFood(url, res){
        var myHTML = "<html>" +
        "<body><h1>My Portfolio</h1>" +
        "<a href='/'>Go Home</a>" +
        "</body></html>";

        res.writeHead(200, {"Content-Type": "test/html"});
        res.end(myHTML)
    }
    fs.readFile(__dirname +"/index.html", function (err, data){
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "test/html"});
        res.end(data);
    });

}
server.listen(port, function(){
    console.log("http://localhost:" + port)
});