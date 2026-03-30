import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const courses = [
  {
    num: '01',
    title: 'Intensivkurs Bodenarbeit',
    subtitle: 'Die Basis für alles Weitere',
    forWhom: 'Einsteiger, Umsteiger & alle, die von Grund auf richtig anfangen wollen',
    content: [
      'Gymnastizierende Arbeit am Kappzaum — Stellung, Biegung und Körpersprache als Grundlage',
      'Longieren — Balance, Losgelassenheit, Form, Tempo und Takt verbessern',
      'Handarbeit — feinere Ausbildung mit Zügeln, jede Lektion vom Boden erarbeiten',
      'Langzügel — erweiterte Bodenarbeit, besonders für Ponybesitzer interessant',
    ],
    format: 'Online per Zoom oder vor Ort',
    img: '/images/ak-2908.webp',
    imgAlt: 'Bodenarbeit mit Pferd',
  },
  {
    num: '02',
    title: 'Intensivkurs Anreiten',
    subtitle: 'Der sanfte Start unter dem Sattel',
    forWhom: 'Jungpferde, Pferde im Neustart & Reiter, die es von Anfang an richtig machen wollen',
    content: [
      'Pferdeorientierte Vorbereitung auf das Reitergewicht',
      'Aufbauend auf der Bodenarbeit — das Pferd ist bereits gymnastiziert und kommunikationsbereit',
      'Stressfreier, schrittweiser Prozess ohne Zeitdruck',
      'Solide Basis für gesundes Reiten über Jahre hinweg',
    ],
    format: 'Online per Zoom oder vor Ort',
    img: '/images/ak-3315.webp',
    imgAlt: 'Anreiten eines jungen Pferdes',
  },
  {
    num: '03',
    title: 'Intensivkurs Reiten',
    subtitle: 'Fein, versammelt, partnerschaftlich',
    forWhom: 'Reiter aller Stufen, die ihre Kommunikation verfeinern wollen',
    content: [
      'Korrekter Sitz des Reiters und unterschiedliche Möglichkeiten der Hilfengebung',
      'Verbesserung der Losgelassenheit, des Gleichgewichts, Stellung & Biegung',
      'Seitengänge unter dem Reiter — korrekte Gymnastizierung und Geraderichtung',
      'Weiterführende Arbeit: Versammlung durch feinste Kommunikation',
    ],
    format: 'Online per Zoom oder vor Ort',
    img: '/images/ak-3911.webp',
    imgAlt: 'Akademische Reitkunst',
  },
]

export default function Courses() {
  const animRef = useScrollAnimation()

  return (
    <div ref={animRef}>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="container text-center">
          <span className="section-label" data-animate="fade-up">Intensivkurse</span>
          <h1 className="section-title mt-3 hyphens-auto" data-animate="fade-up" data-delay="0.1"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 4rem)' }}
          >
            Dein Weg zur feinen Reitkunst
          </h1>
          <p className="text-[#4a4a4a] text-lg mt-4 max-w-2xl mx-auto" data-animate="fade-up" data-delay="0.2">
            Drei aufeinander aufbauende Kurse — vom Boden bis in den Sattel. Jeder Kurs baut auf dem vorherigen auf, aber du kannst an jedem Punkt einsteigen.
          </p>

          {/* Visual pathway */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-6 mt-10" data-animate="fade-up" data-delay="0.3">
            {['Bodenarbeit', 'Anreiten', 'Reiten'].map((name, i) => (
              <div key={name} className="flex items-center gap-2 md:gap-6">
                <span className="bg-[#e8722a] text-white font-[Sora] text-[0.6875rem] md:text-sm font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full whitespace-nowrap">
                  {name}
                </span>
                {i < 2 && (
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#e8722a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      {courses.map((course, index) => (
        <section
          key={course.num}
          className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-white' : ''}`}
        >
          <div className="container">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
              index % 2 === 1 ? 'md:[direction:rtl] md:[&>*]:[direction:ltr]' : ''
            }`}>
              {/* Image */}
              <div data-animate={index % 2 === 0 ? 'slide-left' : 'slide-right'}>
                <div className="relative">
                  <img
                    src={course.img}
                    alt={course.imgAlt}
                    className="rounded-2xl w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-6 left-6 bg-[#e8722a] text-white font-[Sora] text-sm font-bold w-12 h-12 rounded-full flex items-center justify-center">
                    {course.num}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div data-animate="fade-up">
                <h2 className="font-[Sora] text-2xl md:text-3xl font-bold tracking-[-0.02em] text-[#1a1a1a] mb-2">
                  {course.title}
                </h2>
                <span className="text-[#e8722a] font-medium">
                  {course.subtitle}
                </span>

                <div className="mt-6 mb-6">
                  <span className="font-[Sora] text-xs font-semibold tracking-[0.1em] uppercase text-[#888]">Für wen</span>
                  <p className="text-[#4a4a4a] mt-1">{course.forWhom}</p>
                </div>

                <div className="mb-6">
                  <span className="font-[Sora] text-xs font-semibold tracking-[0.1em] uppercase text-[#888]">Inhalte</span>
                  <ul className="mt-2 space-y-2">
                    {course.content.map((item, i) => (
                      <li key={i} className="flex gap-3 text-[#4a4a4a]">
                        <span className="text-[#e8722a] font-bold mt-0.5 shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <span className="font-[Sora] text-xs font-semibold tracking-[0.1em] uppercase text-[#888]">Format</span>
                  <p className="text-[#4a4a4a] mt-1">{course.format}</p>
                </div>

                <Link to="/kontakt" className="btn-primary">
                  Anfrage stellen
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 1:1 Coaching */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div data-animate="fade-up">
              <img
                src="/images/ak-3507.webp"
                alt="Individuelles Coaching"
                className="rounded-2xl w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
            <div data-animate="fade-up" data-delay="0.1">
              <span className="section-label">Individuell</span>
              <h2 className="font-[Sora] text-2xl md:text-3xl font-bold tracking-[-0.02em] text-[#1a1a1a] mb-2">
                1:1 Coaching
              </h2>
              <span className="text-[#e8722a] font-medium">Online & vor Ort</span>
              <p className="text-[#4a4a4a] text-lg leading-relaxed mt-6 mb-6">
                Neben den Intensivkursen biete ich individuelles 1:1 Training an — online per Zoom oder vor Ort bei dir am Hof. Maßgeschneidert auf dich und dein Pferd.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Persönliche Betreuung, zugeschnitten auf eure Bedürfnisse',
                  'Flexible Terminvereinbarung',
                  'Online per Live-Video oder vor Ort möglich',
                  'Für alle Ausbildungsstufen',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[#4a4a4a]">
                    <span className="text-[#e8722a] font-bold mt-0.5 shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/kontakt" className="btn-primary">
                Anfrage stellen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#1a1a1a]">
        <div className="container text-center" data-animate="fade-up">
          <h2 className="section-title !text-white mb-4">
            Nicht sicher, welcher Kurs passt?
          </h2>
          <p className="text-white/60 text-lg max-w-lg mx-auto mb-10">
            Schreib mir und erzähl mir von dir und deinem Pferd. Gemeinsam finden wir den richtigen Einstieg.
          </p>
          <Link to="/kontakt" className="btn-primary !py-4 !px-10">
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  )
}
