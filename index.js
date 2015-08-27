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

var message = new PMTA.Message('test@nasa.com');
message.setPayload(payload);

var connection = new PMTA.Connection('77.36.17.64', 2525);
var recipient = new PMTA.Recipient('kodeslacker@yahoo.com');

recipient.defineVariable('fname', 'FnameWasSet');
message.addRecipient(recipient);

connection.submit(message);

console.log(message.serialize());
