{
  // instanceof guard
  class Bkie {
    brand: string;
    engineCapacity: number;
    constructor(brand: string, engineCapacity: number) {
      this.brand = brand;
      this.engineCapacity = engineCapacity;
    }
    selfStart() {
      console.log(`Self start is working ${this.brand}`);
    }
  }

  class Bike1 extends Bkie {
    name: string;
    constructor(name: string, brand: string, engineCapacity: number) {
      super(brand, engineCapacity);
      this.name = name;
    }
    crazyBiker() {
      console.log(`Crazy Biker is working ${this.name}`);
    }
  }

  class Bike2 extends Bkie {
    model: string;
    constructor(model: string, brand: string, engineCapacity: number) {
      super(brand, engineCapacity);
      this.model = model;
    }
    smootBiker() {
      console.log(`Smoot Biker is working ${this.model}`);
    }
  }

  const bike1 = new Bike1("Tvs 4V ABS", "Apache", 160);
  const bike2 = new Bike2("Royal Enfield Bulet", "Royal Enfield", 300);

  //Smart way
  const isBike1 = (bike: Bkie) => {
    return bike instanceof Bike1;
  };
  const isBike2 = (bike: Bkie) => {
    return bike instanceof Bike2;
  };

  const getResult = (bike: Bkie) => {
    //normal
    // bike instanceof Bike1
    if (isBike1(bike)) {
      bike.crazyBiker();
    } else if (isBike2(bike)) {
      bike.smootBiker();
    } else {
      bike.selfStart();
    }
  };

  getResult(bike2);
}
