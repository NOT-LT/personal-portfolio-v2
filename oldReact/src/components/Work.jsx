import { useState, useEffect, useRef } from 'react'

const JOBS = [
  {
    tab: 'University of Bahrain',
    shortTab: 'UoB',
    title: 'Software Engineering Student',
    company: '@ University of Bahrain',
    date: '2022 – Present',
    bullets: [
      'Built a three-layer Java property marketplace system (UC-1–UC-4) with UUID-based auth and RFC-compliant validation',
      'Completed 18-question Wireshark packet analysis quiz with full tshark verification',
      'Studied InfoSec — Hamming codes, cryptography, SQL injection, zero-knowledge proofs',
      'Analyzed UoB SIS through a CSCW Communication / Coordination / Collaboration framework',
    ],
  },
  {
    tab: 'Home Lab',
    shortTab: 'HomeLab',
    title: 'Self-Managed Infrastructure',
    company: '@ Home Lab',
    date: '2023 – Present',
    bullets: [
      'Hosts Ubuntu Server on HP Pavilion with full Docker/Portainer media stack — Jellyfin, Radarr, Sonarr, Prowlarr, Bazarr',
      'Configured Cloudflare Tunnels for secure remote access with zero exposed ports',
      'Automated media discovery, indexing, and subtitle management on a dedicated drive',
    ],
  },
  {
    tab: 'ML / AI Projects',
    shortTab: 'ML/AI',
    title: 'ML & AI Research',
    company: '@ Personal',
    date: '2024 – Present',
    bullets: [
      'Built facial emotion CNN on FER2013 (7 classes, ≤15M params), progressing scratch VGG → EfficientNetB2 transfer learning',
      'Implemented Mixup augmentation, cosine annealing LR, boosted class weights, and TTA on Kaggle P100',
      'Resolved tf.data pipeline bugs, dtype mismatches, and deprecated LR schedule APIs in TF 2.19',
    ],
  },
]

export default function Work() {
  const [active, setActive] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const sectionRef = useRef()

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const handleTabClick = (i) => {
    if (i !== active) {
      setActive(i)
      setAnimKey(k => k + 1)
    }
  }

  const job = JOBS[active]

  return (
    <section id="work" className="py-16 sm:py-[100px]" ref={sectionRef}>
      <div className="max-w-[1100px] mx-auto px-6">

        <div className="mb-14 reveal opacity-0 translate-y-[18px] transition-[opacity,transform] duration-[550ms] [&.in]:opacity-100 [&.in]:translate-y-0">
          <span className="font-mono text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent block mb-3.5">Experience</span>
          <h2 className="font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-bold tracking-[-0.022em] leading-[1.18] text-fg">Where I've Worked</h2>
          <div className="w-7 h-0.5 bg-accent rounded-[1px] mt-3.5" />
        </div>

        <div className="reveal opacity-0 translate-y-[18px] transition-[opacity,transform] duration-[550ms] [&.in]:opacity-100 [&.in]:translate-y-0 flex flex-col sm:flex-row">

          {/* Tabs — horizontal pills on mobile, vertical list on desktop */}
          <div className="sm:w-[200px] shrink-0 sm:border-l border-line">
            <div className="flex sm:flex-col gap-2 sm:gap-0 overflow-x-auto pb-4 sm:pb-0 no-scrollbar">
              {JOBS.map((j, i) => (
                <button
                  key={j.tab}
                  onClick={() => handleTabClick(i)}
                  className={[
                    'shrink-0 text-left px-4 sm:px-5 py-2.5 sm:py-3 text-[0.8125rem] cursor-pointer whitespace-nowrap transition-[color,border-color,background] duration-200',
                    'rounded-full sm:rounded-none sm:border-l-2 sm:-ml-px',
                    i === active
                      ? 'bg-accent/8 text-accent border-transparent sm:border-accent'
                      : 'bg-transparent text-dim border-transparent hover:text-muted hover:bg-white/2',
                  ].join(' ')}
                >
                  <span className="sm:hidden">{j.shortTab}</span>
                  <span className="hidden sm:inline">{j.tab}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Panel with transition */}
          <div className="flex-1 pt-6 sm:pt-0 sm:pl-12 min-w-0">
            <div key={animKey} className="animate-[fadeSlide_0.35s_ease_both]">
              <div className="font-display text-[1rem] font-semibold tracking-[-0.015em] text-fg">
                {job.title}
                <span className="font-mono text-[0.78rem] font-normal text-accent ml-1.5">{job.company}</span>
              </div>
              <div className="font-mono text-[0.68rem] tracking-[0.06em] text-dim mt-1.5 mb-6">{job.date}</div>
              <ul className="flex flex-col gap-3">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-[0.9rem] leading-[1.7] text-muted">
                    <span className="text-accent shrink-0 mt-[3px] text-[0.7rem]">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
