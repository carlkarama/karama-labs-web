import Image from "next/image";

const services = [
  {
    title: "Launch your digital front door",
    copy: "Websites, landing pages, content structure, and brand polish for organisations that need to look ready online.",
  },
  {
    title: "Build the tool behind the work",
    copy: "Custom apps, internal dashboards, APIs, databases, and integrations when a website needs to become a working system.",
  },
  {
    title: "Train your team to ship",
    copy: "Software engineering and cloud development training for trainees, founders, and teams building practical technical confidence.",
  },
];

const projects = [
  {
    name: "Acholi Community of Victoria",
    href: "https://acholi.com.au",
    tag: "Community website",
    copy: "A public home for Lotino Acholi Melbourne, shaped around culture, unity, family, gathering, and belonging.",
  },
  {
    name: "NexDW trainees",
    href: "https://nexdw.com.au",
    tag: "Cloud + software training",
    copy: "Training across software engineering and cloud development, connected to NexDW's work in cloud, AI/ML, cybersecurity, IoT, and infrastructure.",
  },
];

const capabilities = [
  "Next.js websites",
  "Cloud deployment",
  "Technical training",
  "Content strategy",
  "Internal tools",
  "APIs",
  "Community platforms",
  "Mentoring",
];

const faqs = [
  {
    question: "Is Karama Labs an agency or consultancy?",
    answer: "Both. Karama Labs handles public-facing digital presence and deeper software delivery when clients need systems, training, or cloud capability.",
  },
  {
    question: "What kind of clients fit best?",
    answer: "Community organisations, small businesses, early-stage teams, and training partners that need practical digital work without unnecessary complexity.",
  },
  {
    question: "Can you build more than a website?",
    answer: "Yes. The offer can extend into web apps, internal tools, cloud setup, APIs, and technical enablement.",
  },
  {
    question: "How do we start?",
    answer: "Send a short brief through the contact form or email contact@karamalabs.com with what you want to build and who it is for.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="top-banner">
        Karama Labs is taking on selected digital presence, software, and training projects.
      </section>

      <section className="hero-section" id="top">
        <nav className="site-nav" aria-label="Main navigation">
          <a className="brand-mark" href="#top" aria-label="Karama Labs home">
            <span className="brand-star">*</span>
            <span>Karama Labs</span>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#faq">FAQ</a>
          </div>
          <a className="nav-pill" href="#contact">
            Start a project
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Digital agency + software consultancy</p>
            <h1>Build your online home, then build what powers it.</h1>
            <p className="hero-lede">
              Karama Labs helps communities, businesses, and emerging technical teams create credible websites, practical software systems, and real cloud capability.
            </p>
            <form className="hero-form" action="mailto:contact@karamalabs.com" method="post" encType="text/plain">
              <input name="email" type="email" placeholder="your@email.com" aria-label="Email address" required />
              <button type="submit">Start with Karama Labs</button>
            </form>
          </div>

          <div className="hero-art" aria-hidden="true">
            <Image className="logo-poster" src="/3.png" alt="" width={520} height={520} priority />
            <div className="tile-viewport">
              <div className="tile-reel">
                <div className="profile-card">
                  <div className="avatar">*</div>
                  <div>
                    <strong>Karama Labs</strong>
                    <span>Design. Build. Train.</span>
                  </div>
                </div>
                <div className="link-stack">
                  <span>Launch website</span>
                  <span>Build software</span>
                  <span>Train team</span>
                  <span>Cloud systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-band band-blue" id="services">
        <div className="band-watermark" aria-hidden="true">*</div>
        <div className="phone-cluster" aria-hidden="true">
          <div className="mini-phone phone-one">
            <span>Web</span>
            <strong>Ready</strong>
          </div>
          <div className="mini-phone phone-two">
            <span>Cloud</span>
            <strong>Ship</strong>
          </div>
          <div className="mini-phone phone-three">
            <span>Train</span>
            <strong>Grow</strong>
          </div>
        </div>
        <div className="band-copy">
          <p className="eyebrow">Create and customise</p>
          <h2>One clear digital base for your organisation.</h2>
          <p>
            Start with a sharp website and extend into systems, integrations, and cloud workflows as the work matures.
          </p>
          <a className="button button-light" href="#contact">
            Start a project
          </a>
        </div>
      </section>

      <section className="feature-band band-maroon">
        <div className="band-copy">
          <p className="eyebrow">Share your work</p>
          <h2>Make every project easy to understand and easy to act on.</h2>
          <p>
            From community events to technical training programs, Karama Labs turns scattered ideas into simple, useful digital journeys.
          </p>
          <a className="button button-soft" href="#work">
            See the work
          </a>
        </div>
        <div className="tile-stack" aria-hidden="true">
          <div>*</div>
          <div>Community</div>
          <div>Training</div>
          <div>Software</div>
        </div>
      </section>

      <section className="feature-band band-pale">
        <div className="analytics-grid" aria-hidden="true">
          <div className="chart-card">43,500<br /><span>visits</span></div>
          <div className="chart-card purple">643<br /><span>enquiries</span></div>
          <div className="chart-card blue">Cloud<br /><span>pathways</span></div>
          <div className="chart-card green">2<br /><span>project lines</span></div>
        </div>
        <div className="band-copy dark-copy">
          <p className="eyebrow">Improve and learn</p>
          <h2>Analyze what people need, then build the next useful thing.</h2>
          <p>
            Karama Labs blends design, software engineering, and teaching so every build can become clearer, smarter, and easier to maintain.
          </p>
          <a className="button button-pink" href="#contact">
            Contact Karama Labs
          </a>
        </div>
      </section>

      <section className="proof-section" id="work">
        <div className="proof-heading">
          <h2>Trusted starting points for community and technical growth.</h2>
          <div className="logo-row" aria-label="Project areas">
            <span>Community</span>
            <span>Cloud</span>
            <span>Software</span>
            <span>Training</span>
            <span>Culture</span>
          </div>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <a className="project-card" href={project.href} key={project.name} target="_blank" rel="noreferrer">
              <span>{project.tag}</span>
              <h3>{project.name}</h3>
              <p>{project.copy}</p>
              <strong>Visit project</strong>
            </a>
          ))}
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>

        <div className="center-cta">
          <h2>The friendly, practical team for websites, software, and capability.</h2>
          <a className="button button-pink" href="#contact">
            Explore a project
          </a>
        </div>
      </section>

      <section className="capability-section">
        <p className="eyebrow">Capabilities</p>
        <div className="capability-strip" aria-label="Capabilities">
          {capabilities.map((capability) => (
            <span key={capability}>{capability}</span>
          ))}
        </div>
      </section>

      <section className="faq-section" id="faq">
        <h2>Questions? Answered</h2>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-stage" aria-hidden="true">
          <div className="silhouette">*</div>
          <div className="footer-card">
            <span>Digital presence</span>
            <span>Software systems</span>
            <span>Cloud training</span>
            <span>Karama Labs</span>
          </div>
        </div>
        <div className="contact-copy">
          <p className="eyebrow">Ready when you are</p>
          <h2>Jumpstart your corner of the internet.</h2>
          <p>
            Use the form to draft an email, or write directly to{" "}
            <a href="mailto:contact@karamalabs.com">contact@karamalabs.com</a>.
          </p>
          <p className="social-note">Socials: Karama Labs</p>
        </div>
        <form className="contact-form" action="mailto:contact@karamalabs.com" method="post" encType="text/plain">
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            What do you need?
            <select name="project_type" defaultValue="Website or digital presence">
              <option>Website or digital presence</option>
              <option>Software system or internal tool</option>
              <option>Cloud or software engineering training</option>
              <option>Something else</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required />
          </label>
          <button className="button button-primary" type="submit">
            Send email
          </button>
        </form>
      </section>
    </main>
  );
}
