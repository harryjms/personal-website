import Head from "next/head";
import Socials from "../components/Socials";
const Homepage = () => {
  return (
    <>
      <Head>
        <title>Harry</title>
      </Head>
      <main className="container">
        <h1>Hello, I'm Harry.</h1>
        <p>Welcome to my corner of the internet!</p>
        <p>
          I am a Software Engineer currently working at the AR startup{" "}
          <a href="https://dentreality.com" target="_blank">
            Dent Reality
          </a>
          .
        </p>
        <p className="mt-8">
          <Socials />
        </p>
      </main>
    </>
  );
};

export default Homepage;
