'use strict';

var PMTA = require('./lib/PMTA');

let recipient = new PMTA.Recipient('kodeslacker@yahoo.com');
recipient.defineVariable('foo','bar');
console.log(recipient.serialize());

