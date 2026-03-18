const http = require('http');

http.createServer((req,res)=>{
res.write("Automated CI/CD Project Version 2");
res.end();
}).listen(3000);
