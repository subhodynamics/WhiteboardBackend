const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const logMessage = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;

    // Append the log message to a file (e.g., 'requests.log')
    fs.appendFile('requests.log', logMessage, (err) => {
        if (err) {
            console.error("Failed to write to log file:", err);
        }
    });
    
    if (req.url === '/') {
        res.write('root directory')
        res.end();
    } else if (req.url === '/home') {
        res.write('home directory')
        res.end();
    } else if (req.url === '/about') {
        res.write('welcome to about page')
        res.end();
    } else {
        res.write('page not found')
        res.end();
    }
});
const PORT = 3000;
server.listen(PORT, 'localhost', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});