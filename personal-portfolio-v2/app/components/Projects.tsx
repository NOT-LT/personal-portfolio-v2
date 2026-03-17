"use client";
import { useEffect, useRef, ReactNode } from 'react';
import SpotlightCard from './SpotlightCard';

interface Project {
    icon: ReactNode;
    title: string;
    desc: string;
    tags: string[];
    links: string[];
}

const PROJECTS: Project[] = [
    {
        icon: (
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        title: 'Property Marketplace System',
        desc: 'Three-layer Java application for property listing and user account management. UUID-based authentication, Bahraini phone validation, and RFC-compliant email regex.',
        tags: ['Java', 'OOP', '3-Layer Architecture'],
        links: ['github', 'external'],
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
        tags: ['Python', 'TensorFlow', 'CNN'],
        links: ['github'],
    },
    {
        icon: (
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        title: 'Home Media Server',
        desc: 'Ubuntu Server on HP Pavilion hosting Jellyfin, Radarr, Sonarr, Prowlarr, and qBittorrent via Docker/Portainer. Secured with Cloudflare Tunnels, no exposed ports.',
        tags: ['Docker', 'Linux', 'Cloudflare'],
        links: ['external'],
    },
];

const GithubIcon = () => (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
);

const ExternalIcon = () => (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
);

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const io = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
            { threshold: 0.1 }
        );
        sectionRef.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <section id="projects" className="py-16 sm:py-25 bg-bg-secondary" ref={sectionRef}>
            <div className="max-w-275 mx-auto px-6">

                <div className="mb-14 reveal opacity-0 translate-y-4.5 transition-[opacity,transform] duration-550 [&.in]:opacity-100 [&.in]:translate-y-0">
                    <span className="font-mono text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent block mb-3.5">Projects</span>
                    <h2 className="font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-bold tracking-[-0.022em] leading-[1.18] text-fg">{"Things I've Built"}</h2>
                    <div className="w-7 h-0.5 bg-accent rounded-[1px] mt-3.5" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {PROJECTS.map((p, i) => (
                        <SpotlightCard
                            key={i}
                            className="group reveal opacity-0 translate-y-4.5 transition-[opacity,transform,border-color] duration-550 [&.in]:opacity-100 [&.in]:translate-y-0 bg-surface border border-line rounded-[10px] hover:border-line-accent"
                            spotlightColor="rgba(0, 229, 208, 0.08)"
                        >
                            <div className="relative z-[1] p-7 flex flex-col gap-4 h-full">
                                <div className="flex justify-between items-start">
                                    <span className="text-accent opacity-80">{p.icon}</span>
                                    <div className="flex gap-3.5">
                                        {p.links.includes('github') && (
                                            <a href="#" aria-label="GitHub" className="text-dim hover:text-muted transition-colors duration-180"><GithubIcon /></a>
                                        )}
                                        {p.links.includes('external') && (
                                            <a href="#" aria-label="External link" className="text-dim hover:text-muted transition-colors duration-180"><ExternalIcon /></a>
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
        </section>
    );
}
