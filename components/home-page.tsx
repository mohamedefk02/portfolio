import { ClientShell } from "@/components/client-shell";
import { ProjectsSection } from "@/components/projects-section";
import { SkillIcon } from "@/components/skill-icon";
import type { Project, SkillCategory } from "@/lib/types";

function SkillsSection({ skillCategories }: { skillCategories: SkillCategory[] }) {
  return (
    <section id="skills" className="section fade-in">
      <h2 className="section-title">Skills</h2>
      <p className="subtitle">The tools I reach for when it's time to build, debug, and ship.</p>

      <div className="skills-main-grid">
        {skillCategories.map((category) => (
          <div key={category.name} className="skill-category-card">
            <h3>{category.name}</h3>
            <div className="tech-grid">
              {category.items.map((item) => (
                <div key={`${category.name}-${item.name}`} className="tech-item">
                  <SkillIcon
                    name={item.name}
                    fallbackSrc={item.icon.startsWith("devicon") ? undefined : item.icon}
                  />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CurrentFocusSection() {
  return (
    <section id="focus" className="section">
      <h2 className="section-title">Current Focus</h2>
      <p className="subtitle">What I&apos;m working on when I&apos;m not pretending one small fix won&apos;t affect five files.</p>

      <div className="about-data" style={{ maxWidth: 820, margin: "0 auto" }}>
        <p className="about-description">
          Right now, I&apos;m focused on building stronger full-stack applications, getting sharper on backend design,
          and making interfaces feel clean without feeling generic. I like projects that have real behavior behind
          them: state, edge cases, admin flows, APIs, mobile interactions, and the kind of bugs that only show up
          after you say, &quot;it should be fine.&quot;
        </p>
      </div>
    </section>
  );
}

function ContactSection({ contactStatus }: { contactStatus?: string }) {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Contact</h2>
      <p className="subtitle">If my work looks like your kind of chaos, let&apos;s talk.</p>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <i className="bx bx-envelope" />
            <div>
              <h4>Email</h4>
              <a href="mailto:melfankari@gmail.com">melfankari@gmail.com</a>
            </div>
          </div>
          <div className="info-item">
            <i className="bx bx-phone-call" />
            <div>
              <h4>Phone</h4>
              <a href="tel:+2126630202936">+212 630202936</a>
            </div>
          </div>
          <div className="info-item">
            <i className="bx bx-map" />
            <div>
              <h4>Location</h4>
              <p>Morocco, Marrakesh</p>
            </div>
          </div>
        </div>

        <form className="contact-form" action="/contact" method="POST">
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" rows={5} placeholder="Your Message" required />
          </div>
          <button type="submit" className="btn-send">
            Send message <i className="bx bx-send" />
          </button>
          {contactStatus ? <p className="contact-status">{contactStatus}</p> : null}
        </form>
      </div>
    </section>
  );
}

export function HomePage({
  projects,
  skillCategories,
  contactStatus,
}: {
  projects: Project[];
  skillCategories: SkillCategory[];
  contactStatus?: string;
}) {
  return (
    <ClientShell>
      <>
        <section id="home" className="hero-vintage">
          <div className="hero-main-container">
            <div className="hero-left">
              <div className="hero-icons-vertical">
                <a href="https://github.com/mohamedefk02" className="icon-primary" target="_blank" rel="noreferrer">
                  <i className="bx bxl-github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamedelfankari/"
                  className="icon-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-linkedin" />
                </a>
                <a href="mailto:melfankari@gmail.com" className="icon-primary">
                  <i className="bx bx-envelope" />
                </a>
              </div>

              <div className="hero-content">
                <h1 className="hero-name">Mohamed EL FANKARI</h1>

                <div className="hero-title-wrapper">
                  <span className="title-line" />
                  <p className="hero-subtitle">Software Engineering Student • Web & Mobile Developer</p>
                </div>

                <p className="hero-description">
                  I’m a 4th-year Software Engineering student with a background in Web and Mobile Development, I build applications, break them, fix them, and then break them again just to be sure.
                  <br />
                  This portfolio is a collection of that process:
                  projects that survived, skills I picked up, and lessons learned the hard way.
                </p>

                <a href="#contact" className="btn-say-hello">
                  Say hello
                </a>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <div className="blob-shape">
                <img src="/images/profile_portfolio.png" alt="Mohamed Profile" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <p className="subtitle">A quick introduction.</p>

          <div className="about-container">
            <div className="about-img-box">
              <img src="/images/ANA01749.jpg" alt="Mohamed El Fankari" className="about-img" />
            </div>
            <div className="about-data">
              <div className="about-info-grid">
                <div className="about-card no-hover">
                  <i className="bx bx-award about__icon" />
                  <h3 className="about-card-title">Experience</h3>
                  <span className="about-card-subtitle">3+ Years</span>
                </div>
                <div className="about-card no-hover">
                  <i className="bx bx-support about__icon" />
                  <h3 className="about-card-title">Support</h3>
                  <span className="about-card-subtitle">Online 24/7</span>
                </div>
              </div>
              <p className="about-description">
                I started out curious about how software actually works under the hood, and that curiosity naturally turned into building things myself. Over time, that evolved into working across web, mobile, and backend development, where I enjoy taking ideas from concept to something real and usable.
                <br />
                <br />
                I’ve learned that understanding why something works is just as important as getting it to work in the first place. That mindset usually comes with a bit of trial and error — broken builds, unexpected behavior, and a fair amount of debugging.
                <br />
                <br />
                But that process is what I enjoy most. Each issue forces me to look deeper, rethink the approach, and improve the solution. Eventually, things come together into something more stable, more thoughtful, and closer to what was originally intended.
              </p>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <h2 className="section-title">Education</h2>
          <p className="subtitle">The path from &quot;I like tech&quot; to &quot;let me check the logs.&quot;</p>
          <div className="section-spacer" />

          <div className="timeline-horizontal">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>Abtih High School</h3>
                <p>
                  Baccalaureat, Science Physique - Option Francais
                  <br />
                  <small>Sep 2020 - Jun 2021</small>
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>FSJES</h3>
                <p>
                  First year in Bachelor in Economy
                  <br />
                  <small>Sep 2021 - Jun 2022</small>
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>Higher School of Technology - EST</h3>
                <p>
                  DUT - Web & Mobile Application Developer
                  <br />
                  <small>Sep 2022 - Jun 2024</small>
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>ENIAD</h3>
                <p>
                  Software Engineering Degree
                  <br />
                  <small>Sep 2024 - Present</small>
                </p>
              </div>
            </div>
          </div>
        </section>

        
        <SkillsSection skillCategories={skillCategories} />
        <ProjectsSection projects={projects} />
        <CurrentFocusSection />
        <ContactSection contactStatus={contactStatus} />
      </>
    </ClientShell>
  );
}
