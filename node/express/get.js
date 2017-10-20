//GET方法
//在表单中通过GET方法提交两个参数
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/get.htm', function(req, res){
	res.sendFile(__dirname + "/" + "get.htm");
})

app.get('/process_get', function(req, res){
	var response = {
		"first_name": req.query.first_name,
		"last_name": req.query.last_name
	};
	console.log(response)
	
	res.end(JSON.stringify(response));
});

var server = app.listen(8081, function(){
	var host = server.address().address
	var port = server.address().port
	
	console.log("应用实例， 访问地址为http://%s:%s", host, port)
})