import Head from "next/dist/shared/lib/head";
import ResumeTechnologiesGrid from "../components/ResumeTechnologiesGrid";
import ResumeTechnologiesGroup from "../components/ResumeTechnologiesGroup";
import ResumeTechnologiesItem from "../components/ResumeTechnologiesItem";
import ResumeTimelineItem from "../components/ResumeTimelineItem";
import styles from "../styles/resume.module.css";

export enum ResumeGroups {
  ui = "UI",
  api = "RESTful API",
  testing = "Testing",
  tooling = "Tooling",
  devops = "DevOps",
  aws = "AWS",
}

const Resume = () => {
  const showContact =
    process.env.NEXT_PUBLIC_EMAIL && process.env.NEXT_PUBLIC_PHONE;
  return (
    <>
      <Head>
        <title>Resume - Harry</title>
      </Head>
      <main>
        <div className={styles.page}>
          <div className={styles.header}>
            <h1 className="print:hidden">Resume</h1>
            <h1 className="hidden print:block mt-4">Harry Jarman</h1>
            <h2>Software Engineer</h2>
            {showContact ? (
              <div>
                {process.env.NEXT_PUBLIC_EMAIL}
                <br />
                {process.env.NEXT_PUBLIC_PHONE}
              </div>
            ) : null}
          </div>
          <section className="profile">
            <h3>Profile</h3>
            <p>
              A driven, approachable, intelligent individual who is keen to
              continue building upon skills learned so far in their career
              within a team of like minded people, working on interesting and
              challenging projects. As a manager I am devoted to creating and
              maintaining a motivating and relaxed environment, enabling people
              to deliver their best work and grow their skills to move forward
              in their careers.
            </p>
            <p>
              Public examples of my work can be found at{" "}
              <a href="https://harryjms.uk">harryjms.uk</a> and{" "}
              <a href="https://tuckshopuk.com">tuckshopuk.com</a>.
            </p>
          </section>
          <section className="technologies">
            <h3>Technologies</h3>
            <ResumeTechnologiesGrid>
              <ResumeTechnologiesGroup name="UI">
                <ResumeTechnologiesItem
                  image="/assets/react.png"
                  name="React"
                  time="5+ yrs"
                  group={ResumeGroups.ui}
                />
                <ResumeTechnologiesItem
                  image="/assets/nextjs.png"
                  name="NextJS"
                  time="3 yrs"
                  group={ResumeGroups.ui}
                />
                <ResumeTechnologiesItem
                  image="/assets/sass.png"
                  name="SASS"
                  time="5+ yrs"
                  group={ResumeGroups.ui}
                />
                <ResumeTechnologiesItem
                  image="/assets/tailwind.svg"
                  name="Tailwind"
                  time="1 yrs"
                  group={ResumeGroups.ui}
                />
              </ResumeTechnologiesGroup>
              <ResumeTechnologiesGroup name="API/Backend">
                <ResumeTechnologiesItem
                  image="/assets/express-js.png"
                  name="ExpressJS"
                  time="5+ yr"
                  group={ResumeGroups.api}
                />
                <ResumeTechnologiesItem
                  image="/assets/java.png"
                  name="Java"
                  time="3 yrs"
                  group={ResumeGroups.api}
                />
                <ResumeTechnologiesItem
                  image="/assets/nestjs.png"
                  name="NestJS"
                  time="1.5 yr"
                  group={ResumeGroups.api}
                />
              </ResumeTechnologiesGroup>
              <ResumeTechnologiesGroup name="Testing">
                <ResumeTechnologiesItem
                  image="/assets/jest.png"
                  name="Jest"
                  time="5+ yrs"
                  group={ResumeGroups.testing}
                />
                <ResumeTechnologiesItem
                  image="/assets/rtl.png"
                  name="Enzyme/RTL"
                  time="5+ yrs"
                  group={ResumeGroups.testing}
                />
              </ResumeTechnologiesGroup>

              <ResumeTechnologiesGroup name="Tooling">
                <ResumeTechnologiesItem
                  image="/assets/typescript.png"
                  name="Typescript"
                  time="5+ yrs"
                  group={ResumeGroups.tooling}
                />
                <ResumeTechnologiesItem
                  image="/assets/webpack.svg"
                  name="Webpack"
                  time="5+ yrs"
                  group={ResumeGroups.tooling}
                />
                <ResumeTechnologiesItem
                  image="/assets/eslint.png"
                  name="ESLint"
                  time="5+ yrs"
                  group={ResumeGroups.tooling}
                />
              </ResumeTechnologiesGroup>
              <ResumeTechnologiesGroup name="CI/CD">
                <ResumeTechnologiesItem
                  image="/assets/gha.png"
                  name="GitHub Actions"
                  time="2 yrs"
                  group={ResumeGroups.devops}
                />
                <ResumeTechnologiesItem
                  image="/assets/jenkins.png"
                  name="Jenkins"
                  time="4 yrs"
                  group={ResumeGroups.devops}
                />
              </ResumeTechnologiesGroup>
              <ResumeTechnologiesGroup name="Infrastructure">
                <ResumeTechnologiesItem
                  image="/assets/terraform.png"
                  name="Terraform"
                  learning
                  group={ResumeGroups.devops}
                />
                <ResumeTechnologiesItem
                  image="/assets/docker.png"
                  name="Docker"
                  time="5+ yrs"
                  group={ResumeGroups.devops}
                />
                <ResumeTechnologiesItem
                  image="/assets/aws.png"
                  name="AWS"
                  time="4 yrs"
                  group={ResumeGroups.devops}
                />
              </ResumeTechnologiesGroup>
            </ResumeTechnologiesGrid>
          </section>
          <section className="experience">
            <h3>Experience</h3>
            <ol className="relative pl-1 print:pl-0">
              <ResumeTimelineItem
                jobTitle="Software Engineer Team Lead"
                company="Hyper AR"
                dates="Aug 2023 - Present"
                first
              >
                Reponsible for leading the platform team in creating our
                web-based map building tools. Conduct one-to-ones to ensure team
                are happy, motivated and equipped with everything they need to
                excel and recruiting new members of the team to ensure we are
                properly resourced. Work closely with our product manager to
                create our roadmap of work inline with business goals and the
                needs of our mobile team, adapting the roadmap as obstacles
                arise. Since taking up the role, the team has become more
                efficient, delivering new features and fixing bugs quicker and
                more reliably then before. I have also focussed on keeping the
                wider business up-to-date with our progress and when new
                releases are available.
              </ResumeTimelineItem>
              <ResumeTimelineItem
                jobTitle="Software Engineer"
                company="Hyper AR"
                dates="Aug 2022 - Aug 2023"
                first
              >
                As part of the three person platform team, I have delivered new
                features to the ReactJS web portal, built in Typescript and
                utilising the Mapbox library for drawing new GeoJSON features.
                As I work within a small team, we are full stack developers,
                thus building the API endpoints (using NestJS) and DB schemas
                necessary. I write automated tests using the Jest framework and
                React Testing Library. The frontend code is bundled using
                Webpack. Shortly after joining, I suggested we implement
                Terraform for our infrastructure. This was approved and as a
                result I delivered a deployment pipeline for infrastructure and
                code, enabling a more robust process and one where changes are
                easily tracked. We use Github Actions for the CI, Mongo Atlas
                for the DB and currently AWS Elastic Beanstalk for the server
                infrastructure with S3 hosting any media assets such as floorpan
                images for the map.
              </ResumeTimelineItem>
              <ResumeTimelineItem
                jobTitle="Software Engineer"
                company="Citymapper"
                dates="Mar 2022 - Aug 2022"
              >
                Working in the web team, I focussed my efforts on building a
                developer portal to allow third parties to view their usage of
                the Citymapper API and manage their billing information - a
                critical part of their B2B offering. Built using React and
                leveraging the Material UI library, I was able to quickly ship
                the MVP in order to support the company efforts in sourcing more
                funding. As a result of this work. This role also gave me
                exposure to Kubernetes and Terraform.
              </ResumeTimelineItem>
              <ResumeTimelineItem
                jobTitle="Senior Software Engineer"
                company="BBC"
                dates="2019 - Mar 2022"
              >
                I played a key role by leading the front-end development of a
                new system that will be used to submit proposals for radio
                content to BBC commissioners (approximately 3000 active internal
                and external users). I was responsible for the front-end, and
                building a new system from the ground up has allowed me to learn
                new technologies like Typescript, whilst solidifying my existing
                knowledge of React and Redux. I joined a team of engineers who
                specialist in Java, so have spent a considerable amount of my
                time supporting colleagues in learning frontend development. I
                also incorporated Jest and Enzyme to make the project one that
                was TDD based. As I am part of a small team, I have been exposed
                and grown confident in DevOps too, taking ownership of the
                entire frontend development and deployment pipeline.
              </ResumeTimelineItem>
              <ResumeTimelineItem
                jobTitle="Junior Fullstack Developer"
                company="Nectar Loyalty"
                dates="2017 - 2019"
              >
                Working alongside one other developer, I was tasked with
                designing and creating various applications within the suite of
                tools used by various people within the organisation for the
                analysis of loyalty data. The tools were built using React and
                Redux packaged into an Electron desktop App. As we were a team
                of two, we were responsible for the entire stack, which meant
                developing and maintain backend infrastructure also. This was
                powered by an ExpressJS API, MySQL database, with a MongoDb
                instance when millions of rows of loyalty data needed to be
                processed quickly.
              </ResumeTimelineItem>
              <ResumeTimelineItem
                jobTitle="Career Experience"
                company="Apple Inc"
                dates="2016 - 2017"
              >
                A six month placement with the team that supports retail store
                technology, I worked with a colleague to create a prototype for
                a new web based tool to help manage store technology such as
                payment devices, printers and computers. This was my first
                exposure to software development as a job and in the time I
                learnt AngularJS and NodeJS.
              </ResumeTimelineItem>
              <ResumeTimelineItem
                jobTitle="Junior Web Developer"
                company="Karen Millen"
                dates="2014 - 2015"
              >
                My first professional job as a developer saw me work alongside
                the senior developer. I was mainly tasked with building emails
                and updating the website homepage / product category pages.
              </ResumeTimelineItem>
              <ResumeTimelineItem
                jobTitle="Various Roles"
                company="Apple Retail"
                dates="2013 - 2014, 2015 - 2017"
                last
              >
                Spending the majority of my time working on the world famous
                Genius Bar, I would assist customers with issues and technical
                queries adapting my language to suit their understanding with
                the aim of empowering them to continue learning beyond the 15
                minute appointment. I also learnt most other roles within the
                store, from Business Specialist through to Inventory and Genius
                Admin enabling myself to pivot and assist other teams when
                necessary.
              </ResumeTimelineItem>
            </ol>
          </section>
          <section>
            <h3>Education</h3>

            <div>
              <div>
                Plymouth University - BSc Computer Networking 2:1 Honours{" "}
                <span className="text-sm"> • 2011 - 2014</span>
              </div>
            </div>

            <div>
              <div>
                Bexleyheath School - A Levels in Maths, Geography and ICT
              </div>
            </div>

            <div>
              <div>
                Bexleyheath School - 14 A-B grade GCSEs including MAths, English
                and Science
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Resume;
