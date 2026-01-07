import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../motion'

export default function SkillsSection() {
  return (
    <>
      <motion.section
        id="keahlian"
        className="section skills"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <div className="container">
          <motion.div className="section-title" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>
              Keahlian
            </motion.span>
            <motion.h2 variants={fadeUp}>
              Skill &amp; <span className="title-italic">Expertise</span>
            </motion.h2>
            <motion.p variants={fadeUp}>
              Menguasai berbagai teknologi untuk menciptakan solusi digital yang komprehensif
            </motion.p>
          </motion.div>

          <motion.div className="skills-grid" variants={stagger}>
            <motion.article className="skill-card" variants={fadeUp}>
              <div className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 6L4 12l4 6M16 6l4 6-4 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <h3>Frontend Development</h3>
              <p>React, Next.js, TypeScript, Vue.js</p>
            </motion.article>
            <motion.article className="skill-card" variants={fadeUp}>
              <div className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <h3>Backend Development</h3>
              <p>Node.js, Python, PostgreSQL, Redis</p>
            </motion.article>
            <motion.article className="skill-card" variants={fadeUp}>
              <div className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <h3>UI/UX Design</h3>
              <p>Figma, Adobe XD, Prototyping, User Research</p>
            </motion.article>
            <motion.article className="skill-card" variants={fadeUp}>
              <div className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="17" r="1" fill="currentColor" />
                </svg>
              </div>
              <h3>Mobile Development</h3>
              <p>React Native, Flutter, iOS, Android</p>
            </motion.article>
            <motion.article className="skill-card" variants={fadeUp}>
              <div className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <h3>Design Systems</h3>
              <p>Component Libraries, Tailwind CSS, CSS-in-JS</p>
            </motion.article>
            <motion.article className="skill-card" variants={fadeUp}>
              <div className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 16a6 6 0 0112 0"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path d="M9 10l3-4 3 4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <h3>Cloud &amp; DevOps</h3>
              <p>AWS, Docker, CI/CD, Kubernetes</p>
            </motion.article>
            <motion.article className="skill-card" variants={fadeUp}>
              <div className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 12h6l2-4 2 8 2-4h4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <h3>Web Performance</h3>
              <p>SEO, Core Web Vitals, Optimization</p>
            </motion.article>
            <motion.article className="skill-card" variants={fadeUp}>
              <div className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 6h10l-1 12H8L7 6zM9 6V4h6v2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <h3>Agile &amp; Tools</h3>
              <p>Git, Jira, Scrum, Testing</p>
            </motion.article>
          </motion.div>

          <motion.div className="stack" variants={stagger}>
            <motion.p className="stack-title" variants={fadeUp}>
              Tech Stack yang sering digunakan
            </motion.p>
            <motion.div className="chip-row" variants={stagger}>
              {[
                'React',
                'Next.js',
                'TypeScript',
                'Node.js',
                'Tailwind CSS',
                'PostgreSQL',
                'MongoDB',
                'AWS',
                'Docker',
                'Figma',
              ].map((item) => (
                <motion.span key={item} className="chip" variants={fadeUp}>
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
          margin-bottom: 48px;
        }

        .skill-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 24px;
          box-shadow: var(--shadow-card);
        }

        .skill-card h3 {
          margin: 12px 0 8px;
          font-size: 18px;
        }

        .skill-card p {
          color: var(--color-muted);
          font-size: 14px;
        }

        .skills .card-icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: var(--color-icon-bg);
          color: var(--color-ink);
        }

        .skills .card-icon svg {
          width: 22px;
          height: 22px;
        }

        .stack {
          text-align: center;
        }

        .stack-title {
          color: var(--color-muted);
          margin-bottom: 18px;
        }

        @media (max-width: 1100px) {
          .skills-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
