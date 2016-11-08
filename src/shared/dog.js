export default class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Wah,wah, this is ${this.name}`
  }

  barkInConsole() {
    console.log(this.bark())
  }
}
