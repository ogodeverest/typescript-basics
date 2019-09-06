export default (): void => {
  const pizzas = [{ name: "peperono", toppings: ["peperoni"] }];

  const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

  console.log(mappedPizzas);
};
