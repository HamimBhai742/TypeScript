{
  //Generic Array Function
  const user = (p: string): string[] => {
    return [p];
  };

  const user1 = <T>(p: T): T[] => {
    return [p];
  };
  type User = {
    name: string;
    age: number;
    address: string;
  };
  const result = user1<User>({ name: "Hamim", age: 20, address: "Dhaka" });
  console.log(result);

  //Generic Tuple Function
  const user2 = <X, Y>(p1: X, p2: Y): [X, Y] => {
    return [p1, p2];
  };
  interface User2 {
    name: string;
    age: number;
    address: string;
  }
  const result2 = user2<string, User2>("Hamim", {
    name: "Hamim",
    age: 20,
    address: "Dhaka",
  });
  console.log(result2);
}
