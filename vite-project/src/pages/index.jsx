import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";

const translations = {
  de: { welcome: "WILLKOMMEN BEI ATABUY", shop: "Zum Shop", about: "Über uns", aboutText: "ATABUY steht für Stil, Qualität und Verantwortung...", sustainability: "Warum Nachhaltigkeit?", sustainabilityText: "Weil wir an eine Zukunft...", goals: "Unsere Ziele", goalsText: "Wir wollen hochwertige, faire Produkte..." },
  en: { welcome: "WELCOME TO ATABUY", shop: "Go to Shop", about: "About us", aboutText: "ATABUY stands for style...", sustainability: "Why sustainability?", sustainabilityText: "Because we believe...", goals: "Our Goals", goalsText: "We aim to make high-quality..." }
};

export default function HomePage() {
  const [lang, setLang] = useState("de");
  const t = translations[lang];

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      <Header lang={lang} setLang={setLang} />

      <motion.section initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1 }} className="h-screen flex items-center justify-center">
        <div className="text-center p-4">
          <motion.h1 initial={{ y:-100 }} animate={{ y:0 }} transition={{ delay:0.3 }} className="text-5xl md:text-6xl font-extrabold mb-6">{t.welcome}</motion.h1>
          <motion.a href="/shop" initial={{ scale:0 }} animate={{ scale:1 }} transition={{ delay:0.6 }}>
            <button className="px-8 py-4 bg-blue-500 hover:bg-blue-400 rounded-lg shadow-lg">{t.shop}</button>
          </motion.a>
        </div>
      </motion.section>

      <motion.section initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }} viewport={{once:true}} transition={{ duration:0.8 }} className="bg-white text-gray-900 py-20 px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          <div><h2 className="text-3xl font-bold mb-4 text-blue-500">{t.about}</h2><p className="text-lg leading-relaxed">{t.aboutText}</p></div>
          <div><h2 className="text-3xl font-bold mb-4 text-blue-500">{t.sustainability}</h2><p className="text-lg leading-relaxed">{t.sustainabilityText}</p></div>
          <div><h2 className="text-3xl font-bold mb-4 text-blue-500">{t.goals}</h2><p className="text-lg leading-relaxed">{t.goalsText}</p></div>
        </div>
      </motion.section>
    </div>
  );
}