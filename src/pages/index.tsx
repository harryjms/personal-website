import Head from "next/head";
import Socials from "../components/Socials";
const Homepage = ({ isApple }) => {
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
            {isApple ? <>Ex-Apple Genius turned</> : <>A</>} software Tech Lead
            based in Manchester, currently working at the digital agency,{" "}
            <a href="https://corporationpop.co.uk" target="_blank">
              Corporation Pop
            </a>
            .
          </p>
          <p>
            I am passionate about enriching people's lives through thoughtful
            use of technology, making products that are reliable and accessible.
          </p>
          <p>
            Geeky level of interest in Radio, volunteering with{" "}
            <a href="https://gaydio.co.uk" target="_blank">
              Gaydio
            </a>
            , and absolutely adore Sci-Fi. I've seen{" "}
            <a href="https://www.backtothefuturemusical.com/" target="_blank">
              Back to the Future the Musical
            </a>{" "}
            9 times, and counting 🙈.
          </p>
        </div>
        <p className="mt-8">
          <Socials />
        </p>
      </main>
    </>
  );
};

export function getServerSideProps({ req }) {
  const forwarded = req.headers["x-forwarded-for"];
  const ip = forwarded
    ? forwarded.split(/, /)[0]
    : req.connection.remoteAddress;
  return {
    props: {
      isApple: ip.startsWith("17."),
    },
  };
}

export default Homepage;
