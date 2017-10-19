//node.js web server
//Web服务器 网站服务器 提供Web信息浏览服务
//支持http

//client 客户端  一般指浏览器，通过http协议向服务器请求数据
//server 服务端  一般指Web服务器，接收客户端请求，返回给客户端响应数据
//business 业务层  应用Server  处理业务
//data 数据层  数据库等

//http模块主要用于http server 和 client

var http = require("http");
var fs = require("fs");
var url = require("url");

//创建服务器
http.createServer(function(request, response){
	//解析请求，包括文件名
	var pathname = url.parse(request.url).pathname;
	
	//输出请求的文件名
	console.log("Request for " + pathname + "received.");
	
	console.log(pathname.substr(1));
	fs.readFile(pathname.substr(1), function(err, data){
		if (err) {
			console.log(err);
			//http状态码：404：NOT FOUND
			//Content Type: text/plain
			response.writeHead(404, {'Content-Type': 'text/html'});
		} else {
			//HTTP 状态码：200：OK
			//Content Type: text/plain
			response.writeHead(200, {'Content-Type': 'text/html'});
			
			//响应文件内容
			response.write(data.toString());
		}
		
		//发送响应数据
		response.end();
	});
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081/");