import React from "react";
import RadioPlayer from "../components/RadioPlayer";

const Radio = () => {
  return (
    <main>
      <h1>Radio.</h1>
      <div>
        <p>
          This is my little radio station. If I'm broadcasting, you can listen
          here.
        </p>
        <RadioPlayer shortcode="radio_east" />
      </div>
    </main>
  );
};

export default Radio;
