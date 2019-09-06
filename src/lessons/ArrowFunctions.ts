export default (): void => {
  const pizzas = [{ name: "peperono", toppings: ["peperoni"] }];

  const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

  console.log(mappedPizzas);

  const pizza = {
    name: "Blazing Inferno",
    getName: () => pizza.name
  };

  console.log(pizza.getName());

  const multiply = (a: number, b: number = 25) => a * b;

  console.log(multiply(5));
};
