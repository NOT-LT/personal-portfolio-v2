"use client";
import { useEffect, useRef } from 'react';
import type { ContactContent } from '@/lib/content';

export default function Contact({ content }: { content: ContactContent }) {
    const { email, message, socials, footer } = content;
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add('in');
                }),
            { threshold: 0.1 }
        );
        sectionRef.current?.querySelectorAll('.reveal').forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <>
            <section id="contact" className="py-16 sm:py-25 bg-bg" ref={sectionRef}>
                <div className="max-w-275 mx-auto px-6">
                    <div className="max-w-135 mx-auto text-center reveal opacity-0 translate-y-4.5 transition-[opacity,transform] duration-550 [&.in]:opacity-100 [&.in]:translate-y-0">
                        <span className="font-mono text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent block mb-4">
                            {"What's Next?"}
                        </span>
                        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] leading-[1.1] text-fg mb-5">
                            {"Let's build something"}
                            <br />
                            <span className="text-accent">{"together."}</span>
                        </h2>
                        <p className="font-text text-[0.9375rem] font-normal leading-[1.78] tracking-[-0.002em] text-muted">
                            {message}
                        </p>
                        <div className="mt-9 flex justify-center gap-3 flex-wrap">
                            <a
                                href={`mailto:${email}`}
                                className="inline-flex items-center gap-2 font-text text-sm font-medium tracking-[-0.008em] py-2.75 px-6 rounded-full border-none cursor-pointer transition-[opacity,border-color] duration-180 whitespace-nowrap bg-accent text-bg hover:opacity-[0.88]"
                            >
                                {"Say Hello"}
                                <svg
                                    width="14"
                                    height="14"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="border-t border-line py-7 bg-bg">
                <div className="max-w-275 mx-auto px-6 flex items-center justify-between flex-wrap gap-3">
                    <span className="font-mono text-[0.68rem] tracking-[0.04em] text-dim">
                        {footer.copyright}
                    </span>
                    <div className="flex gap-5">
                        <a
                            href={socials.github}
                            aria-label="GitHub"
                            className="text-dim hover:text-muted transition-colors duration-180"
                        >
                            <svg
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                            </svg>
                        </a>
                        <a
                            href={socials.linkedin}
                            aria-label="LinkedIn"
                            className="text-dim hover:text-muted transition-colors duration-180"
                        >
                            <svg
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </a>
                        <a
                            href={socials.twitter}
                            aria-label="Twitter"
                            className="text-dim hover:text-muted transition-colors duration-180"
                        >
                            <svg
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
