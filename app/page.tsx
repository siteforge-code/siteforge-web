'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Zap, 
  Search, 
  ShieldCheck, 
  Calendar,
  MessageSquare,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

// --- TYPER & DATA ---
const translations = {
  sv: {
    heroTitle: "Vi bygger din digitala",
    heroImpact: "Impact.",
    heroSub: "SiteForge förenar urban graffiti-estetik med teknisk precision. Vi skapar blixtsnabba hemsidor som dominerar sökresultaten.",
    ctaBook: "Boka fritt möte",
    ctaStart: "Starta projekt",
    services: "Tjänster",
    process: "Process",
    whyUs: "Varför SiteForge",
    lang: "EN"
  },
  en: {
    heroTitle: "We build your digital",
    heroImpact: "Impact.",
    heroSub: "SiteForge merges urban graffiti aesthetics with technical precision. We build lightning-fast websites that dominate search results.",
    ctaBook: "Book a meeting",
    ctaStart: "Start Project",
    services: "Services",
    process: "Process",
    whyUs: "Why SiteForge",
    lang: "SV"
  }
};

const serviceList = [
  { id: 1, icon: <Zap />, title: "Performance", desc: "Vi siktar på 100/100 i Lighthouse. Snabbhet är inte en bonus, det är ett krav." },
  { id: 2, icon: <Search />, title: "SEO Expertis", desc: "Syns du inte, finns du inte. Vi bygger din sajt för Google från första raden kod." },
  { id: 3, icon: <Globe />, title: "Modern Design", desc: "Minimalistisk Apple-layout möter din unika identitet. Inga färdiga mallar." }
];

// --- KOMPONENTER ---

