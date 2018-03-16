fs = require ('fs')


fs.readFile('./04 fs readFile.js', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});


http = require ('http')

http.get("http://www.google.com/", function(res) {
  console.log("Got response: " + res.statusCode);
//  console.log(res.);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});