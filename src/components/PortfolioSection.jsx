import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, fadeUp, stagger, viewport } from '../motion'

const portfolioItems = [
  {
    category: 'Full-Stack Development',
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan real-time inventory, pembayaran, dan dashboard admin.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1200&q=80',
    alt: 'E-commerce platform',
    github: 'https://github.com/johndoe/ecommerce-platform',
  },
  {
    category: 'SaaS Product',
    title: 'AI-Powered Analytics',
    description: 'Dashboard analytics dengan machine learning untuk prediksi tren dan insight bisnis.',
    tags: ['Next.js', 'Python', 'TensorFlow', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80',
    alt: 'AI analytics dashboard',
    github: 'https://github.com/johndoe/ai-analytics',
  },
  {
    category: 'UI/UX Design',
    title: 'Design System',
    description: 'Comprehensive design system dengan 100+ components dan dokumentasi.',
    tags: ['Figma', 'React', 'Storybook', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
    alt: 'Design system',
    github: 'https://github.com/johndoe/design-system',
  },
  {
    category: 'Mobile Development',
    title: 'Mobile Banking App',
    description: 'Aplikasi mobile banking dengan biometric authentication dan insights keuangan personal.',
    tags: ['React Native', 'Firebase', 'Redux', 'Plaid API'],
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
    alt: 'Mobile banking app',
    github: 'https://github.com/johndoe/mobile-banking',
  },
  {
    category: 'Web Application',
    title: 'Social Media Dashboard',
    description: 'Unified dashboard untuk mengelola multiple social media accounts dan scheduling.',
    tags: ['Vue.js', 'GraphQL', 'Redis', 'Bull Queue'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Social media dashboard',
    github: 'https://github.com/johndoe/social-dashboard',
  },
  {
    category: 'Health & Wellness',
    title: 'Fitness Tracking Platform',
    description: 'Platform fitness dengan workout tracking, nutrition planning, dan community features.',
    tags: ['Next.js', 'Supabase', 'Stripe', 'Charts.js'],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fitness platform',
    github: 'https://github.com/johndoe/fitness-platform',
  },
]

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = portfolioItems.length

  const handlePrev = () => {
    setActiveIndex((index) => (index - 1 + total) % total)
  }

  const handleNext = () => {
    setActiveIndex((index) => (index + 1) % total)
  }

  const getSlideState = (index) => {
    if (index === activeIndex) return 'is-active'
    if (index === (activeIndex - 1 + total) % total) return 'is-prev'
    if (index === (activeIndex + 1) % total) return 'is-next'
    if (index === (activeIndex - 2 + total) % total) return 'is-prev-2'
    if (index === (activeIndex + 2) % total) return 'is-next-2'
    return 'is-hidden'
  }

  return (
    <>
      <motion.section
        id="portofolio"
        className="section portfolio"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <div className="container">
          <motion.div className="section-title" variants={stagger}>
            <motion.span className="eyebrow" variants={fadeUp}>
              Portfolio
            </motion.span>
            <motion.h2 variants={fadeUp}>
              Karya <span className="title-italic">Terpilih</span>
            </motion.h2>
            <motion.p variants={fadeUp}>
              Beberapa proyek yang telah saya kerjakan dengan penuh dedikasi dan passion
            </motion.p>
          </motion.div>

          <motion.div className="portfolio-carousel" variants={stagger}>
            {portfolioItems.map((item, index) => (
              <motion.article
                key={item.title}
                className={`portfolio-card portfolio-slide ${getSlideState(index)}`}
                variants={fadeIn}
              >
                <div className="portfolio-media">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <div className="portfolio-overlay">
                    <a
                      className="portfolio-link"
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Lihat repository GitHub untuk ${item.title}`}
                    >
                      Lihat di GitHub
                    </a>
                  </div>
                </div>
                <div className="portfolio-body">
                  <span className="eyebrow small">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <motion.div className="chip-row left" variants={stagger}>
                    {item.tags.map((tag) => (
                      <motion.span key={tag} className="chip" variants={fadeUp}>
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div className="portfolio-controls" variants={fadeUp}>
            <button type="button" className="carousel-btn" onClick={handlePrev} aria-label="Sebelumnya">
              &larr;
            </button>
            <button type="button" className="carousel-btn" onClick={handleNext} aria-label="Berikutnya">
              &rarr;
            </button>
          </motion.div>
        </div>
      </motion.section>
      <style>{`
        .portfolio-carousel {
          --slide-width: 360px;
          --slide-gap: 32px;
          --slide-shift: calc(var(--slide-width) + var(--slide-gap));
          --slide-shift-2: calc(var(--slide-shift) * 2);
          position: relative;
          height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          overflow: visible;
        }

        .portfolio-slide {
          position: absolute;
          top: 0;
          left: 50%;
          width: var(--slide-width);
          transition: transform 0.45s ease, opacity 0.45s ease, filter 0.45s ease;
        }

        .portfolio-slide.is-active {
          transform: translateX(-50%) scale(1);
          opacity: 1;
          filter: none;
          z-index: 3;
        }

        .portfolio-slide.is-prev {
          transform: translateX(calc(-50% - var(--slide-shift))) scale(0.95);
          opacity: 0.55;
          filter: blur(2px);
          z-index: 2;
          pointer-events: none;
        }

        .portfolio-slide.is-next {
          transform: translateX(calc(-50% + var(--slide-shift))) scale(0.95);
          opacity: 0.55;
          filter: blur(2px);
          z-index: 2;
          pointer-events: none;
        }

        .portfolio-slide.is-prev-2 {
          transform: translateX(calc(-50% - var(--slide-shift-2))) scale(0.88);
          opacity: 0.3;
          filter: blur(3px);
          z-index: 1;
          pointer-events: none;
        }

        .portfolio-slide.is-next-2 {
          transform: translateX(calc(-50% + var(--slide-shift-2))) scale(0.88);
          opacity: 0.3;
          filter: blur(3px);
          z-index: 1;
          pointer-events: none;
        }

        .portfolio-slide.is-hidden {
          opacity: 0;
          transform: translateX(-50%) scale(0.9);
          pointer-events: none;
          z-index: 1;
        }

        .portfolio-controls {
          margin-top: 26px;
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .carousel-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid var(--color-border);
          background: var(--color-surface);
          color: var(--color-ink);
          font-size: 18px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 20px rgba(14, 14, 24, 0.12);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
        }

        .carousel-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 14px 24px rgba(14, 14, 24, 0.18);
        }

        .carousel-btn:focus-visible {
          outline: 2px solid var(--color-ink);
          outline-offset: 3px;
        }

        .portfolio-card {
          background: var(--color-surface);
          border-radius: 22px;
          border: 1px solid var(--color-border);
          overflow: hidden;
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
        }

        .portfolio-media {
          height: 220px;
          overflow: hidden;
          position: relative;
        }

        .portfolio-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .portfolio-media::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--color-overlay);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .portfolio-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          pointer-events: none;
        }

        .portfolio-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 18px;
          border-radius: 999px;
          background: var(--color-surface);
          color: var(--color-ink);
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
        }

        .portfolio-card:hover .portfolio-media::after,
        .portfolio-card:focus-within .portfolio-media::after {
          opacity: 1;
        }

        .portfolio-card:hover .portfolio-overlay,
        .portfolio-card:focus-within .portfolio-overlay {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .portfolio-card:hover .portfolio-media img,
        .portfolio-card:focus-within .portfolio-media img {
          transform: scale(1.03);
        }

        .portfolio-body {
          padding: 20px 22px 24px;
        }

        .portfolio-body h3 {
          margin: 10px 0 12px;
          font-size: 20px;
        }

        .portfolio-body p {
          color: var(--color-muted);
          margin-bottom: 16px;
        }

        @media (max-width: 1100px) {
          .portfolio-carousel {
            --slide-width: 320px;
            height: 500px;
          }
        }

        @media (max-width: 768px) {
          .portfolio-carousel {
            --slide-width: min(88vw, 340px);
            height: 520px;
          }

          .portfolio-slide.is-prev,
          .portfolio-slide.is-next,
          .portfolio-slide.is-prev-2,
          .portfolio-slide.is-next-2 {
            opacity: 0;
            transform: translateX(-50%) scale(0.9);
          }
        }
      `}</style>
    </>
  )
}
