{
  let anything: any;
  anything = 10.45656;
  let hi = (anything as number).toFixed(2);
  console.log(hi);

  const kmTomi = (value: string | number): string | number => {
    if (typeof value === "string") {
      return `This cvalo is ${parseFloat(value) * 1000}`;
    }
    return value * 1000;
  };
    const result1 = kmTomi("10") as string;
    const result2= kmTomi(10) as number;
    console.log(result1,result2)
}
