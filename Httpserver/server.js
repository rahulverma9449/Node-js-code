const http = require('http');

//2. Create Server.

const server = http.createServer((req, res) => {
    // Here comes the request.
    res.write('This is coming from NodeJS server.');
    console.log(res.url);
    if (req.url == '/first') {
        res.end('This is first response');
    } else {

        res.end('This is default response');
    }
});

// 3. Specify a port to listen to client's requests.

server.listen(3200, (req, res) => {
    console.log('Server is listing on port 3200');
});