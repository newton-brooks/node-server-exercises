const http = require('http');
const fs = require('fs');
const port = 3000;
const url = require('url')





const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url.includes('name=') && req.url.slice(7)) {
        res.write(`<!doctype>
            <head>
              <title>Greeter</title>
            </head>
            <body>
              <h1> Hello ${req.url.slice(7)}! </h1>
            </body>
            </html>`)
        res.end()
    }  else {
        res.write('<h1>Please provide a name</h1>') 
        res.end() 
    }
}).listen(port);

