var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input222222.txt'));
  
console.log("decompress end ...");