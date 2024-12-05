import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="px-10 py-5 border-b shadow flex justify-between">
      <h1>NEXT.JS</h1>

      <nav className="flex gap-5">
        <Link href={'/'}>Ana Sayfa</Link>
        <Link href={'/recipes'}>Recipes</Link>
        <Link href={'/iletisim'}>İletişim</Link>
      </nav>
    </header>
  );
};

export default Header;
