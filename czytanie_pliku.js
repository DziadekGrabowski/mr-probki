var fs = require("fs");

var nazwaPliku1 = 'plik1.txt';
var nazwaPliku2 = 'plik2.txt';


// Asynchronous read
fs.readFile(nazwaPliku1, function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

var i=1;
while (i++<1000) 
    console.log("-----" +  i);



// Synchronous read
 var data = fs.readFileSync(nazwaPliku2);
 console.log("Synchronous read: " + data.toString());

console.log("Program Ended");



var kat1;
/* 
console.log("Going to read directory /tmp");
fs.readdir(".",function(err, files){
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file){
      console.log( file );
   });
   kat1=files;
   console.log(files);
});
 */

kat1 = fs.readdirSync (".");
for (var key in kat1) {
    if (kat1.hasOwnProperty(key)) {
        console.log( kat1[key]);
        
    }
} 



console.log("kat1:" + kat1);



console.log("# Koniec programu.\n\n\n\n\n\n\n");