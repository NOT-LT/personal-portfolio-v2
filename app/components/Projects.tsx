"use client";
import { useState, useEffect, useRef } from 'react';
import SpotlightCard from './SpotlightCard';
import type { ProjectsContent } from '@/lib/content';

const GithubIcon = () => (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
);

const ChevronLeft = () => (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M15 18l-6-6 6-6" />
    </svg>
);

const ChevronRight = () => (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 18l6-6-6-6" />
    </svg>
);

export default function Projects({ content }: { content: ProjectsContent }) {
    const { projects, githubProfileUrl } = content;

    const [offset, setOffset] = useState(0);
    const [visible, setVisible] = useState(3);
    const [cardStep, setCardStep] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const update = () => {
            if (window.matchMedia('(min-width: 1024px)').matches) setVisible(3);
            else if (window.matchMedia('(min-width: 640px)').matches) setVisible(2);
            else setVisible(1);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    useEffect(() => {
        const measure = () => {
            const first = trackRef.current?.children[0] as HTMLElement | null;
            if (first) setCardStep(first.offsetWidth + 16);
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    useEffect(() => {
        setOffset(prev => Math.min(prev, Math.max(0, projects.length - visible)));
    }, [visible, projects.length]);

    useEffect(() => {
        const io = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
            { threshold: 0.1 }
        );
        sectionRef.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
        return () => io.disconnect();
    }, []);

    const maxOffset = Math.max(0, projects.length - visible);

    return (
        <section id="projects" className="py-16 sm:py-25 bg-bg-secondary" ref={sectionRef}>
            <div className="max-w-275 mx-auto px-6">

                <div className="mb-14 reveal opacity-0 translate-y-4.5 transition-[opacity,transform] duration-550 [&.in]:opacity-100 [&.in]:translate-y-0">
                    <span className="font-mono text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent block mb-3.5">Projects</span>
                    <h2 className="font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-bold tracking-[-0.022em] leading-[1.18] text-fg">{"Things I've Built"}</h2>
                    <div className="w-7 h-0.5 bg-accent rounded-[1px] mt-3.5" />
                </div>

                <div className="reveal opacity-0 translate-y-4.5 transition-[opacity,transform] duration-550 [&.in]:opacity-100 [&.in]:translate-y-0">
                    <div className="overflow-hidden">
                        <div
                            ref={trackRef}
                            className="flex gap-4 transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${offset * cardStep}px)` }}
                        >
                            {projects.map((p) => (
                                <SpotlightCard
                                    key={p.title}
                                    className="shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-10.667px)] group bg-surface border border-line rounded-[10px] hover:border-line-accent transition-[border-color] duration-550"
                                    spotlightColor="rgba(0, 229, 208, 0.08)"
                                >
                                    <div className="relative z-[1] p-7 flex flex-col gap-4 h-full">
                                        <div className="flex justify-between items-start">
                                            <span
                                                className="text-accent opacity-80"
                                                dangerouslySetInnerHTML={{ __html: p.icon }}
                                            />
                                            <div className="flex gap-3.5">
                                                {p.github !== undefined && (
                                                    <a
                                                        href={p.github || '#'}
                                                        target={p.github ? '_blank' : undefined}
                                                        rel="noreferrer"
                                                        aria-label="GitHub"
                                                        className="text-dim hover:text-muted transition-colors duration-180"
                                                    >
                                                        <GithubIcon />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-display text-base font-semibold tracking-[-0.014em] text-fg leading-[1.4] mb-2">{p.title}</div>
                                            <p className="text-[0.875rem] leading-[1.7] text-muted">{p.desc}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {p.tags.map(t => (
                                                <span key={t} className="font-mono text-[0.65rem] tracking-[0.04em] text-accent/80 border border-accent/20 px-2 py-0.5 rounded-full">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </SpotlightCard>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Controls */}
                    {maxOffset > 0 && (
                        <div className="mt-10 flex items-center justify-center gap-4">
                            <button
                                onClick={() => setOffset(o => Math.max(0, o - 1))}
                                disabled={offset === 0}
                                className="w-9 h-9 rounded-full border border-dim flex items-center justify-center text-dim hover:border-accent hover:text-accent transition-[color,border-color] duration-200 disabled:opacity-25 disabled:pointer-events-none"
                            >
                                <ChevronLeft />
                            </button>

                            <div className="flex gap-2">
                                {Array.from({ length: maxOffset + 1 }).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setOffset(i)}
                                        className={[
                                            'rounded-full transition-[width,background-color] duration-250',
                                            i === offset ? 'w-4 h-1.5 bg-accent' : 'w-1.5 h-1.5 bg-dim hover:bg-muted',
                                        ].join(' ')}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() => setOffset(o => Math.min(maxOffset, o + 1))}
                                disabled={offset === maxOffset}
                                className="w-9 h-9 rounded-full border border-dim flex items-center justify-center text-dim hover:border-accent hover:text-accent transition-[color,border-color] duration-200 disabled:opacity-25 disabled:pointer-events-none"
                            >
                                <ChevronRight />
                            </button>
                        </div>
                    )}

                    {/* View More on GitHub Link */}
                    <div className="mt-16 flex justify-center">
                        <a
                            href={githubProfileUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-2.5 font-mono text-[0.72rem] font-medium tracking-[0.14em] uppercase text-dim hover:text-accent transition-colors duration-200"
                        >
                            <span className="relative">
                                View more on GitHub
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-[width] duration-300 group-hover:w-full" />
                            </span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                <GithubIcon />
                            </span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
