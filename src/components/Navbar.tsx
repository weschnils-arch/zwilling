import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'

const navLinks = [
  { to: '/', label: 'Start' },
  { to: '/ueber-mich', label: 'Über mich' },
  { to: '/angebote', label: 'Angebote' },
  { to: '/kundenstimmen', label: 'Stimmen' },
  { to: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isOpen
          ? 'bg-[#fafaf8]'
          : scrolled
            ? 'bg-[#fafaf8] shadow-[0_1px_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between h-[64px] md:h-[80px]">
        <Link
          to="/"
          className="font-[Sora] text-[0.875rem] md:text-[0.9375rem] font-bold tracking-[-0.02em] text-[#1a1a1a] uppercase relative z-50"
        >
          Anne-Katrin<span className="text-[#e8722a]">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={clsx(
                'font-[Inter] text-[0.8125rem] font-medium transition-colors duration-300 hover:text-[#e8722a]',
                location.pathname === link.to ? 'text-[#e8722a]' : 'text-[#4a4a4a]'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/kontakt" className="btn-primary !py-2.5 !px-5 !text-[0.8125rem]">
            Kontakt
          </Link>
        </div>

        {/* Mobile Burger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] z-50"
          aria-label="Menu"
        >
          <span
            className={clsx(
              'block w-6 h-[2px] bg-[#1a1a1a] rounded-full transition-all duration-300 origin-center',
              isOpen && 'rotate-45 translate-y-[7px]'
            )}
          />
          <span
            className={clsx(
              'block w-6 h-[2px] bg-[#1a1a1a] rounded-full transition-all duration-300',
              isOpen && 'opacity-0'
            )}
          />
          <span
            className={clsx(
              'block w-6 h-[2px] bg-[#1a1a1a] rounded-full transition-all duration-300 origin-center',
              isOpen && '-rotate-45 -translate-y-[7px]'
            )}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          'fixed inset-0 bg-[#fafaf8] z-40 flex flex-col items-center justify-center gap-7 transition-all duration-400 md:hidden',
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.to}
            to={link.to}
            className={clsx(
              'font-[Sora] text-[1.75rem] font-bold tracking-[-0.02em] transition-all duration-300',
              location.pathname === link.to ? 'text-[#e8722a]' : 'text-[#1a1a1a]'
            )}
            style={{
              transitionDelay: isOpen ? `${i * 50}ms` : '0ms',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(12px)',
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/kontakt"
          className="btn-primary mt-4"
          style={{
            transitionDelay: isOpen ? `${navLinks.length * 50}ms` : '0ms',
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          Kontakt aufnehmen
        </Link>
      </div>
    </nav>
  )
}
