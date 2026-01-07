import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../motion'

export default function SiteFooter({ animKey }) {
  return (
    <>
      <motion.footer
        className="footer"
        key={`footer-${animKey}`}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <div className="container">
          <motion.div className="footer-grid" variants={stagger}>
            <motion.div className="footer-brand" variants={fadeUp}>
              <h3>JD.</h3>
              <p>
                Creative developer yang fokus pada produk digital yang bersih, fungsional, dan
                berkesan. Siap membantu brand Anda tampil lebih kuat.
              </p>
            </motion.div>
            <motion.div variants={stagger}>
              <div className="footer-title">Navigasi</div>
              <motion.div className="footer-links" variants={stagger}>
                <motion.a href="#beranda" variants={fadeUp}>
                  Beranda
                </motion.a>
                <motion.a href="#tentang" variants={fadeUp}>
                  Tentang
                </motion.a>
                <motion.a href="#keahlian" variants={fadeUp}>
                  Keahlian
                </motion.a>
                <motion.a href="#portofolio" variants={fadeUp}>
                  Portfolio
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div variants={stagger}>
              <div className="footer-title">Kontak</div>
              <motion.div className="footer-links" variants={stagger}>
                <motion.span variants={fadeUp}>hello@johndoe.com</motion.span>
                <motion.span variants={fadeUp}>+62 812 3456 7890</motion.span>
                <motion.span variants={fadeUp}>Jakarta, Indonesia</motion.span>
              </motion.div>
            </motion.div>
            <motion.div variants={stagger}>
              <div className="footer-title">Social</div>
              <motion.div className="footer-links" variants={stagger}>
                <motion.a href="#social" variants={fadeUp}>
                  GitHub
                </motion.a>
                <motion.a href="#social" variants={fadeUp}>
                  LinkedIn
                </motion.a>
                <motion.a href="#social" variants={fadeUp}>
                  Twitter
                </motion.a>
                <motion.a href="#kontak" variants={fadeUp}>
                  Schedule Meeting
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="footer-bottom" variants={fadeUp}>
            <span>Copyright 2026 JD. All rights reserved.</span>
            <span>Built with React, Vite, and Framer Motion.</span>
          </motion.div>
        </div>
      </motion.footer>
      <style>{`
        .footer {
          background: #0e0e1a;
          color: #f4f4f6;
          padding: 70px 0 30px;
        }

        :root[data-theme='dark'] .footer {
          background: #0b0b12;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 40px;
        }

        .footer-brand h3 {
          font-size: 24px;
          margin-bottom: 12px;
        }

        .footer-brand p {
          color: rgba(244, 244, 246, 0.7);
          max-width: 320px;
        }

        .footer-title {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 14px;
          color: rgba(244, 244, 246, 0.6);
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links a {
          color: rgba(244, 244, 246, 0.8);
          font-size: 14px;
        }

        .footer-links a:hover {
          color: #ffffff;
        }

        .footer-links span {
          color: rgba(244, 244, 246, 0.6);
          font-size: 14px;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 20px;
          font-size: 13px;
          color: rgba(244, 244, 246, 0.6);
        }

        @media (max-width: 1100px) {
          .footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </>
  )
}
