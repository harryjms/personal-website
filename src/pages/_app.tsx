import React from "react";
import type { AppProps } from "next/app";
import Navigation from "../components/Navigation";
import "../styles/global.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
};

export default App;
