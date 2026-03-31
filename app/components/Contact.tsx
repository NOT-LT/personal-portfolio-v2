"use client";

import { useLayoutEffect, useRef } from "react";
import usePrefersReducedMotion from "@/app/hooks/usePrefersReducedMotion";
import { getGsap } from "@/lib/gsap";
import type { ContactContent } from "@/lib/content";
const GithubIcon = () => (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
);

const LinkedInIcon = () => (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
);

const InstagramIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const grainStyle = {
    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="140" height="140" filter="url(%23noise)" opacity=".95"/%3E%3C/svg%3E")',
};

export default function Contact({ content }: { content: ContactContent }) {
    const { email, socials, footer } = content;
    const footerRef = useRef<HTMLElement>(null);
    const reduceMotion = usePrefersReducedMotion();

    useLayoutEffect(() => {
        if (!footerRef.current || reduceMotion) {
            return;
        }

        const { gsap } = getGsap();
        const ctx = gsap.context(() => {
            gsap.from("[data-footer-shell]", {
                y: 44,
                autoAlpha: 0,
                scale: 0.98,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 78%",
                },
            });

            gsap.from("[data-footer-seq]", {
                y: 20,
                autoAlpha: 0,
                duration: 0.75,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 72%",
                },
            });

            gsap.to("[data-footer-orb='left']", {
                x: 18,
                y: -20,
                repeat: -1,
                yoyo: true,
                duration: 7,
                ease: "sine.inOut",
            });

            gsap.to("[data-footer-orb='right']", {
                x: -18,
                y: 18,
                repeat: -1,
                yoyo: true,
                duration: 8.5,
                ease: "sine.inOut",
            });
        }, footerRef);

        return () => ctx.revert();
    }, [reduceMotion]);

    const socialLinks = [
        { label: "GitHub", href: socials.github, icon: <GithubIcon /> },
        { label: "LinkedIn", href: socials.linkedin, icon: <LinkedInIcon /> },
        { label: "Instagram", href: socials.instagram, icon: <InstagramIcon /> },
    ];

    return (
        <footer ref={footerRef} className="bg-bg py-20">
            <div className="max-w-275 mx-auto px-6">
                <div
                    data-footer-shell
                    className="footer-shell relative isolate overflow-hidden rounded-[2.4rem] border border-line px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16"
                >
                    <div className="footer-gradient" />
                    <div data-footer-orb="left" className="absolute -left-14 top-10 h-48 w-48 rounded-full bg-accent/20 blur-[90px]" />
                    <div data-footer-orb="right" className="absolute -right-18 -bottom-6 h-60 w-60 rounded-full bg-sky-400/16 blur-[120px]" />
                    <div className="footer-top-glow absolute inset-x-12 top-0 h-px" />
                    <div className="absolute inset-0 opacity-[0.18] mix-blend-soft-light" style={grainStyle} />
                    <div className="footer-overlay absolute inset-0" />

                    <div className="relative z-10 mx-auto max-w-3xl text-center">
                        <span data-footer-seq className="font-mono text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent block mb-4">
                            {footer.eyebrow}
                        </span>
                        <h2 data-footer-seq className="font-display text-[clamp(2.25rem,5vw,4.1rem)] font-bold tracking-[-0.05em] leading-[1.02] text-fg">
                            <span className="footer-title-top font-display text-5xl">{footer.titleTop}</span>
                            <br />
                            {footer.titleBottom}
                        </h2>
                        <p data-footer-seq className="footer-body mx-auto mt-5 max-w-2xl text-[0.98rem] leading-8">
                            {footer.description}
                        </p>

                        <div data-footer-seq className="mt-9 flex flex-wrap items-center justify-center gap-3">
                            <a
                                href={`mailto:${email}`}
                                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[rgba(94,234,212,0.18)] bg-[#01CAB8] px-6 py-3 text-sm font-medium text-bg shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_18px_40px_rgba(0,229,208,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(94,234,212,0.26)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_20px_44px_rgba(0,229,208,0.18)] active:translate-y-0 active:scale-[0.985] [html[data-theme='light']_&]:border-[rgba(8,145,178,0.16)] [html[data-theme='light']_&]:bg-[#0891B2] [html[data-theme='light']_&]:text-white [html[data-theme='light']_&]:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_18px_40px_rgba(14,165,233,0.14)] [html[data-theme='light']_&]:hover:border-[rgba(8,145,178,0.22)] [html[data-theme='light']_&]:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_20px_44px_rgba(14,165,233,0.18)]"
                            >
                                {footer.primaryCta.label}
                                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" className="transition-transform duration-200 group-hover:translate-x-0.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                            <a
                                href={footer.secondaryCta.href}
                                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-transparent px-6 py-3 text-sm font-medium text-fg backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/4 active:translate-y-0 active:scale-[0.985] [html[data-theme='light']_&]:border-[rgba(8,145,178,0.18)] [html[data-theme='light']_&]:hover:border-[rgba(8,145,178,0.24)] [html[data-theme='light']_&]:hover:bg-white/70"
                            >
                                {footer.secondaryCta.label}
                            </a>
                        </div>

                        <div data-footer-seq className="mt-15 flex items-center justify-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/4 text-white/74 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/7 hover:text-fg active:translate-y-0 active:scale-[0.97] [html[data-theme='light']_&]:border-[rgba(8,145,178,0.16)] [html[data-theme='light']_&]:bg-white/78 [html[data-theme='light']_&]:text-[#52525b] [html[data-theme='light']_&]:hover:text-[#18181b]"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-between flex-wrap gap-3 border-t border-line py-1">
                    <span className="font-mono text-[0.68rem] tracking-[0.04em] text-dim">
                        {footer.copyright}
                    </span>
                    <span className="font-mono text-[0.68rem] tracking-[0.04em] text-dim">
                        {footer.signature}
                    </span>
                </div>
            </div>
        </footer>
    );
}
