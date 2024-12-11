const menu = {
    _meal: '',
    _price: 0,

    //setters
    set meal(mealToCheck) {
        if(typeof mealToCheck === 'string') {
            this._meal = mealToCheck;
        } 
    },
    set price(priceToCheck) {
        if(typeof priceToCheck === 'number') {
            this._price = priceToCheck;
        }
    },

    //getters
    get todaysSpecial() {
        if(this._meal !== '' && this._price > 0 ) {
            return `Today's Special is ${this._meal} for $${this._price} dollars!`;
        } else {
            return `Meal or price was not set correctly!`;
        }
    } 
};


menu.meal = 'burgers';
menu.price = 10;

console.log(menu.todaysSpecial);
