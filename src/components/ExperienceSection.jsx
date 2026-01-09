import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../motion'

const timelineItems = [
  {
    range: '2024',
    index: '01',
    role: 'Pelatihan MTCRE',
    company: 'MTCRE',
    city: 'Pelatihan',
    description: 'Mengikuti pelatihan MTCRE pada 2024.',
    tags: ['Training', 'Networking', 'MTCRE'],
  },
  {
    range: '2024',
    index: '02',
    role: 'Pelatihan MTCNA',
    company: 'MTCNA',
    city: 'Pelatihan',
    description: 'Mengikuti pelatihan MTCNA pada 2024.',
    tags: ['Training', 'Networking', 'MTCNA'],
  },
  {
    range: '2025',
    index: '03',
    role: 'Asisten Lab Alpro',
    company: 'Laboratorium Alpro',
    city: 'Kampus',
    description: 'Menjadi asisten lab Alpro pada 2025.',
    tags: ['Assistant', 'Algorithms', 'Programming'],
  },
  {
    range: '2025',
    index: '04',
    role: 'Committee NVIDIA Road to Campus',
    company: 'NVIDIA Road to Campus',
    city: 'Panitia',
    description: 'Menjadi panitia NVIDIA Road to Campus pada 2025.',
    tags: ['Event', 'Committee', 'Coordination'],
  },
  {
    range: '2025',
    index: '05',
    role: 'Maintenance Jaringan',
    company: 'SMPIT Mutiara Rahmah',
    city: 'Jaringan',
    description: 'Maintenance jaringan di SMPIT Mutiara Rahmah pada 2025.',
    tags: ['Network', 'Maintenance', 'Support'],
  },
  {
    range: '2025',
    index: '06',
    role: 'Juara 2 Lomba UI/UX',
    company: 'Unmul TechnoFest 2025',
    city: 'Niralens',
    description: 'Meraih Juara 2 lomba UI/UX di Unmul TechnoFest 2025 dengan Niralens.',
    tags: ['UI/UX', 'Competition', 'Award'],
  },
  {
    range: '2025',
    index: '07',
    role: 'Magang di FSTI ITK',
    company: 'Fakultas Sains dan Teknologi Informasi ITK',
    city: 'Magang',
    description: 'Magang di Fakultas Sains dan Teknologi Informasi ITK pada 2025.',
    tags: ['Internship', 'ITK', 'FSTI'],
  },
  {
    range: '2025',
    index: '08',
    role: 'Kerja Praktik Thingsboard CE',
    company: 'ITK',
    city: 'Kerja Praktik',
    description: 'Konfigurasi dan instalasi Thingsboard CE di ITK pada 2025.',
    tags: ['Thingsboard', 'IoT', 'Deployment'],
  },
]

export default function ExperienceSection({ animKey }) {
  const sectionRef = useRef(null)
  const [revealCount, setRevealCount] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    let ticking = false

    const updateReveal = () => {
      const rect = section.getBoundingClientRect()
      const totalScroll = section.offsetHeight - window.innerHeight

      if (totalScroll <= 0) {
        setRevealCount(timelineItems.length)
        return
      }

      const scrolled = Math.min(Math.max(0, -rect.top), totalScroll)
      const progress = scrolled / totalScroll
      const nextCount = Math.min(timelineItems.length, Math.floor(progress * (timelineItems.length + 1)))
      setRevealCount(nextCount)
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        updateReveal()
        ticking = false
      })
    }

    updateReveal()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [animKey])

  return (
    <>
      <section
        id="pengalaman"
        className="section experience"
        key={`experience-${animKey}`}
        ref={sectionRef}
        style={{ '--journey-steps': timelineItems.length }}
      >
        <div className="journey-pin">
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

            <div className="timeline-grid">
              {timelineItems.map((item, index) => (
                <article
                  key={item.index}
                  className={`timeline-card ${index < revealCount ? 'is-revealed' : ''}`}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <div className="timeline-meta">
                    <span className="pill pill-outline">
                      <span className="pill-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none">
                          <rect x="4" y="6" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M8 4v4M16 4v4" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </span>
                      {item.range}
                    </span>
                    <span className="timeline-index">{item.index}</span>
                  </div>
                  <h3>{item.role}</h3>
                  <div className="timeline-details">
                    <span>{item.company}</span>
                    <span>{item.city}</span>
                  </div>
                  <p>{item.description}</p>
                  <div className="chip-row left">
                    {item.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <motion.div className="scroll-hint" variants={fadeUp}>
              Scroll ke bawah untuk melihat perjalanan lengkap &rarr;
            </motion.div>
          </div>
        </div>
        <div className="journey-space" aria-hidden="true" />
      </section>
      <style>{`
        .experience {
          padding-top: 80px;
          padding-bottom: 120px;
          overflow: visible;
        }

        .journey-pin {
          position: sticky;
          top: 120px;
        }

        .journey-space {
          height: clamp(480px, calc(var(--journey-steps) * 40vh), 1400px);
        }

        .timeline-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
          padding-top: 60px;
        }

        .timeline-grid::before {
          content: '';
          position: absolute;
          top: 20px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--color-border);
        }

        .timeline-card {
          position: relative;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 22px;
          padding: 22px;
          box-shadow: var(--shadow-card);
          opacity: 0;
          transform: translateY(24px);
          filter: blur(2px);
          transition: opacity 0.45s ease, transform 0.45s ease, filter 0.45s ease;
        }

        .timeline-card.is-revealed {
          opacity: 1;
          transform: translateY(0);
          filter: none;
        }

        .timeline-card::before {
          content: '';
          position: absolute;
          top: -42px;
          left: 28px;
          width: 16px;
          height: 16px;
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
          margin-top: 24px;
        }

        @media (max-width: 1100px) {
          .timeline-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .journey-space {
            height: clamp(360px, calc(var(--journey-steps) * 26vh), 1000px);
          }
        }

        @media (max-width: 768px) {
          .journey-pin {
            top: 100px;
          }

          .timeline-grid {
            grid-template-columns: 1fr;
          }

          .journey-space {
            height: clamp(320px, calc(var(--journey-steps) * 22vh), 820px);
          }
        }
      `}</style>
    </>
  )
}
