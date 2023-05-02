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
        <div className="bio">
          <p>
            I am a Software Engineer currently working at the AR startup{" "}
            <a href="https://hyperar.com" target="_blank">
              Hyper AR
            </a>
            .
          </p>
          <p>
            Spend my time writing ReactJS in Typescript, tested using Jest/RTL.
            Currently spending time learning the world of Kubernetes and
            Terraform.
          </p>
          <p>
            Geeky level of interest in Radio, specifically BBC Radio 1, and
            absolutely adore Sci-Fi. I've seen{" "}
            <a href="https://www.backtothefuturemusical.com/" target="_blank">
              Back to the Future the Musical
            </a>{" "}
            6 times, and counting 🙈.
          </p>
          <p>
            The{" "}
            <a href="https://tuckshopuk.com" target="_blank">
              TuckShop website
            </a>{" "}
            is my side hustle.
          </p>
        </div>
        <p className="mt-8">
          <Socials />
        </p>
      </main>
    </>
  );
};

export default Homepage;
