"use client";

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function NotFound() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTransitionSmooth, setIsTransitionSmooth] = useState(false);
  const isInteracting = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // 1. Auto-animation loop
    const animate = () => {
      if (!isInteracting.current) {
        const time = Date.now() / 1000;
        // Smooth figure-8 movement for mobile / idle desktop
        setMousePos({
          x: Math.sin(time * 0.8) * 0.5,
          y: Math.cos(time * 1.2) * 0.5,
        });
      }
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    // 2. Setup interaction tracking
    let idleTimeout: NodeJS.Timeout;

    const handleMouseTouch = (e: MouseEvent | TouchEvent) => {
      isInteracting.current = true;
      setIsTransitionSmooth(true);

      let clientX = 0;
      let clientY = 0;

      if ('touches' in e) {
        if (e.touches.length > 0) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        }
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      // Map to [-1, 1] relative to screen center
      if (clientX || clientY) {
        const x = (clientX / window.innerWidth) * 2 - 1;
        const y = (clientY / window.innerHeight) * 2 - 1;
        setMousePos({ x, y });
      }

      // Reset to idle animation after 2.5s of no interaction
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
        isInteracting.current = false;
        setIsTransitionSmooth(false);
      }, 2500);
    };

    window.addEventListener('mousemove', handleMouseTouch);
    window.addEventListener('touchmove', handleMouseTouch);
    window.addEventListener('touchstart', handleMouseTouch);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener('mousemove', handleMouseTouch);
      window.removeEventListener('touchmove', handleMouseTouch);
      window.removeEventListener('touchstart', handleMouseTouch);
      clearTimeout(idleTimeout);
    };
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg text-fg">

      {/* Background Follower Glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] bg-accent-soft rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 15}vw), calc(-50% + ${mousePos.y * 15}vw))`
        }}
      />

      {/* Structured Architectural Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none select-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`
        }}
      >
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:4rem_4rem] text-fg opacity-[0.02]" />

        {/* Dynamic geometric accents */}
        <div className="absolute top-[25%] left-[20%] w-8 h-8 opacity-20">
          <div className="absolute top-1/2 left-0 w-full h-px bg-fg" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-fg" />
        </div>
        <div className="absolute top-[25%] left-[20%] w-4 h-4 border border-fg opacity-10 -translate-x-1/2 -translate-y-1/2 rounded-sm" />

        <div className="absolute bottom-[20%] right-[15%] w-12 h-12 opacity-[0.15]">
          <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-fg" />
          <div className="absolute top-0 left-1/2 w-[0.5px] h-full bg-fg" />
          <div className="absolute inset-0 border border-fg opacity-30 rounded-full scale-[0.6]" />
        </div>

        <div className="absolute top-[10%] right-[30%] opacity-[0.05] font-mono text-[0.55rem] tracking-widest text-fg">
          04 / 04
        </div>
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center flex-1 justify-center relative w-full h-full">
        {/* Parallax 404 */}
        <div style={{ perspective: '1200px' }} className="relative z-10">
          <h1
            className="font-display text-[9rem] sm:text-[12rem] md:text-[18rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-fg via-fg/90 to-surface-2 select-none drop-shadow-2xl"
            style={{
              transform: `rotateX(${-mousePos.y * 15}deg) rotateY(${mousePos.x * 15}deg) translateZ(50px)`,
              transition: isTransitionSmooth ? 'transform 0.1s ease-out' : 'transform 1s linear'
            }}
          >
            404
          </h1>
          {/* Subtle reflection/shadow below the text */}
          <h1
            className="absolute top-0 left-0 w-full h-full font-display text-[9rem] sm:text-[12rem] md:text-[18rem] font-bold leading-none tracking-tighter text-black/20 dark:text-black/50 blur-[20px] -z-10 scale-y-[-0.8] origin-bottom translate-y-[20%]"
            aria-hidden="true"
          >
            404
          </h1>
        </div>

        <div
          className="text-center mt-6 md:mt-10 transition-transform duration-300 ease-out z-20"
          style={{ transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)` }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-fg mb-4 tracking-tight px-4">
            Oops! Page not found
          </h2>
          <p className="font-text text-muted text-[1.05rem] md:text-lg mb-10 max-w-md mx-auto leading-relaxed px-6">
            We could not find the page you were looking for.
          </p>

          <Link href="/" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[rgba(94,234,212,0.18)] bg-[#01CAB8] px-8 py-3.5 font-text text-sm font-semibold text-bg shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_34px_rgba(0,229,208,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(94,234,212,0.26)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_18px_42px_rgba(0,229,208,0.25)] active:translate-y-0 active:scale-[0.985] [html[data-theme='light']_&]:border-[rgba(8,145,178,0.16)] [html[data-theme='light']_&]:bg-[#0891B2] [html[data-theme='light']_&]:text-white [html[data-theme='light']_&]:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_14px_34px_rgba(14,165,233,0.14)] [html[data-theme='light']_&]:hover:border-[rgba(8,145,178,0.22)] [html[data-theme='light']_&]:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_18px_42px_rgba(14,165,233,0.22)]">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:-translate-x-1">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Return to Base
          </Link>
        </div>
      </div>

    </main>
  );
}
