'use strict';
var net = require('net');
var cnet = require('c-net');

function Connection(host,port){
    this.host=host;
    this.port=port;
    this.pmtaConnection=cnet.connect(host,port);
}

Connection.prototype.submit=function(message){
	var messages=message.serialize().split('\n');
	console.log(messages);
    cnet.write(this.pmtaConnection,message.serialize());

    while(!done){
    	var pmtaResponse=cnet.read(this.pmtaConnection);
	}
};
module.exports=Connection;