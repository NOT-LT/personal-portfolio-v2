import { useEffect, useRef } from 'react'

const SKILLS = [
  'Java', 'Python', 'TensorFlow', 'Deep Learning',
  'Docker', 'Linux', 'Networking', 'Security',
  'Full-Stack', 'HCI', 'Git', 'SQL',
]

export default function About() {
  const sectionRef = useRef()

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="about" className="py-16 sm:py-[100px] bg-bg-secondary" ref={sectionRef}>
      <div className="max-w-[1100px] mx-auto px-6">

        <div className="mb-14 reveal opacity-0 translate-y-[18px] transition-[opacity,transform] duration-[550ms] [&.in]:opacity-100 [&.in]:translate-y-0">
          <span className="font-mono text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent block mb-3.5">About</span>
          <h2 className="font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-bold tracking-[-0.022em] leading-[1.18] text-fg">
            Software Engineer,<br />
            <span className="text-accent">Builder &amp; Creator</span>
          </h2>
          <div className="w-7 h-0.5 bg-accent rounded-[1px] mt-3.5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* Left */}
          <div className="reveal opacity-0 translate-y-[18px] transition-[opacity,transform] duration-[550ms] [&.in]:opacity-100 [&.in]:translate-y-0">
            <div className="flex flex-col gap-4">
              <p className="font-text text-[0.9375rem] font-normal leading-[1.78] tracking-[-0.002em] text-muted">
                Based in Bahrain, my journey began with curiosity about how systems communicate —
                from low-level networking protocols to high-level product design. I believe every
                piece of software is a conversation, and my role is to make that dialogue seamless,
                efficient, and precise.
              </p>
              <p className="font-text text-[0.9375rem] font-normal leading-[1.78] tracking-[-0.002em] text-muted">
                With a foundation in computer networking and information security, I bridge robust
                backend architecture with polished user experiences. When I'm not shipping code,
                I'm training CNNs, self-hosting services, or exploring the mechanics of large
                language models.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#" className="inline-flex items-center gap-2 font-text text-sm font-medium tracking-[-0.008em] py-[11px] px-6 rounded-full border-none cursor-pointer transition-[opacity,border-color] duration-[180ms] whitespace-nowrap bg-accent text-bg hover:opacity-[0.88]">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download CV
              </a>
            
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-11">

            <div className="reveal opacity-0 translate-y-[18px] transition-[opacity,transform] duration-[550ms] [&.in]:opacity-100 [&.in]:translate-y-0">
              <span className="font-mono text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent block mb-4">Skills &amp; Interests</span>
              <div className="flex flex-wrap gap-2 mt-4">
                {SKILLS.map(s => (
                  <span
                    key={s}
                    className="bg-surface border border-line text-muted font-mono text-[0.7rem] tracking-[0.04em] px-3 py-[5px] rounded-[6px] transition-[border-color,color] duration-[180ms] hover:border-line-accent hover:text-fg cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal opacity-0 translate-y-[18px] transition-[opacity,transform] duration-[550ms] [&.in]:opacity-100 [&.in]:translate-y-0">
              <span className="font-mono text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent block mb-4">Education</span>
              <div className="flex flex-col gap-5 mt-4">
                <div className="flex gap-3.5 items-start">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-[6px] bg-accent" />
                  <div>
                    <div className="font-display text-[0.9rem] font-semibold tracking-[-0.012em] text-fg">B.Sc. in Software Engineering</div>
                    <div className="font-mono text-[0.68rem] tracking-[0.06em] mt-[3px] text-accent">University of Bahrain · 2022 – Present</div>
                  </div>
                </div>
                <div className="flex gap-3.5 items-start">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-[6px] bg-dim" />
                  <div>
                    <div className="font-display text-[0.9rem] font-semibold tracking-[-0.012em] text-fg">Computer Networks &amp; Security</div>
                    <div className="font-mono text-[0.68rem] tracking-[0.06em] mt-[3px] text-dim">Coursework · 2023 – 2024</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
