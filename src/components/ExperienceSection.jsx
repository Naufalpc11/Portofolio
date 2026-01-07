import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../motion'

export default function ExperienceSection() {
  const sectionRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const timeline = timelineRef.current
    if (!section || !timeline) return

    const onWheel = (event) => {
      if (!section.contains(event.target)) return
      const delta = event.deltaY
      if (delta === 0) return

      const maxScroll = timeline.scrollWidth - timeline.clientWidth
      const atStart = timeline.scrollLeft <= 0
      const atEnd = timeline.scrollLeft >= maxScroll - 1

      if ((delta > 0 && !atEnd) || (delta < 0 && !atStart)) {
        event.preventDefault()
        timeline.scrollLeft += delta
      }
    }

    // Convert vertical wheel to horizontal scroll while the timeline can move.
    section.addEventListener('wheel', onWheel, { passive: false })
    return () => section.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <>
      <motion.section
        id="pengalaman"
        className="section experience"
        ref={sectionRef}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <div className="container">
          <motion.div className="section-title" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>
              Journey
            </motion.span>
            <motion.h2 variants={fadeUp}>
              Perjalanan <span className="title-italic">Karir</span>
            </motion.h2>
            <motion.p variants={fadeUp}>
              Dari junior developer hingga senior, setiap step adalah pembelajaran berharga
            </motion.p>
          </motion.div>
        </div>

        <motion.div className="timeline-scroll" ref={timelineRef} variants={stagger}>
          <motion.article className="timeline-card" variants={fadeUp}>
            <div className="timeline-meta">
              <span className="pill pill-outline">
                <span className="pill-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="6" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 4v4M16 4v4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                2024 - Sekarang
              </span>
              <span className="timeline-index">01</span>
            </div>
            <h3>Senior Full-Stack Developer</h3>
            <div className="timeline-details">
              <span>TechCorp Indonesia</span>
              <span>Jakarta</span>
            </div>
            <p>Memimpin tim development untuk membangun platform SaaS yang melayani 100K+ users.</p>
            <motion.div className="chip-row left" variants={stagger}>
              {['React', 'Node.js', 'AWS', 'PostgreSQL'].map((item) => (
                <motion.span key={item} className="chip" variants={fadeUp}>
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.article>

          <motion.article className="timeline-card" variants={fadeUp}>
            <div className="timeline-meta">
              <span className="pill pill-outline">
                <span className="pill-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="6" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 4v4M16 4v4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                2022 - 2024
              </span>
              <span className="timeline-index">02</span>
            </div>
            <h3>Full-Stack Developer</h3>
            <div className="timeline-details">
              <span>Digital Innovations</span>
              <span>Bandung</span>
            </div>
            <p>Mengembangkan web applications untuk klien enterprise dengan microservices architecture.</p>
            <motion.div className="chip-row left" variants={stagger}>
              {['Next.js', 'Python', 'Docker', 'MongoDB'].map((item) => (
                <motion.span key={item} className="chip" variants={fadeUp}>
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.article>

          <motion.article className="timeline-card" variants={fadeUp}>
            <div className="timeline-meta">
              <span className="pill pill-outline">
                <span className="pill-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="6" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 4v4M16 4v4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                2021 - 2022
              </span>
              <span className="timeline-index">03</span>
            </div>
            <h3>Frontend Developer</h3>
            <div className="timeline-details">
              <span>Creative Studios</span>
              <span>Jakarta</span>
            </div>
            <p>Membuat interactive websites dengan fokus pada user experience dan modern design.</p>
            <motion.div className="chip-row left" variants={stagger}>
              {['React', 'TypeScript', 'Tailwind CSS'].map((item) => (
                <motion.span key={item} className="chip" variants={fadeUp}>
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.article>

          <motion.article className="timeline-card" variants={fadeUp}>
            <div className="timeline-meta">
              <span className="pill pill-outline">
                <span className="pill-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="6" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 4v4M16 4v4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                2020 - 2021
              </span>
              <span className="timeline-index">04</span>
            </div>
            <h3>UI/UX Designer</h3>
            <div className="timeline-details">
              <span>StartUp Labs</span>
              <span>Surabaya</span>
            </div>
            <p>Merancang user interface untuk mobile dan web platforms dengan pendekatan design thinking.</p>
            <motion.div className="chip-row left" variants={stagger}>
              {['Figma', 'Adobe XD', 'Prototyping'].map((item) => (
                <motion.span key={item} className="chip" variants={fadeUp}>
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.article>
        </motion.div>

        <motion.div className="scroll-hint" variants={fadeUp}>
          Scroll ke kanan untuk lihat lebih banyak &rarr;
        </motion.div>
      </motion.section>
      <style>{`
        .experience {
          padding-top: 80px;
          padding-bottom: 120px;
        }

        .timeline-scroll {
          position: relative;
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: minmax(280px, 1fr);
          gap: 24px;
          padding: 70px 20px 30px;
          overflow-x: auto;
          scroll-snap-type: x proximity;
          scrollbar-width: thin;
          scrollbar-color: var(--color-muted) transparent;
        }

        .timeline-scroll::before {
          content: '';
          position: absolute;
          top: 40px;
          left: 20px;
          right: 20px;
          height: 2px;
          background: var(--color-border);
        }

        .timeline-card {
          position: relative;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 22px;
          padding: 22px;
          min-width: 280px;
          box-shadow: var(--shadow-card);
          scroll-snap-align: start;
        }

        .timeline-card::before {
          content: '';
          position: absolute;
          top: -44px;
          left: 32px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--color-dark);
          box-shadow: 0 0 0 8px var(--color-surface-soft);
        }

        .timeline-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .timeline-index {
          font-size: 12px;
          font-weight: 700;
          color: var(--color-muted);
          background: var(--color-surface-mute);
          border-radius: 999px;
          padding: 6px 10px;
        }

        .timeline-card h3 {
          margin-bottom: 10px;
          font-size: 18px;
        }

        .timeline-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
          color: var(--color-muted);
          font-size: 14px;
          margin-bottom: 12px;
        }

        .timeline-card p {
          color: var(--color-muted);
          margin-bottom: 16px;
        }

        .scroll-hint {
          text-align: center;
          color: var(--color-muted);
          font-size: 14px;
          margin-top: 10px;
        }

        @media (max-width: 768px) {
          .timeline-scroll {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
      `}</style>
    </>
  )
}
