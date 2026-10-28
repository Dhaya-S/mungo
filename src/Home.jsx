/*
  Home.jsx — Mungo Landing Page
  Pixel-faithful adaptation of the 5 Zamov reference sections
*/
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/Cookie';

import home3  from './assets/home-3.webp';
import home4  from './assets/home-4.webp';
import home5  from './assets/home-5.webp';
import home6  from './assets/home-6.webp';
import home7  from './assets/home-7.webp';
import home8  from './assets/home-8.webp';
import home9  from './assets/home-9.webp';
import home10 from './assets/home-10.webp';
import home11 from './assets/home-11.webp';
import home12 from './assets/home-12.webp';
import home14 from './assets/home-14.webp';
import home15 from './assets/home-15.webp';
import home16 from './assets/home-16.webp';
import home19 from './assets/home-19.webp';
import dog1   from './assets/dog-1.webp';
import cat1   from './assets/cat-1.webp';
import blog5  from './assets/blog-5.webp';
import blog6  from './assets/blog-6.webp';
import blog8  from './assets/blog-8.webp';
import logo   from './assets/logo.webp';

/* ─────────────────────────────────────────────
   Scroll-reveal hook
───────────────────────────────────────────── */
function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); io.disconnect(); } },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, vis];
}

/* ─────────────────────────────────────────────
   Global keyframe CSS
───────────────────────────────────────────── */
const CSS = `
  @keyframes float {
    0%,100%{ transform:translateY(0px); }
    50%     { transform:translateY(-14px); }
  }
  @keyframes floatCat {
    0%,100%{ transform:translateX(-50%) translateY(0px) rotate(-4deg); }
    50%     { transform:translateX(-50%) translateY(-10px) rotate(4deg); }
  }
  @keyframes fadeUp {
    from{ opacity:0; transform:translateY(28px); }
    to  { opacity:1; transform:translateY(0); }
  }
  @keyframes slideL {
    from{ opacity:0; transform:translateX(-30px); }
    to  { opacity:1; transform:translateX(0); }
  }
  @keyframes slideR {
    from{ opacity:0; transform:translateX(30px); }
    to  { opacity:1; transform:translateX(0); }
  }
  @keyframes notifPop {
    0%  { opacity:0; transform:scale(0.85) translateX(-12px); }
    18% { opacity:1; transform:scale(1) translateX(0); }
    82% { opacity:1; transform:scale(1) translateX(0); }
    100%{ opacity:0; transform:scale(0.9) translateX(-8px); }
  }
  @keyframes drawDash {
    from{ stroke-dashoffset:400; }
    to  { stroke-dashoffset:0; }
  }
  @media(prefers-reduced-motion:reduce){
    *,*::before,*::after{
      animation-duration:0.01ms!important;
      transition-duration:0.01ms!important;
    }
  }
`;

/* ─────────────────────────────────────────────
   Paw SVG icon
───────────────────────────────────────────── */
const Paw = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <ellipse cx="6"  cy="5.5" rx="1.9" ry="2.7"/>
    <ellipse cx="12" cy="4"   rx="1.9" ry="2.7"/>
    <ellipse cx="18" cy="5.5" rx="1.9" ry="2.7"/>
    <ellipse cx="3"  cy="10.5" rx="1.7" ry="2.4"/>
    <path d="M12 10.5c-4.4 0-7.4 3.8-7.4 6.3 0 2 1.6 2.7 3.7 2.7 1.3 0 2.1-.6 3.7-.6s2.4.6 3.7.6c2.1 0 3.7-.7 3.7-2.7 0-2.5-3-6.3-7.4-6.3z"/>
  </svg>
);

