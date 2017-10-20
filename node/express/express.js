//express是一个简洁而灵活的node.js Web应用框架
//提供了一系列强大特性帮助你创建各种Web应用，和丰富的http工具。
//使用Express可以快速地搭建一个完整功能的网站。

//Express框架核心特性：
//可以设置中间件来响应http请求；
//定义了路由表用于执行不同的http请求动作；
//可以通过向模板传递参数来动态渲染html页面。

//安装express并将其保存到依赖列表中
//npm install express --save
//以上命令会将Express框架安装在当前目录的node_modules目录下，
//node_modules目录下会自动创建express目录。

//以下几个重要的模块是需要与express框架一起安装的：
//body-parser  node.js中间件，用于处理JSON、Raw、Text和URL编码的数据。
//cookie-parser 解析Cookie的工具，通过req.cookies可以取到传过来的cookie，
//              并把它们转成对象。
//multer  node.js中间价，用于处理
//        enctype="multipart/form-data"(设置表单的MIME编码)的表单数据。
//npm install body-parser --save
//npm install cookie-parser --save
//npm install multer --save
//npm list express
var express = require("express");
var app= express()

app.get('/', function(req, res){
	res.send("Hello World");
});

var server = app.listen(8081, function(){
	var host = server.address().address
	var port = server.address().port
	
	console.log("应用实例，访问地址为http://%s:%s", host, port);
});

