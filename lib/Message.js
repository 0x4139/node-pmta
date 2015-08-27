'use strict';
function Message(from) {
    this.from = from;
    this.recipients = [];
    this.payload = ''
}

Message.prototype.addRecipient = function (recipient) {
    this.recipients.push(recipient);
};

Message.prototype.setPayload = function (payload) {
    this.payload = payload;
};


Message.prototype.setPayloadfromFile = function (filePath) {
    var fs = require('fs');
    this.payload = fs.readFileSync(filePath).toString();
};

Message.prototype.serializePayload=function(){
    return this.payload;
}

Message.prototype.serializeHeader = function () {

    var data = ['XMRG FROM: <' + this.from + '>'];
    this.recipients.forEach(function (recipient) {
        data=data.concat(recipient.serialize());
    });
    data.push('XPRT 1 LAST');
    return data;
};

module.exports = Message;
