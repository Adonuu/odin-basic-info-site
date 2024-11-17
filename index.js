var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var requestedUrl = url.parse(req.url, true);

    // if a valid request return the page.html, else return 404.html
    if (requestedUrl.pathname === "/" || requestedUrl.pathname === "" || requestedUrl.pathname === "/about" || requestedUrl.pathname === "/contact-me") {
        var filename = "";
        if (requestedUrl.pathname === "/" || requestedUrl.pathname === "") {
            filename = "./src/index.html";
        } else {
            filename = "./src" + requestedUrl.pathname + ".html";
        }
        fs.readFile(filename, function(err, data) {
            if (err) {
              res.writeHead(404, {'Content-Type': 'text/html'});
              return res.end("404 Not Found");
            } 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
          });
    } else {
        var filename = "./src/404.html";
        fs.readFile(filename, function(err, data) {
            if (err) {
              res.writeHead(404, {'Content-Type': 'text/html'});
              return res.end("404 Not Found");
            } 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
          });
    }
}).listen(8080);