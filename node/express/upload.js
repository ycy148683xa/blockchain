//文件上传
//POST 表单的enctype属性设置为multipart/form-data
var express = require('express');
var app = express

var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));