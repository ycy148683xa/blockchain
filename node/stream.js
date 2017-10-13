/*
 * Stream是一个抽象接口, 典型的Stream对象有：
 * 对服务器发起请求的request对象，stdout(标准输出)。
 *
 * Stream有四种流类型：
 * Readable  可读操作
 * Wirtable  可写操作
 * Duplex    可读可写操作
 * Transform 操作被写入数据，然后读出结果。

 * 所有的Stream对象都是EventEmitter的实例。常用的事件有：
 * data    当有数据可读时触发。
 * end     没有更多的数据可读时触发。
 * error   在接收和写入过程中发生错误时触发。
 * finish  所有数据已被写入到底层系统时触发。
 */
 
 var fs = require("fs");
 var data = '';
 
 //创建可读流
 var readerStream = fs.createReadStream('input.txt');
 //设置编码为utf8
 readerStream.setEncoding('UTF8');
 //处理流事件 --> data, end, and error
 readerStream.on('data', function(chunk){
	 data += chunk;
 });
 readerStream.on('end', function(){
	 console.log(data);
 });
 readerStream.on('error', function(err){
	 console.log(err.stack);
 });
 console.log("program streaming read data end and error end...");
 
 var data2 = 'abcdefghijklmnopqrstuvwxyz';
 var writerStream = fs.createWriteStream('output.txt');
 writerStream.write(data2, 'UTF8');
 writerStream.end();
 writerStream.on('finish', function(){
	 console.log("write finish...");
 });
 writerStream.on('error', function(err){
	 console.log(err.stack);
 });
 console.log("program streaming write finish and error...");
 
 /*
  * 管道提供了一个输出流到输入流的机制。
  */
 var readerStream2 = fs.createReadStream('input.txt');
 var writerStream2 = fs.createWriteStream('output.txt');
 readerStream2.pipe(writerStream2);
 console.log("streaming pipe...");