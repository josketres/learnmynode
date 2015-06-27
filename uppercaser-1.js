var http = require('http');

var server = http.createServer(function (request, response) {
    if(request.method !== 'POST') {
        response.writeHeader(400);
        response.end();
    }

    request.on('data', function(chunk) {
        response.write(chunk.toString().toUpperCase());
    }).on('end', function() {
        response.end();
    });
});

server.listen(process.argv[2]);

