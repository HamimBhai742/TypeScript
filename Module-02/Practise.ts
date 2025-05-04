{
  {
    //well come messange
    const wellComeMessange: string =
      "Hello World, I will complete this course successfully and become a Next level Web Developer!";
    console.log(wellComeMessange);

    //Create Function
    type User = (
      name: string,
      age: number,
      role?: "admin" | "user" | "guest"
    ) => string;
    const getMessage: User = (name, age, role) => {
      return `Hello ${name} your age is ${age} and your role is ${role}`;
    };
    console.log(getMessage("Hamim", 20, "admin"));
  }

  // type alias

  type Person = {
    name: string;
    address: string;
    hairAndEyeColor: string;
    incomeAndExpenses: number;
    hobbies: string[];
    familyMembers: number;
    Jobs: string;
    skils: string[];
    maritalStatus: boolean;
    friends: string[];
  };

  const person: Person = {
    name: "Hamim",
    address: "Dhaka",
    hairAndEyeColor: "Black",
    incomeAndExpenses: 100000,
    hobbies: ["Coding", "Reading", "Travelling"],
    familyMembers: 2,
    Jobs: "Web Developer",
    skils: ["HTML", "CSS", "JS"],
    maritalStatus: true,
    friends: ["Mithu", "Rakib", "Yuhin", "Rohan", "Sakib", "Asraful"],
  };

  //Union and Intersection Types

  type UnionType = "Book" | "Magazine";

  interface Book {
    bookName: string;
  }
  interface Magazine {
    magazineName: string;
    Available: boolean;
  }
  type IntersectionType = Book & Magazine;

  const uniounType: UnionType = "Magazine";

  const intersectionType: IntersectionType = {
    bookName: "Book Name",
    magazineName: "Magazine Name",
    Available: true,
  };

  //Function Type

  type FunctionType = (name: string) => string;

  const functionType: FunctionType = (name) => {
    return ` ${name.split("").reverse().join("")}`;
  };

  // console.log(functionType("hello"));

  //Spread and Rest Operators, Destructuring
  type Sum = (...numbers: number[]) => string;
  const sum: Sum = (...numbers) => {
    return `Total sum is ${numbers.reduce((a, b) => a + b)}`;
  };
  console.log(sum(10, 20, 30, 40, 50));

  //Type Assertion and Narrowing

  type StringOrNumber = (value: string | number) => number;
  const getResult: StringOrNumber = (value) => {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * value;
    }
  };
  // console.log(getResult("hanmim"));

  //: Intersection Types

  //user
  type User2 = {
    name: string;
    email: string;
  };
  //admin
  type Admin = {
    name: string;
    email: string;
    adminLevel: string;
  };
  //intersection
  type AdminUser = User2 & Admin;

  const describeAdmin = (userData: AdminUser) => {
    return userData;
  };
  const adminUser: AdminUser = {
    name: "Hamim",
    email: "mdhamim@gmail.com",
    adminLevel: "Super Admin",
  };

  // console.log(describeAdmin(adminUser));

  //Optional Chaining
  interface Employee {
    name: string;
    email: string;
    address?: {
      city?: string;
      country?: string;
      road?: number;
    };
  }

  const employee = {
    name: "Hamim",
    email: "mdhamim@gmail.com",
    address: {
      city: "Comilla",
      country: "Bangladesh",
      road: 423,
    },
  };
  function getEmployeeCity(employee: Employee): number | undefined {
    return employee.address?.road;
  }

  // console.log(getEmployeeCity(employee));

  //Nullish Coalescing

  const getDisplayName = (name: string | null | undefined) => {
    return name ?? "Anonymous";
  };
  console.log(getDisplayName(null));

  //Unknown Type

  const processData = (data: unknown) => {
    if (typeof data === "string") {
      return data.toUpperCase();
    } else if (typeof data === "number") {
      return data * data;
    } else {
      return "Invalid Input";
    }
  };
//   console.log(processData([87]));
}
