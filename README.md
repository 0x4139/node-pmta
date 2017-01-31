# node-pmta

# Usage

```
'use strict';

var PMTA = require('./lib/PMTA');

var payload = [
    "From: [*from]",
    "To: <[*to]>",
    "Subject: PMTA Subject",
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=utf-8",
    "Content-Transfer-Encoding: 7bit",
    '\n',
    "This is a message, [fname]"
].join("\n");

var message = new PMTA.Message('test@testdomain.com');
message.setPayload(payload);

var recipient = new PMTA.Recipient('0x4139@gmail.com');
recipient.defineVariable('fname','FnameVariableExample');
message.addRecipient(recipient);
var connection = new PMTA.Connection('localhost',25);

connection.submit(message);
```

#License 
MIT @Vali Malinoiu 2015
