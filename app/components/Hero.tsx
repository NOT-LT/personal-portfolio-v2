"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Aurora from "./Aurora";
import Lanyard from "./Lanyard";

import type { HeroContent } from "@/lib/content";

export default function Hero({ content }: { content: HeroContent }) {
    const {
        name,
        tagline,
        bioPart1,
        universityName,
        universityUrl,
        bioPart2,
        ctaPrimary,
        ctaSecondary,
        avatar,
    } = content;

    const [isDesktop, setIsDesktop] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1280px)");
        const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const syncTimer = window.setTimeout(() => {
            setIsDesktop(mq.matches);
            setReduceMotion(motionMq.matches);
            setMounted(true);
        }, 0);

        const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
        const motionHandler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
        mq.addEventListener("change", handler);
        motionMq.addEventListener("change", motionHandler);

        const loadTimer = window.setTimeout(() => {
            setIsPageLoaded(true);
        }, motionMq.matches ? 0 : 350);

        return () => {
            mq.removeEventListener("change", handler);
            motionMq.removeEventListener("change", motionHandler);
            window.clearTimeout(syncTimer);
            window.clearTimeout(loadTimer);
        };
    }, []);

    return (
        <>
          

            <section className="min-h-auto sm:min-h-0 xl:min-h-screen flex items-start xl:items-center bg-bg pt-28.75 pb-14 sm:pt-24 sm:pb-16 xl:pt-28.75 xl:pb-16 relative overflow-hidden">
                {!reduceMotion && (
                    <div className={`absolute inset-0 z-0 pointer-events-none opacity-[0.55] mask-[linear-gradient(to_bottom,transparent_0%,black_25%,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_70%,transparent_100%)] transition-all duration-1500 ease-out ${isPageLoaded ? 'opacity-[0.55] scale-100' : 'opacity-0 scale-110'}`}>
                        <Aurora
                            colorStops={["#00e5d0", "#0ea5e9", "#00e5d0"]}
                            blend={0.7}
                            amplitude={0.2}
                            speed={0.9}
                        />
                    </div>
                )}

                {mounted && isDesktop && !reduceMotion && (
                    <div
                        className={`absolute top-0 bottom-0 right-[max(2rem,calc((100vw-1100px)/2))] w-85 xl:w-115 2xl:w-130 z-1 overflow-hidden pointer-events-auto transition-all duration-1200 delay-400 ease-out ${isPageLoaded
                                ? "opacity-100 translate-y-0 blur-0 scale-100"
                                : "opacity-0 translate-y-12 blur-md scale-90"
                            }`}
                    >
                        <div className="absolute inset-x-0 top-0 h-full scale-75 xl:scale-100 origin-top transition-transform duration-300">
                            <Lanyard position={[0, 0, 17]} gravity={[0, -40, 0]} />
                        </div>
                    </div>
                )}

                <div className="max-w-275 mx-auto px-6 relative z-2 w-full sm:py-10 xl:py-25 pointer-events-none">
                    <div className="w-full xl:max-w-145 xl:pr-8 pointer-events-auto relative">
                        {avatar && (
                            <div
                                className={`sm:hidden mb-8 flex justify-center transition-all duration-1000 ease-out ${isPageLoaded
                                        ? "opacity-100 translate-y-0 blur-0 scale-100"
                                        : "opacity-0 translate-y-12 blur-md scale-90"
                                    }`}
                            >
                                <Image
                                    src={avatar}
                                    alt={name}
                                    width={200}
                                    height={256}
                                    className="w-50 h-64 rounded-full bg-white object-cover object-top"
                                    priority
                                />
                            </div>
                        )}

                        {avatar && (
                            <div
                                className={`hidden sm:flex xl:hidden absolute right-0 top-1/2 -translate-y-1/2 items-center transition-all duration-1000 delay-200 ease-out ${isPageLoaded
                                        ? "opacity-100 translate-x-0 blur-0 scale-100 rotate-0"
                                        : "opacity-0 translate-x-12 blur-md scale-90 rotate-3"
                                    }`}
                            >
                                <Image
                                    src={avatar}
                                    alt={name}
                                    width={200}
                                    height={252}
                                    className="w-50 h-63 rounded-full bg-white object-cover object-top"
                                    priority
                                />
                            </div>
                        )}

                        <div
                            className={`transition-all duration-900 delay-150 ease-out ${isPageLoaded
                                    ? "opacity-100 translate-y-0 blur-0"
                                    : "opacity-0 translate-y-8 blur-sm"
                                }`}
                        >
                            <span className="font-mono text-[0.72rem] font-medium tracking-[0.14em] uppercase text-accent block">
                                Hi, my name is
                            </span>
                        </div>

                        <div
                            className={`transition-all duration-1000 delay-300 ease-out ${isPageLoaded
                                    ? "opacity-100 translate-y-0 blur-0 scale-100"
                                    : "opacity-0 translate-y-10 blur-md scale-95"
                                }`}
                        >
                            <h1 className="font-display text-[clamp(2.8rem,6.5vw,5.6rem)] font-bold tracking-[-0.03em] leading-[1.04] text-fg sm:max-w-[calc(100%-260px)] xl:max-w-none">
                                {name}
                                <span className="text-accent">.</span>
                            </h1>
                        </div>

                        <div
                            className={`transition-all duration-1000 delay-500 ease-out ${isPageLoaded
                                    ? "opacity-100 translate-y-0 blur-0"
                                    : "opacity-0 translate-y-8 blur-sm"
                                }`}
                        >
                            <p className="font-display text-[clamp(1.3rem,2.4vw,2rem)] font-medium tracking-[-0.022em] leading-[1.3] text-muted mt-4 mb-6 max-w-130 sm:max-w-[calc(100%-260px)] xl:max-w-130">
                                {tagline}
                                <span className="text-accent">.</span>
                            </p>
                        </div>

                        <div
                            className={`transition-all duration-1000 delay-700 ease-out ${isPageLoaded
                                    ? "opacity-100 translate-y-0 blur-0"
                                    : "opacity-0 translate-y-8 blur-sm"
                                }`}
                        >
                            <p className="font-text text-[0.9375rem] font-normal leading-[1.78] tracking-[-0.002em] text-muted max-w-122.5 sm:max-w-[calc(100%-260px)] xl:max-w-122.5 mb-7">
                                {bioPart1}{" "}
                                <a
                                    href={universityUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="link-underline text-accent"
                                >
                                    {universityName}
                                </a>
                                {bioPart2}
                            </p>
                        </div>

                        <div
                            className={`transition-all duration-1000 delay-900 ease-out ${isPageLoaded
                                    ? "opacity-100 translate-y-0 blur-0 scale-100"
                                    : "opacity-0 translate-y-8 blur-md scale-95"
                                }`}
                        >
                            <div className="flex items-center gap-1.5 pb-3 flex-wrap sm:max-w-[calc(100%-260px)] xl:max-w-none">
                                <a
                                    href={ctaPrimary.href}
                                    className="group btn-primary"
                                >
                                    {ctaPrimary.label}
                                    <svg
                                        width="14"
                                        height="14"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.2"
                                        viewBox="0 0 24 24"
                                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                                <a
                                    href={ctaSecondary.href}
                                    className="btn-secondary"
                                >
                                    {ctaSecondary.label}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
