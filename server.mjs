
import {createServer} from 'node:http';

const server = createServer((req, res) => {
    res.writeHead(200, {'content-Type' : 'text/html'});
    res.end('Server is running');
});

server.listen(5000, '127.0.0.1', () => {
    console.log('Server is listening');
});

