import React from "react";
import Head from "next/head";
const Homepage = () => {
  return (
    <>
      <Head>
        <title>Harry</title>
      </Head>
      <main>
        <h1>Hello, I'm Harry.</h1>
        <p>
          Welcome to my little corner of the internet. I'll add some stuff here
          eventually, but for now it's just a landing page.
        </p>
        <h2>About me</h2>
        <p>
          I am a Software Engineer living in London and working at the BBC on
          products that help power radio.
        </p>
      </main>
    </>
  );
};

export default Homepage;
