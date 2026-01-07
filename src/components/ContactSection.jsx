import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../motion'

export default function ContactSection({ animKey }) {
  return (
    <>
      <motion.section
        id="kontak"
        className="section contact"
        key={`contact-${animKey}`}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <div className="container">
          <motion.div className="section-title" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>
              Kontak
            </motion.span>
            <motion.h2 variants={fadeUp}>
              Mari <span className="title-italic">Berkolaborasi</span>
            </motion.h2>
            <motion.p variants={fadeUp}>
              Punya ide menarik? Mari wujudkan bersama. Pilih cara terbaik untuk terhubung.
            </motion.p>
          </motion.div>

          <motion.div className="contact-grid" variants={stagger}>
            <motion.article className="contact-card" variants={stagger}>
              <motion.div className="card-icon" aria-hidden="true" variants={fadeUp}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 17l-2 4 4-2h9a4 4 0 004-4V7a4 4 0 00-4-4H7a4 4 0 00-4 4v7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <motion.h3 variants={fadeUp}>Chat Langsung</motion.h3>
              <motion.p variants={fadeUp}>Hubungi saya via social media untuk respon cepat</motion.p>
              <motion.a className="text-link" href="#social" variants={fadeUp}>
                Pilih Platform <span>&rarr;</span>
              </motion.a>
            </motion.article>

            <motion.article className="contact-card" variants={stagger}>
              <motion.div className="card-icon" aria-hidden="true" variants={fadeUp}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M4 8l8 5 8-5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </motion.div>
              <motion.h3 variants={fadeUp}>Email</motion.h3>
              <motion.p variants={fadeUp}>Untuk pertanyaan detail atau proposal proyek</motion.p>
              <motion.a className="text-link" href="mailto:hello@johndoe.com" variants={fadeUp}>
                hello@johndoe.com <span>&rarr;</span>
              </motion.a>
            </motion.article>

            <motion.article className="contact-card" variants={stagger}>
              <motion.div className="card-icon" aria-hidden="true" variants={fadeUp}>
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="6" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 4v4M16 4v4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </motion.div>
              <motion.h3 variants={fadeUp}>Schedule Meeting</motion.h3>
              <motion.p variants={fadeUp}>Book meeting 30 menit untuk diskusi proyek</motion.p>
              <motion.a className="text-link" href="#kontak" variants={fadeUp}>
                Book Sekarang <span>&rarr;</span>
              </motion.a>
            </motion.article>
          </motion.div>

          <motion.div id="social" className="social" variants={stagger}>
            <motion.h3 variants={fadeUp}>Atau temukan saya di</motion.h3>
            <motion.p variants={fadeUp}>Connect dengan saya melalui platform favorit Anda</motion.p>
            <motion.div className="social-grid" variants={stagger}>
              <motion.article className="social-card" variants={stagger}>
                <motion.div className="card-icon" aria-hidden="true" variants={fadeUp}>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3a8 8 0 00-2.5 15.6c.4.1.6-.2.6-.4v-2c-2.6.6-3.1-1.3-3.1-1.3-.4-1-.9-1.3-.9-1.3-.8-.5.1-.5.1-.5 1 .1 1.5 1 1.5 1 .8 1.4 2.2 1 2.7.8.1-.6.3-1 .6-1.2-2.1-.2-4.2-1-4.2-4.6 0-1 .4-1.9 1-2.5-.1-.2-.4-1.1.1-2.3 0 0 .8-.2 2.6 1a8.6 8.6 0 014.8 0c1.8-1.2 2.6-1 2.6-1 .5 1.2.2 2.1.1 2.3.6.6 1 1.5 1 2.5 0 3.6-2.2 4.4-4.3 4.6.3.3.6.8.6 1.6v2.4c0 .2.2.5.6.4A8 8 0 0012 3z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                </motion.div>
                <motion.h4 variants={fadeUp}>GitHub</motion.h4>
                <motion.span variants={fadeUp}>@johndoe</motion.span>
              </motion.article>
              <motion.article className="social-card" variants={stagger}>
                <motion.div className="card-icon" aria-hidden="true" variants={fadeUp}>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 8a2 2 0 100-4 2 2 0 000 4zM5 10h2v9H5zM10 10h2v1.3A3 3 0 0114.5 10c2.1 0 3.5 1.3 3.5 4v5h-2v-4.4c0-1.5-.6-2.4-2-2.4s-2.3 1-2.3 2.4V19h-2z"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />
                  </svg>
                </motion.div>
                <motion.h4 variants={fadeUp}>LinkedIn</motion.h4>
                <motion.span variants={fadeUp}>John Doe</motion.span>
              </motion.article>
              <motion.article className="social-card" variants={stagger}>
                <motion.div className="card-icon" aria-hidden="true" variants={fadeUp}>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 6c-1 .6-2 .9-3 .9a4 4 0 001.8-2.2 8 8 0 01-2.6 1 4 4 0 00-6.8 3.6A11.4 11.4 0 013 5.5a4 4 0 001.2 5.4 4 4 0 01-1.8-.4 4 4 0 003.2 4 4 4 0 01-1.8.1 4 4 0 003.7 2.8A8.2 8.2 0 013 18.5 11.6 11.6 0 009.5 20c7.5 0 11.6-6.4 11.6-11.9v-.5A8.5 8.5 0 0021 5.6a8 8 0 01-3 1.1z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
                <motion.h4 variants={fadeUp}>Twitter</motion.h4>
                <motion.span variants={fadeUp}>@johndoe</motion.span>
              </motion.article>
              <motion.article className="social-card" variants={stagger}>
                <motion.div className="card-icon" aria-hidden="true" variants={fadeUp}>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M4 8l8 5 8-5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </motion.div>
                <motion.h4 variants={fadeUp}>Email</motion.h4>
                <motion.span variants={fadeUp}>hello@johndoe.com</motion.span>
              </motion.article>
            </motion.div>
          </motion.div>

          <motion.div className="cta-card" variants={stagger}>
            <motion.p variants={fadeUp}>
              Biasanya saya merespon dalam <strong>24 jam</strong>. Saya excited untuk mendengar ide
              Anda!
            </motion.p>
            <motion.a className="btn btn-dark" href="mailto:hello@johndoe.com" variants={fadeUp}>
              Kirim Email Sekarang <span className="btn-icon">&rarr;</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          margin-bottom: 60px;
        }

        .contact-card {
          background: var(--color-surface);
          border-radius: 22px;
          border: 1px solid var(--color-border);
          padding: 28px;
          box-shadow: var(--shadow-card);
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }

        .contact-card h3 {
          margin: 14px 0 8px;
          font-size: 20px;
        }

        .contact-card p {
          color: var(--color-muted);
          margin-bottom: 18px;
        }

        .contact-card:hover {
          transform: translateY(-4px);
          background: var(--color-surface-soft);
          box-shadow: var(--shadow-soft);
        }

        .contact .card-icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: var(--color-icon-bg);
          color: var(--color-ink);
        }

        .contact .card-icon svg {
          width: 22px;
          height: 22px;
        }

        .social {
          text-align: center;
          margin-bottom: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .social h3 {
          font-size: 28px;
          margin: 0;
        }

        .social p {
          color: var(--color-muted);
          margin-bottom: 18px;
        }

        .social-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .social-card {
          background: var(--color-surface);
          border-radius: 20px;
          border: 1px solid var(--color-border);
          padding: 24px 18px;
          box-shadow: var(--shadow-card);
          text-align: center;
          display: grid;
          justify-items: center;
          gap: 8px;
          min-height: 170px;
        }

        .social-card h4 {
          margin: 0;
          font-size: 16px;
        }

        .social-card span {
          color: var(--color-muted);
          font-size: 13px;
          word-break: break-word;
        }

        .social .card-icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: var(--color-icon-bg);
          color: var(--color-ink);
        }

        .social .card-icon svg {
          width: 22px;
          height: 22px;
        }

        .cta-card {
          margin: 0 auto;
          max-width: 620px;
          padding: 28px;
          text-align: center;
          border-radius: 20px;
          background: linear-gradient(180deg, var(--color-surface-soft) 0%, var(--color-surface-mute) 100%);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-soft);
          display: flex;
          flex-direction: column;
          gap: 18px;
          align-items: center;
        }

        @media (max-width: 1100px) {
          .contact-grid,
          .social-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .contact-grid,
          .social-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
