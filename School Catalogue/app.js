class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  //getters
  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  //setter
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === "number") {
      return (this._numberOfStudents = newNumberOfStudents);
    } else {
      throw new Error(
        "Invalid input: numberOfStudents must be set to a Number"
      );
    }
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
  }
}
const sharyland = new School('Sharyland High School', 'High School', 3000)

console.log(sharyland.quickFacts())
