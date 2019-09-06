interface SizesInterface {
  availableSizes: string[];
}

interface PizzaInterface {
  readonly name: string;
  toppings: string[];
  updateSizes(sizes: string[]): void;
  addTopping(topping: string): void;
}

abstract class Sizes implements SizesInterface {
  constructor(protected sizes: string[]) {}

  public set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }
  public get availableSizes() {
    return this.sizes;
  }
}

class Pizza extends Sizes implements PizzaInterface {
  public toppings: string[] = [];

  constructor(readonly name: string, public sizes: string[]) {
    super(sizes);
  }

  public addTopping(topping: string) {
    this.toppings = [...this.toppings, topping];
  }

  public updateSizes(sizes: string[]) {
    this.sizes = sizes;
  }
}

class Coupon {
  public static allowed = ["Peperoni", "Blazing"];

  static create(percentage: number) {
    return `PIZZA _ RESTOURANTE _ ${percentage}`;
  }
}

export default (): void => {
  const pizza = new Pizza("Peperoni", ["small"]);
  pizza.addTopping("Peperoni");
  console.log(pizza.availableSizes);

  pizza.updateSizes(["large"]);
  console.log(pizza.availableSizes);
  console.log(Coupon.allowed);
  console.log(Coupon.create(25));
};
