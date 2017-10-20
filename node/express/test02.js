//express提供了内置的中间件express.static来设置静态文件，
//如：图片，CSS，JavaScript等
//使用express.static中间件设置静态文件路径
//比如：设置为public目录下
//app.use(express.static('public'));
var express = require('express');
var app = express();

app.use(express.static('public'))
app.get('/', function(req, res){
	res.send('Hello World');
})

var server = app.listen(8081, function(){
	var host = server.address().address
	var port = server.address().port
	
	console.log("应用实例，访问地址为http://%s:%s", host, port)
})