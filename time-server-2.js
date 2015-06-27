var net = require('net'),
    strftime = require('strftime');

var server = net.createServer(serveTime);
server.listen(process.argv[2]);

}
