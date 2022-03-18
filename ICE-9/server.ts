import http from 'http';

const hostname = 'localhost';
const port = 3000;

// Creates a Server Instance (Immutable)
const server = http.createServer(function(req, res)
{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

// add an event listener
server.listen(port, hostname, function() 
{
  console.log(`Server running at http://${hostname}:${port}/`);
});
