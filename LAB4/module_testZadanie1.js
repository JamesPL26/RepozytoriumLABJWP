const currency1 = require('./currency1');
console.log("\ncurrency1:");
console.log("10 euro na zlotowki to ", currency1.euroNaZlotowki(10), "PLN");
console.log("10 dolarow amerykanskich na zlotowki to ", currency1.dolaryNaZlotowki(10), "PLN");
console.log("10 hrywien na zlotowki to ", currency1.hrywnyNaZlotowki(10), "PLN");
console.log("10 rubli na zlotowki to ", currency1.rubleNaZlotowki(10), "PLN");
console.log("10 dolarow Zimbabwe na zlotowki to ", currency1.dolarZimbabweNaZlotowki(10), "PLN");


const Currency = require('./currency2');
const currency2 = new Currency()

console.log("\ncurrency2:");
console.log("10 euro na zlotowki to ", currency2.euroNaZlotowki(10), "PLN");
console.log("10 dolarow amerykanskich na zlotowki to ", currency2.dolaryNaZlotowki(10), "PLN");
console.log("10 hrywien na zlotowki to ", currency2.hrywnyNaZlotowki(10), "PLN");
console.log("10 rubli na zlotowki to ", currency2.rubleNaZlotowki(10), "PLN");
console.log("10 dolarow Zimbabwe na zlotowki to ", currency2.dolarZimbabweNaZlotowki(10), "PLN");