{
  interface User<T, T1 = null> {
    name: string;
    age: number;
    isBig: boolean;
    address: T;
    bike?: T1;
  }
  interface Address {
    city: string;
    country: string;
    roadNumber: number;
  }

  const user1: User<Address> = {
    name: "Tamim Pro",
    age: 90,
    isBig: false,
    address: {
      city: "Dhaka",
      country: "Bangladesh",
      roadNumber: 986,
    },
  };
  type Address2 = {
    city: string;
    country: string;
    road: string;
  };
  interface Bike {
    model: string;
    color: string;
  }
  const user2: User<Address2, Bike> = {
    name: "Tamim Pro",
    age: 90,
    isBig: false,
    address: {
      city: "Dhaka",
      country: "Bangladesh",
      road: "Gabtoli 7A",
    },
    bike: {
      model: "Apache 4v 160cc",
      color: "Black",
    },
  };
}
