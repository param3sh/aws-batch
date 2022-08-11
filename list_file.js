var fs = require('fs');
var files = fs.readdirSync('/root/aws-batch');

console.log(files)
