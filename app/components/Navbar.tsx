"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
        const preferredTheme = savedTheme || "dark";
        setTheme(preferredTheme);
        document.documentElement.setAttribute("data-theme", preferredTheme);

        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', onScroll, { passive: true });

        const loadTimer = window.setTimeout(() => {
            setIsPageLoaded(true);
        }, 100);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.clearTimeout(loadTimer);
        };
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <>
            <nav className={`fixed left-1/2 -translate-x-1/2 z-100 w-[calc(100%-48px)] bg-surface/60 backdrop-blur-lg border border-line rounded-full transition-all duration-700 ease-out ${scrolled ? 'top-2 h-10 max-w-120' : 'top-4 h-13 max-w-(--max-w)'} ${isPageLoaded ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 -translate-y-8 blur-sm scale-95'}`}>
                <div className="px-3 h-full flex items-center justify-between relative">
                    <a href="#" className="text-fg hover:text-accent transition-colors duration-180 ml-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 258 258" fill="currentColor" className={`transition-[width,height] duration-300 ${scrolled ? 'w-7 h-7' : 'w-8 h-8'}`}>
                            <g transform="translate(0,258) scale(0.1,-0.1)">
                                <path d="M498 1865 c-180 -143 -327 -264 -327 -269 -1 -5 143 -6 355 -2 l356 7 292 233 c160 128 306 243 324 256 17 13 32 27 32 31 0 4 -159 7 -352 6 l-353 -2 -327 -260z" />
                                <path d="M1549 1987 c-96 -78 -253 -206 -349 -284 l-175 -142 -134 -493 c-73 -271 -155 -572 -182 -668 -27 -96 -49 -180 -49 -187 0 -7 114 63 253 155 138 92 287 190 331 217 43 28 82 59 87 70 5 11 63 227 129 480 162 612 260 978 264 983 4 3 46 -48 160 -195 l48 -62 -23 -29 c-13 -16 -63 -74 -111 -129 -49 -56 -88 -103 -88 -107 0 -3 103 -6 229 -6 l229 0 116 135 117 135 -108 135 -108 135 -231 0 -231 0 -174 -143z" />
                            </g>
                        </svg>
                    </a>

                    {/* Desktop links */}
                    <ul className="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center gap-9 list-none">
                        <li><a href="#about" className="text-[0.8125rem] text-muted hover:text-fg transition-colors duration-180">About</a></li>
                        <li><a href="#work" className="text-[0.8125rem] text-muted hover:text-fg transition-colors duration-180">Work</a></li>
                        <li><a href="#projects" className="text-[0.8125rem] text-muted hover:text-fg transition-colors duration-180">Projects</a></li>
                        <li><a href="#contact" className="text-[0.8125rem] text-muted hover:text-fg transition-colors duration-180">Contact</a></li>
                    </ul>

                    <div className="flex items-center gap-2">
                        {/* Theme toggle button */}
                        <button
                            onClick={toggleTheme}
                            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full text-muted hover:text-fg hover:bg-surface-2 transition-all duration-300 hover:scale-110 active:scale-95"
                            aria-label="Toggle theme"
                        >
                            <div className="relative w-4.5 h-4.5">
                                <svg
                                    width="18"
                                    height="18"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                    className={`absolute inset-0 transition-all duration-500 ${theme === "dark" ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`}
                                >
                                    <circle cx="12" cy="12" r="5" />
                                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                                </svg>
                                <svg
                                    width="18"
                                    height="18"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                    className={`absolute inset-0 transition-all duration-500 ${theme === "light" ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}
                                >
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                </svg>
                            </div>
                        </button>

                        {/* Hamburger button */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.25 text-fg"
                            aria-label="Toggle menu"
                        >
                            <span className={`block h-px w-5 bg-current transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-1.75" : ""}`} />
                            <span className={`block h-px w-5 bg-current transition-all duration-200 ${open ? "opacity-0" : ""}`} />
                            <span className={`block h-px w-5 bg-current transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-1.75" : ""}`} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile dropdown */}
            <div className={`sm:hidden fixed left-1/2 -translate-x-1/2 z-99 w-[calc(100%-48px)] bg-surface/90 backdrop-blur-lg border border-line rounded-2xl overflow-hidden transition-all duration-300 ${scrolled ? 'top-13.5' : 'top-20'} ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                <ul className="flex flex-col list-none p-2">
                    <li><a href="#about" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-muted hover:text-fg hover:bg-surface-2 rounded-xl transition-colors duration-180">About</a></li>
                    <li><a href="#work" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-muted hover:text-fg hover:bg-surface-2 rounded-xl transition-colors duration-180">Work</a></li>
                    <li><a href="#projects" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-muted hover:text-fg hover:bg-surface-2 rounded-xl transition-colors duration-180">Projects</a></li>
                    <li><a href="#contact" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-muted hover:text-fg hover:bg-surface-2 rounded-xl transition-colors duration-180">Contact</a></li>
                    <li className="border-t border-line mt-2 pt-2">
                        <button
                            onClick={toggleTheme}
                            className="w-full flex items-center justify-between px-4 py-3 text-sm text-muted hover:text-fg hover:bg-surface-2 rounded-xl transition-all duration-180"
                        >
                            <span>Theme</span>
                            <span className="flex items-center gap-2">
                                <div className="relative w-4 h-4">
                                    <svg
                                        width="16"
                                        height="16"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                        className={`absolute inset-0 transition-all duration-500 ${theme === "dark" ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`}
                                    >
                                        <circle cx="12" cy="12" r="5" />
                                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                                    </svg>
                                    <svg
                                        width="16"
                                        height="16"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                        className={`absolute inset-0 transition-all duration-500 ${theme === "light" ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}
                                    >
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                    </svg>
                                </div>
                                <span className="transition-opacity duration-300">
                                    {theme === "dark" ? "Light" : "Dark"}
                                </span>
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}
