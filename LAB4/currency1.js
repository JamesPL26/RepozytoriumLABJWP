let euroPLN = 0.2362
let dolarAmerykanskiPLN = 0.2745
let hrywnaPLN = 11.48
let rubelPLN = 22.22
let dolarZimbabwePLN = 98.1

function zaokraglij(x) {
    return Math.round(x * 100) / 100;
}

exports.euroNaZlotowki = function(a) {
    return zaokraglij(a / euroPLN);
}

exports.dolaryNaZlotowki = function(b) {
    return zaokraglij(b / dolarAmerykanskiPLN);
}

exports.hrywnyNaZlotowki = function(c) {
    return zaokraglij(c / hrywnaPLN);
}

exports.rubleNaZlotowki = function(d) {
    return zaokraglij(d / rubelPLN);
}

exports.dolarZimbabweNaZlotowki = function(e) {
    return zaokraglij(e / dolarZimbabwePLN);
}
