var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var port = 80

var indexHtml = fs.readFileSync('./view/index.html', 'utf-8')
app.route('/').get(function (req, res) {
    res.send(indexHtml)
})
// static assets served by express.static() for production
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function () {
    console.log('App (production) is now running on port ' + port + '!');
});