const Nav = ({ lang, setLang, t }: any) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg py-4 border-b border-gray-100 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="relative cursor-pointer"
        >
          {/* Här simulerar vi din logga med rätt färger */}
          <div className="text-3xl font-black uppercase italic tracking-tighter flex items-center">
            <span className="text-black">Site</span>
            <span className="text-blue-500 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] ml-1">Forge</span>
          </div>
        </motion.div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8 font-bold text-[11px] uppercase tracking-[0.2em]">
          <a href="#services" className="hover:text-blue-500 transition-colors">{t.services}</a>
          <a href="#process" className="hover:text-blue-500 transition-colors">{t.process}</a>
          <button 
            onClick={() => setLang(lang === 'sv' ? 'en' : 'sv')}
            className="flex items-center gap-2 border-b-2 border-black pb-1 hover:text-blue-500 transition-colors"
          >
            {t.lang}
          </button>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 0px rgba(0,0,0,1)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-3 shadow-[6px_6px_0px_#3b82f6] transition-all"
          >
            {t.ctaBook}
          </motion.button>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-8 flex flex-col space-y-6 md:hidden shadow-xl"
          >
            <a href="#services" onClick={() => setMobileMenu(false)} className="text-2xl font-black uppercase">{t.services}</a>
            <a href="#process" onClick={() => setMobileMenu(false)} className="text-2xl font-black uppercase">{t.process}</a>
            <button onClick={() => {setLang(lang === 'sv' ? 'en' : 'sv'); setMobileMenu(false)}} className="text-left text-2xl font-black uppercase text-blue-500">{t.lang}</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function SiteForgeApp() {
  const [lang, setLang] = useState('sv');
  const t = translations[lang];

  return (
    <div className="bg-white text-black font-sans selection:bg-blue-100 antialiased overflow-x-hidden">
      <Nav lang={lang} setLang={setLang} t={t} />

      {/* --- HERO --- */}
      <section className="relative min-h-screen flex items-center pt-20 px-6">
        {/* Bakgrundsdekor (Graffiti vibes) */}
        <div className="absolute top-40 right-[-5%] text-[250px] font-black text-gray-50 select-none -z-10 tracking-[ -0.1em] opacity-40">
          FORGE
        </div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <span className="w-12 h-[2px] bg-blue-500"></span>
              <span className="text-blue-500 font-black uppercase tracking-widest text-xs">Premium Web Studio</span>
            </div>
            <h1 className="text-[80px] md:text-[130px] font-black leading-[0.8] uppercase tracking-tighter mb-8">
              {t.heroTitle} <br />
              <motion.span 
                initial={{ color: "#000" }}
                animate={{ color: "#3b82f6" }}
                transition={{ delay: 0.5 }}
                className="drop-shadow-[6px_6px_0px_#000]"
              >
                {t.heroImpact}
              </motion.span>
            </h1>
            <p className="text-xl text-gray-500 max-w-lg mb-12 font-medium leading-relaxed">
              {t.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button 
                whileHover={{ y: -5 }}
                className="bg-black text-white px-10 py-5 text-xl font-black uppercase tracking-tighter shadow-[10px_10px_0px_#3b82f6] flex items-center gap-3"
              >
                {t.ctaStart} <ArrowRight />
              </motion.button>
            </div>
          </motion.div>

          {/* Interactive Hero Image/Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gray-50 border-4 border-black rounded-[40px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              {/* Fake UI Element */}
              <div className="absolute top-10 left-10 right-10 bottom-10 border-2 border-dashed border-gray-200 rounded-3xl flex items-center justify-center">
                 <div className="text-center">
                   <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="text-6xl font-black text-blue-500 italic drop-shadow-md"
                   >
                     SiteForge
                   </motion.div>
                   <p className="mt-4 font-mono text-xs text-gray-400 uppercase tracking-widest">System Status: Active</p>
                 </div>
              </div>
              {/* Floating stats badge */}
              <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute top-8 right-8 bg-white border-2 border-black p-4 shadow-xl"
              >
                <div className="text-blue-500 font-black text-2xl leading-none">100</div>
                <div className="text-[8px] uppercase font-bold text-gray-500 tracking-tighter">Lighthouse Score</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-40 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-6xl font-black uppercase tracking-tighter">Våra <br/> <span className="text-blue-400 italic">Specialiteter</span></h2>
            <p className="text-gray-400 max-w-sm font-medium">Vi bygger plattformar som växer. Från småföretag till global expansion.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {serviceList.map((service: any) => (
              <motion.div 
                key={service.id}
                whileHover={{ y: -10 }}
                className="group relative p-10 border border-gray-800 hover:border-blue-500 transition-all duration-300 rounded-2xl"
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black uppercase mb-4">{service.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS (Scroll Interactive) --- */}
      <section id="process" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-32">
             <h2 className="text-7xl font-black uppercase tracking-tighter mb-6">Så här <span className="text-blue-500 italic">skapar</span> vi.</h2>
             <div className="w-20 h-2 bg-black mx-auto"></div>
           </div>

           <div className="grid md:grid-cols-3 gap-0 relative">
             <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-100 -z-10 hidden md:block"></div>
             {[
               { num: "01", title: "Analys", desc: "Vi kartlägger dina konkurrenter och hittar din unika vinkel." },
               { num: "02", title: "Forge", desc: "Själva bygget. Vi använder Next.js för maximal prestanda." },
               { num: "03", title: "Boost", desc: "Vi lanserar och optimerar för konvertering och tillväxt." }
            ].map((step: any, i: number) => (
               <div key={i} className="text-center px-10 mb-20 md:mb-0">
                 <div className="w-16 h-16 bg-white border-4 border-black text-black text-2xl font-black flex items-center justify-center mx-auto mb-8 rounded-full shadow-[6px_6px_0px_#3b82f6]">
                   {step.num}
                 </div>
                 <h4 className="text-xl font-black uppercase mb-4">{step.title}</h4>
                 <p className="text-gray-500 font-medium italic">{step.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-40 px-6 overflow-hidden">
        <motion.div 
          whileInView={{ scale: [0.9, 1] }}
          className="max-w-5xl mx-auto bg-blue-500 rounded-[60px] p-20 text-center relative"
        >
          {/* Graffiti pattern overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none uppercase font-black text-8xl flex flex-wrap gap-8 p-10 leading-none overflow-hidden select-none">
            FORGE FORGE FORGE FORGE FORGE FORGE FORGE
          </div>
          
          <h2 className="text-6xl md:text-[90px] font-black text-white uppercase tracking-tighter leading-none mb-12 relative z-10">
            Redo att ta <br /> din plats?
          </h2>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="bg-black text-white px-12 py-6 text-2xl font-black uppercase tracking-tighter shadow-2xl relative z-10"
          >
            Boka fritt möte
          </motion.button>
        </motion.div>
      </section>

      {/* --- REAL FOOTER --- */}
      <footer className="py-20 border-t border-gray-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-black uppercase italic tracking-tighter">
            <span className="text-black">Site</span>
            <span className="text-blue-500">Forge</span>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
            Stockholm, Sverige // siteforge.webb@gmail.com // © 2026
          </div>
        </div>
      </footer>
    </div>
  );
}
