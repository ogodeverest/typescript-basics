export const anyType = (): void => {
  let coupon;
  coupon = 35;
  coupon = "das";
  coupon = true;
};
export const implicitExplicitTypes = (): void => {
  let implicitCoupon = "25Pizza";
  let explicitCoupon: string;
  explicitCoupon = "25Pizza";
};
export const voidType = (): void => {
  let selectedTopping: string = "peperoni";
  const selectTopping = (topping: string): void => {
    selectedTopping = topping;
  };
  selectTopping("bacon");
  console.log(selectedTopping);
};
export const neverType = (): void => {
  const orderError = (error: string): never => {
    throw new Error(error);
  };
  orderError("Something went wrong");
};
export const nullType = (): void => {
  let coupon: string | null = "pizza25";

  const removeCoupon = (): void => {
    coupon = null;
  };

  console.log(coupon);

  removeCoupon();

  console.log(coupon);
};
export const unionLiteral = (): void => {
  let pizzaSize: string = "small";

  const selectSize = (size: "small" | "medium" | "large"): void => {
    pizzaSize = size;
  };

  selectSize("medium");
  console.log(`Pizza size : ${pizzaSize}`);
};
export const functionType = (): void => {
  let sumOrder: (price: number, quantity?: number) => number;
  sumOrder = (x, y = 1) => {
    return x * y;
  };

  const sum1 = sumOrder(24, 9);
  const sum2 = sumOrder(24);
  console.log(`Sum is : ${sum2}`);
};
export const objectType = (): void => {
  let pizza: { name: string; price: number; getName(): string } = {
    name: "Plain old Pepperoni",
    price: 20,
    getName: () => pizza.name
  };

  console.log(pizza.getName());
};
export const arrayType = (): void => {
  let sizes: string[] = ["small", "medium", "large"];
  let toppings: Array<string>;
  toppings = ["peperonni", "tomato", "bacon"];

  let pizza: [string, number, boolean];
  pizza = ["peperoni", 20, true];
};
export const typeAliases = (): void => {
  type Size = "small" | "medium" | "large";
  type Callback = (size: Size) => void;
  let pizzaSize: Size = "small";

  const selectSize: Callback = x => {
    pizzaSize = x;
  };

  selectSize("small");
};
export const typeAssertions = (): void => {
  type Pizza = { name: string; toppings: number };
  const pizza: Pizza = { name: "blazing", toppings: 3 };
  const serialized = JSON.stringify(pizza);
  const getNameFromJson = (obj: string) => {
    //   <Pizza>
    return (JSON.parse(obj) as Pizza).toppings;
  };

  getNameFromJson(serialized);
};
