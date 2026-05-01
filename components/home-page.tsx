import { ClientShell } from "@/components/client-shell";
import { ProjectsSection } from "@/components/projects-section";
import { SkillIcon } from "@/components/skill-icon";
import type { Project, SkillCategory } from "@/lib/types";

function SkillsSection({ skillCategories }: { skillCategories: SkillCategory[] }) {
  return (
    <section id="skills" className="section fade-in">
      <h2 className="section-title">Skills</h2>
      <p className="subtitle">My Tech Toolbox</p>

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

function ContactSection({ contactStatus }: { contactStatus?: string }) {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="subtitle">Let's Create Something Together</p>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <i className="bx bx-envelope" />
            <div>
              <h4>Email</h4>
              <a href="mailto:me@example.com">melfankari@gmail.com</a>
            </div>
          </div>
          <div className="info-item">
            <i className="bx bx-phone-call" />
            <div>
              <h4>Phone</h4>
              <a href="tel:+212600000000">+212 630202936</a>
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
            Send Message <i className="bx bx-send" />
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
                  <p className="hero-subtitle">Software Engineering Student</p>
                </div>

                <p className="hero-description">
                  I'm a 4th-year Software Engineering student with a background in Web and Mobile Development,
                  passionate about building reliable and user-friendly applications. This portfolio showcases my
                  projects, skills, and journey in creating impactful digital solutions.
                </p>

                <a href="#contact" className="btn-say-hello">
                  Contact Me
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
          <p className="subtitle">My Introduction</p>

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
                Curiosity has always been my compass, guiding me toward exploring new technologies and understanding
                how things work under the hood. Over time, this curiosity evolved into a passion for building software
                that is both practical and elegant. As a web and mobile development student, I focus on creating
                applications that are intuitive, efficient, and reliable. I'm constantly learning, experimenting with
                different tools and languages, and challenging myself with new technical problems. For me, coding
                isn't just about writing programs - it's about shaping experiences and solving real-world challenges.
              </p>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <h2 className="section-title">Education</h2>
          <p className="subtitle">My Academic Journey</p>
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
        <ContactSection contactStatus={contactStatus} />
      </>
    </ClientShell>
  );
}
