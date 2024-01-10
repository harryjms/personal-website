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
            {isApple ? <>Ex-Apple Genius turned</> : <>I am a</>} Software
            Engineer Team Lead currently working at the AR startup{" "}
            <a href="https://hyperar.com" target="_blank">
              Hyper AR
            </a>
            .
          </p>
          <p>
            Spend my time writing ReactJS in Typescript, tested using Jest/RTL
            calling an API built with NestJS + MongoDB database.
          </p>
          <p>
            I am passionate about enriching people's lives through thoughtful
            use of technology, making products that are reliable and accessible.
          </p>
          <p>
            Geeky level of interest in Radio, specifically BBC Radio 1, and
            absolutely adore Sci-Fi. I've seen{" "}
            <a href="https://www.backtothefuturemusical.com/" target="_blank">
              Back to the Future the Musical
            </a>{" "}
            7 times, and counting 🙈.
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
