import '../styles/globals.css';
import Layout from '../components/Layout';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress color='#5437DC' />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
