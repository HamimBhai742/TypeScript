{
  //Type Gurad

  type Add = (num1: number | string, num2: number | string) => number | string;
  const add: Add = (num1, num2) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
      return num1 * num2;
    } else {
      return num1.toString() + num2.toString();
    }
  };
  // console.log(add("3", 32))

  //In Gurad

  type NormslUser = {
    name: string;
    email: string;
  };
  type AdminUser = {
    name: string;
    email: string;
    role: "Admin";
  };

  function logUser(user: NormslUser | AdminUser) {
    if ("role" in user) {
      console.log(
        `Admin User name: ${user.name}, email: ${user.email}, role: ${user.role}`
      );
    } else {
      console.log(`Normal User name: ${user.name}, email: ${user.email}`);
    }
  }
  const adminUser: AdminUser = {
    email: "mdhamim@gmail.com",
    name: "Hamim",
    role: "Admin",
  };
  const normalUser: NormslUser = {
    email: "mdhamim@gmail.com",
    name: "Hamim",
  };

  logUser(adminUser);
}
