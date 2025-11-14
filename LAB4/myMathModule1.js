exports.mnozenie = function(x,y){
    return x * y;
}
exports.dzielenie = function(x,y){
    return x / y;
}
exports.dodawanie = function(x,y){
    return x + y;
}
exports.odejmowanie = function(x,y){
    return x - y;
}
exports.silnia = function(a){
    let wynik = 1;
    for(let i = 1; i <= a; i++){
        wynik *= i;
    }
    return wynik;
}