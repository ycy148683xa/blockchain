var buf1 = new Buffer(10);  //创建长度为10字节的Buffer实例
var buf2 = new Buffer([10, 20, 30, 40, 50]);  //通过数组创建Buffer实例
//utf-8是默认的编码方式，同时支持ascii utf8 utf16le ucs2 base64 hex
var buf3 = new Buffer("www.runoob.com", "utf-8");  //通过字符串创建Buffer实例
console.log(buf1, buf2, buf3);

var buf4 = new Buffer(256);
len = buf4.write("www.runoob.com");
console.log("写入字节数：" + len);

var buf5 = new Buffer(26);
for (var i = 0; i < 26; i++){
	buf5[i] = i + 97
}
console.log(buf5.toString('ascii'));
console.log(buf5.toString('ascii', 0, 5));
console.log(buf5.toString('utf-8', 0, 5));  
console.log(buf5.toString(undefined, 0, 5)); //默认'utf-8'

var buf6 = new Buffer('www.runoob.com');
var json = buf6.toJSON(buf6);
console.log(json);

var buf7 = new Buffer('菜鸟教程');
var buf8 = new Buffer('www.runoob.com');
var buf9 = Buffer.concat([buf7, buf8]);
console.log("buf9: " + buf9.toString());

var buf10 = new Buffer('ABC');
var buf11 = new Buffer('ABCD');
var result = buf10.compare(buf11);
if (result < 0) {
	console.log(buf10 + "在" + buf11 + "之前");
} else if (result == 0) {
	console.log(buf10 + "在" + buf11 + "相同");
} else {
	console.log(buf10 + "在" + buf11 + "之后");
}

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

var buffer3 = new Buffer('runoob');
var buffer4 = buffer3.slice(0, 2);
console.log("buffer4 content: " + buffer4.toString());

var buffer5 = new Buffer('www.runoob.com');
console.log("buffer5 length: " + buffer5.length);

