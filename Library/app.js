class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    //getters
    get title() {
        return this._title
    }
    get isCheckedOut() {
        return this._isCheckedOut
    }
    get ratings() {
        return this._ratings
    }

    toggleCheckOutStatus() {
       this.isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0)
        const numberOfRatings = this.ratings.length

        const averageRating = ratingsSum / numberOfRatings

        return averageRating
    }

    addRating(num) {
        this._ratings.push(num);
    }

    //setters
    set isCheckedOut(newCheckedOutStatus) {
        this._isCheckedOut = newCheckedOutStatus;
    }

}

class Book extends Media {
    
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author
    }

    get pages() {
        return this._pages
    }
}

class Movie extends Media {

    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}