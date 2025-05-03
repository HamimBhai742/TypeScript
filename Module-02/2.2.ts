{
  type User1 = {
    name: string;
    amount: number;
  };
  type User2 = User1 & {
    income: number;
  };

  const user: User2 = {
    name: "Hamim",
    amount: 10000,
    income: 9000,
  };

  type Number = number[];
  const numbers: Number = [10, 20, 30];
  console.log(numbers);

  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add2 = (num1, num2) => num1 + num2;
  console.log(add(74, 53));
}
