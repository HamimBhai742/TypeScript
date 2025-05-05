{
  //
  class Counter {
    static count: number = 0;
   static increment() {
      return Counter.count++;
    }
   static decrement() {
      return Counter.count--;
    }
  }
//   const counter1 = new Counter();
  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());
//   const counter2 = new Counter();
  console.log(Counter.decrement());
  console.log(Counter.increment());

//   const counter3 = new Counter();
  console.log(Counter.increment());
    console.log(Counter.increment());
    console.log(Counter.increment());
    console.log(Counter.decrement())
    console.log(Counter.decrement())
  //
}
