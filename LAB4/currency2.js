class Currency{
    constructor(){
        this.euroPLN = 0.2362
        this.dolarAmerykanskiPLN = 0.2745
        this.hrywnaPLN = 11.48
        this.rubelPLN = 22.22
        this.dolarZimbabwePLN = 98.1
    }
    zaokraglij(x){
        return Math.round(x * 100) / 100;
    }

euroNaZlotowki(a) {
    return this.zaokraglij(a / this.euroPLN);
}

dolaryNaZlotowki(b) {
    return this.zaokraglij(b / this.dolarAmerykanskiPLN);
}

hrywnyNaZlotowki(c) {
    return this.zaokraglij(c / this.hrywnaPLN);
}

rubleNaZlotowki(d) {
    return this.zaokraglij(d / this.rubelPLN);
}

dolarZimbabweNaZlotowki(e) {
    return this.zaokraglij(e / this.dolarZimbabwePLN);
}

}
module.exports = Currency;