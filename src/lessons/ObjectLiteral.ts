export default (): void => {
  const pizza = {
    name: "Pep",
    price: 15,
    getName() {
      return this.name;
    }
  };

  console.log(pizza.getName());

  const toppings: Array<String> = ["peperoni"];

  const createOrder = (pizza: any, toppings: any) => {
    return {
      pizza,
      toppings
    };
  };
  console.log(createOrder(pizza, toppings));
};
