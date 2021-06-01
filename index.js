
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const hostname = 'localhost'
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyparser.json());

app.use(express.static(__dirname+ '/public'));

app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('content-type','text/plain');
    next();
});

app.all('/dishes/:dishid', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('content-type','text/plain');
    next();
});

app.post('/dishes', (req, res, next) => {

    res.end('will add the dish:' + req.body.name + 'with the details:'
    + req.body.description);
});

app.put('/dishes', (req, res, next) => {
    statusCode = 403;
    res.end('put opetaion is not supported on /dishes');
});

app.get('/dishes', (req, res, next) => {
    res.end('will send the details of the disc to you:');
});

app.delete('/dishes/', (req, res, next) => {
    res.end('dish deleted');
});

app.get('/dishes/:dishid', (req, res, next) => {
    res.end('will send the details of the disc:'
     + req.params.dishid + 'to you!');
});

app.put('/dishes/:dishid', (req, res, next) => {
    res.write('updatinfg the disc:' + req.params.dishid + '\n');
    res.end('will upadate the disc:' + req.body.name 
    + 'with details":' + req.body.description);
});

app.post('/dishes/:dishid', (req, res, next) => {
    res.statusCode = 403;
    res.end('post operation is not supported on the /dishes/:' + req.params.dishid);
});

app.delete('/dishes/:dishid', (req, res, next) => {
    res.end('deleting dishes":' + req.params.dishid);
});
    
    
app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html');
    res.end('<html><body><h1> this is an express server</h1></body></html>');
});

const server = http.createServer(app);
server.listen(port, hostname, () =>{
    console.log(`server running at http://${hostname}:${port}`);
});