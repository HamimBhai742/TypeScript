//oop => opject oriented programing

class Animal {
  //   name: string;
  //   age: number;
  //   location: string;
  //   type: string;

  constructor(
    public name: string,
    public age: number,
    public location: string,
    public type: string
  ) {
    // this.name = name;
    // this.age = age;
    // this.location = location;
    // this.type = type;
  }

  showAnimal() {
    console.log(
      `first name: ${this.name}, age: ${this.age}, location: ${this.location}, type: ${this.type}`
    );
  }
}

const dog = new Animal("Kuttar Saw", 34, "Safiri Park", "Dog");
const cat = new Animal("Biraler Saw", 34, "Uttra  Park", "Cat");
// console.log(dog.age)
dog.showAnimal();
console.log(cat.location);