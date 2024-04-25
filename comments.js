const http = require('http');

// Create web server

const server = http.createServer((req, res) => {
    if (req.url === '/route1') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is route 1');
    } else if (req.url === '/route2') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is route 2');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});