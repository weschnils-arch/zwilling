import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import clsx from 'clsx'

const faqs = [
  {
    q: 'Funktioniert das wirklich online?',
    a: 'Ja! Per Live-Video oder Zoom analysiere ich dich und dein Pferd in Echtzeit. Viele meiner Schüler arbeiten ausschließlich online — mit hervorragenden Ergebnissen. Ich sehe über die Kamera genau, was passiert, und kann dir präzise Anweisungen geben.',
  },
  {
    q: 'Muss ich schon Vorkenntnisse haben?',
    a: 'Nein. Die Akademische Reitkunst ist für Einsteiger und Umsteiger gleichermaßen geeignet. Wir starten immer dort, wo du und dein Pferd gerade stehen. Ob du jahrelange Erfahrung hast oder gerade erst anfängst — der Weg ist individuell.',
  },
  {
    q: 'Begleitest du auch Jungpferde?',
    a: 'Ja, der Intensivkurs Anreiten ist speziell dafür konzipiert. Wir bereiten dein Pferd schonend und stressfrei auf das Reitergewicht vor — aufbauend auf solider Bodenarbeit. Das Pferd gibt das Tempo vor, nicht der Kalender.',
  },
  {
    q: 'Was, wenn mein Pferd Probleme zeigt?',
    a: 'Gerade dann bist du hier richtig. Viele meiner Schüler kommen zu mir, weil ihr Pferd Widerstand zeigt, sich verspannt oder Probleme macht. Meist ist das ein Zeichen dafür, dass das Pferd nicht verstanden wird. Wir finden gemeinsam heraus, woran es liegt.',
  },
  {
    q: 'Wie läuft die erste Kontaktaufnahme ab?',
    a: 'Ganz unkompliziert: Schreib mir über das Kontaktformular oder ruf mich an. Erzähl mir von dir und deinem Pferd — was euer Ziel ist, wo ihr gerade steht. Dann finden wir gemeinsam heraus, welcher Kurs oder welches Format am besten zu euch passt.',
  },
  {
    q: 'Wie unterscheidet sich die Akademische Reitkunst von klassischer Dressur?',
    a: 'Die Akademische Reitkunst stellt das Wohlbefinden und die Biomechanik des Pferdes in den Mittelpunkt — nicht die Turniernote. Wir arbeiten mit dem Pferd als Partner, nutzen feinste Hilfen und legen Wert auf gesunden Muskelaufbau. Es geht um echtes Verständnis, nicht um Gehorsam durch Druck.',
  },
  {
    q: 'Was kostet der Unterricht?',
    a: 'Die Kosten variieren je nach Format (online, vor Ort, Intensivkurs). Schreib mir einfach und erzähl mir, was du dir vorstellst — ich mache dir ein individuelles Angebot.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const animRef = useScrollAnimation()

  return (
    <div ref={animRef}>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="container text-center">
          <span className="section-label" data-animate="fade-up">FAQ</span>
          <h1 className="section-title mt-3" data-animate="fade-up" data-delay="0.1"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 4rem)' }}
          >
            Häufige Fragen
          </h1>
          <p className="text-[#4a4a4a] text-lg mt-4 max-w-2xl mx-auto" data-animate="fade-up" data-delay="0.2">
            Hier findest du Antworten auf die häufigsten Fragen. Wenn deine nicht dabei ist — schreib mir einfach.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="pb-20 md:pb-28">
        <div className="container max-w-3xl">
          <div className="space-y-0" data-animate="fade-up" data-delay="0.2">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#eee]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className={clsx(
                    'font-[Sora] font-bold text-base md:text-lg tracking-[-0.01em] pr-8 transition-colors',
                    openIndex === i ? 'text-[#e8722a]' : 'text-[#1a1a1a] group-hover:text-[#e8722a]'
                  )}>
                    {faq.q}
                  </span>
                  <span className={clsx(
                    'text-[#e8722a] text-2xl font-light transition-transform duration-300 shrink-0',
                    openIndex === i && 'rotate-45'
                  )}>
                    +
                  </span>
                </button>
                <div
                  className={clsx(
                    'overflow-hidden transition-all duration-500 ease-in-out',
                    openIndex === i ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                  )}
                >
                  <p className="text-[#4a4a4a] leading-relaxed text-[0.9375rem]">
                    {faq.a}
                  </p>
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
            Noch Fragen?
          </h2>
          <p className="text-[#4a4a4a] text-lg max-w-lg mx-auto mb-10">
            Schreib mir direkt — ich antworte persönlich.
          </p>
          <Link to="/kontakt" className="btn-primary !py-4 !px-10">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  )
}
