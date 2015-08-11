'use strict';

exports.PmtaMsgRETURN_FULL      = "RETURN_FULL";
exports.PmtaMsgRETURN_HEADERS   = "RETURN_HEADERS";
exports.PmtaMsgENCODING_7BIT    = "ENCODING_7BIT";
exports.PmtaMsgENCODING_8BIT    = "ENCODING_8BIT";
exports.PmtaMsgENCODING_BASE64  = "ENCODING_BASE64";
exports.PmtaRcptNOTIFY_NEVER    = 0x00;
exports.PmtaRcptNOTIFY_SUCCESS  = 0x01;
exports.PmtaRcptNOTIFY_FAILURE  = 0x02;
exports.PmtaRcptNOTIFY_DELAY    = 0x04;
exports.Recipient=require('./Recipient');
