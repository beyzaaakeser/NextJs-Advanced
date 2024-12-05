import React from 'react';
import { getRecipes } from '../utils';

/* tarifler sayfası static bir sayfa olduğunda dolayı build anında olulturulur
 api isteğini build anında atar ve kullanıcı her sayfaya girdiğinde build anında
  oluşturulan htmli görür ama sayfaya bağlı olarak belirli aralıklara sayfanın 
  güncel kalmasını sağlamak için revalidate özelliğini kullanırız burada verdiğimiz 
  süre sonunda bu sayfaya girildiğinde build anında oluşturulan içerğii görüntülemek 
  yerine tekrardan sayfa oluşturulur tekrardan api isteği atılır */
export const revalidate = 3600;

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
