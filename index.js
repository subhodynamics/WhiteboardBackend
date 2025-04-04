const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log("got a new request");
    res.write("hello world");
    res.end();
});
const PORT = 3000;
server.listen(PORT, 'localhost', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});