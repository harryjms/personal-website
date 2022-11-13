const CV = () => {
  return (
    <main>
      <div className="bio">
        <h1>My career, so far...</h1>
        <section>
          <h2 className="section-title">Beginning</h2>
          <p>
            Currently a Software Engineer at{" "}
            <a href="https://dentreality.com" target="_blank">
              Dent Reality
            </a>
            , my interest in web development started from my curiosity of how
            things work. As a child, I would often take about various
            electronics, simultaneously upsetting my parents when I couldn't
            quite put them back together.
          </p>

          <p>
            In my early teen years I, along with millions of other teenagers,
            signed up to Habbo Hotel - an online virtual space where teenagers
            could meet and chat. From this, I discovered "fansites" which often
            consisted of a Forum and online radio station. Fascinated by both, I
            started to dig how this was possible.
          </p>
          <p>
            My curiosity led me to begin learning PHP and MySQL, along with HTML
            and CSS. This resulted in me creating my own rudimentary social
            network where people could register for an account, send private
            messages and write posts in a custom built forum etc. I paired this
            with an online SHOUTCast stream that myself and various friends
            would often broadcast our own radio shows. It was safe to say, I
            found two true passions - web development and radio. At the age of
            14, I started studying for GCSE's so took the decision to close my
            website in order to focus.
          </p>
        </section>
        <section>
          <p>
            <h2 className="section-title">University</h2>
            When it was time, I decided to go to Plymouth Unviersity where I
            studying Computer Networking. I selected this course as at the time
            I was not entire convinced I wanted a career in software
            engineering, and networking was a particular interest at the time.
          </p>
          <p>
            I went to university, and immediately joined the Student Radio,
            UPSU:Radio. In my three years of study, I played a key role in the
            running of the station, creating my own show with my friend, helping
            construct and maintain the studio technology and vitally, was given
            ownership over the website and subsequently the creationg of the
            membership management system. This system enabled us to keep track
            of society memberships, send out emails, update the website etc. It
            was build in PHP and MySQL and used Bootstrap for UI.
          </p>
        </section>
        <section>
          <h2 className="section-title">Apple</h2>
          <p>
            During my second year of study, Apple opened a store in town. I
            applied and was there for opening as a Specialist. Already an Apple
            fan, I fell in love with the company culture and thrived in my time
            there, spending as much time at work as I could - something I didn't
            think anyone would do voluntarily. I quickly progressed from
            Specialist to Technical Specialist, where I started assisting people
            with technical questions and issues on the Genius Bar. My desire to
            understand everything also meant I would spend time with colleagues
            learning their role - making myself somewhat of a swiss army knife
            in the store, able to fill any shoes when needed.
          </p>
          <p>
            I went on to a Career Experience within the IS&T Retail team, where
            I worked alongside a permanent member of the team in building a
            proof of concept for an idea we had. The poc was an iPad app we
            built in Angular. While nothing came of the app in my six months
            with the team, the idea would go a few years later to become a fully
            fledge app used in Apple Stores globally for the monitoring and
            troubleshooting of in store use hardware. This CE gave me the taste
            of software engineering as a career and at was at this moment I
            wanted to do just that.
          </p>
        </section>
        <section>
          <h2 className="section-title">Nectar Loyalty</h2>
          <p>
            After 3 years at Apple, I was given the opportunity to join{" "}
            <a href="https://www.nectar360.co.uk/" target="_blank">
              Nectar Loyalty
            </a>{" "}
            as a Junior Fullstack Engineer. I worked in a two-man team, creating
            internal tools to give analysts better insights into the data and
            create campaigns. We built an Electron App, using ReactJS, Redux and
            MongoDB.
          </p>
        </section>
        <section>
          <h2 className="section-title">BBC</h2>
          <p>
            Whilst I loved what I was doing at Nectar, my interest in radio
            never left me. It was this interest that lead me to starting a
            position at the BBC. I joined the Proteus team, responsible for the
            software that collects metadata for all radio networks within the
            corporation, as well as commissioning and scheduling.
          </p>
          <p>
            During my time at the corporation, I led the development of a new
            tool, that would replace a portion of the now 20 year old Proteus. I
            wrote the UI using ReactJS, Typescript and Jest/Enzyme for testing.
            I also made the decision to embed the Redux state manager, though in
            hindsight I could have relied less heavily on this.
          </p>
          <p>
            The development of this new tool meant working closely with the
            in-house BBC UX team to product a design that was inline with the
            BBC design language, but also fit for the purpose of the system we
            were creating. I would then take the design and along with my
            colleagues, whom I was mentoring as they were new to React, write
            the code to make the design a reality.
          </p>
          <section>
            <h2 className="section-title">Dent Reality</h2>
            <p>
              After 3 years at the BBC, and working on the same tool, I started
              craving a new challenge. In March of 2022, I began working at
              Citymapper. It was a short but sweet time at the company, in which
              I created the Enterprise Dashboard for developers using the B2B
              API could find their billing information and API Key and then
              started work on the web SDK. The 4 months I was in the business
              however did give me exposure to Kubernetes and Terraform which I
              took a particular interest in and decided to learn more about it
              in my own time.
            </p>
            <p>
              In August, I decided that the company was not the right fit for
              myself, and so I decided to move on to a start-up working within
              the AR space, Dent Reality. In my time there so far I have built
              new features in the mapping tool, using Mapbox to create GeoJSON
              features.
            </p>
            <p>
              Additionally, I have been given responsibility over the
              infrastructure. I have since implemented Terraform to assist with
              the tracking of changes to our Elastic Beanstalk (for now) servers
              and implementing IAM permissions that are very restrictive, giving
              only permission to actions the user needs, rather than the
              "everyone's an admin" approach that was in place prior.
            </p>
            <p>
              Using React and Typescript for the UI, I have also become
              proficient in using NestJS to build the RESTful API and Jest with
              React Testing Library for automated tests. We use Mongo Atlas to
              host our database instances and the AWS Cognito service as an
              Identity Provider.
            </p>
          </section>
          <em>To be continued...</em>
        </section>
      </div>
    </main>
  );
};
export default CV;
