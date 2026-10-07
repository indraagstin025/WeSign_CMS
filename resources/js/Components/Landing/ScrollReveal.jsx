import { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal: Subtle utilitarian scroll-triggered reveal animation.
 * Follows Antislop MOTION 1 principles:
 * - Subtle transform and opacity (no bouncy physics or jarring delays)
 * - Fires once per element (unobserves on intersection)
 * - Fully respects prefers-reduced-motion: reduce
 */
export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
        // Respect accessibility settings
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (domRef.current) {
                        observer.unobserve(domRef.current);
                    }
                }
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -30px 0px',
            }
        );

        const current = domRef.current;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    const directionClasses = {
        up: isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
        fade: isVisible ? 'opacity-100' : 'opacity-0',
    };

    return (
        <div
            ref={domRef}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                directionClasses[direction] || directionClasses.up
            } ${className}`}
        >
            {children}
        </div>
    );
}
