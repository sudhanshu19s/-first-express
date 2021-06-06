
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const dishrouter = require('./routes/dishrouter');

const hostname = 'localhost'
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use('/dishes', dishrouter);

app.use(express.static(__dirname+ '/public'));

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html');
    res.end('<html><body><h1> this is an express server</h1></body></html>');
});

const server = http.createServer(app);
server.listen(port, hostname, () =>{
    console.log(`server running at http://${hostname}:${port}`);
});