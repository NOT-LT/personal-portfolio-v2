"use client";

import { useLayoutEffect, useRef } from "react";
import usePrefersReducedMotion from "@/app/hooks/usePrefersReducedMotion";
import { getGsap } from "@/lib/gsap";
import { GithubIconLarge, LinkedInIcon, InstagramIcon, ArrowIcon } from "./icons";
import type { ContactContent } from "@/lib/content";


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
        { label: "GitHub", href: socials.github, icon: <GithubIconLarge /> },
        { label: "LinkedIn", href: socials.linkedin, icon: <LinkedInIcon /> },
        { label: "Instagram", href: socials.instagram, icon: <InstagramIcon /> },
    ];

    return (
        <footer id="contact" ref={footerRef} className="bg-bg py-20 scroll-mt-24">
            <div className="max-w-275 mx-auto px-6">
                <div
                    data-footer-shell
                    className="footer-shell relative isolate overflow-hidden rounded-[2.4rem] border border-line px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16 [-webkit-mask-image:-webkit-radial-gradient(white,black)]"
                >
                    <div className="footer-gradient" />
                    <div data-footer-orb="left" className="absolute -left-14 top-10 h-48 w-48 rounded-full bg-accent/20 blur-[90px]" />
                    <div data-footer-orb="right" className="absolute -right-18 -bottom-6 h-60 w-60 rounded-full bg-sky-400/16 blur-[120px]" />
                    <div className="footer-top-glow absolute inset-x-12 top-0 h-px" />
                    <div className="absolute inset-0 rounded-[inherit] opacity-[0.18] mix-blend-soft-light" style={grainStyle} />
                    <div className="footer-overlay absolute inset-0 rounded-[inherit]" />

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
                                className="group btn-primary"
                            >
                                {footer.primaryCta.label}
                                <ArrowIcon />
                            </a>
                            <a
                                href={footer.secondaryCta.href}
                                className="btn-secondary"
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
                                    className="btn-icon"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex flex-col items-center justify-center gap-2 border-t border-line py-3 text-center md:flex-row md:justify-between md:text-left">
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
