console.log("Its working")

var http = require("http")
var fs = require("fs")
function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function (err, data) {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" })
            res.end("error.html")
          
           
        }
        else {
            res.writeHead(responseCode, { "Content-Type": contentType });
            res.end(data);
        }


    })
}
http.createServer(function (req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
    switch (path) {
        case "":
            serveStaticFile(res, "/index.html", "text/html");
            break;
        case "/about":
            serveStaticFile(res, "/about.html", "text/html");
            break;

        case "/img/about.jpg":
            serveStaticFile(res, "/img/about.jpg", "image/jpeg");
            break;
        case "/video/students/memes.mp4":
            serveStaticFile(res, "/video/students/memes.mp4", "video/mp4");
            break;
        default:
            serveStaticFile(res, "error.html", "text/html" );

            break;
    }

}).listen(3000)

