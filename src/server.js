import http from 'http'

export class Server {
    constructor() {
        const port = 5000;
        this.httpServer = http.createServer().listen(port);
        console.log(`Listening on port ${port}`);
    }
}

new Server();