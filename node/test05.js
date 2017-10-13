Stream是一个抽象接口, 典型的Stream对象有：
对服务器发起请求的request对象，stdout(标准输出)。

Stream有四种流类型：
Readable  可读操作
Wirtable  可写操作
Duplex    可读可写操作
Transform 操作被写入数据，然后读出结果。

所有的Stream对象都是EventEmitter的实例。常用的事件有：
data    当有数据可读时触发。
end     没有更多的数据可读时触发。
error   在接收和写入过程中发生错误时触发。
finish  所有数据已被写入到底层系统时触发。