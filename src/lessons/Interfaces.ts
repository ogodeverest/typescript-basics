export default (): void => {
  interface Sizes {
    sizes: string[];
  }
  interface Pizza extends Sizes {
    name: string;
    toppings?: number;
    getAvaliableSizes: () => string[];
    [key: number]: string;
  }
  let pizza: Pizza;
  const createPizza = (name: string, sizes: string[]): Pizza => {
    return {
      name,
      sizes,
      toppings: 1,
      getAvaliableSizes: () => {
        return pizza.sizes;
      }
    };
  };
  pizza = createPizza("Peperoni", ["small", "medium"]);
  pizza.toppings = 1;
  pizza[0] = "css";
};
