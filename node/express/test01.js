//请求和响应
//express应用使用回调函数的参数：request和response对象来处理请求和响应的数据。
//app.get('/', function(req, res){
//   --	
//})

//request 和 response 对象的具体介绍：
//Request 对象 - 
//request 对象表示HTTP请求，包含了请求查询字符串，参数，内容，HTTP头部等属性。
//常见属性有：
//req.app：当callback为外部文件时，用req.app访问express的实例
//req.baseUrl：获取路由当前安装的URL路径
//req.body / req.cookies：获得「请求主体」/ Cookies
//req.fresh / req.stale：判断请求是否还「新鲜」
//req.hostname / req.ip：获取主机名和IP地址
//req.originalUrl：获取原始请求URL
//req.params：获取路由的parameters
//req.path：获取请求路径
//req.protocol：获取协议类型
//req.query：获取URL的查询参数串
//req.route：获取当前匹配的路由
//req.subdomains：获取子域名
//req.accepts()：检查可接受的请求的文档类型
//req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages：
//返回指定字符集的第一个可接受字符编码
//req.get()：获取指定的HTTP请求头
//req.is()：判断请求头Content-Type的MIME类型

//Response 对象 - response对象表示HTTP响应，即在接收到请求时向客户端发送的HTTP响应数据。
//常见属性有：
//res.app：同req.app一样
//res.append()：追加指定HTTP头
//res.set()在res.append()后将重置之前设置的头
//res.cookie(name，value [，option])：设置Cookie
//opition: domain / expires / httpOnly / maxAge / path / secure / signed
//res.clearCookie()：清除Cookie
//res.download()：传送指定路径的文件
//res.get()：返回指定的HTTP头
//res.json()：传送JSON响应
//res.jsonp()：传送JSONP响应
//res.location()：只设置响应的Location HTTP头，不设置状态码或者close response
//res.redirect()：设置响应的Location HTTP头，并且设置状态码302
//res.send()：传送HTTP响应
//res.sendFile(path [，options] [，fn])：传送指定路径的文件 
//-会自动根据文件extension设定Content-Type
//res.set()：设置HTTP头，传入object可以一次设置多个头
//res.status()：设置HTTP状态码
//res.type()：设置Content-Type的MIME类型

//路由
var express = require('express');
var app = express();

app.get('/', function(req, res){
	console.log("主页GET请求");
	res.send("Hello GET");
})

app.post('/', function(req, res){
	console.log("主页POST请求");
	res.send("Hello POST");
});

app.get('/del_user', function(req, res){
	console.log("/del_user响应delete请求");
	res.send("删除页面");
})

app.get('/list_user', function(req, res){
	console.log("/list_user GET 请求");
	res.send("用户列表页面");
})

app.get('/ab*cd', function(req, res){
    console.log("/ab*cd GET 请求");
    res.send("正则匹配");	
})

var server = app.listen(8081, function(){
	var host = server.address().address
	var port = server.address().port
	
	console.log("应用实例，访问地址为http://%s:%s", host, port);
})