import React from "react";
import Navigation from "../components/Navigation";
import "../styles/global.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
};

export default App;
