var page = require('webpage').create();
console.log("before page.open");
page.open('http://www.google.com', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('google.png');
  }
  phantom.exit();
});