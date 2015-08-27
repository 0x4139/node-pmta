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

var recipient = new PMTA.Recipient('kodeslacker@yahoo.com');
recipient.defineVariable('fname','FnameWasSet');
message.addRecipient(recipient);
var connection = new PMTA.Connection('188.166.66.108',25);

connection.submit(message);
