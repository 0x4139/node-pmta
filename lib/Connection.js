'use strict';
var net = require('net');
var cnet = require('c-net');

function Connection(host,port){
    this.host=host;
    this.port=port;
    this.pmtaConnection=cnet.connect(host,port);
}

Connection.prototype.submit=function(message){
	var messages=message.serializeHeader();
	var pmtaResponse=cnet.read(this.pmtaConnection);
	smtpErrorCheck(pmtaResponse);
	do{
		var pmtaRequest = messages.shift();
		cnet.write(this.pmtaConnection,pmtaRequest+'\n');
		var pmtaResponse=cnet.read(this.pmtaConnection);
		smtpErrorCheck(pmtaResponse);
	}while(messages.length>0);

	cnet.write(this.pmtaConnection,message.serializePayload()+'\n.\n');
	var pmtaResponse=cnet.read(this.pmtaConnection);
	smtpErrorCheck(pmtaResponse);
	cnet.close(this.pmtaConnection);
};

function smtpErrorCheck(message){
	console.log('PMTA:',message);
	var replyCode=Number(message.split(' ')[0]);
	if(replyCode>400&&replyCode<600){
		throw new Error(message);
	}//smtp error codes
}
module.exports=Connection;