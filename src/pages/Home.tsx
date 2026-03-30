import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const animRef = useScrollAnimation()
  const parallaxRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!parallaxRef.current) return

    gsap.fromTo(
      parallaxRef.current,
      { y: -80 },
      {
        y: 80,
        ease: 'none',
        scrollTrigger: {
          trigger: parallaxRef.current.closest('section'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === parallaxRef.current?.closest('section')) t.kill()
      })
    }
  }, [])

  return (
    <div ref={animRef}>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/ak-3842.webp"
            alt="Anne-Katrin reitet akademische Reitkunst"
            className="w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 via-[#1a1a1a]/50 to-transparent" />
        </div>

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-2xl">
            <span className="section-label !text-[#e8722a] mb-6 block">
              Akademische Reitkunst
            </span>
            <h1 className="font-[Sora] text-white font-extrabold tracking-[-0.03em] leading-[1.08] mb-6 hyphens-auto"
              style={{ fontSize: 'clamp(1.875rem, 5.5vw, 4.5rem)' }}
            >
              Arbeitest du mit deinem Pferd — oder{' '}
              <span className="text-[#e8722a]">kämpfst du noch?</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Akademische Reitkunst nach Bent Branderup — als einzige aktive Trainerin in Österreich. Für eine Partnerschaft, die auf Verständnis basiert.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/kontakt" className="btn-primary !py-4 !px-8 !text-base">
                Jetzt Kontakt aufnehmen
              </Link>
              <Link to="/angebote" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[#1a1a1a] !py-4 !px-8">
                Angebote ansehen
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-white/40 text-xs font-[Sora] tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ═══════════════ PROBLEM SECTION ═══════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16" data-animate="fade-up">
            <span className="section-label">Kennst du das?</span>
            <h2 className="section-title mt-3">
              Dein Pferd sagt Nein.
            </h2>
            <p className="text-[#4a4a4a] text-lg mt-4 max-w-xl mx-auto">
              Und du fragst dich, woran es liegt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Widerstand statt Mitarbeit',
                text: 'Dein Pferd wehrt sich gegen deine Hilfen, verspannt sich oder geht gegen die Hand.',
                delay: '0',
              },
              {
                title: 'Keine echte Verbindung',
                text: 'Es fühlt sich an wie zwei Fremde — du reitest, aber eine echte Partnerschaft fehlt.',
                delay: '0.1',
              },
              {
                title: 'Unsicherheit im Training',
                text: 'Du weißt nicht, ob du es richtig machst — und ob dein Pferd gesund arbeitet.',
                delay: '0.2',
              },
            ].map((item) => (
              <div
                key={item.title}
                data-animate="fade-up"
                data-delay={item.delay}
                className="bg-[#fafaf8] rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="font-[Sora] text-xl font-bold tracking-[-0.02em] text-[#1a1a1a] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#4a4a4a] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FULL-BLEED PARALLAX IMAGE BREAK ═══════════════ */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          ref={parallaxRef}
          src="/images/ak-3088.webp"
          alt="Anne-Katrin und Pferd in Verbindung"
          className="absolute inset-0 w-full h-[130%] object-cover -top-[15%]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#1a1a1a]/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <blockquote
            data-animate="fade-up"
            className="text-center px-6 max-w-3xl"
          >
            <p className="font-[Sora] text-white text-2xl md:text-4xl font-light italic leading-snug tracking-[-0.02em]">
              "Zwei Geister müssen wollen, was zwei Körper können."
            </p>
            <cite className="text-[#e8722a] text-sm font-[Sora] font-semibold tracking-[0.1em] uppercase mt-4 block not-italic">
              — Bent Branderup
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ═══════════════ SOLUTION / PHILOSOPHY ═══════════════ */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div data-animate="slide-left" className="order-2 md:order-1">
              <span className="section-label">Die Lösung</span>
              <h2 className="section-title mt-3 mb-6">
                Verstehen statt Zwingen.
              </h2>
              <p className="text-[#4a4a4a] text-lg leading-relaxed mb-6">
                Akademische Reitkunst basiert auf Biomechanik, klarer Kommunikation und dem Respekt vor deinem Pferd. Kein Druck, keine Gewalt — nur Verständnis.
              </p>
              <p className="text-[#4a4a4a] leading-relaxed mb-8">
                Dein Pferd lernt, sich geschmeidig und gesund zu bewegen. Du lernst, feine Hilfen zu geben, die dein Pferd versteht. Das Ergebnis: echte Partnerschaft — keine Unterwerfung.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Pferdegerecht', 'Evidenzbasiert', 'Verständlich'].map((tag) => (
                  <span
                    key={tag}
                    className="font-[Sora] text-xs font-semibold tracking-[0.1em] uppercase text-[#e8722a] bg-[#e8722a]/8 px-4 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div data-animate="slide-right" className="order-1 md:order-2">
              <div className="relative">
                <img
                  src="/images/ak-2640.webp"
                  alt="Anne-Katrin bei der Bodenarbeit"
                  className="rounded-2xl w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 left-0 md:-left-4 w-20 h-20 md:w-24 md:h-24 bg-[#e8722a] rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ COURSE TEASERS ═══════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16" data-animate="fade-up">
            <span className="section-label">Angebote</span>
            <h2 className="section-title mt-3">
              Dein Weg zur feinen Reitkunst
            </h2>
            <p className="text-[#4a4a4a] text-lg mt-4 max-w-xl mx-auto">
              Drei aufeinander aufbauende Intensivkurse — vom Boden bis in den Sattel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                num: '01',
                title: 'Bodenarbeit',
                subtitle: 'Die Basis für alles',
                text: 'Kappzaum, Longe, Handarbeit — Kommunikation aufbauen, Körpersprache schulen, Pferd gymnastizieren.',
                img: '/images/ak-2908.webp',
                delay: '0',
              },
              {
                num: '02',
                title: 'Anreiten',
                subtitle: 'Der sanfte Start',
                text: 'Dein Pferd stressfrei und pferdeorientiert ans Reitergewicht gewöhnen. Die Basis für gesundes Reiten.',
                img: '/images/ak-3315.webp',
                delay: '0.1',
              },
              {
                num: '03',
                title: 'Reiten',
                subtitle: 'Fein & versammelt',
                text: 'Korrekter Sitz, feine Hilfengebung, Seitengänge, Versammlung — alles mit dem Pferd, nicht gegen es.',
                img: '/images/ak-3911.webp',
                delay: '0.2',
              },
            ].map((course) => (
              <div
                key={course.num}
                data-animate="fade-up"
                data-delay={course.delay}
                className="group bg-[#fafaf8] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-[#e8722a] text-white font-[Sora] text-xs font-bold px-3 py-1.5 rounded-full">
                    {course.num}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-[Sora] text-xl font-bold tracking-[-0.02em] text-[#1a1a1a] mb-1">
                    {course.title}
                  </h3>
                  <span className="text-[#e8722a] text-sm font-medium">
                    {course.subtitle}
                  </span>
                  <p className="text-[#4a4a4a] mt-3 leading-relaxed text-[0.9375rem]">
                    {course.text}
                  </p>
                  <Link
                    to="/angebote"
                    className="inline-flex items-center gap-2 text-[#e8722a] font-[Sora] font-semibold text-sm mt-5 group-hover:gap-3 transition-all"
                  >
                    Details ansehen
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT TEASER ═══════════════ */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div data-animate="scale-in">
              <img
                src="/images/ak-4035.webp"
                alt="Anne-Katrin — authentisch und nahbar"
                className="rounded-2xl w-full aspect-square object-cover"
                loading="lazy"
              />
            </div>
            <div data-animate="fade-up">
              <span className="section-label">Über mich</span>
              <h2 className="section-title mt-3 mb-6">
                Hi, ich bin Anne-Katrin.
              </h2>
              <p className="text-[#4a4a4a] text-lg leading-relaxed mb-4">
                Trainerin für Akademische Reitkunst. Turnschuhe statt Reitbluse. Wissen statt Dogma.
              </p>
              <p className="text-[#4a4a4a] leading-relaxed mb-8">
                Ich glaube daran, dass man über den Tellerrand blicken muss. Meine Leidenschaft ist es, Pferden und ihren Menschen einen besseren Weg zu zeigen — einen Weg, der auf Verständnis und Biomechanik basiert, nicht auf Druck und Gewalt.
              </p>
              <Link to="/ueber-mich" className="btn-secondary">
                Mehr über mich
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS TEASER ═══════════════ */}
      <section className="py-24 md:py-32 bg-[#1a1a1a]">
        <div className="container">
          <div className="text-center mb-16" data-animate="fade-up">
            <span className="section-label">Kundenstimmen</span>
            <h2 className="section-title !text-white mt-3">
              Was meine Schüler sagen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: 'Vom Panzer zum Salsa-Tänzer. Mein Wallach war steif wie ein Brett — nach 3 Monaten mit Anne-Katrin hat sich alles verändert.',
                name: 'Petra',
                horse: 'mit Wallach Bruno',
                delay: '0',
              },
              {
                quote: 'Endlich jemand, der nicht nur sagt "Mehr Schenkel!" sondern wirklich erklärt, warum mein Pferd sich wehrt.',
                name: 'Laura',
                horse: 'mit Stute Melody',
                delay: '0.15',
              },
            ].map((t) => (
              <div
                key={t.name}
                data-animate="fade-up"
                data-delay={t.delay}
                className="bg-[#252525] rounded-2xl p-8 md:p-10"
              >
                <div className="text-[#e8722a] text-5xl font-[Sora] font-extrabold leading-none mb-4">"</div>
                <p className="text-white/80 text-lg leading-relaxed italic mb-6">
                  {t.quote}
                </p>
                <div>
                  <span className="text-white font-[Sora] font-bold text-sm">{t.name}</span>
                  <span className="text-[#888] text-sm ml-2">— {t.horse}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-animate="fade-up" data-delay="0.3">
            <Link to="/kundenstimmen" className="btn-primary">
              Alle Stimmen lesen
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div
            data-animate="scale-in"
            className="relative bg-[#fafaf8] rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <img
                src="/images/fp-6935.webp"
                alt="Reitkunst Demo"
                className="w-full h-full object-cover opacity-20"
                loading="lazy"
              />
            </div>
            <div className="relative text-center py-20 md:py-28 px-6">
              <h2 className="section-title mb-4">
                Bereit für den ersten Schritt?
              </h2>
              <p className="text-[#4a4a4a] text-lg max-w-lg mx-auto mb-10">
                Lass uns herausfinden, wie ich dir und deinem Pferd helfen kann. Schreib mir — ich antworte persönlich.
              </p>
              <Link to="/kontakt" className="btn-primary !py-4 !px-10 !text-base">
                Jetzt Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
