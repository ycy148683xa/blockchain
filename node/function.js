/*
function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
	someFunction(value);
}

execute(say, "Hello");
*/

/*
function execute(someFunction, value) {
	someFunction(value);
}

execute(function(word){ console.log(word) }, "Hello");
*/

/*
var http = require("http");
http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}).listen(8888);
*/

var http = require("http");
function onRequest(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}
http.createServer(onRequest).listen(8888);