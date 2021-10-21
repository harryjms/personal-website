import React from "react";
import RadioPlayer from "../components/RadioPlayer";
import Head from "next/head";

const Radio = () => {
  return (
    <>
      <Head>
        <title>Radio - Harry</title>
      </Head>
      <main>
        <h1>Radio.</h1>
        <div>
          <p>This is my little radio station.</p>
          <RadioPlayer shortcode="radio_east" />
        </div>
      </main>
    </>
  );
};

export default Radio;
