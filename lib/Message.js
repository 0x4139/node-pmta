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
    let fs = require('fs');
    this.payload = fs.readFileSync(filePath).toString();
};

Message.prototype.serialize = function () {

    let data = 'XMRG FROM: <' + this.from + '>\n';
    data += 'XACK OFF\n';
    this.recipients.forEach(function (recipient) {
        data += recipient.serialize();
    });
    data += '\nXACK ON\n';
    data += 'XPRT 1 LAST\n';
    data += this.payload;
    data += '\n.\n';
    return data;
};

module.exports = Message;
