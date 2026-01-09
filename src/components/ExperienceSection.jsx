import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, fadeUp, stagger, viewport } from '../motion'

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
  const pinRef = useRef(null)
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const maxTranslateRef = useRef(0)
  const timelineOffsetRef = useRef(0)
  const startLeadRef = useRef(0)
  const cardWidthRef = useRef(0)
  const cardGapRef = useRef(0)
  const padLeftRef = useRef(0)
  const targetProgressRef = useRef(0)
  const currentProgressRef = useRef(0)
  const rafRef = useRef(0)
  const revealCountRef = useRef(0)
  const [revealCount, setRevealCount] = useState(0)
  const [journeySpaceHeight, setJourneySpaceHeight] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    const pin = pinRef.current
    const viewport = viewportRef.current
    const track = trackRef.current
    if (!section || !pin || !viewport || !track) return undefined

    let ticking = false

    const updateMetrics = () => {
      const pinRect = pin.getBoundingClientRect()
      const viewportRect = viewport.getBoundingClientRect()
      const timelineOffset = Math.max(0, viewportRect.top - pinRect.top)
      timelineOffsetRef.current = timelineOffset
      const firstCard = track.querySelector('.timeline-card')
      const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 0
      const trackStyles = window.getComputedStyle(track)
      const gap =
        parseFloat(trackStyles.columnGap || trackStyles.gap || trackStyles.rowGap || '0') || 0
      const padLeft = parseFloat(trackStyles.paddingLeft || '0') || 0
      const startLead = Math.min(360, Math.max(200, cardWidth * 0.9, viewport.clientWidth * 0.25))
      startLeadRef.current = startLead
      cardWidthRef.current = cardWidth
      cardGapRef.current = gap
      padLeftRef.current = padLeft
      const maxTranslate = Math.max(0, track.scrollWidth - viewport.clientWidth)
      maxTranslateRef.current = maxTranslate
      const stickyOffset = parseFloat(window.getComputedStyle(pin).top) || 0
      const space = Math.max(
        0,
        timelineOffset + startLead + maxTranslate + window.innerHeight - pin.offsetHeight - stickyOffset
      )
      setJourneySpaceHeight(space)
    }

    const applyProgress = (progress) => {
      const maxTranslate = maxTranslateRef.current
      const translateX = -maxTranslate * progress
      const cardWidth = cardWidthRef.current
      const cardGap = cardGapRef.current
      const padLeft = padLeftRef.current
      const viewportWidth = viewport.clientWidth
      let nextCount = Math.min(timelineItems.length, Math.max(1, Math.floor(progress * (timelineItems.length + 1))))

      if (cardWidth > 0 && viewportWidth > 0) {
        const focusPoint = viewportWidth * 0.48
        const threshold = maxTranslate * progress + focusPoint
        const indexFloat = (threshold - padLeft - cardWidth / 2) / (cardWidth + cardGap)
        nextCount = Math.min(timelineItems.length, Math.max(1, Math.floor(indexFloat) + 1))
      }
      if (nextCount !== revealCountRef.current) {
        revealCountRef.current = nextCount
        setRevealCount(nextCount)
      }
      track.style.transform = `translate3d(${translateX}px, 0, 0)`
    }

    const animate = () => {
      const target = targetProgressRef.current
      const current = currentProgressRef.current
      const next = current + (target - current) * 0.12
      currentProgressRef.current = next
      applyProgress(next)

      if (Math.abs(target - next) > 0.001) {
        rafRef.current = window.requestAnimationFrame(animate)
      } else {
        currentProgressRef.current = target
        applyProgress(target)
        rafRef.current = 0
      }
    }

    const updateScroll = () => {
      const rect = section.getBoundingClientRect()
      const maxTranslate = maxTranslateRef.current
      const stickyOffset = parseFloat(window.getComputedStyle(pin).top) || 0
      const startLead = startLeadRef.current
      const scrollRange = Math.max(1, maxTranslate + startLead)
      const startOffset = timelineOffsetRef.current
      const scrollIntoSection = -rect.top + stickyOffset
      const scrolled = Math.min(Math.max(0, scrollIntoSection - startOffset), scrollRange)
      const horizontalScroll = Math.max(0, scrolled - startLead)
      const progress = maxTranslate > 0 ? horizontalScroll / maxTranslate : 1
      targetProgressRef.current = progress

      if (!rafRef.current) {
        rafRef.current = window.requestAnimationFrame(animate)
      }
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        updateScroll()
        ticking = false
      })
    }

    const onResize = () => {
      updateMetrics()
      onScroll()
    }

    updateMetrics()
    updateScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
        rafRef.current = 0
      }
    }
  }, [animKey])

  return (
    <>
      <section
        id="pengalaman"
        className="section experience"
        key={`experience-${animKey}`}
        ref={sectionRef}
      >
        <motion.div
          className="journey-pin"
          ref={pinRef}
          variants={fadeIn}
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

            <div className="timeline-viewport" ref={viewportRef}>
              <div className="timeline-grid" ref={trackRef}>
                {timelineItems.map((item, index) => (
                  <article
                    key={item.index}
                    className={`timeline-card ${index < revealCount ? 'is-revealed' : ''}`}
                    style={{ transitionDelay: `${index * 0.03}s` }}
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
                <article
                  className={`timeline-card timeline-future ${
                    revealCount >= timelineItems.length ? 'is-revealed' : ''
                  }`}
                >
                  <div className="timeline-meta">
                    <span className="pill pill-soft">
                      <span className="pill-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 3c3.6 0 6.6 2.3 7.6 5.6L21 12l-1.4 3.4C18.6 18.7 15.6 21 12 21"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M9 7l3 10 3-10-3-2-3 2z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                          <circle cx="12" cy="10" r="1.5" fill="currentColor" />
                        </svg>
                      </span>
                      Next Journey
                    </span>
                    <span className="timeline-index">∞</span>
                  </div>
                  <h3>Perjalanan Masih Berlanjut</h3>
                  <p>
                    Selalu terbuka untuk pengalaman baru, kolaborasi, dan tantangan berikutnya.
                  </p>
                  <div className="chip-row left">
                    <span className="chip">Future</span>
                    <span className="chip">Growth</span>
                    <span className="chip">Opportunities</span>
                  </div>
                </article>
              </div>
            </div>

            <motion.div className="scroll-hint" variants={fadeUp}>
              Scroll ke bawah untuk melihat perjalanan lengkap
            </motion.div>
          </div>
        </motion.div>
        <div className="journey-space" aria-hidden="true" style={{ height: journeySpaceHeight }} />
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
          pointer-events: none;
        }

        .timeline-viewport {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .timeline-grid {
          position: relative;
          --timeline-pad: clamp(80px, 10vw, 160px);
          display: flex;
          gap: 24px;
          padding: 64px var(--timeline-pad) 16px;
          width: max-content;
          will-change: transform;
          transform: translateX(0);
        }

        .timeline-grid::before {
          content: '';
          position: absolute;
          top: 20px;
          left: var(--timeline-pad);
          right: var(--timeline-pad);
          height: 2px;
          background: var(--color-border);
        }

        .timeline-grid::after {
          content: '';
          position: absolute;
          top: 16px;
          right: calc(var(--timeline-pad) + 6px);
          width: 22px;
          height: 10px;
          border-top: 2px solid var(--color-border);
          border-right: 2px solid var(--color-border);
          transform: rotate(45deg);
          opacity: 0.65;
        }

        .timeline-card {
          position: relative;
          flex: 0 0 auto;
          width: clamp(240px, 26vw, 320px);
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 22px;
          padding: 22px;
          box-shadow: var(--shadow-card);
          opacity: 0;
          transform: translateY(18px);
          filter: blur(2px);
          transition: opacity 0.28s ease, transform 0.28s ease, filter 0.28s ease;
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

        .timeline-future {
          border-style: dashed;
          border-color: var(--color-outline);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 248, 250, 0.9));
        }

        .timeline-future .timeline-index {
          background: transparent;
          border: 1px dashed var(--color-outline);
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
        }

        @media (max-width: 768px) {
          .journey-pin {
            top: 100px;
          }

          .timeline-grid {
            --timeline-pad: 40px;
            padding-top: 56px;
          }
        }
      `}</style>
    </>
  )
}
