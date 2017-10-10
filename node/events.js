var events = require('events');

var eventEmitter = new events.EventEmitter();

//eventEmitter.on('eventName', eventHandler);
//eventEmitter.emit('eventName');

var connectHandler = function connected() {
	console.log("conn success...");
	eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_received', function(){
	console.log('data receive success...');
});

eventEmitter.emit('connection');

console.log("program end...");