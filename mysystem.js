var os = require('os');
var message = 'System Info\n-----------';
var sysArr = [
  'Type: '+ os.type(),
  'Node Version: '+ process.version,
  'Platform: '+ os.platform(),
  'Hostname: '+ os.hostname(),
  'Total Memory: '+ os.totalmem(),
  'Free Memory: '+ os.freemem(),
  'Uptime: '+ os.uptime()
];

console.log(message);

var arrayLen = sysArr.length;

i = 0;

while(i < arrayLen) {
  console.log(sysArr[i]);
  i++;
}