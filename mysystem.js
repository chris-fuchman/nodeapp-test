var os = require('os');
var message = 'Here is some info about your system';
var sysArray = new Array(
	'Type: '+os.type(),
	'Nove version: '+process.version,
	'Platform: '+os.platform(),
	'Hostname: '+os.hostname(),
	'Total memory: '+os.totalmem(),
	'Free memory: '+os.freemem(),
	'Uptime: '+os.uptime()
);
console.log(message);
//var arraylen=sysArray.length;
//while
for (var i = 0, len = sysArray.length; i < len; i++) {
	console.log(sysArray[i]);
}