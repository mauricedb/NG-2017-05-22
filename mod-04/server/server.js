var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var app = express();

var port = process.env.PORT || 8080;

var movies = require('./movies');
app.use('/api/movies', movies);

app.use(serveStatic(path.join(__dirname, '..', 'wwwroot')));

app.listen(port, function () {
    console.info('The server is listening at port ' + port);
});
