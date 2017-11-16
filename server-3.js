var http = require('http')
var fs = require('fs');
const port = 3000
var html1 = require("./template.js");




var htmlStr;

fs.readFile('index.html', function (err, html) {
if (err) {
    throw err; 
}       
    htmlStr = html
    
});




const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`${html1.template()}
            ${htmlStr}`);
    res.end();  
}).listen(port);


// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`)
// })