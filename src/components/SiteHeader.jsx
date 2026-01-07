import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeDown, stagger } from '../motion'

const navItems = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang', label: 'Tentang' },
  { id: 'keahlian', label: 'Keahlian' },
  { id: 'pengalaman', label: 'Pengalaman' },
  { id: 'portofolio', label: 'Portfolio' },
  { id: 'kontak', label: 'Kontak' },
]

export default function SiteHeader({ theme, onToggleTheme }) {
  const [activeSection, setActiveSection] = useState('beranda')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    if (!sections.length) return undefined

    let currentId = sections[0]?.id || 'beranda'
    let ticking = false

    const updateActive = () => {
      const marker = window.innerHeight * 0.35
      let nextId = currentId

      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= marker && rect.bottom >= marker) {
          nextId = section.id
          break
        }
      }

      if (nextId !== currentId) {
        currentId = nextId
        setActiveSection(nextId)
      }
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        updateActive()
        ticking = false
      })
    }

    updateActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <>
      <div className="site-header-wrap">
        <motion.header className="site-header" initial="hidden" animate="show" variants={stagger}>
          <div className="container header-inner">
            <motion.div className="brand" variants={fadeDown} aria-label="JD">
              JD<span className="brand-dot">.</span>
            </motion.div>
            <motion.nav className="nav" aria-label="Primary" variants={stagger}>
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
                  href={`#${item.id}`}
                  variants={fadeDown}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>
            <div className="header-actions">
              <motion.button
                type="button"
                className="theme-toggle"
                onClick={onToggleTheme}
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
      </div>
      <style>{`
        .site-header-wrap {
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .site-header {
          position: relative;
          width: 100%;
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
          position: relative;
          transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        .nav-link:hover {
          color: var(--color-ink);
          background: var(--color-surface-soft);
        }

        .nav-link.is-active {
          color: var(--color-ink);
          background: var(--color-surface-soft);
          transform: translateY(-1px);
          box-shadow: 0 10px 18px rgba(12, 12, 24, 0.12);
          animation: navPop 0.25s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 6px;
          height: 2px;
          border-radius: 999px;
          background: var(--color-ink);
          opacity: 0;
          transform: scaleX(0.6);
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .nav-link.is-active::after {
          opacity: 0.6;
          transform: scaleX(1);
        }

        @keyframes navPop {
          from {
            transform: translateY(0) scale(0.96);
          }
          to {
            transform: translateY(-1px) scale(1);
          }
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
