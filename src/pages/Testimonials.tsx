import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const testimonials = [
  {
    quote: 'Vom Panzer zum Salsa-Tänzer. Mein Wallach war steif wie ein Brett, hat sich gegen jede Hilfe gewehrt. Nach 3 Monaten mit Anne-Katrin hat sich alles verändert — er bewegt sich geschmeidig und mit Freude.',
    name: 'Petra',
    horse: 'mit Wallach Bruno',
    featured: true,
  },
  {
    quote: 'Endlich jemand, der nicht nur sagt "Mehr Schenkel!" sondern wirklich erklärt, warum mein Pferd sich wehrt. Anne-Katrin hat mir die Augen geöffnet.',
    name: 'Laura',
    horse: 'mit Stute Melody',
  },
  {
    quote: 'Die Online-Stunden funktionieren erstaunlich gut. Anne-Katrin sieht alles über die Kamera und erklärt so klar, dass man es sofort umsetzen kann. Ich hätte nie gedacht, dass das möglich ist.',
    name: 'Melanie',
    horse: 'Online-Schülerin',
  },
  {
    quote: 'Meine Stute war ein Problemfall — keine Reitschule wollte sie mehr. Anne-Katrin hat uns beiden eine zweite Chance gegeben. Heute reiten wir Seitengänge.',
    name: 'Janine',
    horse: 'mit Stute Lilli',
    featured: true,
  },
  {
    quote: 'Ich bin über 50 und dachte, es ist zu spät für mich, nochmal umzulernen. Anne-Katrin hat mir gezeigt, dass es nie zu spät ist — und dass mein Pferd es mir dankt.',
    name: 'Ingrid',
    horse: 'mit Wallach Cosmo',
  },
  {
    quote: 'Was mich am meisten beeindruckt: Anne-Katrin nimmt sich die Zeit, wirklich zu erklären WARUM etwas funktioniert. Kein blindes Nachmachen, sondern echtes Verstehen.',
    name: 'Sandra',
    horse: 'mit Stute Fenja',
  },
]

export default function Testimonials() {
  const animRef = useScrollAnimation()

  return (
    <div ref={animRef}>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="container text-center">
          <span className="section-label" data-animate="fade-up">Kundenstimmen</span>
          <h1 className="section-title mt-3" data-animate="fade-up" data-delay="0.1"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 4rem)' }}
          >
            Was meine Schüler sagen
          </h1>
          <p className="text-[#4a4a4a] text-lg mt-4 max-w-2xl mx-auto" data-animate="fade-up" data-delay="0.2">
            Echte Geschichten von echten Menschen und ihren Pferden.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="columns-1 md:columns-2 gap-6 md:gap-8 space-y-6 md:space-y-8">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                data-animate="fade-up"
                data-delay={String(i * 0.08)}
                className={`break-inside-avoid rounded-2xl p-8 md:p-10 ${
                  t.featured
                    ? 'bg-[#1a1a1a]'
                    : 'bg-white'
                }`}
              >
                <div className={`text-5xl font-[Sora] font-extrabold leading-none mb-5 ${
                  t.featured ? 'text-[#e8722a]' : 'text-[#e8722a]/30'
                }`}>
                  "
                </div>
                <p className={`text-lg leading-relaxed italic mb-6 ${
                  t.featured ? 'text-white/85' : 'text-[#4a4a4a]'
                }`}>
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-[Sora] font-bold text-sm ${
                    t.featured
                      ? 'bg-[#e8722a] text-white'
                      : 'bg-[#fafaf8] text-[#e8722a]'
                  }`}>
                    {t.name[0]}
                  </div>
                  <div>
                    <span className={`font-[Sora] font-bold text-sm block ${
                      t.featured ? 'text-white' : 'text-[#1a1a1a]'
                    }`}>
                      {t.name}
                    </span>
                    <span className="text-[#888] text-xs">{t.horse}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container text-center" data-animate="fade-up">
          <h2 className="section-title mb-4">
            Deine Geschichte könnte die nächste sein.
          </h2>
          <p className="text-[#4a4a4a] text-lg max-w-lg mx-auto mb-10">
            Lass uns herausfinden, wie ich dir und deinem Pferd helfen kann.
          </p>
          <Link to="/kontakt" className="btn-primary !py-4 !px-10">
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  )
}
