"use client";

import { useRef } from 'react';
import { useRevealOnScroll } from '@/app/hooks/useRevealOnScroll';
import { DownloadIcon } from './icons';
import type { AboutContent } from '@/lib/content';

export default function About({ content }: { content: AboutContent }) {
    const { heading, bio, skills, awards, education, cvHref } = content;
    const sectionRef = useRef<HTMLElement | null>(null);
    useRevealOnScroll(sectionRef);

    return (
        <section id="about" className="py-16 sm:py-25 bg-bg-secondary" ref={sectionRef}>
            <div className="max-w-275 mx-auto px-6">

                {/* Header */}
                <div className="mb-16 reveal opacity-0 translate-y-4.5 transition-[opacity,transform] duration-550 [&.in]:opacity-100 [&.in]:translate-y-0">
                    <span className="font-mono text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent block mb-3.5">
                        About
                    </span>

                    <h2 className="font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-bold tracking-[-0.022em] leading-[1.18] text-fg">
                        {heading.split(',')[0]},<br />
                        <span className="text-accent">{heading.split(',').slice(1).join(',').trim()}</span>
                    </h2>

                    <div className="w-7 h-0.5 bg-accent rounded-[1px] mt-3.5" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* LEFT — About text → Awards → Download CV */}
                    <div className="reveal opacity-0 translate-y-4.5 transition-[opacity,transform] duration-550 [&.in]:opacity-100 [&.in]:translate-y-0 flex flex-col gap-10">
                        <div className="flex flex-col gap-6">
                            {bio.map((paragraph, i) => (
                                <p key={i} className="font-text text-[0.9375rem] leading-[1.8] tracking-[-0.002em] text-muted">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Awards */}
                        <div>
                            <span className="font-mono text-[0.65rem] font-bold tracking-[0.2em] uppercase text-accent/90 block mb-5">
                                Awards
                            </span>

                            <div className="flex flex-col gap-6">
                                {awards.map((award, i) => (
                                    <div key={i}>
                                        <div className="font-display text-[0.95rem] font-bold tracking-tight text-fg mb-1">
                                            {award.title}
                                        </div>
                                        <div className="font-mono text-[0.62rem] font-bold tracking-widest text-accent uppercase mb-2">
                                            {award.org}
                                        </div>
                                        <p className="text-[0.85rem] text-muted leading-relaxed">
                                            {award.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Download CV */}
                        <div className="mt-auto pt-2">
                            <a
                                href={cvHref}
                                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-[rgba(94,234,212,0.18)] bg-[#01CAB8] px-7 py-3 font-text text-sm font-medium text-bg shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_34px_rgba(0,229,208,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(94,234,212,0.26)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_18px_42px_rgba(0,229,208,0.18)] active:translate-y-0 active:scale-[0.985] [html[data-theme='light']_&]:border-[rgba(8,145,178,0.16)] [html[data-theme='light']_&]:bg-[#0891B2] [html[data-theme='light']_&]:text-white [html[data-theme='light']_&]:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_14px_34px_rgba(14,165,233,0.14)] [html[data-theme='light']_&]:hover:border-[rgba(8,145,178,0.22)] [html[data-theme='light']_&]:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_18px_42px_rgba(14,165,233,0.18)]"
                            >
                                <DownloadIcon />
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* RIGHT — Expertise → Education */}
                    <div className="reveal opacity-0 translate-y-4.5 transition-[opacity,transform] duration-550 [&.in]:opacity-100 [&.in]:translate-y-0 flex flex-col gap-10">

                        {/* Expertise */}
                        <div>
                            <span className="font-mono text-[0.65rem] font-bold tracking-[0.2em] uppercase text-accent/90 block mb-5">
                                Expertise
                            </span>

                            <div className="flex flex-wrap gap-2.5">
                                {skills.map(s => (
                                    <span
                                        key={s}
                                        className="bg-surface border border-line text-muted font-mono text-[0.68rem] px-3.5 py-1.5 rounded-sm transition-all duration-200 hover:border-accent/40 hover:text-fg hover:-translate-y-px"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <span className="font-mono text-[0.65rem] font-bold tracking-[0.2em] uppercase text-accent/90 block mb-5">
                                Education
                            </span>

                            <div>
                                <div className="font-display text-[0.95rem] font-bold tracking-tight text-fg">
                                    {education.degree}
                                </div>

                                <div className="font-mono text-[0.62rem] font-bold tracking-widest text-accent/80 uppercase mt-1">
                                    {education.school} <span className="mx-1 opacity-40">/</span> {education.period}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
