"use client";
import { useState, useEffect, useMemo, useRef } from 'react';
import type { WorkContent } from '@/lib/content';

export default function Work({ content }: { content: WorkContent }) {
    const { jobs } = content;

    const sortedJobs = useMemo(
        () => [...jobs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
        [jobs]
    );

    const [active, setActive] = useState(0);
    const [animKey, setAnimKey] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const io = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
            { threshold: 0.1 }
        );
        sectionRef.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
        return () => io.disconnect();
    }, []);

    const handleTabClick = (i: number) => {
        if (i !== active) {
            setActive(i);
            setAnimKey(k => k + 1);
        }
    };

    const job = sortedJobs[active];

    return (
        <section id="work" className="py-16 sm:py-25 bg-bg" ref={sectionRef}>
            <div className="max-w-275 mx-auto px-6">
                <div className="mb-14 reveal opacity-0 translate-y-4.5 transition-[opacity,transform] duration-550 [&.in]:opacity-100 [&.in]:translate-y-0">
                    <span className="font-mono text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent block mb-3.5">
                        Experience
                    </span>
                    <h2 className="font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-bold tracking-[-0.022em] leading-[1.18] text-fg">
                        {"Where I've Worked"}
                    </h2>
                    <div className="w-7 h-0.5 bg-accent rounded-[1px] mt-3.5" />
                </div>

                <div className="reveal opacity-0 translate-y-4.5 transition-[opacity,transform] duration-550 [&.in]:opacity-100 [&.in]:translate-y-0 flex flex-col sm:flex-row">
                    <div className="sm:w-55 shrink-0 sm:self-start sm:border-l border-dim">
                        <div className="relative font-display flex sm:flex-col gap-2 sm:gap-0 overflow-x-auto pb-4 sm:pb-0 no-scrollbar">
                            {/* Sliding active indicator — desktop only */}
                            <div
                                className="hidden sm:block absolute left-0 w-px bg-accent pointer-events-none transition-transform duration-250 ease-in-out"
                                style={{
                                    height: `${100 / sortedJobs.length}%`,
                                    transform: `translateY(${active * 100}%)`,
                                }}
                            />
                            {sortedJobs.map((j, i) => (
                                <button
                                    key={`${j.company}-${j.date}`}
                                    onClick={() => handleTabClick(i)}
                                    className={[
                                        'shrink-0 text-left px-4 sm:px-5 py-2.5 sm:py-3 text-[0.8125rem] cursor-pointer whitespace-nowrap transition-[color,background] duration-200',
                                        'rounded-full sm:rounded-none',
                                        i === active
                                            ? 'bg-accent/8 text-accent'
                                            : 'bg-transparent text-dim hover:text-muted hover:bg-white/2',
                                    ].join(' ')}
                                >
                                    <span className="sm:hidden">{j.shortTitle}</span>
                                    <span className="hidden sm:inline">{j.company}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 pt-6 sm:pt-0 sm:pl-12 min-w-0 min-h-80">
                        <div key={animKey} className="animate-[fadeSlide_0.35s_ease_both]">
                            <div className="font-display text-[1rem] font-semibold tracking-[-0.015em] text-fg">
                                {job.title}
                                <span className="ml-1.5 text-accent">
                                    @{" "}
                                    {job.url ? (
                                        <a
                                            href={job.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="link-underline"
                                        >
                                            {job.company}
                                        </a>
                                    ) : (
                                        job.company
                                    )}
                                </span>
                            </div>

                            <div className="font-mono text-[0.68rem] tracking-[0.06em] text-muted mt-1.5">
                                {job.range}
                            </div>
                            <div className="font-text text-[0.82rem] text-muted mt-1 mb-6">
                                {job.location}
                            </div>

                            <ul className="flex flex-col gap-3">
                                {job.bullets.map((b, i) => (
                                    <li key={i} className="flex gap-3 text-[0.9rem] leading-[1.7] text-muted">
                                        <span className="text-accent shrink-0 mt-0.75 text-[0.7rem]">▸</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
