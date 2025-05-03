{
  // const numbers: Array<number> = [434, 434, 54];
  // const names: Array<string> = ['Hamim', 'Mithu', 'Rakib'];

  //Generic type
  type GenericArray<T> = Array<T>;

  const numbers1: GenericArray<number> = [434, 434, 54];
  const names1: GenericArray<string> = ["Hamim", "Mithu", "Rakib"];
  console.log(numbers1, names1);

  const users: GenericArray<{
    name: string;
    age: number;
    isMarried: boolean;
    city: string;
  }> = [
    {
      name: "Hamim",
      age: 20,
      isMarried: false,
      city: "Dhaka",
    },
    {
      name: "Asraful",
      age: 30,
      isMarried: true,
      city: "Rajshahi",
    },
    {
      name: "Rakib",
      age: 40,
      isMarried: true,
      city: "Rajshahi",
    },
  ];
  console.log(users);

  //Genric Tuple
  type GenericTuple<X, Y, Z> = [X, Y, Z];
  const user: GenericTuple<
    string,
    number,
    { role: string; contactNo: string }
  > = [
    "Hamim",
    20,
    {
      role: "Admin",
      contactNo: "01700000000",
    },
  ];
  console.log(user);
}
