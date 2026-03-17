"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-100 w-[calc(100%-48px)] max-w-(--max-w) h-13 bg-surface/60 backdrop-blur-lg border border-line rounded-full">
        <div className="px-5 h-full flex items-center justify-between relative">
          <a href="#" className="text-fg hover:text-accent transition-colors duration-180 ml-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 258 258" fill="currentColor">
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

          {/* Hamburger button */}
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] text-fg"
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-5 bg-current transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-px w-5 bg-current transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-current transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div className={`sm:hidden fixed top-20 left-1/2 -translate-x-1/2 z-99 w-[calc(100%-48px)] bg-surface/90 backdrop-blur-lg border border-line rounded-2xl overflow-hidden transition-all duration-200 ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
        <ul className="flex flex-col list-none p-2">
          <li>
            <a href="#about" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-muted hover:text-fg hover:bg-surface-2 rounded-xl transition-colors duration-180">About</a>
          </li>
          <li>
            <a href="#work" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-muted hover:text-fg hover:bg-surface-2 rounded-xl transition-colors duration-180">Work</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-muted hover:text-fg hover:bg-surface-2 rounded-xl transition-colors duration-180">Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-muted hover:text-fg hover:bg-surface-2 rounded-xl transition-colors duration-180">Contact</a>
          </li>
        </ul>
      </div >
    </>
  );
}