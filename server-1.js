const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Hello World</h1>");
    res.end();  
}).listen(port);


// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`)
// })