import Head from 'next/head';
import React from 'react';
import UnizonLogo from '../assets/image.svg';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <UnizonLogo />
        <h1>Hello World</h1>
      </main>

    </div>
  );
}




