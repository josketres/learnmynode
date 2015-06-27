var http = require('http'),
    fs = require('fs');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    fs.createReadStream(process.argv[3]).pipe(response);
});

server.listen(process.argv[2]);

