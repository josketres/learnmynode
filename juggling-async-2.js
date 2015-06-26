var http = require('http'),
    concat = require('concat-stream'),
    after = require('after'),
    next = after(3, printResult),
    result = [];

function printResult() {
    result.forEach(function(buffer) {
        console.log(buffer.toString());
    });
}

function fetchAndPring(index) {
    var url = urls[index];
    http.get(url, function(response) {
        response
            .on('error', console.error)
            .pipe(concat(function(buffer) {
                result[index] = buffer.toString();
                next();
            }));
    });
}

var urls = process.argv.splice(2);
for(var i = 0; i < 3; i++) {
    fetchAndPring(i);
}
