"use client";
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';

interface CountUpProps {
    to: number;
    from?: number;
    direction?: 'up' | 'down';
    delay?: number;
    duration?: number;
    className?: string;
    startWhen?: boolean;
    separator?: string;
    onStart?: () => void;
    onEnd?: () => void;
}

export default function CountUp({
    to,
    from = 0,
    direction = 'up',
    delay = 0,
    duration = 2,
    className = '',
    startWhen = true,
    separator = '',
    onStart,
    onEnd,
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === 'down' ? to : from);

    const damping = 20 + 40 * (1 / duration);
    const stiffness = 100 * (1 / duration);

    const springValue = useSpring(motionValue, { damping, stiffness });
    const isInView = useInView(ref, { once: true, margin: '0px' });

    const maxDecimals = Math.max(
        ...[from, to].map(n => {
            const s = n.toString();
            if (s.includes('.')) {
                const d = s.split('.')[1];
                if (parseInt(d) !== 0) return d.length;
            }
            return 0;
        })
    );

    const formatValue = useCallback(
        (latest: number) => {
            const options = {
                useGrouping: !!separator,
                minimumFractionDigits: maxDecimals,
                maximumFractionDigits: maxDecimals,
            };
            const formatted = Intl.NumberFormat('en-US', options).format(latest);
            return separator ? formatted.replace(/,/g, separator) : formatted;
        },
        [maxDecimals, separator]
    );

    useEffect(() => {
        if (ref.current) {
            ref.current.textContent = formatValue(direction === 'down' ? to : from);
        }
    }, [direction, from, to, formatValue]);

    useEffect(() => {
        if (isInView && startWhen) {
            if (typeof onStart === 'function') onStart();
            const timeoutId = setTimeout(() => {
                motionValue.set(direction === 'down' ? from : to);
            }, delay * 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart]);

    useEffect(() => {
        return springValue.on('change', (latest) => {
            if (ref.current) {
                ref.current.textContent = formatValue(latest);
            }
            if (latest === (direction === 'down' ? from : to)) {
                if (typeof onEnd === 'function') onEnd();
            }
        });
    }, [springValue, formatValue, direction, from, to, onEnd]);

    return <span className={className} ref={ref} />;
}
