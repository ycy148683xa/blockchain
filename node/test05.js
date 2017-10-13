var Hello = require('./hello2');
hello = new Hello();
hello.setName('BYVoid');
hello.sayHello();

//var http = require("http");
//http.createServer(...);
//node.js的require方法中的文件查找策略如下：
//node.js存在4类模块(原生模块和3种文件模块)

//从文件模块缓存中加载，优先级最高
//从原生模块加载，优先级次之。  
//从文件系统中加载文件。
//http、fs、path等，原生模块
//./mod ../mod 相对路径的文件模块
// /pathtomodule/mode  绝对路径的文件模块。
// mod 非原生模块的文件模块
