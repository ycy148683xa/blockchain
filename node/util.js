//util是node.js的核心模块，提供常用函数的集合。
//用于弥补核心JavaScript的功能过于精简的不足。
//util.inherits(constructor, superConstructor)  对象间原型继承
//javascript面向对象特性是基于原型的。
//javascript没有提供对象继承的语言级别特性，而是通过原型复制来实现的。
var util = require('util')

function Base() {
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function() {
		console.log('Hello ' + this.name);
	};
}
Base.prototype.showName = function() {
	console.log(this.name);
};
function Sub() {
	this.name = 'sub';
}
util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);
//Sub仅仅继承了Base在原型中定义的函数，
//而构造函数内部创造的base属性和sayHello函数没有被Sub继承。
//在原型中定义的属性不会被console.log作为对象的属性输出。

//uitl.inspect(object, showHidden, depth, colors) 是一个将任意对象转换为字符串的方法，通常用于调试和错误输出。
//object  必选参数  要转换的对象；
//showHidden  可选参数  为true，输出隐藏信息；
//depth  可选参数  最大递归的层数
//       如果对象很复杂，可指定层数以控制输出信息的多少。
//       如果不指定depth，默认会递归2层。
//       指定为null表示将不限提过层数，完全遍历对象。
//colors 可选参数  为true，输出格式将以ANSI颜色编码。
//var util = require('util');

function Person() {
	this.name = 'byvoid';
	this.toString = function() {
		return this.name;
	};
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));

//util.isArray(object)  object是数组返回true，否则返回false。
console.log(util.isArray([]))  //true
console.log(util.isArray(new Array))  //true
console.log(util.isArray({}))  //true

//util.isRegExp(object)  object是正则表达式返回true，否则返回false。
console.log(util.isRegExp(/some regexp/))  //true
console.log(util.isRegExp(new RegExp('another regexp')))  //true
console.log(util.isRegExp({}))  //false

//util.isDate(object)  object是日期返回true，否则返回false。
console.log(util.isDate(new Date()))  //true
console.log(util.isDate(Date()))  //false without new returns a String
console.log(util.isDate({}))  //false

//util.isError(object)  object是错误对象返回true，否则返回false。
util.isError(new Error())  //true
util.isError(new TypeError())  //true
util.isError({name: 'Error', message: 'an error occurred'})  //false