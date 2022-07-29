import Head from "next/head";
import CVSection from "../components/CVSection";

const CV = () => {
  return (
    <>
      <Head>
        <title>Harry Jarman - CV</title>
      </Head>
      <main className="md:max-w-prose">
        <h1 className="mb-2">Harry Jarman</h1>
        <h2>Software Engineer</h2>
        <CVSection title="Profile">
          <p>
            A proficient React/Typescript developer, having spent the last 5
            years working in web development. Ambitious, driven and passionate,
            I am keen to share my knowledge to help peers grow, whilst also
            developing my skills further through new and interesting challenges,
            in an environment that encourages learning, career development and
            celebrates success.
          </p>
        </CVSection>
        <CVSection title="Experience">
          <ol>
            <li>
              <div className="company">Citymapper</div>
              <div className="job-title">Software Engineer</div>
              <div className="time">March 2022 - Present</div>
              <p>
                Working in the web team, I have worked alongside in-house
                designed to deliver the MVP for the Enterprise Dashboard - a
                self service portal for developers to manage their billing and
                API keys for the Citymapper API written in React, Typescript,
                utilising the Mui UI library and running tests via Jest and
                React Testing Library. Following this, I started work on
                creating the Web SDK package, that will be used by the
                aforementioned developers that wish to use Citymapper routing in
                their web applications. This is written again in React and
                Typescript, and uses Storybook for prototyping and testing the
                various components. Finally, in my time at the company so far, I
                have supported the migration of our CI pipelines from CircleCI
                to Github actions, giving me understanding of the tools, but
                also other technology such as Terraform and Kubernetes.
              </p>
            </li>
          </ol>
        </CVSection>
      </main>
    </>
  );
};

export default CV;
