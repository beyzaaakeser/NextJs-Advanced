import React from 'react';
import Label from '../components/label/page';
import Input from '../components/input/page';

const Iletisim = () => {
  console.log('iletisişim render edildi');
  return (
    <div className="text-4xl text-center my-40">
      <h1>İletişim sayfası</h1>
      <span className="bg-blue-500 px-3 py-1 rounded-md text-base font-semibold">
        Server component
      </span>

      <p className="text-[16px] px-10">
        Eğer ileitişim sayfasını yani kapsayıcıyı client server yaparsan, child
        componentler otomatik client component haline gelir üzerine gidip "use
        client" yazmasan dahi. Yani iletişim sayfasını client component
        yaparsan, label da otomatik client componente döner
      </p>

      <div className="mt-10 flex flex-col gap-5">
        <Label />
        <Input />
      </div>
    </div>
  );
};

export default Iletisim;
