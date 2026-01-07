import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../motion'

export default function HeroSection() {
  return (
    <>
      <motion.section
        id="beranda"
        className="section hero"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.div className="container hero-inner" variants={stagger}>
          <motion.div className="pill pill-soft" variants={fadeUp}>
            <span className="pill-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3l1.7 4.1L18 9l-4.3 1.9L12 15l-1.7-4.1L6 9l4.3-1.9L12 3z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Tersedia untuk proyek freelance
          </motion.div>
          <motion.h1 className="hero-title" variants={fadeUp}>
            Creative <span className="hero-accent">Developer</span>
          </motion.h1>
          <motion.p className="hero-copy" variants={fadeUp}>
            Saya adalah John Doe, seorang developer &amp; designer yang berfokus pada pembuatan
            pengalaman digital yang <strong>indah</strong>, <strong>fungsional</strong>, dan{' '}
            <strong>memorable</strong>.
          </motion.p>
          <motion.div className="hero-actions" variants={stagger}>
            <motion.a className="btn btn-dark" href="#portofolio" variants={fadeUp}>
              Lihat Karya Saya <span className="btn-icon">&rarr;</span>
            </motion.a>
            <motion.a className="btn btn-light" href="#kontak" variants={fadeUp}>
              Mari Bicara
            </motion.a>
          </motion.div>
          <motion.div className="hero-scroll" variants={fadeUp}>
            Scroll untuk explore
          </motion.div>
        </motion.div>
      </motion.section>
      <style>{`
        .hero {
          text-align: center;
          padding-top: 140px;
          padding-bottom: 120px;
        }

        .hero-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .hero-title {
          font-size: clamp(48px, 8vw, 92px);
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .hero-accent {
          color: var(--color-ink-soft);
        }

        .hero-copy {
          max-width: 740px;
          color: var(--color-muted);
          font-size: 18px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .hero-scroll {
          margin-top: 32px;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: var(--color-muted);
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 120px;
          }

          .hero-copy {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  )
}
