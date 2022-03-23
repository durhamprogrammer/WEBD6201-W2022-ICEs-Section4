import express from 'express';
import path from 'path'; // pre-bundled NodeJS module

let router = express.Router();
const app = express();

const port = process.env.PORT || 3000;

app.use(router); // attaches the router middleware function

// application config
app.set('views', path.join(__dirname, "./Views"));
app.set('view engine', 'ejs'); // set the view engine to ejs

// using express middleware (built-in) to add join static files to our path
app.use(express.static(path.join(__dirname, "./Client")));
app.use(express.static(path.join(__dirname, "./node_modules")));

// express routing
router.get("/", function(req, res, next)
{
  res.render("index", {title: "Hello, World!"});
  next();
});

app.listen(port, function()
{
  console.log(`Server is listening on port: ${port}`);
});


/* import http from 'http';
import fs from 'fs';
import mime from 'mime-types'; // third-party module

let lookup = mime.lookup; // alias for the lookup function

const port = process.env.PORT || 3000;

// Creates a Server Instance (Immutable)
const server = http.createServer(function(req, res)
{
  let path = req.url as string;

  if(path == "/")
  {
    path = "/index.html";
  }

  let mime_type = lookup(path.substring(1)) as string;

  console.log(path);

  fs.readFile(__dirname + path, function(err, data)
  {
    if (err) {
      res.writeHead(404);
      res.end("ERROR: 404 - File Note Found! " + err.message);
      return;
    }
    res.setHeader("X-Content-Type-Options", "nosniff"); // security
    res.writeHead(200, { "Content-Type": mime_type });
    res.end(data);
  });
});

// add an event listener
server.listen(port, function() 
{
  console.log(`Server running on Port: ${port}`);
}); */