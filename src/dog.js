class Dog {
  constructor(name){
    this.name = name
  }

  bark(){
    return `Wah,wah, this is ${this.name}`
  }
}

module.exports = Dog