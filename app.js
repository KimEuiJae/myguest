var express = require('express');
var morgan = require('morgan');
var bodyparser = require('body-parser');
var methodOverride = require('method-Override');
var mongoose = require("mongoose");
var app = express('');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(methodOverride());

routes = require('./routes/guest')(app);

mongoose.connect('mongodb://localhost/guest', function(err, res) {
  if(err) console.log('MongoDB 연결 에러' + err);
  else console.log('MongoDB 연결 성공');
});


app.listen(8080);
console.log('나 8080 포트에서 돌아간다!!!!!!!');

app.get('/',function(req,res){
	res.send("안녕 멍청아!");
});
app.get('/hello/world',function(req,res){
	res.send("Hello World2!");
});
