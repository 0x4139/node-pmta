'use strict';

var PMTA = require('./lib/PMTA');

var payload = [
    "From: [*from]",
    "To: <[*to]>",
    "Subject: PMTA message",
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=utf-8",
    "Content-Transfer-Encoding: 7bit",
    '\n',
    "This is a message, [fname]"
].join("\n");


let recipient = new PMTA.Recipient('kodeslacker@yahoo.com');
recipient.defineVariable('fname','FnameWasSet');
let message = new PMTA.Message('test@nasa.com');
message.addRecipient(recipient);
message.setPayload(payload);
console.log(message.serialize());
let connection = new PMTA.Connection('77.36.17.85',2225);
connection.submit(message);
