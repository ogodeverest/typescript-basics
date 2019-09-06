export default (): void => {
  interface Pizza {
    name: String;
    toppings: String[];
  }
  const pizza: Pizza = {
    name: "peperoni",
    toppings: ["peperoni"]
  };

  const order = ({ name: pizzaName, toppings: pizzaTopings }: Pizza) => {
    return { pizzaTopings, pizzaName };
  };

  const { pizzaName: name } = order(pizza);
  console.log(name);

  const toppings: String[] = ["mashrooms", "tiny meatballs", "bacon"];

  const [first, second, third] = toppings;
  console.log(first, second, third);

  const logToppings = ([first, second, third]: String[]) => {
    console.log(first, second, third);
  };
  logToppings(toppings);
};
