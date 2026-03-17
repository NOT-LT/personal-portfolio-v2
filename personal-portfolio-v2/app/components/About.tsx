import { useEffect, useRef } from 'react';

const SKILLS: string[] = [
  'Java', 'Python', 'TensorFlow', 'Deep Learning',
  'Docker', 'Linux', 'Networking', 'Security',
  'Full-Stack', 'HCI', 'Git', 'SQL',
];

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

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
              </p>
              {/* ...existing code... */}
            </div>
          </div>
          {/* ...existing code... */}
        </div>
      </div>
    </section>
  );
}
