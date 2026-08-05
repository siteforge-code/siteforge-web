'use client';

import React, { useState } from 'react';
import { Zap, Globe, Search, ArrowRight } from 'lucide-react';

export default function Page() {
  const [lang, setLang] = useState('sv');

  return (
    <div style={{ fontFamily: 'sans-serif', color: 'black', backgroundColor: 'white', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', borderBottom: '1px solid #eee' }}>
        <div style={{ fontSize: '24px', fontWeight: '900', textTransform: 'uppercase' }}>
          SITE<span style={{ color: '#3b82f6' }}>FORGE</span>
        </div>
        <button onClick={() => setLang(lang === 'sv' ? 'en' : 'sv')} style={{ fontWeight: 'bold', cursor: 'pointer' }}>
          {lang === 'sv' ? 'EN' : 'SV'}
        </button>
      </nav>

      {/* Hero */}
      <main style={{ padding: '100px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(40px, 8vw, 100px)', fontWeight: '900', lineHeight: '0.9', margin: '0 0 40px 0' }}>
          {lang === 'sv' ? 'VI BYGGER DIN DIGITALA' : 'WE BUILD YOUR DIGITAL'}<br />
          <span style={{ color: '#3b82f6' }}>IMPACT.</span>
        </h1>
        <p style={{ fontSize: '20px', color: '#666', maxWidth: '600px', marginBottom: '40px' }}>
          {lang === 'sv' 
            ? 'Moderna hemsidor med graffiti-själ och teknisk precision.' 
            : 'Modern websites with graffiti soul and technical precision.'}
        </p>
        <button style={{ backgroundColor: 'black', color: 'white', padding: '20px 40px', fontSize: '20px', fontWeight: 'bold', border: 'none', boxShadow: '8px 8px 0px #3b82f6', cursor: 'pointer' }}>
          {lang === 'sv' ? 'BOKA MÖTE' : 'BOOK MEETING'}
        </button>
      </main>

      {/* Services Simple Grid */}
      <section style={{ backgroundColor: '#000', color: 'white', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          <div>
            <h3 style={{ fontSize: '24px', color: '#3b82f6' }}>Performance</h3>
            <p>100/100 Lighthouse score.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '24px', color: '#3b82f6' }}>SEO</h3>
            <p>Dominera Google direkt.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '24px', color: '#3b82f6' }}>Design</h3>
            <p>Urban premium estetik.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
