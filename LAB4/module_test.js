const currency1 = require('./currency1');

console.log('10 euro na zlotowki to ');
console.log(currency1.euroNaZlotowki(10));
console.log('10 dolarow amerykanskich na zlotowki to ');
console.log(currency1.dolaryNaZlotowki(10));
console.log('10 hrywien na zlotowki to ');
console.log(currency1.hrywnyNaZlotowki(10));
console.log('10 rubli na zlotowki to ');
console.log(currency1.rubleNaZlotowki(10));
console.log('10 dolarow Zimbabwe na zlotowki to ');
console.log(currency1.dolarZimbabweNaZlotowki(10));


const Currency = require('./currency2');
const currency2 = new Currency()