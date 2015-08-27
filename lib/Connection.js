'use strict';
var net = require('net');
var cnet = require('c-net');

function Connection(host,port){
    this.host=host;
    this.port=port;
    this.pmtaConnection=cnet.connect(host,port);
}

Connection.prototype.submit=function(message){
    cnet.write(this.pmtaConnection,message.serialize());
    console.log(cnet.read(this.pmtaConnection));
    console.log(cnet.read(this.pmtaConnection));

};
module.exports=Connection;