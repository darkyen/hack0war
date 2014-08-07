var child_process = require('child_process');
var winTools = require('wintools');
var colors = require("colors");
function SystemService(){
	this.name = "System";
	this.id = 'sys';
	this.desc = 'Provides definite system architecture';

	console.log("System: System Core is initiating".green);
	console.log("System: Connecting to yuri.soh.net".green);

	setTimeout(function(){
		console.log("Connection Established")
		console.log("Connected to yuri.soh.net".green);
	}, Math.random() * 2000);
}

SystemService.prototype.Shutdown = function(){
	winTools.shutdown.poweroff();
	//child_process.exec("C:/windows/System32/shutdown.exe", ['/q','/p']);
};

module.exports = SystemService;