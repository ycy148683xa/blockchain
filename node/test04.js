var events = require('events');                 //引入events模块
var eventEmitter = new events.EventEmitter();   //创建eventEmitter

var listener1 = function listener1() {          //创建监听器1
	console.log("listener1 is running ...");
}

var listener2 = function listener2() {          //创建监听器2
	console.log('listener2 is running ...');
}

eventEmitter.addListener('connection', listener1);  //为connnect事件添加listener1监听器
eventEmitter.on('connection', listener2);  //为connnect事件注册listener2监听器

//类方法，获取eventEmitter的connection事件的监听器数量
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "个监听器监听连接事件")

eventEmitter.emit('connection');  //触发connnection事件

eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听")

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "个监听器监听连接事件");

console.log("program end...");