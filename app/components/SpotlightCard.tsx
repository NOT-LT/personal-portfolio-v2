"use client";
import { useRef, ReactNode, MouseEvent } from 'react';

interface SpotlightCardProps {
    children: ReactNode;
    className?: string;
    spotlightColor?: string;
}



export default function SpotlightCard({
    children,
    className = '',
    spotlightColor = 'rgba(0, 229, 208, 0.15)'
}: SpotlightCardProps) {
    const divRef = useRef<HTMLDivElement>(null);

    function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        divRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        divRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        divRef.current.style.setProperty('--spotlight-color', spotlightColor);
    }
    function handleMouseLeave() {
        if (!divRef.current) return;
        divRef.current.style.setProperty('--mouse-x', '-9999px');
        divRef.current.style.setProperty('--mouse-y', '-9999px');
    }

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden ${className}`}
        >
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                    background: 'radial-gradient(600px circle at var(--mouse-x, -9999px) var(--mouse-y, -9999px), var(--spotlight-color, transparent), transparent 40%)',
                } as React.CSSProperties}
            />
            {children}
        </div>
    );
}
