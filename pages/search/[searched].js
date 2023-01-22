import React from 'react';
import Grid from '../../components/Grid';
import Sidebar from '../../components/Sidebar';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const { searched } = context.query;
  const res = await fetch(
    `https://emoji-api.com/emojis?search=${searched}&access_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  return {
    props: {
      emojis: data,
      searchedWord: searched,
    },
  };
}

function searched({ emojis, searchedWord }) {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-4 '>
      <div className='col-span-1 md:col-span-1 lg:col-span-1'>
        <Sidebar />
      </div>
      <div className='col-span-1 md:col-span-3 lg:col-span-3'>
        {emojis ? (
          <Grid data={emojis} />
        ) : (
          <h3>
            No Results found for <i>&quot;{searchedWord}&quot;</i>
          </h3>
        )}
      </div>
    </div>
  );
}

export default searched;
