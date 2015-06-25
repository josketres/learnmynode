var http = require('http'),
    concat = require('concat-stream');

function printResults(buffer) {
    var string = buffer.toString();
    console.log(string.length);
    console.log(string);
}

http.get(process.argv[2], function(response) {
    response
        .on('error', console.error)
        .pipe(concat(printResults));
});
