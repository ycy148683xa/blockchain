/*
 * 模块是Node.js应用程序的基本组成部分，文件和模块一一对应的。
 * 一个文件就是一个模块，这个文件可能是Javascript、JSON或者编译过的C/C++扩展。
 * node.js提供了exports和require两个对象，其中
 * export是模块公开的接口
 * require用于从外部获取一个模块的接口，即所获取模块的export对象。
 */
 
 var hello = require('./hello');
 hello.world();