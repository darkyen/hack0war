var colors = require('colors');
//var Opponent = require("Opponent");
//var Challenge = require("Challenge");
// var God = require("God");
//var server = require("Server");
// var SystemUtils = require("SystemUtils");
var Promise = require("bluebird");
var System = require("./system.js");

colors.setTheme({
	'input': 'green.zalgo',
});

var del = 150;

function War(){
	//var opponent = new Opponent();

	setTimeout( this.scriptedDeath.bind(this), 3000);
}

War.prototype.phase2  = function(){
	
	console.log("Sensors: probing device android".yellow);
	console.log("Sensors: probing device android..".yellow);
	console.log("Sensors: probing device android....".yellow);
	console.log("Sensors: probing device android......".yellow);
	console.log("Sensors: probing device android.......".yellow);
	console.log("Sensors: probing device android........".yellow);

	function getRandomName (){

		var probNames = ['0s23', '234 - worm', 'f-32 rat', 'e2z3zz2.exe', '32ofq2', '234adfva' , '234cvq12', 'aw3rs12.exe', 'folor', 'doelq', 'ewodr' ,'ewor34', 'wux3s', '23rat', '234szawer'];
		return probNames[ Math.floor(probNames.length * Math.random()) ];

	}

	var infection = Math.random() * 100 + 400;
	for( var i = 0; i < infection ; i++ ){
		console.log( ("Sensors: Infection Found " + getRandomName() ).red );
		var now = Date.now();
		while(Date.now() - now < del){
			;
		}
	}

	console.log(("Sensors: Error Probing failed, too many infection " +  Math.floor(infection) +  ' infected files found').red);
	console.log(('Sheilds: Attempting Device Cleanup').green);

	setTimeout(this.loss.bind(this), 12000);
}

War.prototype.scriptedDeath = function (){
	console.log("Sensors: active".green);
	console.log("Sensors: probing device android".green);
	console.log("Sensors: Malfunction".red);
	setTimeout( this.phase2.bind(this), 3000);

}


War.prototype.services = [{
	id: 'fs',
	name: 'File System'
}, {
	id: 'comms',
	name: 'Commuinication'
}, 
	new System()
,{
	id: 'shell',
	name: 'Shell'
},{
	id: 'core',
	name: 'Core'
},{
	id: 'shield',
	name: 'Shield'
}];



War.prototype.malfunction = function(service){
	function appendServiceName( message ){
		return message.replace('$name', service.name);
	}
	
	var malfunctionWarnings = [
		'Fatal Error in $name',
		'System Failure in $name',
		'Service $name is now down',
		'$name Lost'
	].map(appendServiceName);

	var defProbeFailures = [
		'$name is under attack',
		'$name service violation',
		'$name service reports heavy data loss',
		'Possible leak in $name'
	];

	var probeFailures = service.probeFailures || defProbeFailures.map(appendServiceName);
	var probeFailureMessages = Math.floor(Math.random() * 10);
	var lastTimeout = 100;
	var maxDelay = 3000;

	function generateAIssueMessage(inputarray, errorLevel){
		return function(){
			var issueMessageIndex = Math.floor(inputarray.length * Math.random());
			console.log("-------------------------------" [errorLevel] );
			console.log("System message"[errorLevel] );
			console.log("-------------------------------" [errorLevel] );
			console.log("\n" [errorLevel] );
			console.log( inputarray[issueMessageIndex][errorLevel]);
			console.log("\n" [errorLevel] );
			console.log("-------------------------------\n\n\n" [errorLevel] );
			var now = Date.now();
			while(Date.now() - now < del){
				;
			}
		}
	
	}

	for( var i = 0; i < probeFailureMessages; i++ ){

		setTimeout(generateAIssueMessage(probeFailures, 'yellow'), lastTimeout);
		lastTimeout += Math.random() * maxDelay;
	}

	setTimeout(generateAIssueMessage(malfunctionWarnings, 'red'), lastTimeout);
	lastTimeout += Math.random() * maxDelay;

	return lastTimeout;
}

War.prototype.loss = function(){
	/*
	colors.setTheme({
	  input: 'grey.zalgo',
	  verbose: 'cyan.zalgo',
	  prompt: 'grey.zalgo',
	  info: 'green.zalgo',
	  data: 'grey.zalgo',
	  help: 'cyan.zalgo',
	  warn: 'yellow.zalgo',
	  debug: 'blue.zalgo',
	  error: 'red.zalgo'
	});
	*/
	var malfunctions = this.services;
	var allMafunctions = malfunctions.map(this.malfunction);

	var maxTimeOut = Math.max.apply(Math, allMafunctions);

	setTimeout( this.services[2].Shutdown, maxTimeOut + 2000 );
};

var war = new War();

//module.exports = War;
