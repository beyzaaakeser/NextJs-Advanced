import { getRecipes } from '@/app/utils';
import Link from 'next/link';
import React from 'react';

const Header = async () => {
  // tarifler sayfasında yağtığımız api isteği sonucunda elde ettiğimiz tarif verisine bu bileşende de ihtiyacımız oldu bu noktada bu bileşende de api isteği attık
  // api isteklerinden sadece biri gerçekten api'a giidecek diğeri ilk istekten gelen cevabı kullanıcak
  // const data = await getRecipes();
  const data = await getRecipes();

  return (
    <header className="px-10 py-5 border-b shadow flex justify-between">
      <h1>NEXT.JS</h1>

      <nav className="flex gap-5">
        <Link href={'/'}>Ana Sayfa</Link>
        <Link href={'/recipes'}>Tarifler ({data.recipes.length}) </Link>
        <Link href={'/article'}>Makaleler </Link>
        <Link href={'/iletisim'}>İletişim</Link>
      </nav>
    </header>
  );
};

export default Header;
