"use strict";
class Temperature {
    _celsius = 0;
    get celsius() {
        return this._celsius;
    }
    set celsius(newCelcius) {
        this._celsius = newCelcius;
    }
    get fahrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }
    set fahrenheit(newFah) {
        this._celsius = ((newFah - 32) * 5) / 9;
    }
}
const temp = new Temperature();
temp.celsius = 25;
console.log(temp.fahrenheit);
temp.fahrenheit = 77;
console.log(temp.celsius);
