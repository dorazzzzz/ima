// ***
// Written with reference to https://youtu.be/gQYsUjT-IBo

var http = require('http');
var fs = require('fs'); //filesystem

var serialPort = require("serialport");

const parsers = serialPort.parsers; //transform streams that process incoming data
const parser = new parsers.Readline({
	delimeter: '\r\n'
});

var port = new serialPort('/dev/cu.usbmodem14501',{
	baudRate: 115200,
	dataBits: 8,
	parity: 'none',
	stopBits: 1,
	flowControl: false
});

port.pipe(parser);

//initialize the app
var app = http.createServer(function(req, res){
	var index = fs.readFileSync('index.html');
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end(index);
});


var io = require('socket.io').listen(app);

io.on('connection', function(data){
	console.log('Node.js is listening!');
});

//receive data from the serial port
parser.on('data', function(data){
	console.log("data from serial port is now: " + data);
	io.emit('data', data); 
});

app.listen(8888);

// ***