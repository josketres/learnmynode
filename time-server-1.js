var net = require('net');

var server = net.createServer(serveTime);
server.listen(process.argv[2]);

function serveTime(socket) {
    var d = new Date();
    var date = d.getFullYear() + '-'
        + zfill(d.getMonth() + 1, 2) + '-'
        + d.getDate() + ' '
        + d.getHours() + ':'
        + d.getMinutes() + '\n';
    socket.end(date);
}

function zfill(num, len) {return (Array(len).join("0") + num).slice(-len);}


