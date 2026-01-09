import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, fadeUp, stagger, viewport } from '../motion'
import quizMasterImage from '../assets/Image/Project-card/Quiz-Master.png'
import healthyLensImage from '../assets/Image/Project-card/Healthy Lens.png'
import pharmacyImage from '../assets/Image/Project-card/Pharmacy Data Search Performance Comparison.png'
import bowlingImage from '../assets/Image/Project-card/Simple Bowling Game Use python grafika komputer.png'
import tiaranaImage from '../assets/Image/Project-card/Tiarana-pharmacy.png'
import woodknotsImage from '../assets/Image/Project-card/Woodknots-detection.png'
import textFinderImage from '../assets/Image/Project-card/Test-Finder Functional Programmng.png'
import mazeRunnerImage from '../assets/Image/Project-card/Maze Runner Game.png'

const portfolioItems = [
  {
    category: 'Project Akademik',
    title: 'Quiz Master',
    description: 'Aplikasi kuis interaktif yang dibuat pada Semester 2.',
    tags: ['Quiz', 'Semester 2', 'Academic'],
    image: quizMasterImage,
    alt: 'Tampilan Quiz Master',
    github: 'https://github.com/Naufalpc11/Question-Master',
  },
  {
    category: 'UI/UX Design',
    title: 'UI/UX HealthyLens',
    description: 'Studi UI/UX aplikasi HealthyLens pada Semester 4.',
    tags: ['UI/UX', 'Prototype', 'Semester 4'],
    image: healthyLensImage,
    alt: 'UI/UX HealthyLens',
  },
  {
    category: 'Data & Performance',
    title: 'Pharmacy Data Search Performance Comparison',
    description: 'Perbandingan performa pencarian data apotek pada Semester 4.',
    tags: ['Search', 'Benchmark', 'Semester 4'],
    image: pharmacyImage,
    alt: 'Pharmacy data search performance comparison',
    github: 'https://github.com/Naufalpc11/Pharmacy-Data-Search-Performance-Comparison',
  },
  {
    category: 'Simulation',
    title: 'Bowling Lane Physics Simulation',
    description: 'Simulasi fisika lintasan bowling menggunakan Pygame.',
    tags: ['Python', 'Pygame', 'Physics'],
    image: bowlingImage,
    alt: 'Bowling lane physics simulation',
    github: 'https://github.com/Naufalpc11/ComputerGrapichs',
  },
  {
    category: 'Company Profile',
    title: 'Company Profile Tiarana Farma',
    description: 'Website company profile untuk Tiarana Farma pada Semester 5.',
    tags: ['Company Profile', 'Web Design', 'Semester 5'],
    image: tiaranaImage,
    alt: 'Company profile Tiarana Farma',
    github: 'https://github.com/Naufalpc11/TiaranaPharmacy',
  },
  {
    category: 'Computer Vision',
    title: 'Wood Knots Detection',
    description: 'Deteksi wood knots pada citra kayu di Semester 5.',
    tags: ['Computer Vision', 'Image Processing', 'Semester 5'],
    image: woodknotsImage,
    alt: 'Wood knots detection',
    github: 'https://github.com/Naufalpc11/Wood-Classification',
  },
  {
    category: 'Functional Programming',
    title: 'Multiple Text-Finder',
    description: 'Pencarian banyak teks menggunakan pendekatan functional programming.',
    tags: ['Functional', 'Text Search', 'Algorithms'],
    image: textFinderImage,
    alt: 'Multiple text finder',
    github: 'https://github.com/Naufalpc11/text-finder-with-rocket-and-vue',
  },
  {
    category: 'AI Pathfinding',
    title: 'Maze Runner AI',
    description: 'Perbandingan pathfinding BFS vs UCS vs A pada maze runner.',
    tags: ['BFS', 'UCS', 'A'],
    image: mazeRunnerImage,
    alt: 'Maze runner pathfinding',
    github: 'https://github.com/Naufalpc11/Maze-Runner',
  },
]

export default function PortfolioSection({ animKey }) {
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
        key={`portfolio-${animKey}`}
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
                  {item.github ? (
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
                  ) : null}
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
          position: relative;
          z-index: 0;
          transition: transform 0.35s ease;
        }

        .portfolio-media::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--color-overlay);
          opacity: 0;
          z-index: 1;
          pointer-events: none;
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
          z-index: 2;
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
