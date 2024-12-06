import localFont from 'next/font/local';
import './assets/globals.css';
import Header from './components/header';

// Google Fontstan font çekme
import { Poppins } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400'],
});

// Localden font çekme
export const geistSans = localFont({
  src: './assets/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
export const geistMono = localFont({
  src: './assets/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const winterHalf = localFont({
  src: './assets/fonts/Winter Half.ttf',
  variable: '--font-winter-half',
  weight: '100 900',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      style={poppins.style}
        className={`${geistSans.variable} ${geistMono.variable}  ${winterHalf.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
