import Head from 'next/head';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import Grid from '../components/Grid';
import styles from '../styles/Home.module.css';

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://emoji-api.com/categories/symbols?access_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  return {
    props: {
      emojis: data,
    },
  };
}

function symbols({ emojis }) {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-4 '>
      <div className='col-span-1 md:col-span-1 lg:col-span-1'>
        <Sidebar />
      </div>
      <div className='col-span-1 md:col-span-3 lg:col-span-3'>
        <Grid data={emojis} />
      </div>
    </div>
  );
}

export default symbols;
