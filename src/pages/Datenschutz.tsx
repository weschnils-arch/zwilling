export default function Datenschutz() {
  return (
    <div className="pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="container max-w-3xl">
        <h1 className="section-title mb-10">Datenschutz</h1>
        <div className="text-[#4a4a4a] leading-relaxed space-y-6">
          <section>
            <h2 className="font-[Sora] text-xl font-bold text-[#1a1a1a] mb-3">Urheberrechte</h2>
            <p>
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website gehören ausschließlich dem Ersteller. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
            </p>
          </section>

          <section>
            <h2 className="font-[Sora] text-xl font-bold text-[#1a1a1a] mb-3">Copyright</h2>
            <p>
              Alle Inhalte dieser Webseite, insbesondere Texte, Fotografien und Grafiken, sind urheberrechtlich geschützt. Das Urheberrecht liegt, soweit nicht ausdrücklich anders gekennzeichnet, bei Anne-Katrin Zwilling. Bitte fragen Sie mich, falls Sie die Inhalte dieses Internetangebotes verwenden möchten.
            </p>
            <p className="mt-3">
              Wer gegen das Urheberrecht verstößt (z.B. Bilder oder Texte unerlaubt kopiert), macht sich gem. §§ 106 ff UrhG strafbar, wird zudem kostenpflichtig abgemahnt und muss Schadensersatz leisten (§ 97 UrhG).
            </p>
          </section>

          <section>
            <h2 className="font-[Sora] text-xl font-bold text-[#1a1a1a] mb-3">Haftungsausschluss</h2>
            <p>
              Sämtliche Seiten, die auf dieser Webseite verlinkt wurden, sind ausgeschlossen von Haftungsübernahme für Inhalte, Bilder, Texte und Dokumente. Die hier ausgewiesenen Seitenlinks dienen ausschließlich als empfehlende Verweise und sind absolut unabhängig von dieser Webseite und deren Autoren.
            </p>
          </section>

          <p className="text-sm text-[#888] pt-4">
            © {new Date().getFullYear()} Anne-Katrin Zwilling. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </div>
  )
}
