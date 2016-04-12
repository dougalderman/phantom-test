var page = require('webpage').create(),
    system = require('system'),
    url;

if (system.args.length === 1) {
  console.log('Usage: dispTitle.js <some URL>');
  phantom.exit();
}

url = system.args[1];

page.onResourceRequested = function(request) {
  console.log('Request ' + JSON.stringify(request, undefined, 4));
};
page.onResourceReceived = function(response) {
  console.log('Receive ' + JSON.stringify(response, undefined, 4));
};
page.open(url);