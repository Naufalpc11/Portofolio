import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../motion'

export default function AboutSection({ animKey }) {
  return (
    <>
      <motion.section
        id="tentang"
        className="section about"
        key={`about-${animKey}`}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <div className="container">
          <motion.div className="section-title" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>
              Tentang
            </motion.span>
            <motion.h2 variants={fadeUp}>
              Passion Meets <span className="title-italic">Expertise</span>
            </motion.h2>
          </motion.div>

          <motion.div className="about-grid" variants={stagger}>
            <motion.div className="about-media" variants={fadeUp}>
              <div className="about-photo">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
                  alt="Workspace modern"
                  loading="lazy"
                />
              </div>
              <div className="about-badge">
                <div className="badge-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3l3 2 3.5 1 .5 4-.5 4-3.5 1-3 2-3-2-3.5-1-.5-4 .5-4L9 5l3-2z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path d="M9.5 12l1.6 1.6 3.4-3.4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <strong>Top 5%</strong>
                  <span>Developer Global</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="about-content" variants={stagger}>
              <motion.p variants={fadeUp}>
                Halo! Saya adalah seorang <strong>Full-Stack Developer</strong> dan{' '}
                <strong>UI/UX Designer</strong> yang passionate dalam menciptakan solusi digital
                yang tidak hanya terlihat indah, tetapi juga memberikan nilai nyata.
              </motion.p>
              <motion.p variants={fadeUp}>
                Dengan lebih dari 5 tahun pengalaman, saya telah bekerja dengan berbagai klien
                dari startup hingga perusahaan Fortune 500, membantu mereka mewujudkan visi
                digital mereka menjadi kenyataan.
              </motion.p>
              <motion.p variants={fadeUp}>
                Saya percaya bahwa <strong>desain yang baik</strong> adalah perpaduan sempurna
                antara estetika, fungsionalitas, dan user experience. Setiap proyek adalah
                kesempatan untuk menciptakan sesuatu yang luar biasa.
              </motion.p>
              <motion.a className="text-link" href="#kontak" variants={fadeUp}>
                Mari berkolaborasi <span>&rarr;</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div className="stats-grid" variants={stagger}>
            <motion.div className="stat-card" variants={fadeUp}>
              <div className="stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16M4 12h10M4 18h16" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="stat-value">5+</div>
              <div className="stat-label">Tahun Pengalaman</div>
            </motion.div>
            <motion.div className="stat-card" variants={fadeUp}>
              <div className="stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3l3 5 6 1-4.5 4.3L17.5 20 12 17l-5.5 3 1-6.7L3 9l6-1 3-5z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="stat-value">50+</div>
              <div className="stat-label">Proyek Selesai</div>
            </motion.div>
            <motion.div className="stat-card" variants={fadeUp}>
              <div className="stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="stat-value">30+</div>
              <div className="stat-label">Klien Puas</div>
            </motion.div>
            <motion.div className="stat-card" variants={fadeUp}>
              <div className="stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3l3 2 3.5 1 .5 4-.5 4-3.5 1-3 2-3-2-3.5-1-.5-4 .5-4L9 5l3-2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="stat-value">15+</div>
              <div className="stat-label">Penghargaan</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 48px;
          align-items: center;
        }

        .about-media {
          position: relative;
        }

        .about-photo {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-card);
        }

        .about-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-badge {
          position: absolute;
          right: 24px;
          bottom: -22px;
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--color-surface);
          border-radius: 16px;
          padding: 12px 16px;
          box-shadow: var(--shadow-soft);
          border: 1px solid var(--color-border);
        }

        .about-badge span {
          display: block;
          font-size: 13px;
          color: var(--color-muted);
        }

        .badge-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: var(--color-icon-bg);
          color: var(--color-ink);
        }

        .badge-icon svg {
          width: 22px;
          height: 22px;
        }

        .about-content p {
          margin-bottom: 18px;
          color: var(--color-muted);
        }

        .about-content strong {
          color: var(--color-ink);
        }

        .stats-grid {
          margin-top: 56px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .stat-card {
          background: var(--color-surface-soft);
          border: 1px solid var(--color-border);
          border-radius: 18px;
          padding: 24px;
          text-align: center;
        }

        .stat-icon {
          width: 44px;
          height: 44px;
          margin: 0 auto 12px;
          border-radius: 14px;
          background: var(--color-icon-bg);
          display: grid;
          place-items: center;
          color: var(--color-ink);
        }

        .stat-icon svg {
          width: 22px;
          height: 22px;
        }

        .stat-value {
          font-size: 26px;
          font-weight: 700;
        }

        .stat-label {
          font-size: 14px;
          color: var(--color-muted);
        }

        @media (max-width: 1100px) {
          .about-grid {
            grid-template-columns: 1fr;
          }

          .about-badge {
            position: static;
            margin-top: 18px;
            width: fit-content;
          }

          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
