const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html>
        <head><title>Shiva CICD v2</title></head>
        <body style="font-family:Arial; text-align:center; padding:50px; background:#e3f2fd;">
            <h1 style="color:#1976d2;">Hello I am Shiva! 👋</h1>
            <p style="font-size:24px;">CI/CD Pipeline Practice v2<br>GitHub → Jenkins → Docker → Node.js</p>
        </body>
        </html>
    `);
}).listen(3000, () => {
    console.log('🚀 Shiva app2.js LIVE on 3000!');
});

