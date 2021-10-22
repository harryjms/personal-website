import React from "react";
import RadioPlayer from "../components/RadioPlayer";
import Head from "next/head";
import Navigation from "../components/Navigation";

const Radio = () => {
  return (
    <>
      <Head>
        <title>Radio - Harry</title>
      </Head>
      <main>
        <h1>Radio.</h1>
        <RadioPlayer shortcode="radio_east" />
      </main>
    </>
  );
};

export default Radio;
