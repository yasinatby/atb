import React from "react";
import Header from "../components/Header";

export default function Legal() {
  return (
    <>
      <Header lang={"de"} setLang={() => {}} isAdmin={false} />
      <main className="max-w-4xl mx-auto p-6 text-gray-800">
        <h1 className="text-4xl font-extrabold mb-6">Allgemeine Geschäftsbedingungen (AGB)</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Geltungsbereich</h2>
          <p>
            Diese AGB gelten für alle Bestellungen, die über unseren Online-Shop ATABUY erfolgen. Mit deiner Bestellung erkennst du unsere Bedingungen an.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Vertragspartner</h2>
          <p>
            Der Kaufvertrag kommt zustande mit:
            <br />
            <strong>ATABUY – Yasin Atabey</strong><br />
            Musterstraße 1<br />
            12345 Berlin<br />
            Deutschland
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. So kommt der Deal zustande</h2>
          <p>
            Die Produktdarstellungen im Shop sind noch kein verbindliches Angebot. Erst wenn du auf „Jetzt kaufen“ klickst, gibst du ein verbindliches Angebot ab. 
            Wir nehmen es an, sobald du eine Bestellbestätigung per E-Mail erhältst.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Preise & Bezahlung</h2>
          <p>
            Alle Preise sind in Euro und enthalten die gesetzliche Mehrwertsteuer. Du kannst bequem und sicher per PayPal, Stripe oder anderen angebotenen Zahlungsmethoden zahlen.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Versand & Lieferung</h2>
          <p>
            Wir liefern innerhalb Deutschlands – schnell und zuverlässig. Normalerweise kommt deine Bestellung in 2–5 Werktagen an. Sollte es mal länger dauern, informieren wir dich direkt.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Deine Rückgabeoption</h2>
          <p>
            Du hast das Recht, deine Bestellung innerhalb von 14 Tagen ohne Angabe von Gründen zu widerrufen. Mehr Infos findest du in unserer Widerrufsbelehrung.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">7. Eigentumsvorbehalt</h2>
          <p>
            Bis zur vollständigen Zahlung bleibt die Ware unser Eigentum – ganz klassisch.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Was ist mit Garantie?</h2>
          <p>
            Für alle Produkte gelten die gesetzlichen Gewährleistungsrechte. Falls mal was nicht passt – melde dich, wir finden eine Lösung!
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">9. Und sonst so?</h2>
          <p>
            Sollte mal eine Regel aus diesen AGB unwirksam sein, bleibt der Rest trotzdem gültig. Wir wollen's fair und klar halten.
          </p>
        </section>
      </main>
    </>
  );
}
