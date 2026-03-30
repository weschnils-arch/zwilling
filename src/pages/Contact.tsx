import { useState, type FormEvent } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const animRef = useScrollAnimation()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div ref={animRef}>
      <section className="pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {/* Left — Info */}
            <div data-animate="fade-up">
              <span className="section-label">Kontakt</span>
              <h1 className="section-title mt-3 mb-6"
                style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
              >
                Lass uns{' '}
                <span className="text-[#e8722a]">sprechen.</span>
              </h1>
              <p className="text-[#4a4a4a] text-lg leading-relaxed mb-10">
                Egal ob du Fragen hast oder direkt starten möchtest — ich freue mich auf deine Nachricht. Erzähl mir von dir und deinem Pferd.
              </p>

              <div className="space-y-8">
                <div>
                  <span className="font-[Sora] text-xs font-semibold tracking-[0.15em] uppercase text-[#888] block mb-2">
                    Telefon
                  </span>
                  <a
                    href="tel:+4915116734790"
                    className="font-[Sora] text-xl md:text-2xl font-bold tracking-[-0.02em] text-[#1a1a1a] hover:text-[#e8722a] transition-colors"
                  >
                    +49 151 16734790
                  </a>
                </div>

                <div>
                  <span className="font-[Sora] text-xs font-semibold tracking-[0.15em] uppercase text-[#888] block mb-2">
                    E-Mail
                  </span>
                  <a
                    href="mailto:info@feinespferdetraining.de"
                    className="font-[Sora] text-base md:text-2xl font-bold tracking-[-0.02em] text-[#e8722a] hover:text-[#d4641f] transition-colors break-all"
                  >
                    info@feinespferde&shy;training.de
                  </a>
                </div>

                <div>
                  <span className="font-[Sora] text-xs font-semibold tracking-[0.15em] uppercase text-[#888] block mb-2">
                    Standort
                  </span>
                  <p className="text-[#4a4a4a] text-lg">
                    Hauzenberg bei Passau
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div data-animate="fade-up" data-delay="0.15">
              {submitted ? (
                <div className="bg-white rounded-2xl p-10 md:p-12 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-[#e8722a]/10 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[#e8722a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-[Sora] text-2xl font-bold tracking-[-0.02em] text-[#1a1a1a] mb-3">
                    Nachricht gesendet!
                  </h3>
                  <p className="text-[#4a4a4a] leading-relaxed">
                    Danke für deine Nachricht. Ich melde mich so schnell wie möglich bei dir.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 md:p-10"
                >
                  <div className="space-y-5">
                    <div>
                      <label className="font-[Sora] text-xs font-semibold tracking-[0.1em] uppercase text-[#888] block mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dein Name"
                        className="w-full bg-[#fafaf8] border border-[#eee] rounded-lg px-4 py-3.5 text-[#1a1a1a] placeholder:text-[#ccc] focus:outline-none focus:border-[#e8722a] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-[Sora] text-xs font-semibold tracking-[0.1em] uppercase text-[#888] block mb-2">
                        E-Mail
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="deine@email.de"
                        className="w-full bg-[#fafaf8] border border-[#eee] rounded-lg px-4 py-3.5 text-[#1a1a1a] placeholder:text-[#ccc] focus:outline-none focus:border-[#e8722a] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-[Sora] text-xs font-semibold tracking-[0.1em] uppercase text-[#888] block mb-2">
                        Nachricht
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Erzähl mir von dir und deinem Pferd..."
                        className="w-full bg-[#fafaf8] border border-[#eee] rounded-lg px-4 py-3.5 text-[#1a1a1a] placeholder:text-[#ccc] focus:outline-none focus:border-[#e8722a] transition-colors resize-none"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center !py-4 mt-2">
                      Nachricht senden
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
