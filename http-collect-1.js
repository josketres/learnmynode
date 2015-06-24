var http = require('http');

var collect = [];

function collectLine(line) {
    collect.push(line);
}

function printResults() {
    var chars = collect.map(function(line) {
        return line.length;
    }).reduce(function(previous, current) {
        return previous + current;
    });
    console.log(chars);
    console.log(collect.join(''));
}

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8');
    response.on('data', collectLine);
    response.on('error', console.error);
    response.on('end', printResults);
});
