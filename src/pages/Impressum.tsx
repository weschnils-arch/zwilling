export default function Impressum() {
  return (
    <div className="pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="container max-w-3xl">
        <h1 className="section-title mb-10">Impressum</h1>
        <div className="text-[#4a4a4a] leading-relaxed space-y-4">
          <p className="font-semibold text-[#1a1a1a]">Anne-Katrin Zwilling, Feines Pferdetraining</p>
          <p>Kussersiedlung 52<br />94051 Hauzenberg</p>
          <p>
            Telefon: <a href="tel:+4915116734790" className="text-[#e8722a] hover:underline">+49 (0) 151 16734790</a><br />
            E-Mail: <a href="mailto:info@feinespferdetraining.de" className="text-[#e8722a] hover:underline">info@feinespferdetraining.de</a><br />
            Web: www.feinespferdetraining.de
          </p>
          <p>Finanzamt Passau</p>
        </div>
      </div>
    </div>
  )
}
