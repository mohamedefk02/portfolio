"use client";

import { useTranslation } from "./i18n/language-context";
import { ClientShell } from "@/components/client-shell";
import { ProjectsSection } from "@/components/projects-section";
import { SkillIcon } from "@/components/skill-icon";
import type { Project, SkillCategory } from "@/lib/types";

function SkillsSection({ skillCategories }: { skillCategories: SkillCategory[] }) {
  const { t } = useTranslation();
  return (
    <section id="skills" className="section fade-in">
      <h2 className="section-title">{t("skills.title")}</h2>
      <p className="subtitle">{t("skills.subtitle")}</p>

      <div className="skills-main-grid">
        {skillCategories.map((category) => (
          <div key={category.name} className="skill-category-card">
            <h3>{t(`skills.categories.${category.name.toLowerCase().replace(/ & /g, "_").replace(/ /g, "_")}`) || category.name}</h3>
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
  const { t } = useTranslation();
  return (
    <section id="focus" className="section">
      <h2 className="section-title">{t("focus.title")}</h2>
      <p className="subtitle">{t("focus.subtitle")}</p>

      <div className="about-data" style={{ maxWidth: 820, margin: "0 auto" }}>
        <p className="about-description">
          {t("focus.description")}
        </p>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const { t } = useTranslation();
  const experiences = t("experience.internships");

  return (
    <section id="experience" className="section">
      <h2 className="section-title">{t("experience.title")}</h2>
      <p className="subtitle">{t("experience.subtitle")}</p>

      <div className="experience-grid">
        {experiences.map((experience: any) => (
          <article key={`${experience.company}-${experience.title}`} className="experience-card">
            <div className="experience-card-header">
              <div>
                <h3>{experience.title}</h3>
                <p className="experience-company">{experience.company}</p>
              </div>
              <div className="experience-meta">
                <span>{experience.period}</span>
                <span>{experience.mode}</span>
              </div>
            </div>

            <ul className="experience-points">
              {experience.points.map((point: string) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection({ contactStatus }: { contactStatus?: string }) {
  const { t } = useTranslation();
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">{t("contact.title")}</h2>
      <p className="subtitle">{t("contact.subtitle")}</p>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <i className="bx bx-envelope" />
            <div>
              <h4>{t("contact.email")}</h4>
              <a href="mailto:melfankari@gmail.com">melfankari@gmail.com</a>
            </div>
          </div>
          <div className="info-item">
            <i className="bx bx-phone-call" />
            <div>
              <h4>{t("contact.phone")}</h4>
              <a href="tel:+212630202936">+212 630202936</a>
            </div>
          </div>
          <div className="info-item">
            <i className="bx bx-map" />
            <div>
              <h4>{t("contact.location")}</h4>
              <p>{t("contact.location_val")}</p>
            </div>
          </div>
        </div>

        <form className="contact-form" action="/contact" method="POST">
          <div className="form-group">
            <input type="text" name="name" placeholder={t("contact.form.name")} required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder={t("contact.form.email")} required />
          </div>
          <div className="form-group">
            <textarea name="message" rows={5} placeholder={t("contact.form.message")} required />
          </div>
          <button type="submit" className="btn-send">
            {t("contact.form.send")} <i className="bx bx-send" />
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
  const { t } = useTranslation();
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
                  <p className="hero-subtitle">{t("hero.title")}</p>
                </div>

                <p className="hero-description">
                  {t("hero.description").split("\n").map((line: string, i: number) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>

                <a href="#contact" className="btn-say-hello">
                  {t("hero.cta")}
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
          <h2 className="section-title">{t("about.title")}</h2>
          <p className="subtitle">{t("about.subtitle")}</p>

          <div className="about-container">
            <div className="about-img-box">
              <img src="/images/ANA01749.jpg" alt="Mohamed El Fankari" className="about-img" />
            </div>
            <div className="about-data">
              <div className="about-info-grid">
                <div className="about-card no-hover">
                  <i className="bx bx-award about__icon" />
                  <h3 className="about-card-title">{t("about.experience")}</h3>
                  <span className="about-card-subtitle">{t("about.experience_sub")}</span>
                </div>
                <div className="about-card no-hover">
                  <i className="bx bx-support about__icon" />
                  <h3 className="about-card-title">{t("about.support")}</h3>
                  <span className="about-card-subtitle">{t("about.support_sub")}</span>
                </div>
              </div>
              <p className="about-description">
                {t("about.description").split("\n\n").map((para: string, i: number) => (
                  <span key={i}>
                    {para}
                    {i < t("about.description").split("\n\n").length - 1 && <><br /><br /></>}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <h2 className="section-title">{t("education.title")}</h2>
          <p className="subtitle">{t("education.subtitle")}</p>
          <div className="section-spacer" />

          <div className="timeline-horizontal">
            
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>{t("education.schools.eniad.name")}</h3>
                <p>
                  {t("education.schools.eniad.degree")}
                  <br />
                  <small>{t("education.schools.eniad.date")}</small>
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>{t("education.schools.est.name")}</h3>
                <p>
                  {t("education.schools.est.degree")}
                  <br />
                  <small>{t("education.schools.est.date")}</small>
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>{t("education.schools.fsjes.name")}</h3>
                <p>
                  {t("education.schools.fsjes.degree")}
                  <br />
                  <small>{t("education.schools.fsjes.date")}</small>
                </p>
              </div>
            </div>
           
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>{t("education.schools.high_school.name")}</h3>
                <p>
                  {t("education.schools.high_school.degree")}
                  <br />
                  <small>{t("education.schools.high_school.date")}</small>
                </p>
              </div>
            </div>
          </div>
        </section>

        <ExperienceSection />
        <SkillsSection skillCategories={skillCategories} />
        <ProjectsSection projects={projects} />
        <ContactSection contactStatus={contactStatus} />
      </>
    </ClientShell>
  );
}
