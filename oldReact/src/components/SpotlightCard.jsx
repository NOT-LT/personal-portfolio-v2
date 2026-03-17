import { useRef } from 'react'

export default function SpotlightCard({ children, className = '', spotlightColor = 'rgba(0, 229, 208, 0.15)' }) {
  const divRef = useRef(null)

  function handleMouseMove(e) {
    const rect = divRef.current.getBoundingClientRect()
    divRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    divRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
    divRef.current.style.setProperty('--spotlight-color', spotlightColor)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color, transparent), transparent 40%)',
        }}
      />
      {children}
    </div>
  )
}
