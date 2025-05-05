{
  // Polymorphism
  class Person {
    getSleep() {
      console.log("I am sleeping 8 hours");
    }
  }
  class Student extends Person {
    getSleep() {
      console.log("I am sleeping 6 hours");
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log("I am sleeping 4 hours");
    }
  }
  //   const person1 = new Person();
  //   person1.getSleep();
  //   const student1 = new Student();
  //   student1.getSleep();
  //   const developer1 = new Developer();
  //   developer1.getSleep();

  class Area {
    getArea(): number {
      return 0;
    }
  }
  class Triangle extends Area {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  class Ractangle extends Area {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getResult = (param: Area) => {
    console.log(param.getArea());
  };
  const area = new Area();
  const triangle = new Triangle(312023);
  const ractangle = new Ractangle(13220, 20);
  getResult(triangle);

}
