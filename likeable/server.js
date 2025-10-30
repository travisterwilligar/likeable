const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

const server = http.createServer((req, res) => {
    console.log(`📨 Request: ${req.method} ${req.url}`);
    
    // Get the file path
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    console.log(`📁 File path: ${filePath}`);
    
    // Security: prevent directory traversal
    if (!filePath.startsWith(__dirname)) {
        res.writeHead(403, { 'Content-Type': 'text/html' });
        res.end('<h1>403 - Forbidden</h1>');
        return;
    }

    // Get the file extension
    const ext = path.extname(filePath);

    // Set content type based on file extension
    const contentTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml'
    };

    const contentType = contentTypes[ext] || 'text/plain';

    // Read and serve the file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(`❌ Error reading file: ${err.message}`);
            if (err.code === 'ENOENT') {
                // File not found, serve 404
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - File Not Found</h1><p>' + filePath + '</p>');
            } else {
                // Server error
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>500 - Internal Server Error</h1><p>' + err.message + '</p>');
            }
        } else {
            // Success
            console.log(`✅ Serving file: ${filePath}`);
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Kong Prototype Framework server running at http://localhost:${PORT}`);
    console.log(`📁 Serving files from: ${__dirname}`);
    console.log(`🔄 Edit files and refresh browser to see changes`);
    console.log(`❌ Press Ctrl+C to stop the server`);
});