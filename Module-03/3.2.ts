// Inheritance

// parent class
class Person {
  name: string;
  age: number;
  contactNo: string;
  address: string;

  constructor(name: string, age: number, contactNo: string, address: string) {
    this.name = name;
    this.age = age;
    this.contactNo = contactNo;
    this.address = address;
  }

  getSleep(hour: number) {
    console.log(`I am ${this.name} and I am sleeping ${hour} hours`);
  }
}

//student Info
class Student extends Person {
  studentId: number;
  constructor(
    name: string,
    age: number,
    studentId: number,
    contactNo: string,
    address: string
  ) {
    super(name, age, contactNo, address);
    this.studentId = studentId;
  }
  getReadBook(bookName: string) {
    console.log(`I am ${this.name} and I am reading ${bookName}`);
  }
}

// Teacher Info

class Teacher extends Person {
  teacherId: number;
  designation: string;

  constructor(
    name: string,
    age: number,
    teacherId: number,
    contactNo: string,
    address: string,
    designation: string
  ) {
    super(name, age, contactNo, address);
    this.teacherId = teacherId;
    this.designation = designation;
  }

  getClass(count: number) {
    console.log(`Today ${this.name} is giving ${count} classes`);
  }
}

const student1 = new Student("Hamim", 20, 123, "017", "Dhaka");
const teacher1 = new Teacher("Rakib", 20, 123, "017", "Dhaka", "Teacher");

student1.getSleep(8);
teacher1.getClass(4);
