{
  // Pick

  type User = {
    name: string;
    age: number;
    address: string;
    bike?: string;
    car: string;
    plane?: string;
  };

  type PickName<T> = Pick<User, "name" | "address">;

  // Omit
  type OmitNameAndAdress = Omit<User, "name" | "address">; // pick er biporit

  //Required
  type RequiredUser = Required<User>;
  // Partial
  type PartialUser = Partial<User>;

  const User: OmitNameAndAdress = {
    // name: "Hamim",
    age: 20,
    // address: "Dhaka",
    car: "Benz",
    plane: "Airbus",
    bike: "Honda",
  };

  type RecordUser = Record<string, unknown>;

  const user2: RecordUser = {
    name: "Hamim",
    age: 29,
    address: "Dhaka",
    car: "Benz",
    plane: "Airbus",
    bike: true,
  };
}
