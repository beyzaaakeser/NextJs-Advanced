import React from 'react';

const getRecipes = async () => {
  const res = await fetch('https://dummyjson.com/recipes');

  return res.json();
};

const Home = async () => {
  const data = await getRecipes();
  console.log(data.recipes)
  return <div>Home</div>;
};

export default Home;
