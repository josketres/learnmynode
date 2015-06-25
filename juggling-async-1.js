var http = require('http'),
    concat = require('concat-stream');

function printQueue() {
    queue.sort(function(a,b) {
        return a.order - b.order;
    }).forEach(function(buffer) {
        console.log(buffer.toString());
    });
}

var count = 0, queue = [];
function queueBuffer(order) {
    return function(buffer) {
        count++;
        buffer.order = order;
        queue.push(buffer);
        if(count == 3) {
            printQueue();
        }
    }
}

var i = 0, 
    urls = process.argv.splice(2);
urls.forEach(function(url) {
    var order = i++;
    http.get(url, function(response) {
        response
            .on('error', console.error)
            .pipe(concat(queueBuffer(order)));
    });
});
