import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
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
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div data-animate="fade-up">
              <span className="section-label">Über mich</span>
              <h1 className="section-title mt-3 mb-6">
                Turnschuhe statt Reitbluse.{' '}
                <span className="text-[#e8722a]">Wissen statt Dogma.</span>
              </h1>
              <p className="text-[#4a4a4a] text-lg leading-relaxed">
                Ich bin Anne-Katrin Zwilling — lizenzierte Trainerin für Akademische Reitkunst nach Bent Branderup und bald die einzige aktive Trainerin dieser Schule in ganz Österreich. Seit über 15 Jahren arbeite ich mit Pferden und ihren Menschen.
              </p>
            </div>
            <div data-animate="slide-right">
              <img
                src="/images/ak-4035.webp"
                alt="Anne-Katrin Zwilling"
                className="rounded-2xl w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-3xl">
          <div data-animate="fade-up">
            <h2 className="font-[Sora] text-2xl md:text-3xl font-bold tracking-[-0.02em] text-[#1a1a1a] mb-8">
              Mein Weg zur Reitkunst
            </h2>
            <div className="text-[#4a4a4a] text-lg leading-[1.8] space-y-6">
              <p>
                Wie die meisten von uns, die mit dem Pferdevirus infiziert wurden, habe ich meine Liebe zu den Pferden bereits als kleines Mädchen entdeckt und in einer örtlichen Reitschule meine ersten Erfahrungen gesammelt.
              </p>
              <p>
                Über die Besitzer meiner langjährigen Reitbeteiligung Nympha wurde ich auf die Akademische Reitweise aufmerksam — und merkte schnell, dass es <strong>eine viel schönere und leichtere Art gibt zu reiten.</strong>
              </p>
              <p>
                2009 erfüllte ich mir meinen Kindheitstraum vom eigenen Pferd. Ab dem Moment begann ich wirklich zu lernen, wie facettenreich Pferdeausbildung sein kann.
              </p>
              <p>
                Dank meiner charakterstarken Stute habe ich viele Trainer aus unterschiedlichsten Reitweisen kennen lernen dürfen und bin heute sehr dankbar dafür, dass sie mir eindringlich gezeigt hat, wie abwechslungsreich die Arbeit mit Pferden sein kann.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed parallax image */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          ref={parallaxRef}
          src="/images/ak-3942.webp"
          alt="Anne-Katrin beim Reiten"
          className="absolute inset-0 w-full h-[130%] object-cover object-[center_20%] -top-[15%]"
          loading="lazy"
        />
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16" data-animate="fade-up">
            <span className="section-label">Meine Werte</span>
            <h2 className="section-title mt-3">
              Wofür ich stehe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Pferdegerecht',
                text: 'Das Pferd ist mein Partner, nicht mein Werkzeug. Jede Ausbildungsmethode muss dem Pferd dienen — nicht dem Ego des Reiters.',
                delay: '0',
              },
              {
                title: 'Evidenzbasiert',
                text: 'Mein Training basiert auf Biomechanik und Anatomie — nicht auf "das haben wir schon immer so gemacht". Wissen schlägt Tradition.',
                delay: '0.1',
              },
              {
                title: 'Verständlich',
                text: 'Ich erkläre so, dass du es verstehst und selbstständig umsetzen kannst. Mein Ziel ist es, mich überflüssig zu machen.',
                delay: '0.2',
              },
            ].map((value) => (
              <div
                key={value.title}
                data-animate="fade-up"
                data-delay={value.delay}
                className="bg-white rounded-2xl p-8 md:p-10"
              >
                <div className="w-12 h-1 bg-[#e8722a] rounded-full mb-6" />
                <h3 className="font-[Sora] text-xl font-bold tracking-[-0.02em] text-[#1a1a1a] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#4a4a4a] leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-3xl">
          <div data-animate="fade-up">
            <span className="section-label">Weiterbildung</span>
            <h2 className="section-title mt-3 mb-8">
              Von den Besten gelernt
            </h2>
            <p className="text-[#4a4a4a] text-lg leading-relaxed mb-8">
              Regelmäßige Fort- und Weiterbildungen sowie der Austausch mit anderen Trainern sind mir extrem wichtig. Ich durfte vom Wissen folgender Trainer profitieren:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                'Bent Branderup',
                'Marius Schneider',
                'Christofer Dahlgren',
                'Carina Dörfler',
                'Sabine Oettel',
                'Ernst-Peter Frey',
                'Jeff Sanders',
                'Alex Madl',
                'Martin Kreuzer',
              ].map((name) => (
                <span
                  key={name}
                  className="bg-[#fafaf8] text-[#4a4a4a] font-medium text-sm px-4 py-2 rounded-full border border-[#eee]"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 md:py-28 bg-[#1a1a1a]">
        <div className="container max-w-3xl text-center" data-animate="fade-up">
          <p className="font-[Sora] text-white text-2xl md:text-4xl font-light italic leading-snug tracking-[-0.02em]">
            "Dem Pferd ist es egal, nach welcher Reitweise es schlecht geritten wird!"
          </p>
          <cite className="text-[#e8722a] text-sm font-[Sora] font-semibold tracking-[0.1em] uppercase mt-6 block not-italic">
            — Bent Branderup
          </cite>
          <p className="text-white/50 text-lg mt-8">
            Bin ich der Meinung, dass es nur bereichernd sein kann über den Tellerrand raus zu blicken!
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container text-center" data-animate="fade-up">
          <h2 className="section-title mb-4">Neugierig geworden?</h2>
          <p className="text-[#4a4a4a] text-lg max-w-lg mx-auto mb-10">
            Lass uns über dich und dein Pferd sprechen. Ich freue mich auf deine Nachricht.
          </p>
          <Link to="/kontakt" className="btn-primary !py-4 !px-10">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  )
}
