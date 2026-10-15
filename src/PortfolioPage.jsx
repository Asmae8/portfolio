import { useEffect, useRef, useState } from 'react'
import { portfolio } from './data/portfolio.js'
import './portfolio.css'

const navigation = [
  ['Accueil', '#accueil'],
  ['À propos', '#apropos'],
  ['Formation', '#formation'],
  ['Compétences', '#competences'],
  ['Projets', '#projets'],
  ['Expériences', '#experiences'],
  ['Contact', '#contact'],
]

function Reveal({ children, className = '', as: Element = 'div' }) {
  const elementRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element || !('IntersectionObserver' in window)) {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Element ref={elementRef} className={`reveal${visible ? ' is-visible' : ''} ${className}`}>
      {children}
    </Element>
  )
}

function SectionHeading({ eyebrow, title, light = false }) {
  return (
    <div className={`section-heading${light ? ' section-heading-light' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <span className="heading-rule" aria-hidden="true" />
    </div>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="wordmark" href="#accueil" aria-label="Asmae Elaasri, accueil">
        ASMAE <span>ELAASRI</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={menuOpen}
        aria-controls="navigation-principale"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>
      <nav
        className={`main-nav${menuOpen ? ' main-nav-open' : ''}`}
        id="navigation-principale"
        aria-label="Navigation principale"
      >
        {navigation.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function PortraitPlaceholder() {
  return (
    <div className="portrait-frame">
      <img
        className="portrait-image"
        src={`${import.meta.env.BASE_URL}WhatsApp%20Image%202026-10-11%20at%2022.22.05.jpeg`}
        alt="Portrait d’Asmae Elaasri"
      />
    </div>
  )
}

function SkillGroup({ group }) {
  return (
    <article className="skill-group">
      <h3>{group.category}</h3>
      <ul>
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

function ProjectArtwork({ project }) {
  return (
    <div className={`project-art project-art-${project.number}`} aria-label={project.visualLabel}>
      <span className="art-index" aria-hidden="true">{project.number}</span>
      <span className="art-line art-line-one" aria-hidden="true" />
      <span className="art-line art-line-two" aria-hidden="true" />
      <span className="art-caption">{project.visualLabel}</span>
    </div>
  )
}

function Project({ project, reverse = false }) {
  return (
    <section className={`project-band${project.theme === 'dark' ? ' project-band-dark' : ''}`}>
      <div className={`project-layout${reverse ? ' project-layout-reverse' : ''}`}>
        <Reveal className="project-copy">
          <p className="project-number">{project.number}</p>
          <p className="eyebrow">{project.subtitle}</p>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <ul className="project-features">
            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
          <div className="tag-list" aria-label="Technologies">
            {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </Reveal>
        <Reveal className="project-visual-wrap">
          <ProjectArtwork project={project} />
        </Reveal>
      </div>
    </section>
  )
}

function ExperienceItem({ item }) {
  return (
    <article className="experience-item">
      <p className="experience-date">{item.period}</p>
      <div>
        <p className="eyebrow">{item.location}</p>
        <h3>{item.company}</h3>
        <p className="experience-title">{item.title}</p>
        <p className="experience-description">{item.description}</p>
        <ul className="experience-tasks">
          {item.tasks.map((task) => <li key={task}>{task}</li>)}
        </ul>
        <div className="tag-list">
          {item.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </div>
    </article>
  )
}

function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-section" id="accueil">
          <div className="hero-inner">
            <Reveal className="hero-copy">
              <p className="eyebrow">Portfolio · {portfolio.location}</p>
              <p className="hero-greeting">Bonjour, moi c’est</p>
              <h1>{portfolio.name}</h1>
              <p className="hero-role">{portfolio.role}</p>
              <p className="hero-introduction">{portfolio.introduction}</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#projets">Voir mes projets</a>
                <a className="button button-outline" href="#contact">Me contacter</a>
              </div>
            </Reveal>
            <Reveal className="hero-portrait">
              <PortraitPlaceholder />
            </Reveal>
          </div>
          <a className="scroll-cue" href="#apropos">Défiler pour découvrir</a>
        </section>

        <section className="intro-strip" id="apropos">
          <div className="intro-inner">
            <p className="eyebrow">À propos</p>
            <h2>Le numérique, avec intention.</h2>
            <p>{portfolio.about}</p>
          </div>
        </section>

        <section className="content-section education-section" id="formation">
          <div className="section-container">
            <SectionHeading eyebrow="Parcours" title="Formation" />
            <div className="education-list">
              {portfolio.education.map((item) => (
                <Reveal key={item.school} className="education-item">
                  <p className="item-period">{item.period}</p>
                  <div>
                    <h3>{item.school}</h3>
                    <p>{item.degree}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section skills-section" id="competences">
          <div className="section-container">
            <Reveal><SectionHeading eyebrow="Savoir-faire" title="Compétences" light /></Reveal>
            <div className="skills-grid">
              {portfolio.skills.map((group) => (
                <Reveal key={group.category}><SkillGroup group={group} /></Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section" id="projets">
          <div className="section-container projects-heading">
            <SectionHeading eyebrow="Sélection" title="Projets" />
          </div>
          {portfolio.projects.map((project, index) => (
            <Project key={project.number} project={project} reverse={index % 2 === 1} />
          ))}
        </section>

        <section className="content-section experience-section" id="experiences">
          <div className="section-container">
            <SectionHeading eyebrow="En entreprise" title="Expériences professionnelles" />
            <div className="experience-list">
              {portfolio.experience.map((item) => (
                <Reveal key={item.company}><ExperienceItem item={item} /></Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-container contact-inner">
            <Reveal className="contact-copy">
              <SectionHeading eyebrow="Échangeons" title="Un stage PFE, dès 2027." light />
              <p>Disponible pour un stage de fin d’études de six mois à partir de janvier ou février 2027.</p>
            </Reveal>
            <Reveal className="contact-details">
              <a className="contact-link" href={`mailto:${portfolio.contact.email}`}>
                <span>Email</span>{portfolio.contact.email}
              </a>
              <a className="contact-link" href={portfolio.contact.phoneHref}>
                <span>Téléphone</span>{portfolio.contact.phone}
              </a>
              {portfolio.contact.github.url && (
                <a className="contact-link" href={portfolio.contact.github.url} target="_blank" rel="noreferrer">
                  <span>GitHub</span>{portfolio.contact.github.label}
                </a>
              )}
              {portfolio.contact.linkedin.url && (
                <a className="contact-link" href={portfolio.contact.linkedin.url} target="_blank" rel="noopener noreferrer">
                  <span>LinkedIn</span>{portfolio.contact.linkedin.label}
                </a>
              )}
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a className="wordmark" href="#accueil">ASMAE <span>ELAASRI</span></a>
        <p>{portfolio.location}</p>
        <a href="#accueil">Retour en haut ↑</a>
      </footer>
    </>
  )
}

export default PortfolioPage
