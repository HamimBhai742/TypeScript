type a = undefined;
type b = null;
type c = string;
type d = number;
type e = boolean;
type f = bigint;
type g = symbol;
type h = object;
type i = unknown;
type j = never;

type isMerried = c extends number ? true : h extends null ? true : false;

type User = {
  name: string;
  address: string;
  bike: string;
  car: string;
  plane: string;
};

type HisRich<T> = T extends keyof User ? true : "fokir";

type Cheack = HisRich<"plane">;
