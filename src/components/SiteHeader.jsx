import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeDown, stagger } from '../motion'

export default function SiteHeader() {
  const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'light'
    const saved = window.localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const handleToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <motion.header className="site-header" initial="hidden" animate="show" variants={stagger}>
        <div className="container header-inner">
          <motion.div className="brand" variants={fadeDown} aria-label="JD">
            JD<span className="brand-dot">.</span>
          </motion.div>
          <motion.nav className="nav" aria-label="Primary" variants={stagger}>
            <motion.a className="nav-link is-active" href="#beranda" variants={fadeDown}>
              Beranda
            </motion.a>
            <motion.a className="nav-link" href="#tentang" variants={fadeDown}>
              Tentang
            </motion.a>
            <motion.a className="nav-link" href="#keahlian" variants={fadeDown}>
              Keahlian
            </motion.a>
            <motion.a className="nav-link" href="#pengalaman" variants={fadeDown}>
              Pengalaman
            </motion.a>
            <motion.a className="nav-link" href="#portofolio" variants={fadeDown}>
              Portfolio
            </motion.a>
            <motion.a className="nav-link" href="#kontak" variants={fadeDown}>
              Kontak
            </motion.a>
          </motion.nav>
          <div className="header-actions">
            <motion.button
              type="button"
              className="theme-toggle"
              onClick={handleToggle}
              variants={fadeDown}
              aria-label="Toggle mode gelap dan terang"
            >
              <span className="theme-icon" aria-hidden="true">
                {theme === 'dark' ? (
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3a8.5 8.5 0 108.4 9.9A7 7 0 0112 3z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
                    <path
                      d="M12 3v2M12 19v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M3 12h2M19 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </span>
              <span className="theme-label">{theme === 'dark' ? 'Dark' : 'Light'}</span>
            </motion.button>
            <motion.a className="btn btn-dark btn-compact" href="#kontak" variants={fadeDown}>
              Hubungi Saya <span className="btn-icon">&rarr;</span>
            </motion.a>
          </div>
        </div>
      </motion.header>
      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 10;
          background: var(--color-header-bg);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--color-border);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 18px 0;
        }

        .brand {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .brand-dot {
          color: var(--color-ink-soft);
        }

        .nav {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
        }

        .nav-link {
          color: var(--color-muted);
          padding: 8px 16px;
          border-radius: 999px;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .nav-link:hover {
          color: var(--color-ink);
          background: var(--color-surface-soft);
        }

        .nav-link.is-active {
          color: var(--color-ink);
          background: var(--color-surface-soft);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .theme-toggle {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          color: var(--color-ink);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: var(--shadow-soft);
        }

        .theme-toggle:hover {
          transform: translateY(-1px);
        }

        .theme-toggle:focus-visible {
          outline: 2px solid var(--color-ink);
          outline-offset: 3px;
        }

        .theme-icon {
          width: 18px;
          height: 18px;
          display: inline-flex;
        }

        .theme-icon svg {
          width: 100%;
          height: 100%;
        }

        .theme-label {
          letter-spacing: 0.02em;
        }

        @media (max-width: 768px) {
          .header-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .nav {
            justify-content: flex-start;
          }

          .header-actions {
            width: 100%;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </>
  )
}
