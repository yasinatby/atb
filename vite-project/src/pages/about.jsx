import React from "react";
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header lang={"de"} setLang={() => {}} isAdmin={false} />
      <main className="max-w-4xl mx-auto p-6 text-gray-800">
        <h1 className="text-4xl font-extrabold mb-6">Wer wir sind</h1>

        <p className="text-lg mb-4">
          Willkommen bei <strong>ATABUY</strong> – deinem Marktplatz für Qualität, Style und smarte Entscheidungen.
        </p>

        <p className="mb-4">
          Wir sind ein junges, dynamisches Team mit einer klaren Mission: Online-Shopping neu denken. Einfach. Ehrlich. Und vor allem: für dich gemacht.
        </p>

        <p className="mb-4">
          Unser Sortiment ist handverlesen. Keine Masse, sondern Klasse. Ob Alltags-Essentials, Technik-Gadgets oder stylische Must-haves – bei uns findest du Produkte, die du wirklich brauchst (und gerne weiterempfiehlst).
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Warum ATABUY?</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li><strong>Faire Preise</strong> – ohne Zwischenhändler-Tricks.</li>
          <li><strong>Verlässlicher Service</strong> – Support, der antwortet. Schnell.</li>
          <li><strong>Transparente Abwicklung</strong> – von der Bestellung bis zur Retoure.</li>
          <li><strong>Sicher bezahlen</strong> – mit PayPal & Stripe, direkt und geschützt.</li>
        </ul>

        <p className="mb-4">
          Wir glauben: Vertrauen gewinnt man nicht durch Rabatte, sondern durch Klarheit, Qualität und Persönlichkeit.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Let’s grow together 🚀</h2>
        <p>
          ATABUY ist kein Konzern – sondern ein Projekt von echten Menschen für echte Kunden. Wir sind stolz auf jede Bestellung, jedes Feedback und jede Empfehlung.
        </p>

        <p className="mt-4">Danke, dass du Teil unserer Reise bist. 🙏</p>
      </main>
    </>
  );
}
