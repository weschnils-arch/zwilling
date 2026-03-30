import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-[Sora] text-lg font-bold tracking-[-0.02em] mb-4">
              Anne-Katrin<span className="text-[#e8722a]">.</span>
            </div>
            <p className="text-[#888] text-sm leading-relaxed max-w-xs mb-6">
              Akademische Reitkunst nach Bent Branderup — als einzige aktive Trainerin in Österreich.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/annekatrin.reitkunst"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#252525] flex items-center justify-center text-[#888] hover:bg-[#e8722a] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/AnneKatrinZwillingFeinesPferdetraining/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#252525] flex items-center justify-center text-[#888] hover:bg-[#e8722a] hover:text-white transition-all"
                aria-label="Facebook"
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-[Sora] text-xs font-semibold tracking-[0.15em] uppercase text-[#e8722a] mb-4">
              Navigation
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-[#888] text-sm hover:text-white transition-colors">Startseite</Link>
              <Link to="/ueber-mich" className="text-[#888] text-sm hover:text-white transition-colors">Über mich</Link>
              <Link to="/angebote" className="text-[#888] text-sm hover:text-white transition-colors">Angebote & Kurse</Link>
              <Link to="/kundenstimmen" className="text-[#888] text-sm hover:text-white transition-colors">Kundenstimmen</Link>
              <Link to="/faq" className="text-[#888] text-sm hover:text-white transition-colors">FAQ</Link>
              <Link to="/kontakt" className="text-[#888] text-sm hover:text-white transition-colors">Kontakt</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-[Sora] text-xs font-semibold tracking-[0.15em] uppercase text-[#e8722a] mb-4">
              Kontakt
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+4915116734790" className="text-[#888] hover:text-white transition-colors">
                +49 151 16734790
              </a>
              <a href="mailto:info@feinespferdetraining.de" className="text-[#888] hover:text-white transition-colors break-all">
                info@feinespferdetraining.de
              </a>
              <span className="text-[#888]">Hauzenberg bei Passau</span>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="font-[Sora] text-xs font-semibold tracking-[0.15em] uppercase text-[#e8722a] mb-4">
              Folge mir
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://www.instagram.com/annekatrin.reitkunst"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888] hover:text-white transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                @annekatrin.reitkunst
              </a>
              <a
                href="https://www.facebook.com/AnneKatrinZwillingFeinesPferdetraining/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888] hover:text-white transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#333] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#666] text-xs">
            &copy; {new Date().getFullYear()} Anne-Katrin Zwilling. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-xs text-[#666]">
            <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
