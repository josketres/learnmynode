var http = require('http'),
  url = require('url');

var routes = {
  '/api/parsetime' : parseTime,
  '/api/unixtime' : unixTime
};

function parseTime(request, response) {
  var query = url.parse(request.url, true).query;
  if(!query.iso) {
    response.writeHead(400);
    response.end();
    return;
  }

  var date = new Date(query.iso);
  var result = {
    hour : date.getHours(),
    minute : date.getMinutes(),
    second : date.getSeconds() 
  };
  response.writeHead(200, {'content-type': 'application/json' });
  response.end(JSON.stringify(result));
}

function unixTime(request, response) {
  var query = url.parse(request.url, true).query;
  if(!query.iso) {
    response.writeHead(400);
    response.end();
    return;
  }

  var date = new Date(query.iso);
  var result = {
    unixtime :  date.getTime()
  };
  response.writeHead(200, {'content-type': 'application/json' });
  response.end(JSON.stringify(result));
}

var server = http.createServer(function (request, response) {
  var pathname = url.parse(request.url).pathname;
  var route = routes[pathname];
  if(route) {
    route(request, response);
  } else {
    response.writeHead(404, ''); 
    response.end();
  }
});

console.log('Listening on port ' + process.argv[2]);
server.listen(process.argv[2]);