/* ═══════════════════════════════════════════════════════════════
   SECTION 1 — HERO
   Blue gradient bg | Laptop mockup (cat on top, notif chips) | Headline right
════════════════════════════════════════════════════════════════ */
function HeroSection() {
  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 120); return () => clearTimeout(t); }, []);

  return (
    <section
      className="relative -mt-[76px] w-full overflow-hidden pt-[76px]"
      style={{ background: 'linear-gradient(150deg,#0c7a75 0%,#1bb6ae 55%,#13d4cb 100%)', minHeight: '90vh' }}
    >
      {/* Dot grid — far left */}
      <div aria-hidden className="pointer-events-none absolute left-5 top-36 hidden lg:grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(5,10px)', gap: 10 }}
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-white/25" />
        ))}
      </div>

      {/* Decorative circles — bottom-right */}
      <div aria-hidden className="pointer-events-none absolute bottom-10 right-10 hidden h-28 w-28 rounded-full border-4 border-white/10 lg:block" />
      <div aria-hidden className="pointer-events-none absolute bottom-20 right-20 hidden h-14 w-14 rounded-full border-2 border-white/10 lg:block" />

      <div className="relative mx-auto flex min-h-[calc(90vh-76px)] max-w-[1380px] flex-col items-center gap-10 px-6 pb-20 pt-8 lg:flex-row lg:items-center lg:gap-16 lg:px-20">

        {/* ── LEFT: Laptop mockup ── */}
        <div
          className="relative flex w-full shrink-0 items-center justify-center lg:w-[57%]"
          style={{ animation: ready ? 'slideL 0.85s ease 0.1s both' : 'none', opacity: 0 }}
        >
          {/* Cat peeking from top */}
          <img
            src={cat1} alt="" aria-hidden loading="eager"
            className="absolute z-30 hidden h-[110px] w-auto object-contain lg:block"
            style={{
              top: -52, left: '50%',
              filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.28))',
              animation: 'floatCat 3.8s ease-in-out infinite',
            }}
          />

          {/* Laptop wrapper */}
          <div className="relative w-full max-w-[540px]" style={{ filter: 'drop-shadow(0 28px 56px rgba(0,0,0,0.4))' }}>
            {/* Screen */}
            <div style={{ background: '#1e1e38', borderRadius: '14px 14px 4px 4px', border: '7px solid #2a2a46', padding: '0 0 0 0' }}>
              {/* Titlebar */}
              <div className="flex items-center gap-1.5 px-3 py-2" style={{ background: '#2a2a46', borderRadius: '7px 7px 0 0' }}>
                <span className="h-2.5 w-2.5 rounded-full bg-red-400"/>
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400"/>
                <span className="h-2.5 w-2.5 rounded-full bg-green-400"/>
                <div className="mx-auto flex items-center gap-1.5 rounded-lg bg-[#1e1e38] px-8 py-0.5 text-[10px] text-white/40">
                  <img src={logo} alt="" className="h-3 w-3" aria-hidden />
                  mungo.app/bookings
                </div>
              </div>

              {/* App screen */}
              <div style={{ background: '#f5fffe' }}>
                {/* Top nav bar of app */}
                <div className="flex items-center gap-2 border-b border-gray-100 bg-white px-4 py-2">
                  <img src={logo} alt="Mungo" className="h-4 w-4" />
                  <span className="text-[10px] font-bold text-[#17201E]">Mungo</span>
                  <div className="ml-2 flex gap-1 text-[9px]">
                    <span className="rounded bg-[#1bb6ae] px-2 py-0.5 font-semibold text-white">Oct 20–26</span>
                    <span className="rounded bg-gray-100 px-2 py-0.5 text-gray-500">Month</span>
                  </div>
                  <div className="ml-auto flex -space-x-1">
                    {[home14, home15].map((img, i) => (
                      <img key={i} src={img} alt="" aria-hidden className="h-6 w-6 rounded-full border-2 border-white object-cover" />
                    ))}
                  </div>
                </div>

                {/* Day columns */}
                <div className="px-3 py-2">
                  <div className="mb-1.5 grid grid-cols-5 gap-1.5 text-center text-[9px] font-semibold text-gray-400">
                    {['Mon 20','Tue 21','Wed 22','Thu 23','Fri 24'].map(d => <div key={d}>{d}</div>)}
                  </div>
                  {[
                    ['#c8f0ea','#1bb6ae','#bde3ff','#ffd6e7','#c8f0ea'],
                    ['#ffd6e7','#bde3ff','','#1bb6ae','#ffd6e7'],
                    ['','#c8f0ea','#1bb6ae','#bde3ff',''],
                  ].map((row, ri) => (
                    <div key={ri} className="mb-1.5 grid grid-cols-5 gap-1.5">
                      {row.map((bg, ci) => (
                        <div key={ci}
                          className="flex h-10 items-center justify-center rounded-lg text-[8px] font-semibold"
                          style={{ background: bg || '#f0f0f0', color: bg === '#1bb6ae' ? '#fff' : '#374151' }}
                        >
                          {bg === '#1bb6ae' ? 'Grooming' : bg === '#bde3ff' ? 'Walk' : bg === '#ffd6e7' ? 'Vet' : bg === '#c8f0ea' ? 'Sit' : ''}
                        </div>
                      ))}
                    </div>
                  ))}
                  {/* Avatar row */}
                  <div className="mt-2 flex gap-2">
                    {[home14,home15,home16].map((img, i) => (
                      <img key={i} src={img} alt="" aria-hidden className="h-9 w-9 rounded-full border-2 border-white object-cover shadow-sm" />
                    ))}
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1bb6ae] text-[10px] font-bold text-white">+8</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Keyboard/base */}
            <div style={{ background: 'linear-gradient(180deg,#2a2a46,#1a1a30)', height: 32, borderRadius: '0 0 18px 18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 90, height: 5, borderRadius: 4, background: '#3a3a5a' }} />
            </div>
            <div style={{ height: 6, background: '#0f0f22', borderRadius: '0 0 10px 10px' }} />
          </div>

          {/* Notification chip 1 — left mid */}
          <div
            className="absolute left-0 flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-2xl"
            style={{ top: '32%', zIndex: 20, animation: 'notifPop 5s ease-in-out 0.6s infinite', opacity: 0 }}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base" style={{ background: '#1bb6ae' }}>🔔</div>
            <div>
              <p className="text-[12px] font-bold text-[#17201E]">A new booking!</p>
              <div className="mt-0.5 flex -space-x-1.5">
                <img src={home14} alt="" aria-hidden className="h-5 w-5 rounded-full border border-white object-cover"/>
                <img src={home16} alt="" aria-hidden className="h-5 w-5 rounded-full border border-white object-cover"/>
              </div>
            </div>
          </div>

          {/* Notification chip 2 — left bottom */}
          <div
            className="absolute left-2 flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-2xl"
            style={{ top: '57%', zIndex: 20, animation: 'notifPop 5s ease-in-out 2.2s infinite', opacity: 0 }}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base" style={{ background: '#f59e0b' }}>🔔</div>
            <div>
              <p className="text-[12px] font-bold text-[#17201E]">A new booking!</p>
              <img src={home15} alt="" aria-hidden className="mt-0.5 h-5 w-5 rounded-full border border-white object-cover"/>
            </div>
          </div>

          {/* Notification chip 3 — inside/right */}
          <div
            className="absolute flex items-center gap-2 rounded-2xl px-3.5 py-2.5 shadow-2xl"
            style={{ right: '6%', bottom: '26%', zIndex: 20, background: '#1bb6ae', animation: 'notifPop 5s ease-in-out 3.8s infinite', opacity: 0 }}
          >
            <span className="text-lg text-white">🔔</span>
            <p className="text-[12px] font-bold text-white">A new booking!</p>
          </div>
        </div>

        {/* ── RIGHT: Headline ── */}
        <div
          className="flex w-full flex-col items-center gap-6 text-center lg:w-[43%] lg:items-start lg:text-left"
          style={{ animation: ready ? 'slideR 0.85s ease 0.25s both' : 'none', opacity: 0 }}
        >
          <h1 className="text-[34px] font-bold leading-[1.2] text-white md:text-[44px] lg:text-[50px]">
            Book trusted pet care with{' '}
            <strong className="font-extrabold">Mungo</strong>
            {' '}<span aria-hidden>🐾</span>
          </h1>
          <p className="max-w-[400px] text-[16px] leading-[1.7] text-white/80">
            Connect with verified groomers, vets, sitters, walkers, and boarders — all from one simple app.
          </p>
          <a
            href="/download"
            className="group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[16px] font-extrabold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
            style={{ background: 'rgba(255,255,255,0.18)', border: '2px solid rgba(255,255,255,0.38)', backdropFilter: 'blur(8px)' }}
          >
            Sign up
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
              <Paw size={16} color="#1bb6ae" />
            </span>
          </a>
        </div>
      </div>

      {/* Bottom wave into next section */}
      <div aria-hidden className="absolute bottom-0 left-0 w-full leading-[0]">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0 72 V36 Q360 0 720 36 Q1080 72 1440 36 V72 Z" fill="#1bb6ae"/>
        </svg>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 2 — NEW POSSIBILITIES
   Teal bg | "NEW POSSIBILITIES FOR YOU" label | Dog left | 4 pastel tilted cards
════════════════════════════════════════════════════════════════ */
const FEATURE_CARDS = [
  { title: 'Booking automation', desc: 'No more phone calls or missed entries. Your clients can book services online at any convenient moment.', bg: '#e8e0f5', rotate: '-3deg', img: home9 },
  { title: 'Convenient bookings management', desc: 'All bookings are gathered in one place, which makes it easy to track each booking and avoid any misunderstandings.', bg: '#fce4ec', rotate: '2deg', img: home3 },
  { title: 'Improved customer experience', desc: 'Customers value convenience and speed. They can choose free slots and rest assured their pet gets the attention it deserves.', bg: '#e3f5e8', rotate: '-1.5deg', img: home4 },
  { title: 'Grow your network', desc: 'Attract more customers through Mungo and enable clients to book a visit directly through your profile page.', bg: '#fdf6dd', rotate: '2.5deg', img: home5 },
];

function FeaturesSection() {
  const [ref, vis] = useReveal(0.08);
  return (
    <section className="w-full py-20 lg:py-24" style={{ background: '#1bb6ae' }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        {/* Label */}
        <p
          ref={ref}
          className="mb-10 text-[13px] font-extrabold uppercase tracking-[4px] text-white"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(18px)', transition: 'opacity .5s,transform .5s' }}
        >
          NEW POSSIBILITIES FOR YOU
        </p>

        <div className="flex items-end gap-6 lg:gap-8">
          {/* Dog mascot */}
          <div
            className="hidden shrink-0 lg:block"
            style={{
              width: 160,
              opacity: vis ? 1 : 0,
              transform: vis ? 'none' : 'translateX(-20px)',
              transition: 'opacity .6s .1s, transform .6s .1s',
            }}
          >
            <img
              src={dog1} alt="Illustrated pet mascot" loading="lazy"
              className="h-[280px] w-full object-contain object-bottom"
              style={{ filter: 'drop-shadow(0 12px 28px rgba(0,0,0,0.2))', animation: 'float 5s ease-in-out infinite' }}
            />
          </div>

          {/* Cards scroll row */}
          <div className="flex flex-1 gap-5 overflow-x-auto pb-4 lg:overflow-visible lg:pb-0" style={{ scrollSnapType: 'x mandatory' }}>
            {FEATURE_CARDS.map((card, i) => (
              <div
                key={card.title}
                className="min-w-[240px] flex-1 overflow-hidden rounded-3xl p-6 shadow-xl lg:min-w-0"
                style={{
                  background: card.bg,
                  transform: `rotate(${card.rotate})`,
                  scrollSnapAlign: 'start',
                  opacity: vis ? 1 : 0,
                  transition: `opacity 0.55s ease ${0.1 + i * 0.12}s, transform 0.55s ease ${0.1 + i * 0.12}s`,
                  transformOrigin: 'bottom center',
                }}
              >
                {/* Card image */}
                <div className="mb-5 h-[120px] w-full overflow-hidden rounded-2xl bg-white/70">
                  <img loading="lazy" decoding="async" src={card.img} alt={card.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-[16px] font-extrabold leading-[1.3] text-[#17201E]">{card.title}</h3>
                <p className="text-[13px] leading-[1.65] text-[#4a5a56]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 3 — COMPANY / PROVIDER PAGE
   White bg | Layered mockups left | Booking confirmed chip | Text + CTA right
════════════════════════════════════════════════════════════════ */
function CompanySection() {
  const [ref, vis] = useReveal(0.1);
  return (
    <section ref={ref} className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto flex max-w-[1380px] flex-col items-center gap-14 px-6 lg:flex-row lg:items-start lg:gap-20 lg:px-16">

        {/* LEFT: Stacked mockup layers */}
        <div
          className="relative w-full max-w-[500px] shrink-0 lg:min-h-[460px]"
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'opacity .7s, transform .7s',
          }}
        >
          {/* Back browser window */}
          <div className="absolute left-8 top-0 right-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-gray-100 bg-[#f8f9fa] px-4 py-2.5">
              <div className="flex gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400"/>
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400"/>
                <span className="h-2.5 w-2.5 rounded-full bg-green-400"/>
              </div>
              <div className="mx-auto flex items-center gap-1.5 rounded-md bg-white px-6 py-0.5 text-[10px] text-gray-400 shadow-sm">
                <img src={logo} alt="" className="h-3 w-3" aria-hidden /> mungo.app/providers
              </div>
            </div>
            {/* Provider page preview */}
            <div>
              <img loading="lazy" decoding="async" src={home8} alt="Provider profile" className="h-[160px] w-full object-cover"/>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[13px] font-bold text-[#17201E]">Happy Paws Grooming</p>
                    <p className="text-[11px] text-gray-500">⭐ 4.9 · 128 reviews</p>
                  </div>
                  <button className="rounded-full bg-[#1bb6ae] px-3 py-1.5 text-[10px] font-bold text-white">Book now</button>
                </div>
                {/* Service rows */}
                <div className="mt-3 space-y-1.5">
                  {['Full Grooming — 90 min','Nail Trim — 20 min','Bath & Dry — 60 min'].map(s => (
                    <div key={s} className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
                      <span className="text-[10px] text-gray-600">{s}</span>
                      <span className="text-[10px] font-semibold text-[#1bb6ae]">Book →</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Front mini app overlay */}
          <div className="absolute left-0 top-24 overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ width: 170, border: '1px solid #e5e7eb' }}>
            <div className="bg-[#1bb6ae] px-3 py-2 text-center text-[11px] font-bold text-white">Mungo App</div>
            <div className="p-3">
              <div className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-gray-400">My Services</div>
              {['Grooming','Walking','Boarding'].map(s => (
                <div key={s} className="mb-1 flex items-center gap-2 rounded-lg bg-[#f0fbf9] px-2 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#1bb6ae]"/>
                  <span className="text-[10px] font-medium text-[#17201E]">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Successful card */}
          <div
            className="absolute bottom-8 left-0 z-20 rounded-2xl px-5 py-4 shadow-2xl"
            style={{ background: '#1bb6ae', animation: 'float 4.5s ease-in-out infinite' }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl">✅</div>
              <div>
                <p className="text-[13px] font-extrabold text-white">Booking Successful</p>
                <p className="text-[10px] text-white/70 uppercase tracking-wide">NEW BOOKING</p>
              </div>
            </div>
          </div>

          {/* Review speech bubble */}
          <div className="absolute bottom-36 left-10 z-30 max-w-[210px] rounded-2xl bg-[#1e3a8a] px-4 py-3 shadow-xl"
            style={{ animation: 'float 5.5s ease-in-out 1s infinite' }}
          >
            <p className="text-[11px] leading-[1.5] text-white">
              🐶 <strong>Woof!</strong> My groomer now has a Mungo page! Booking was so quick and easy.
            </p>
          </div>

          {/* Pet avatar */}
          <img src={home16} alt="Pet parent avatar" loading="lazy"
            className="absolute -bottom-4 right-8 z-20 h-14 w-14 rounded-full border-4 border-white object-cover shadow-xl"
            style={{ animation: 'float 6s ease-in-out 0.5s infinite' }}
          />
        </div>

        {/* RIGHT: Text */}
        <div
          className="flex max-w-[500px] flex-col gap-6"
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? 'translateX(0)' : 'translateX(30px)',
            transition: 'opacity .7s .15s, transform .7s .15s',
          }}
        >
          <h2 className="text-[34px] font-extrabold leading-[1.2] text-[#17201E] md:text-[44px]">
            Get your{' '}
            <span style={{ color: '#1bb6ae' }}>provider page</span>{' '}
            for booking services <span aria-hidden>📋 🐾 👍</span>
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#4a5a56]">
            A separate website is no longer needed — on <strong>Mungo</strong> you get a full provider profile that lets you promote your services and receive bookings directly from pet parents.
          </p>
          <div>
            <a
              href="/partners"
              className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[15px] font-extrabold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: '#1bb6ae' }}
            >
              Try now
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <Paw size={15} color="#1bb6ae" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 4 — 3 EASY STEPS
   Light blue bg | "3 EASY STEPS TO GET STARTED" | Phones + big numbers | Animals + speech bubble
════════════════════════════════════════════════════════════════ */
const STEPS = [
  { num: '01', label: 'Sign up', title: 'Create your account', text: 'Download the Mungo app, create your account and browse the care your pet needs.', img: home10 },
  { num: '02', label: 'Book a service', title: 'Find and book', text: 'Browse providers, view profiles, message directly, and confirm your booking in a few taps.', img: home11 },
  { num: '03', label: 'Receive great care', title: 'Stay connected', text: "Track the service in real time. You'll know exactly when it starts and when it's done.", img: home12 },
];

function PhoneMockup({ img, alt, label, index, vis }) {
  return (
    <div
      className="relative flex flex-col items-center"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity .65s ease ${index * 0.18}s, transform .65s ease ${index * 0.18}s`,
      }}
    >
      {/* Phone frame */}
      <div
        className="relative overflow-hidden"
        style={{
          width: 175,
          borderRadius: 34,
          border: '6px solid #1a1a2e',
          background: '#1a1a2e',
          boxShadow: '0 16px 48px rgba(0,0,0,0.22)',
        }}
      >
        {/* Notch */}
        <div className="flex items-center justify-center py-2" style={{ background: '#1a1a2e' }}>
          <div style={{ width: 60, height: 14, background: '#0d0d1e', borderRadius: 10 }} />
        </div>
        {/* Screen */}
        <div className="overflow-hidden bg-white">
          <img loading="lazy" decoding="async" src={img} alt={alt || label}
            className="h-auto w-full object-contain"
          />
        </div>
        {/* Home indicator */}
        <div className="flex items-center justify-center py-2" style={{ background: '#1a1a2e' }}>
          <div style={{ width: 50, height: 4, background: '#3a3a5a', borderRadius: 4 }} />
        </div>
      </div>

      {/* CTA chip below phone */}
      <div
        className="mt-3 rounded-xl px-5 py-2.5 shadow-lg"
        style={{ background: '#1bb6ae' }}
      >
        <span className="text-[13px] font-extrabold text-white">{label}</span>
      </div>
    </div>
  );
}

function StepsSection() {
  const [ref, vis] = useReveal(0.08);
  return (
    <section className="w-full overflow-hidden py-20 lg:py-28" style={{ background: '#eaf4f8' }}>
      <div className="mx-auto max-w-[1380px] px-6 lg:px-16">
        {/* Header row */}
        <div
          ref={ref}
          className="mb-14 flex items-center justify-between"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(18px)', transition: 'opacity .5s,transform .5s' }}
        >
          <div>
            <p className="text-[13px] font-extrabold uppercase tracking-[4px] text-[#1bb6ae]">
              3 EASY STEPS TO GET STARTED
            </p>
            <h2 className="mt-1 text-[30px] font-extrabold text-[#17201E] md:text-[38px]">
              Book care in minutes.
            </h2>
          </div>
          {/* Dot decoration — top right */}
          <div className="hidden items-center gap-1.5 lg:flex">
            <div className="h-9 w-9 rounded-full border-2 border-[#1bb6ae]/30 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-0.5">
                {[...Array(4)].map((_,i) => <div key={i} className="h-1 w-1 rounded-full bg-[#1bb6ae]/50"/>)}
              </div>
            </div>
          </div>
        </div>

        {/* Steps row */}
        <div className="relative grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-0">
          {STEPS.map((step, i) => (
            <div key={step.num} className="relative flex flex-col items-center text-center">
              {/* Big background number */}
              <span
                aria-hidden
                className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none font-extrabold leading-none"
                style={{
                  fontSize: 150,
                  color: '#c5dce6',
                  opacity: vis ? 0.9 : 0,
                  transition: `opacity .7s ease ${i * 0.2}s`,
                  zIndex: 0,
                }}
              >
                {step.num}
              </span>

              {/* Phone */}
              <div className="relative z-10">
                <PhoneMockup img={step.img} alt={step.title} label={step.label} index={i} vis={vis} />
              </div>

              {/* Step text */}
              <div
                className="relative z-10 mt-5"
                style={{
                  opacity: vis ? 1 : 0,
                  transform: vis ? 'none' : 'translateY(16px)',
                  transition: `opacity .65s ease ${0.1 + i * 0.18}s, transform .65s ease ${0.1 + i * 0.18}s`,
                }}
              >
                <h4 className="text-[18px] font-extrabold text-[#17201E]">{step.title}</h4>
                <p className="mx-auto mt-2 max-w-[210px] text-[13px] leading-[1.65] text-[#66716D]">{step.text}</p>
              </div>

              {/* Dashed curved arrow to next step */}
              {i < STEPS.length - 1 && (
                <div aria-hidden className="absolute top-[28%] right-[-16%] z-20 hidden lg:block" style={{ width: '32%' }}>
                  <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path
                      d="M5 30 Q60 0 115 20"
                      stroke="#1bb6ae" strokeWidth="2" strokeDasharray="6 5"
                      fill="none" strokeLinecap="round"
                      style={{ animation: vis ? 'drawDash 1.2s ease forwards' : 'none', strokeDashoffset: vis ? 0 : 400 }}
                    />
                    <polygon points="112,14 118,22 106,23" fill="#1bb6ae" opacity="0.7"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Animals + speech bubble row */}
        <div
          className="mt-14 flex items-end justify-center gap-12"
          style={{
            opacity: vis ? 1 : 0,
            transition: 'opacity .7s ease .6s',
          }}
        >
          {/* Dog */}
          <img src={dog1} alt="" aria-hidden loading="lazy"
            className="h-[80px] w-auto object-contain"
            style={{ filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.15))', animation: 'float 5s ease-in-out infinite' }}
          />
          {/* Speech bubble */}
          <div className="relative max-w-[320px] rounded-2xl bg-white px-5 py-3.5 shadow-lg">
            <p className="text-[13px] leading-[1.6] text-[#17201E]">
              🐾 <strong>Woof!</strong> Booking my groomer was so much easier than convincing my owner to give me a bath!
            </p>
            {/* Tail */}
            <div className="absolute -left-3 top-5 h-0 w-0" style={{ borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderRight: '12px solid white' }} />
          </div>
          {/* Cat */}
          <img src={cat1} alt="" aria-hidden loading="lazy"
            className="h-[80px] w-auto object-contain"
            style={{ filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.15))', animation: 'float 5.5s ease-in-out 0.8s infinite' }}
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION 5 — WHY MUNGO / CHAT SECTION
   Tiled pet pattern bg | "WHY DID WE CREATE MUNGO?" | Phone with chat
════════════════════════════════════════════════════════════════ */
/* SVG tile pattern of pet silhouettes */
const PET_PATTERN_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
  <!-- Dog silhouette -->
  <g transform="translate(8,8) scale(0.55)" fill="#b8d9e8" opacity="0.7">
    <ellipse cx="30" cy="28" rx="18" ry="14"/>
    <ellipse cx="48" cy="22" rx="9" ry="12"/>
    <ellipse cx="14" cy="22" rx="9" ry="12"/>
    <ellipse cx="30" cy="48" rx="22" ry="16"/>
    <rect x="14" y="58" width="8" height="18" rx="4"/>
    <rect x="26" y="58" width="8" height="18" rx="4"/>
    <rect x="38" y="58" width="8" height="18" rx="4"/>
    <ellipse cx="50" cy="52" rx="8" ry="14"/>
  </g>
  <!-- Paw print -->
  <g transform="translate(75,10)" fill="#b8d9e8" opacity="0.7">
    <ellipse cx="10" cy="10" rx="4" ry="5"/>
    <ellipse cx="22" cy="10" rx="4" ry="5"/>
    <ellipse cx="5"  cy="22" rx="3.5" ry="4.5"/>
    <ellipse cx="27" cy="22" rx="3.5" ry="4.5"/>
    <ellipse cx="16" cy="28" rx="8" ry="9"/>
  </g>
  <!-- Heart -->
  <g transform="translate(78,70)" fill="#b8d9e8" opacity="0.7">
    <path d="M16,6 C14,2 8,2 8,8 C8,12 12,16 16,20 C20,16 24,12 24,8 C24,2 18,2 16,6Z"/>
  </g>
  <!-- Bone -->
  <g transform="translate(8,75)" fill="#b8d9e8" opacity="0.7">
    <rect x="14" y="10" width="30" height="8" rx="2"/>
    <circle cx="10" cy="8" r="7"/>
    <circle cx="10" cy="20" r="7"/>
    <circle cx="48" cy="8" r="7"/>
    <circle cx="48" cy="20" r="7"/>
  </g>
  <!-- Cat silhouette -->
  <g transform="translate(55,55) scale(0.45)" fill="#b8d9e8" opacity="0.7">
    <ellipse cx="30" cy="35" rx="20" ry="18"/>
    <ellipse cx="30" cy="15" rx="14" ry="14"/>
    <polygon points="18,6 12,0 22,10"/>
    <polygon points="42,6 48,0 38,10"/>
    <ellipse cx="50" cy="45" rx="6" ry="16"/>
  </g>
</svg>
`.trim();

const patternUrl = `url("data:image/svg+xml,${encodeURIComponent(PET_PATTERN_SVG)}")`;

function ChatSection() {
  const [ref, vis] = useReveal(0.1);
  return (
    <section
      className="relative w-full overflow-hidden py-20 lg:py-28"
      style={{ background: '#ffffff' }}
    >
      {/* Tiled pet icon pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: patternUrl, backgroundSize: '120px 120px', backgroundRepeat: 'repeat', opacity: 0.5 }}
      />

      <div
        ref={ref}
        className="relative mx-auto max-w-[1380px] px-6 lg:px-16"
      >
        {/* Header */}
        <p
          className="mb-12 text-[13px] font-extrabold uppercase tracking-[4px] text-[#1bb6ae]"
          style={{ opacity: vis ? 1 : 0, transition: 'opacity .5s' }}
        >
          WHY DID WE CREATE MUNGO?
        </p>

        {/* Phone mockup — centered */}
        <div className="flex justify-center">
          <div
            style={{
              width: 320,
              opacity: vis ? 1 : 0,
              transform: vis ? 'scale(1)' : 'scale(0.9)',
              transition: 'opacity .7s .15s, transform .7s .15s',
            }}
          >
            {/* Phone frame */}
            <div
              style={{
                borderRadius: 44,
                border: '7px solid #1a1a2e',
                background: '#1a1a2e',
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0,0,0,0.28)',
              }}
            >
              {/* Notch */}
              <div className="flex items-center justify-between px-5 py-3" style={{ background: '#1a1a2e' }}>
                <span className="text-[11px] text-white/70">9:41</span>
                <div style={{ width: 80, height: 18, background: '#0d0d1e', borderRadius: 12 }} />
                <span className="text-[11px] text-white/70">📶 🔋</span>
              </div>

              {/* Chat screen */}
              <div style={{ background: '#e8f4ff' }}>
                {/* Chat header */}
                <div className="flex items-center gap-3 px-4 py-3" style={{ background: '#1bb6ae' }}>
                  <span className="text-lg text-white">←</span>
                  <div>
                    <p className="text-[14px] font-bold text-white">Pet Chat</p>
                    <p className="text-[10px] text-white/70">with your provider</p>
                  </div>
                  <div className="ml-auto text-white">⋮</div>
                </div>

                {/* Chat bg with pet silhouettes */}
                <div
                  className="relative px-4 py-4"
                  style={{
                    minHeight: 360,
                    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(PET_PATTERN_SVG)}")`,
                    backgroundSize: '80px 80px',
                    backgroundRepeat: 'repeat',
                  }}
                >
                  {/* Message 1 (provider — right, teal) */}
                  <div className="mb-5 flex justify-end gap-2">
                    <div
                      className="max-w-[230px] rounded-2xl rounded-tr-sm px-4 py-3 shadow-md"
                      style={{ background: '#1bb6ae' }}
                    >
                      <p className="text-[13px] leading-[1.6] text-white">
                        Hi! Have you ever had any problems finding or booking pet grooming appointments?
                      </p>
                    </div>
                    <img src={home15} alt="" aria-hidden className="h-8 w-8 shrink-0 self-end rounded-full border-2 border-white object-cover shadow-sm"/>
                  </div>

                  {/* Message 2 (pet parent — left, blue) */}
                  <div className="flex gap-2">
                    <img src={home16} alt="" aria-hidden className="h-8 w-8 shrink-0 self-end rounded-full border-2 border-white object-cover shadow-sm"/>
                    <div
                      className="max-w-[230px] rounded-2xl rounded-tl-sm px-4 py-3 shadow-md"
                      style={{ background: '#1e3a8a' }}
                    >
                      <p className="text-[13px] leading-[1.6] text-white">
                        Meow! Yes, I always forget to call ahead and then my groomer is fully booked. A reminder would be so helpful! 🐱
                      </p>
                    </div>
                  </div>

                  {/* Input bar */}
                  <div className="mt-6 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-sm">
                    <p className="flex-1 text-[12px] text-gray-400">Write a message...</p>
                    <button className="flex h-7 w-7 items-center justify-center rounded-full text-white" style={{ background: '#1bb6ae' }} aria-label="Send">
                      ➤
                    </button>
                  </div>
                </div>
              </div>

              {/* Home indicator */}
              <div className="flex items-center justify-center py-2" style={{ background: '#1a1a2e' }}>
                <div style={{ width: 70, height: 4, background: '#3a3a5a', borderRadius: 4 }} />
              </div>
            </div>
          </div>
        </div>

        {/* Caption below */}
        <p
          className="mt-10 text-center text-[15px] leading-[1.7] text-[#66716D] mx-auto max-w-[480px]"
          style={{ opacity: vis ? 1 : 0, transition: 'opacity .7s .3s' }}
        >
          Mungo was built because pet parents deserve a simpler, more reliable way to find and book quality pet care — and great providers deserve to be discovered.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SUPPORTING SECTIONS — FAQ + Blog + Download CTA
════════════════════════════════════════════════════════════════ */
const FAQS = [
  { q: 'What services can I find on Mungo?', a: 'Grooming, veterinary care, boarding, pet sitting, and dog walking — all in one place.' },
  { q: 'How do I book a service?', a: 'Browse providers in the app, pick a service and time, and confirm in a few taps.' },
  { q: 'Can I chat with my provider?', a: "Yes — message your provider directly in the app before and during the service." },
  { q: 'Can I see when a service starts and finishes?', a: "Yes — follow each service in real time and get notified when it's complete." },
  { q: "How does Mungo keep my pet's care organised?", a: "All your bookings, messages, and updates live together in one place." },
  { q: 'Is Mungo on iOS and Android?', a: 'Yes — visit the Download page for the official store links.' },
];

function FaqItem({ item, i, open, setOpen }) {
  const isOpen = open === i;
  const bodyRef = useRef(null);
  const [h, setH] = useState(0);
  useEffect(() => { if (bodyRef.current) setH(bodyRef.current.scrollHeight); }, []);
  return (
    <div className={`border-t border-[#17201E]/8 ${i === FAQS.length - 1 ? 'border-b' : ''}`}>
      <button type="button" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-5 text-left">
        <span className="text-[15px] font-semibold text-[#17201E]">{item.q}</span>
        <span aria-hidden className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1bb6ae]/12 text-[18px] font-bold text-[#1bb6ae] transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
      </button>
      <div style={{ maxHeight: isOpen ? h : 0, overflow: 'hidden', transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)' }}>
        <div ref={bodyRef}><p className="pb-5 pr-8 text-[14px] leading-7 text-[#66716D]">{item.a}</p></div>
      </div>
    </div>
  );
}

function FaqSection() {
  const [open, setOpen] = useState(-1);
  const [ref, vis] = useReveal(0.1);
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[860px] px-6">
        <div ref={ref} className="mb-10 text-center"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(18px)', transition: 'opacity .6s,transform .6s' }}>
          <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[4px] text-[#1bb6ae]">FAQ</p>
          <div className="relative inline-block">
            <h2 className="text-[32px] font-extrabold text-[#17201E] md:text-[40px]">Questions? We've got you.</h2>
            <img loading="lazy" src={home19} alt="" aria-hidden className="absolute -right-14 -top-10 hidden h-24 w-24 object-contain md:block"/>
          </div>
        </div>
        <div style={{ opacity: vis ? 1 : 0, transition: 'opacity .6s .1s' }}>
          {FAQS.map((item, i) => <FaqItem key={item.q} item={item} i={i} open={open} setOpen={setOpen} />)}
        </div>
      </div>
    </section>
  );
}

const BLOG = [
  { cat: 'Pet care', title: 'How to prepare your dog for their first grooming session', meta: '5 min read', bg: 'rgba(172,197,240,0.2)', img: blog6 },
  { cat: 'Health', title: 'What every pet parent should know about routine vet care', meta: '6 min read', bg: 'rgba(241,217,155,0.2)', img: blog8 },
  { cat: 'Mungo', title: "What's new at Mungo", meta: '3 min read', bg: 'linear-gradient(148deg,#FFF0ED,#FFF8F6)', img: blog5 },
];

function BlogSection() {
  const [ref, vis] = useReveal(0.1);
  return (
    <section className="w-full bg-[#f5fbf9] py-20">
      <div className="mx-auto max-w-[1380px] px-6 lg:px-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-1 text-[11px] font-extrabold uppercase tracking-[4px] text-[#1bb6ae]">MUNGO JOURNAL</p>
            <h2 ref={ref} className="text-[28px] font-extrabold text-[#17201E] md:text-[34px]"
              style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(18px)', transition: 'opacity .6s,transform .6s' }}>
              From the Mungo journal.
            </h2>
          </div>
          <a href="/blog" className="hidden text-sm font-bold text-[#1bb6ae] hover:underline md:block">Read all →</a>
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {BLOG.map((post, i) => (
            <a key={post.title} href="/blog"
              className="group flex flex-col gap-3"
              style={{ opacity: vis ? 1 : 0, transition: `opacity .6s ease ${i * 0.12}s` }}>
              <div className="h-[200px] overflow-hidden rounded-2xl" style={{ background: post.bg }}>
                <img loading="lazy" decoding="async" src={post.img} alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
              </div>
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#1bb6ae]">{post.cat}</p>
              <h3 className="text-[16px] font-semibold leading-[1.35] text-[#17201E] group-hover:underline">{post.title}</h3>
              <p className="text-[12px] text-[#66716D]">{post.meta}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadSection() {
  const [ref, vis] = useReveal(0.2);
  return (
    <section id="download" ref={ref} className="relative w-full overflow-hidden py-20 lg:py-28"
      style={{ background: 'linear-gradient(150deg,#0c7a75,#1bb6ae 55%,#13d4cb 100%)' }}>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/6"/>
        <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/6"/>
      </div>
      <div className="relative mx-auto flex max-w-[680px] flex-col items-center gap-7 px-6 text-center"
        style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(28px)', transition: 'opacity .7s,transform .7s' }}>
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
          <img src={logo} alt="Mungo" className="h-10 w-10"/>
        </div>
        <h2 className="text-[40px] font-extrabold leading-[1.15] text-white md:text-[54px]">
          Better care<br/>starts here.
        </h2>
        <p className="max-w-[420px] text-[16px] leading-[1.65] text-white/80">
          Whatever your pet needs next, Mungo makes it easier to find the right care.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/download"
            className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-[15px] font-extrabold text-[#1bb6ae] shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl">
            <Paw size={16} color="#1bb6ae"/> Download Mungo
          </a>
          <a href="/partners"
            className="rounded-full border-2 border-white/45 px-8 py-4 text-[15px] font-extrabold text-white transition-all hover:border-white hover:bg-white/10">
            Join as a provider
          </a>
        </div>
        <p className="text-[13px] text-white/55">
          Available on iOS & Android —{' '}
          <a href="/download" className="underline hover:text-white">see store links</a>
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ROOT — Home
════════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <style>{CSS}</style>
      <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#17201E]">
        <Navbar currentPage="home" />
        <HeroSection />
        <FeaturesSection />
        <CompanySection />
        <StepsSection />
        <ChatSection />
        <FaqSection />
        <BlogSection />
        <DownloadSection />
        <CookieConsent />
        <Footer />
      </div>
    </>
  );
}
