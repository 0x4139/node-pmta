'use strict';

var PMTA = require('./lib/PMTA');

var payload = [
    "From: [*from]",
    "To: <[*to]>",
    "Subject: PMTA message",
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=utf-8",
    "Content-Transfer-Encoding: 7bit",
    '',
    "This is a message, [fname]"
].join("\n");


let recipient = new PMTA.Recipient('kodeslacker@yahoo.com');
recipient.defineVariable('fname','FnameWasSet');
recipient.setFrom('Vali <vali@nasa.com>');
let message = new PMTA.Message('test@nasa.com');
message.addRecipient(recipient);
message.setPayload(payload);

console.log(message.serialize());
