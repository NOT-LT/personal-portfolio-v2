import Lanyard from './Lanyard'
import Aurora from './Aurora'
import CountUp from './CountUp'
import '../styles/global.css';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-bg pt-[84px] relative overflow-hidden">

      {/* Aurora background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.55] [mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_70%,transparent_100%)]">
        <Aurora colorStops={['#00e5d0', '#0ea5e9', '#00e5d0']} blend={0.7} amplitude={0.2} speed={0.4} />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-[1] flex items-center justify-between gap-8 sm:gap-12 flex-wrap pt-10 pb-10 sm:pb-[60px]">

        {/* Left: content */}
        <div className="flex-1 min-w-0 sm:min-w-[280px]">
          <span className="font-mono text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent block animate-[fadeUp_0.5s_ease_both] [animation-delay:0.05s]">Hi, my name is</span>

          <div className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.13s]">
            <h1 className="font-display text-[clamp(2.8rem,6.5vw,5.6rem)] font-bold tracking-[-0.03em] leading-[1.04] text-fg">
              Taha Aljamri<span className="text-accent">.</span>
            </h1>
          </div>

          <p className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.22s] font-display text-[clamp(1.3rem,2.4vw,2rem)] font-medium tracking-[-0.022em] leading-[1.3] text-muted mt-4 mb-7 max-w-[520px]">
            I build innovative<br />
            software solutions<span className="text-accent">.</span>
          </p>

          <p className="font-text text-[0.9375rem] font-normal leading-[1.78] tracking-[-0.002em] text-muted animate-[fadeUp_0.5s_ease_both] [animation-delay:0.32s] max-w-[490px] mb-9">
            Software Engineer specializing in full-stack development and system
            architecture. Currently pursuing a B.Sc. in Software Engineering at{' '}
            <a href="https://www.uob.edu.bh" target="_blank" rel="noreferrer" className="text-accent hover:underline">
              University of Bahrain
            </a>
            , focused on building scalable, real-world applications.
          </p>
          <div className="flex items-center gap-1.5 pb-3 flex-wrap">
            <a href="#contact" className="inline-flex items-center gap-2 font-text text-sm font-medium tracking-[-0.008em] py-[11px] px-6 rounded-full cursor-pointer transition-[opacity,border-color] duration-[180ms] whitespace-nowrap bg-accent border border-none text-bg hover:border-line-hover">
              Get In Touch
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 font-text text-sm font-medium tracking-[-0.008em] py-[11px] px-6 rounded-full cursor-pointer transition-[opacity,border-color] duration-[180ms] whitespace-nowrap bg-transparent border border-faint text-fg hover:border-line-hover">View Projects</a>
          </div>

          <div className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.54s] flex gap-6 sm:gap-10 pt-7 border-t border-line">
            <div className="flex flex-col gap-1">
              <span className="font-display text-[1.75rem] font-bold tracking-[-0.04em] text-accent leading-none">
                <CountUp to={3} duration={2} className="" />+
              </span>
              <span className="text-[0.75rem] text-dim">Years coding</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display text-[1.75rem] font-bold tracking-[-0.04em] text-accent leading-none">
                <CountUp to={10} duration={2} className="" />+
              </span>
              <span className="text-[0.75rem] text-dim">Projects built</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display text-[1.75rem] font-bold tracking-[-0.04em] text-accent leading-none">
                <CountUp to={4} duration={2} className="" />
              </span>
              <span className="text-[0.75rem] text-dim">Core courses</span>
            </div>
          </div>
        </div>

        {/* Right: Lanyard */}
        <div className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.28s] flex-1 min-w-0 sm:min-w-[280px] hidden md:flex items-center justify-center">
          <Lanyard position={[0, 0, 16]} gravity={[0, -40, 0]} />
        </div>

      </div>
    </section>
  )
}
