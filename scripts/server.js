const http = require('http');
// console.log(http);

http.createServer((req, res) => {
    if (req.url === '/about') {
        res.write('welcome! this is about page');
        res.end();
    }else if (req.url === '/contact') {
        res.write('Welcome! this is contact page');
        res.end();
    }else {
        res.write('Welcome! this is home page');
        res.end();
    }
}).listen(5050, () => {
    console.log('server is running on http://localhost:5050');
});