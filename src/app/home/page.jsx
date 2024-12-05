import React from 'react';

const getRecipes = async () => {
  const res = await fetch('https://dummyjson.com/recipes');

  return res.json();
};

const Home = async () => {
  const data = await getRecipes();
  console.log(data.recipes);
  return (
    <div className="px-10 py-20 text-xl">
      <h1 className="text-center">Recipes</h1>
      <div>
        {data.recipes.map((item) => (
          <div key={item.id} className="border p-2 rounded-md my-5">
            <h2 className="font-bold text-amber-500">{item.name}</h2>
            <p>{item.cuisine}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
