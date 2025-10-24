/* Zadanie 1
const wait = 3000;
console.log("Początek skryptu...");
setTimeout(function(){
    console.log("Upłyneły minimum 3sek...")
},wait);
console.log("Koniec skryptu...");
*/

// Zadanie 2
const fs = require("fs");
const data =  fs.readFileSync('package.json');

console.log("Początek skryptu");
console.log(data.toString());
console.log("Koniec skryptu");
