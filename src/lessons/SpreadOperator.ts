export default (): void => {
  const toppings = ["bacons", "chilli"];

  const newToppings = ["Peps"];

  const allToppings = [...toppings, ...newToppings];

  console.log(allToppings);
};
