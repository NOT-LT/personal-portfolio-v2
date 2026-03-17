"use client";
import { useState, useEffect, useRef, ReactNode } from 'react';
import SpotlightCard from './SpotlightCard';

interface Project {
    icon: ReactNode;
    title: string;
    desc: string;
    tags: string[];
    github?: string;
    external?: string;
}

const PROJECTS: Project[] = [
    {
        icon: (
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        title: 'Nestify',
        desc: 'A comprehensive property marketplace system that seamlessly connects property seekers with providers. Features advanced search, real-time listings, and an intuitive dashboard.',
        tags: ['Node.js', 'Express', 'MongoDB', 'Cloudinary', 'EJS'],
        github: '',
        external: '',
    },
    {
        icon: (
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        title: 'Rapid JS',
        desc: 'Custom lightweight, reactive front-end framework featuring a virtual DOM, reactive state management, and an elegant component lifecycle system.',
        tags: ['JavaScript', 'Virtual DOM', 'State Management', 'Event Handling', 'Component Management'],
        github: '',
    },
    {
        icon: (
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
            </svg>
        ),
        title: 'Facial Emotion Detection CNN',
        desc: 'EfficientNetB2 transfer learning on FER2013 with Mixup augmentation, cosine annealing, and live webcam inference. 7-class emotion classification at ≤15M parameters.',
        tags: ['Python', 'TensorFlow', 'Keras', 'CNN', 'CV2', 'Face detection'],
        github: '',
    },
    {
        icon: (
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M7 15l5-5 5 5" />
            </svg>
        ),
        title: 'Movie Recommendation System',
        desc: 'Intelligent system leveraging collaborative filtering and content-based approaches on the MovieLens 1M dataset to deliver personalized suggestions.',
        tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Collaborative Filtering'],
        github: '',
    },
    {
        icon: (
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                <polyline points="9 12 12 15 15 12" />
                <line x1="12" y1="8" x2="12" y2="15" />
            </svg>
        ),
        title: 'Instagram Media Downloader',
        desc: 'Self-hosted Instagram DM bot that lets users download posts and stories by sharing them to the bot or mentioning it in comments. Deployed via Docker with a persistent SQLite store.',
        tags: ['C#', 'Instagram API', 'Bot', 'Docker', 'SQLite'],
        github: 'https://github.com/NOT-LT/Instagram-MediaDownloader',
    },
    {
        icon: (
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M2 22l5.5-5.5" />
                <path d="M16.5 3.5a2.12 2.12 0 013 3L7.5 18.5l-4.5 1 1-4.5 12.5-12.5z" />
                <path d="M15 5l4 4" />
            </svg>
        ),
        title: 'Delta Color Picker',
        desc: 'Lightweight Windows desktop tool for capturing the exact color of any pixel on screen. Trigger via button or ALT+X shortcut and instantly get the RGB and HEX values.',
        tags: ['C#', 'WPF', 'MVVM', 'Color Theory', 'Desktop App'],
        github: 'https://github.com/NOT-LT/DeltaColorPicker',
    },
];

const GithubIcon = () => (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
);

// const ExternalIcon = () => (
//     <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
//     </svg>
// );

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

export default function Projects() {
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
        setOffset(prev => Math.min(prev, Math.max(0, PROJECTS.length - visible)));
    }, [visible]);

    useEffect(() => {
        const io = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
            { threshold: 0.1 }
        );
        sectionRef.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
        return () => io.disconnect();
    }, []);

    const maxOffset = Math.max(0, PROJECTS.length - visible);

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
                            className="flex gap-4 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                            style={{ transform: `translateX(-${offset * cardStep}px)` }}
                        >
                            {PROJECTS.map((p) => (
                                <SpotlightCard
                                    key={p.title}
                                    className="shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-10.667px)] group bg-surface border border-line rounded-[10px] hover:border-line-accent transition-[border-color] duration-550"
                                    spotlightColor="rgba(0, 229, 208, 0.08)"
                                >
                                    {/* ... keep existing card content */}
                                    <div className="relative z-[1] p-7 flex flex-col gap-4 h-full">
                                        <div className="flex justify-between items-start">
                                            <span className="text-accent opacity-80">{p.icon}</span>
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
                            href="https://github.com/NOT-LT"
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
