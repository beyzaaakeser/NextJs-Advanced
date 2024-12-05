export const getRecipes = async () => {
  const res = await fetch('https://dummyjson.com/recipes');

  return res.json();
};
