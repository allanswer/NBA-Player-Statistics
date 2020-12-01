const express = require('express');
const app = express();
var path = require('path');
var runQuery = require('./runthis.js');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false}); //req.body

app.use('/assets',express.static("assets"));
app.use('/public',express.static("public"));
app.set('view engine', 'ejs');

// app.get('/', function (req, res) {
// 	res.sendFile(path.join(__dirname + '/public/HomePage.html'))
// })

app.get('/', function(req, res, next) {
	// // res.render('HomePage', { title: 'Express' });
	// // res.writeHead(200, {'Counter-Type': 'text/plain'});
	console.log('request was made: ' + req.url);
	res.sendFile(path.join(__dirname + '/public/HomePage.html'));
});




app.get('/index', function (req, res){
	res.render('index'); //view automatically locates the views folder
});


app.get('/db', async function (req, res) {
	var result = await runQuery.buildPromise();
	res.send(result);
});

app.get('/profile', function (req, res){
	res.render('profile', {qs: req.query});
});

app.post('/profile', urlencodedParser,  function (req, res){
	console.log(req.body);
	res.render('profile', {qs: req.query});
});


// app.get('/profile/:name', function (req, res){
// 	res.render('profile', {person: req.params.name, qs: req.query});
// });

app.listen(3000)


// var express = require('express')
// var app = express()
// var path = require('path')
//
// var runQuery = require('./runthis.js')
//
//
//
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname + '/HomePage.html'))
// })
// app.get('/db', async function (req, res) {
// 	var result = await runQuery.buildPromise()
// 	res.send(result)
// })
//
// app.listen(3000)