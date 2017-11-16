const http = require('http');
const fs = require('fs');
const port = 3000;
const url = require('url')


const getIndex = (res) => {
    fs.readFile('index.html', function (err, data) {
        if (err) {
            throw err
        } else {
          res.write(data)
          res.end()
        }
    });
};


const getPage2 = (res) => {
    fs.readFile('page2.html', function (err, data) {
        if (err) {
            throw err
        } else {
             res.write(data)
             res.end()
        }
    });
};






const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url === '/index.html') {
        return getIndex(res)
    } else if(req.url === '/page-2.html') {
        return getPage2(res)
    }
}).listen(port);
