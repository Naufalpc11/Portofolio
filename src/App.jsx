import SiteHeader from './components/SiteHeader.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import PortfolioSection from './components/PortfolioSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import SiteFooter from './components/SiteFooter.jsx'

export default function App() {
  return (
    <>
      <div className="page">
        <SiteHeader />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <PortfolioSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
      <style>{`
        #app {
          min-height: 100vh;
        }

        .page {
          width: 100%;
        }

        .container {
          width: min(100% - 40px, var(--container));
          margin: 0 auto;
        }

        .section {
          padding: 110px 0;
          position: relative;
          scroll-margin-top: 120px;
        }

        .section-title {
          text-align: center;
          margin-bottom: 48px;
        }

        .section-title h2 {
          font-size: clamp(32px, 5vw, 56px);
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          color: var(--color-ink);
        }

        .section-title p {
          color: var(--color-muted);
          max-width: 720px;
          margin: 0 auto;
        }

        .eyebrow {
          display: inline-block;
          font-size: 12px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--color-muted);
          margin-bottom: 12px;
        }

        .eyebrow.small {
          font-size: 11px;
          letter-spacing: 0.2em;
        }

        .title-italic {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          color: var(--color-ink-soft);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 999px;
          padding: 12px 22px;
          font-weight: 600;
          border: 1px solid transparent;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-1px);
        }

        .btn-dark {
          background: var(--color-dark);
          color: var(--color-dark-contrast);
          box-shadow: var(--shadow-soft);
        }

        .btn-light {
          background: var(--color-surface);
          color: var(--color-ink);
          border-color: var(--color-border);
        }

        .btn-compact {
          padding: 10px 18px;
          font-size: 14px;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 999px;
          padding: 8px 16px;
          font-size: 14px;
          color: var(--color-ink-soft);
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          box-shadow: 0 12px 30px rgba(12, 12, 24, 0.06);
        }

        .pill-soft {
          background: var(--color-surface-soft);
        }

        .pill-outline {
          background: var(--color-surface-mute);
          border-color: var(--color-border);
        }

        .pill-icon {
          width: 18px;
          height: 18px;
          display: inline-flex;
        }

        .pill-icon svg {
          width: 100%;
          height: 100%;
        }

        .text-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          color: var(--color-ink);
        }

        .chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }

        .chip-row.left {
          justify-content: flex-start;
        }

        .chip {
          background: var(--color-chip-bg);
          border: 1px solid var(--color-chip-border);
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 600;
          color: var(--color-ink-soft);
        }
      `}</style>
    </>
  )
}
