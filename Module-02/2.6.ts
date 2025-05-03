{
  //Generic Array Function
  const user = (p: string): string[] => {
    return [p];
  };

  const user1 = <T extends { name: string; age: number; address: string }>(
    p: T
  ): T[] => {
    return [p];
  };
  //   type User = {
  //     name: string;
  //     age: number;
  //     address: string;
  //   };
  const result = user1({ name: "Hamim", age: 20, address: "Dhaka" });
  const result22 = user1({
    name: "Hamim",
    age: 20,
    isMerred: true,
    address: "Dhaka",
    isWan: true,
  });
  console.log(result, result22);

  //Generic Tuple Function
  const user2 = <X extends {roll: number}, Y>(p1: X, p2: Y): [X, Y] => {
    return [p1, p2];
  };
//   interface User2 {
//     name: string;
//     age: number;
//     address: string;
//   }
  const result2 = user2({roll:43}, {
    name: "Hamim",
    age: 20,
    address: "Dhaka",
  });
  console.log(result2);
}
