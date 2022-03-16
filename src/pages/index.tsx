import Head from 'next/head';
import React from 'react';
import { Container, Icon } from '../styles/pages/Home';




export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
      </Head>

        <Icon />
        <h1>ReactJs Structure</h1>
        <p>A ReactJs + NextJs structure made by Joao Gomes 👋</p>

    </Container>
  );
}




