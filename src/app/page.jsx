import React from 'react';
import Image from 'next/image';
import manzara from './assets/manzara.jpg';

const Home = () => {
  const url =
    'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400';

  return (
    <div className="text-2xl font-semibold p-10 flex flex-col gap-10">
      <h1>Anasayfa</h1>
      <div>
        <h1>Local Resim </h1>
        <Image src={manzara} alt="manzara 1" quality={100} priority={1} placeholder='blur' />
      </div>
      <div>
        <h1>Remote Resim </h1>
        <Image src={url} width={250} height={500} alt="manzara 1" priority={3}  />
      </div>
      <div>
        <h1>Remote Resim Full Genişlik </h1>
        <div className="relative h-[300px] ">
          <Image src={url} fill alt="manzara 1" priority={2}  />
        </div>
      </div>
    </div>
  );
};

export default Home;
