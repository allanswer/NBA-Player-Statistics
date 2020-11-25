const express = require('express')
const app = express()
var path = require('path')

var runQuery = require('./runthis.js')

app.use(express.static("public"));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/public/HomePage.html'))
})
app.get('/db', async function (req, res) {
	var result = await runQuery.buildPromise()
	res.send(result)
})

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