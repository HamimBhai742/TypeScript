{
  // abstraction

  interface Person {
    getSleep(): void;
    getWork(): void;
  }
  class Developer implements Person {
    getSleep() {
      console.log("I am sleeping 4 hours");
    }
    getWork() {
      console.log("I am working 8 hours");
    }
    getReadBook() {
      console.log(`I am reading book`);
    }
  }
  // const person11 = new Developer()
  // person11.getWork()

  abstract class Person1 {
    abstract getSleep(): void;
    abstract getWork(): void;
    abstract getReadBook(): void;
  }
    
  class Person2 extends Person1 {
    getSleep() {
      console.log("I am sleeping 6 hours");
    }
    getWork() {
      console.log("I am working 8 hours");
    }
    getReadBook() {
      console.log(`I am reading book`);
    }
  }
    const person11 = new Person2()
    person11.getReadBook()
}
