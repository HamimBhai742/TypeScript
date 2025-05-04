{
  // Mapped type
  type Numbers = {
    one: number;
    two: number;
    three: number;
    four: number;
  };

  type Strings = {
    [key in keyof Numbers]: string;
  };

  type Boolean<T> = {
    [key in keyof T]: T[key];
  };

  type two = Strings["two"];

  const Boo: Boolean<{
    name: string;
    age: number;
    address: string;
    isMerried: boolean;
  }> = {
    name: "Hamim",
    age: 56,
    address: "Dhaka",
    isMerried: true,
  };
}
