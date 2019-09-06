export const numbers = (): void => {
  const pizzaCost: number = 15;
  const pizzaToppings: number = 2;

  const calculatePrice = (cost: number, toppings: number): number => {
    return cost + 1.5 * toppings;
  };

  const cost: number = calculatePrice(pizzaCost, pizzaToppings);
  console.log(`Pizza costs : ${cost}`);
};

export const strings = (): void => {
  const coupon: string = "25Pizza";

  const normalizeCoupon = (code: string): string => {
    return code.toUpperCase();
  };

  const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;

  console.log(couponMessage);
};

export const booleans = (): void => {
  const pizzas: number = 5;

  const offerDiscount = (orders: number): boolean => {
    return orders >= 3;
  };

  if (offerDiscount(pizzas)) {
    console.log(`You won a discount!`);
  } else {
    console.log(`You need to buy more than 3 pizzas to win a dsicount!`);
  }
};
