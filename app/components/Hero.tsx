"use client";
import Aurora from './Aurora';
import Lanyard from './Lanyard';
import type { HeroContent } from '@/lib/content';

export default function Hero({ content }: { content: HeroContent }) {
    const { name, tagline, bioPart1, universityName, universityUrl, bioPart2, ctaPrimary, ctaSecondary } = content;

    return (
        <section className="min-h-screen flex items-center bg-bg pt-28.75 pb-16 sm:pb-25 relative overflow-hidden">

            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.55] mask-[linear-gradient(to_bottom,transparent_0%,black_25%,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_70%,transparent_100%)]">
                <Aurora colorStops={['#00e5d0', '#0ea5e9', '#00e5d0']} blend={0.7} amplitude={0.2} speed={0.9} />
            </div>

            {/* Lanyard — only shown on xl+ screens */}
            <div className="hidden xl:block absolute top-0 bottom-0 right-[max(2rem,calc((100vw-1100px)/2))] w-[460px] 2xl:w-[520px] z-[1] overflow-hidden pointer-events-auto">
                <div className="absolute inset-x-0 top-0 h-full">
                    <Lanyard position={[0, 0, 17]} gravity={[0, -40, 0]} />
                </div>
            </div>

            {/* Content — on xl, constrain width to avoid overlapping lanyard */}
            <div className="max-w-[1100px] mx-auto px-6 relative z-[2] w-full sm:py-25 pointer-events-none">
                <div className="w-full xl:max-w-[580px] xl:pr-8 pointer-events-auto">

                    <span className="font-mono text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent block animate-[fadeUp_0.5s_ease_both] [animation-delay:0.05s]">Hi, my name is</span>

                    <div className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.13s]">
                        <h1 className="font-display text-[clamp(2.8rem,6.5vw,5.6rem)] font-bold tracking-[-0.03em] leading-[1.04] text-fg">
                            {name}<span className="text-accent">.</span>
                        </h1>
                    </div>

                    <p className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.22s] font-display text-[clamp(1.3rem,2.4vw,2rem)] font-medium tracking-[-0.022em] leading-[1.3] text-muted mt-4 mb-7 max-w-[520px]">
                        {tagline}<span className="text-accent">.</span>
                    </p>

                    <p className="font-text text-[0.9375rem] font-normal leading-[1.78] tracking-[-0.002em] text-muted animate-[fadeUp_0.5s_ease_both] [animation-delay:0.32s] max-w-[490px] mb-9">
                        {bioPart1}{' '}
                        <a href={universityUrl} target="_blank" rel="noreferrer" className="link-underline text-accent">
                            {universityName}
                        </a>
                        {bioPart2}
                    </p>

                    <div className="flex items-center gap-1.5 pb-3 flex-wrap">
                        <a href={ctaPrimary.href} className="inline-flex items-center gap-2 font-text text-sm font-medium tracking-[-0.008em] py-[11px] px-6 rounded-full cursor-pointer transition-[opacity,border-color] duration-180 whitespace-nowrap bg-accent border border-none text-bg hover:border-line-hover">
                            {ctaPrimary.label}
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href={ctaSecondary.href} className="inline-flex items-center gap-2 font-text text-sm font-medium tracking-[-0.008em] py-[11px] px-6 rounded-full cursor-pointer transition-[opacity,border-color] duration-180 whitespace-nowrap bg-transparent border border-faint text-fg hover:border-line-hover">{ctaSecondary.label}</a>
                    </div>

                </div>
            </div>
        </section>
    );
}
