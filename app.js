var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Universe\n' + process.env.PORT);
}).listen(process.env.PORT || 3000, '127.0.0.1');
console.log('running');


