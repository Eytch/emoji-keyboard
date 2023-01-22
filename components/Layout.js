import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className=' container mx-auto px-4 lg:px-16'>
      <Head>
        <title>Emoji Keyboard</title>
        <meta name='description' content='Emoji Keyoboard' />
        <meta name='theme-color' content='#161819' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
      <div className='flex justify-center items-center text-sm pb-3'>
        <span className='text-white opacity-70 text-center'>
          Made with ❤️ from Egypt
        </span>
      </div>
    </div>
  );
}
