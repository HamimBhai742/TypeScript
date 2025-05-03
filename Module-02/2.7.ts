{
  type Vechile = {
    bike: string;
    car: string;
    biman: string;
    helicaptar: string;
  };
  type Ow2 = "bike" | "car" | "biman" | "helicaptar";
  type Ow = keyof Vechile;

  const ow: Ow = "bike";

  const getGari = <X, Y extends keyof X>(gari: X, key: Y) => {
    return gari[key];
  };
//   const ga = {
//     name: "Apache",
//     model: "4V",
//     color: "Black",
    //   };
     const ga = {
       name: "Apache",
       CC: "160cc",
       color: "Black",
     };
  const result = getGari(ga, "CC");
  console.log(result);
}
