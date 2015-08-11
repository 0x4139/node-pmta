'use strict';

function Recipient(email) {
    this.email = email;
    this.variables = '';
    this.pmtaVariables = '';
}

Recipient.prototype.defineVariable = function (key, value) {
    this.variables += key + '="' + value + '" ';
};
Recipient.prototype.setFrom = function (fromValue) {
    this.pmtaVariables += '*from="' + fromValue + '" ';
};
Recipient.prototype.setEnvId = function (envId) {
    this.pmtaVariables += '*envid="' + envId + '" ';
};
Recipient.prototype.setVirtualMta = function (vmta) {
    this.pmtaVariables += '*vmta="' + vmta + '" ';
};
Recipient.prototype.setJobId = function (jobId) {
    this.pmtaVariables += '*jobId="' + jobId + '" ';
};

Recipient.prototype.serialize = function () {
    let data = [];
    if (this.variables != '') {
        data.push('XDFN ' + this.variables);
    }
    if (this.pmtaVariables != '') {
        data.push('XDFN ' + this.pmtaVariables);
    }
    data.push('RCPT TO: <' + this.email + '>');
    return data.join('\n');
};
module.exports = Recipient;