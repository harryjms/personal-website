import Head from "next/head";
import Socials from "../components/Socials";
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
        <p>
          I am a Software Engineer at{" "}
          <span className="text-dent hover:underline">
            <a href="https://dentreality.com" target="_blank">
              Dent Reality
            </a>
          </span>
          .
        </p>
        <p>Previously, I was a Software Engineer at the BBC and Citymapper.</p>
        <p className="mt-8">
          <Socials />
        </p>
      </main>
    </>
  );
};

export default Homepage;
