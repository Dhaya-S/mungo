import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import begroomer1 from './assets/begroomer-1.png';
import begroomer2 from './assets/begroomer-2.png';
import begroomer3 from './assets/begroomer-3.png';
import begroomer4 from './assets/begroomer-4.png';
import begroomer5 from './assets/begroomer-5.png';
import begroomer6 from './assets/begroomer-6.png';
import begroomer7 from './assets/begroomer-7.png';
import begroomer8 from './assets/begroomer-8.png';
import begroomer9 from './assets/find-1.png';
import begroomer10 from './assets/find-2.png';
import begroomer11 from './assets/find-3.png';
import begroomer12 from './assets/begroomer-12.png';
import begroomer13 from './assets/begroomer-13.png';

import blob1 from './assets/icon-1.png'; 
import blob2 from './assets/icon-2.png';
import blob3 from './assets/icon-3.png';
import blob4 from './assets/icon-4.png';
import blob5 from './assets/icon-5.png';
import blob6 from './assets/icon-6.png';
import blob7 from './assets/icon-7.png';

const Blob = ({ src, className = "" }) => (
  <img loading="lazy" decoding="async"
    src={src}
    alt=""
    aria-hidden="true"
    className={`pointer-events-none absolute hidden select-none object-contain lg:block ${className}`}
  />
);

const SearchIcon = () => (
  <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" stroke="#2DBB9F" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="17" cy="17" r="12" />
    <path d="M26 26l10 10" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" stroke="#2DBB9F" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M24 5l15 5v12c0 10-6.5 17-15 21C15.500 39 9 32 9 22V10l15-5z" />
    <path d="M17 24l5 5 9-10" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" stroke="#2DBB9F" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="8" width="32" height="28" rx="4" />
    <path d="M12 4v6M28 4v6M4 16h32" />
    <path d="M12 23h.01M20 23h.01M28 23h.01M12 30h.01M20 30h.01M28 30h.01" strokeWidth="4" />
  </svg>
);

const GrowthIcon = () => (
  <svg viewBox="0 0 40 48" className="h-12 w-10" fill="none" stroke="#2DBB9F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="32" width="8" height="12" rx="1.500" />
    <rect x="16" y="24" width="8" height="20" rx="1.500" />
    <rect x="28" y="18" width="8" height="26" rx="1.500" />
    <path d="M4 22l9-9 6 5 14-12M25 6h8v8" />
  </svg>
);

const benefits = [
  { title: "Get discovered", text: "Get discovered by nearby pet parents.", bg: "bg-[#E8FFEC]", Icon: SearchIcon },
  { title: "Build trust", text: "Showcase your expertise and past work.", bg: "bg-[#FFF7E9]", Icon: ShieldIcon },
  { title: "Get bookings", text: "Manage your appointments with ease", bg: "bg-[#E9E4F4]", Icon: CalendarIcon },
  { title: "Grow your business", text: "Turn your passion into a steady income", bg: "bg-[#FEFFE8]", Icon: GrowthIcon },
];

const UserIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#2DBB9F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 19c1.2-3.2 3.8-4.8 7-4.8s5.800 1.600 7 4.800" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#2DBB9F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l2 2" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#2DBB9F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 20s-7.500-4.600-7.500-10A4.300 4.300 0 0 1 12 7.500 4.300 4.300 0 0 1 19.500 10c0 5.400-7.500 10-7.500 10z" />
  </svg>
);

const PawIcon = ({ className = "" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="#CDF2E7" aria-hidden="true">
    <ellipse cx="7" cy="14" rx="3" ry="4" />
    <ellipse cx="13" cy="8" rx="3" ry="4" />
    <ellipse cx="21" cy="8" rx="3" ry="4" />
    <ellipse cx="26" cy="15" rx="2.5" ry="3.5" />
    <path d="M16 15c-4 0-8 4-8 8 0 3 2.5 4 5 3.5 1.2-.3 2-.5 3-.5s1.8.2 3 .5c2.5.5 5-.5 5-3.5 0-4-4-8-8-8z" />
  </svg>
);

const cards = [
  {
    title: "Your expertise",
    text: "Get more visibility and reach local pet parents looking for reliable care.",
    Icon: UserIcon,
  },
  {
    title: "Your availability",
    text: "Choose when you're available to provide care.",
    Icon: ClockIcon,
  },
  {
    title: "Your connections",
    text: "Communicate directly with pet parents throughout the service journey.",
    Icon: HeartIcon,
  },
];

const steps = [
  {
    label: "01 — Create your profile",
    text: "Show pet parents who you are, what you offer, and why they can trust your care.",
    img: begroomer3,
  },
  {
    label: "02 — Connect with pet parents",
    text: "Connect through Mungo when someone is looking for the service you provide.",
    img: begroomer4,
  },
  {
    label: "03 — Provide care",
    text: "Start the service and stay connected throughout the experience.",
    img: begroomer5,
  },
  {
    label: "04 — Complete the service",
    text: "Complete the service and keep the relationship moving forward.",
    img: begroomer6,
  },
];

const points = [
  "Manage your profile",
  "Track your bookings",
  "Connect with pet parents",
  "Manage your services",
  "Grow your business",
];

const card = [
  {
    title: "Grooming",
    text: "For happy, healthy pets.",
    bg: "bg-[#FEF1C8]",
    img: begroomer9,
  },
  {
    title: "Grooming",
    text: "For happy, healthy pets.",
    bg: "bg-[#FEEAEA]",
    img: begroomer10,
  },
  {
    title: "Grooming",
    text: "For happy, healthy pets.",
    bg: "bg-[#E7DDFC]",
    img: begroomer11,
  },
];

const point = [
  "Clear provider profiles",
  "Direct communication",
  "Visible service details",
  "A connected service journey",
  "Better visibility for both sides",
];

export default function BecomeGroomer() {
  return (
    <div className="font-sans min-h-screen bg-white text-gray-900 flex flex-col relative overflow-hidden">
      <Navbar currentPage="partners" />

      {/* 1. HERO */}
      <section className="relative isolate w-full overflow-hidden bg-white px-5 py-16 font-['Plus_Jakarta_Sans'] md:px-10 lg:px-20 lg:py-[120px]">
        {/* Decorative blobs (custom PNGs) */}
        <Blob src={blob2} className="-left-[120px] -top-[20px] -z-10 h-[306px] w-[324px]" />
        <Blob src={blob1} className="left-[544px] -top-[100px] -z-10 h-[306px] w-[324px]" />
        <Blob src={blob3} className="-right-[110px] top-[37px] -z-10 h-[306px] w-[324px]" />
        <PawIcon className="pointer-events-none absolute bottom-[110px] right-[140px] hidden h-12 w-12 rotate-12 lg:block" />

        <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-12 lg:flex-row lg:items-start lg:justify-center lg:gap-0">
          {/* Copy */}
          <div className="flex w-full max-w-[696px] flex-col items-start justify-between gap-12 lg:min-h-[485px] lg:gap-[193px]">
            <div className="flex flex-col gap-[18px]">
              <h1 className="text-[40px] font-semibold leading-[1.2] text-[#17201E] md:text-[64px]">
                Your craft deserves to be discovered.
              </h1>
              <p className="max-w-[434px] pt-[2.5px] text-base font-medium leading-[26px] text-[#66716D]">
                Showcase your grooming expertise and connect with pet parents looking for great care.
              </p>
            </div>

            <a
              href="/become-a-partner"
              className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#2DBB9F] px-[26px] text-sm font-semibold leading-[22px] text-white transition hover:bg-[#25a78d]"
            >
              Become a Groomer
            </a>
          </div>

          {/* Image */}
          <div className="w-full max-w-[520px] shrink-0 lg:ml-[140px]">
            <img loading="lazy" decoding="async"
              src={begroomer1}
              alt="A border collie being brushed with a mint grooming brush"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* 2. WHY JOIN — BENEFIT LIST */}
      <section className="w-full bg-white px-5 py-10 font-['Plus_Jakarta_Sans'] md:px-8 lg:py-[52px]">
        <div className="mx-auto grid max-w-[1313px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {benefits.map(({ title, text, bg, Icon }) => (
            <div
              key={title}
              className={`flex min-h-[134px] items-center gap-[13px] rounded-[24px] px-4 py-7 ${bg}`}
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center">
                <Icon />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[18px] font-semibold leading-7 tracking-[-0.38px] text-[#17201E]">
                  {title}
                </h3>
                <p className="text-base font-medium leading-[22px] text-[#66716D]">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FLEXIBILITY */}
      <section className="relative w-full overflow-hidden bg-white px-5 py-16 font-['Plus_Jakarta_Sans'] md:px-10 lg:px-20 lg:py-[120px]">
        {/* Decorative blobs (custom PNGs) */}
        <Blob src={blob4} className="-left-[130px] top-[10%] h-[306px] w-[324px]" />
        <Blob src={blob5} className="-right-[50px] top-[10%] h-[315px] w-[305px] " />

        <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-[22px]">
          <div className="relative">
            <h2 className="max-w-[479px] text-center text-[30px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#17201E] md:text-[42px]">
              You&apos;re the expert.
              <br />
              Stay in control.
            </h2>
            <PawIcon className="absolute -right-[110px] top-[55%] hidden h-9 w-9 rotate-[15deg] lg:block" />
          </div>

          <p className="max-w-[342px] pt-0.5 text-center text-base font-medium leading-6 text-[#66716D]">
            Mungo helps connect you with pet parents. You bring the expertise and
            care.
          </p>

          <div className="mt-6 grid w-full max-w-[856px] grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-20">
            {cards.map(({ title, text, Icon }) => (
              <div
                key={title}
                className="flex flex-col items-start gap-[15px] rounded-2xl bg-[#E7F8F3] p-4 shadow-[0_23px_9px_rgba(79,79,79,0.01),0_13px_8px_rgba(79,79,79,0.04),0_6px_6px_rgba(79,79,79,0.07),0_1px_3px_rgba(79,79,79,0.08)] sm:min-h-[222px]"
              >
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white">
                  <Icon />
                </div>
                <h3 className="text-base font-bold leading-[18px] tracking-[0.6px] text-[#22947E]">
                  {title}
                </h3>
                <p className="text-sm font-medium leading-[22px] text-[#17201E]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT YOU CAN OFFER */}
      <section className="w-full bg-[#F2FFFB] px-5 py-16 font-['Plus_Jakarta_Sans'] md:px-10 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:flex-row lg:justify-center lg:gap-[154px]">
          {/* Image */}
          <div className="w-full max-w-[608px] shrink-0">
            <img loading="lazy" decoding="async"
              src={begroomer2}
              alt="A groomer trimming a shih tzu's fur with scissors"
              className="h-auto w-full object-contain"
            />
          </div>

          {/* Copy */}
          <div className="flex w-full max-w-[592px] flex-col items-start gap-8">
            <h2 className="text-[30px] font-semibold leading-[1.3] tracking-[-0.8px] text-[#17201E] md:text-[42px]">
              Your grooming expertise, your way.
            </h2>
            <p className="max-w-[470px] text-base font-medium leading-[26px] text-[#66716D]">
              Set your service, showcase what you do best and reach more pet
              parents who need your care
            </p>
            <a
              href="/become-a-partner"
              className="mt-2 inline-flex h-[52px] items-center justify-center rounded-full bg-[#2DBB9F] px-[26px] text-sm font-semibold leading-[22px] text-white transition hover:bg-[#25a78d] lg:mt-12"
            >
              Become a Vet Partner
            </a>
          </div>
        </div>
      </section>

      {/* 5. HOW MUNGO WORKS */}
      <section className="relative w-full overflow-hidden bg-[#FEFEFE] px-5 py-16 font-['Plus_Jakarta_Sans'] lg:px-20 lg:py-[120px]">
        {/* Decorative blobs (custom PNGs) */}
        <Blob src={blob6} className="-right-[98px] top-[80px] h-[306px] w-[324px]" />
        <Blob src={blob7} className="-left-[88px] top-[180px] h-[306px] w-[324px]" />

        <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-[22px]">
          <h2 className="text-center text-[30px] font-semibold leading-[1.4] tracking-[-0.8px] text-[#17201E] md:text-[42px] md:leading-[60px]">
            From profile to complete.
          </h2>

          <div className="mt-6 grid w-full grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.label} className="flex flex-col items-center gap-4">
                <img loading="lazy" decoding="async"
                  src={step.img}
                  alt=""
                  className="h-[182px] w-[200px] object-contain"
                />
                <div className="flex flex-col items-center gap-4 text-center">
                  <h4 className="pt-[14px] text-lg font-bold leading-[18px] tracking-[0.6px] text-[#22947E]">
                    {step.label}
                  </h4>
                  <p className="max-w-[305px] text-base font-medium leading-[22px] text-[#17201E]">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRODUCT SHOWCASE */}
      <section className="w-full bg-[#FDF6F6] px-5 py-16 font-['Plus_Jakarta_Sans'] md:px-10 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:flex-row lg:justify-center lg:gap-[154px]">
          {/* Copy */}
          <div className="flex w-full max-w-[460px] flex-col items-start gap-[33px]">
            <div className="flex flex-col gap-5">
              <h2 className="text-[30px] font-semibold leading-[1.3] tracking-[-0.8px] text-[#17201E] md:text-[42px]">
                Everything you need to stay connected.
              </h2>
              <p className="text-base font-medium leading-[26px] text-[#66716D]">
                Manage your business, communicate with pet parents and keep everything in one place.e what you do best and reach more pet parents who need your care
              </p>
            </div>

            <ul className="flex flex-col gap-5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-[14px]">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#22947E] text-xs font-semibold text-white"
                  >
                    ✓
                  </span>
                  <span className="text-base font-semibold leading-[23px] text-[#17201E]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="w-full max-w-[614px] shrink-0">
            <img loading="lazy" decoding="async"
              src={begroomer7}
              alt="A cat being gently brushed on a couch"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* 7. STORY */}
      <section className="w-full bg-[#F2FFFB] px-5 py-16 font-['Plus_Jakarta_Sans'] md:px-10 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex max-w-[1232px] flex-col items-center gap-12 lg:flex-row lg:gap-[93px]">
          {/* Image */}
          <div className="w-full max-w-[659px] shrink-0">
            <img loading="lazy" decoding="async"
              src={begroomer8}
              alt="A groomer washing a smiling corgi in a purple tub"
              className="h-auto w-full object-contain"
            />
          </div>

          {/* Copy */}
          <div className="flex w-full max-w-[480px] flex-col items-start gap-8">
            <h2 className="text-[30px] font-semibold leading-[1.3] tracking-[-0.8px] text-[#17201E] md:text-[42px]">
              Great care is personal.
              <br />
              It begins here.
            </h2>
            <p className="max-w-[460px] text-base font-medium leading-[26px] text-[#66716D]">
              Set your service, showcase what you do best and reach more pet
              parents who need your care.
            </p>
            <a
              href="/become-a-partner"
              className="mt-2 inline-flex h-[52px] items-center justify-center rounded-full bg-[#2DBB9F] px-[26px] text-sm font-semibold leading-[22px] text-white transition hover:bg-[#25a78d] lg:mt-12"
            >
              Meet your next client
            </a>
          </div>
        </div>
      </section>

      {/* 8. TRUST */}
      <section className="w-full bg-white px-5 py-16 font-['Plus_Jakarta_Sans'] md:px-10 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex max-w-[1302px] flex-col items-center gap-12">
          <h2 className="text-center text-[28px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#17201E] md:text-[42px] md:leading-[66px]">
            Find grooming that fits.
          </h2>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:gap-9">
            {card.map((card, i) => (
              <article
                key={i}
                className={`flex min-h-[484px] flex-col gap-5 overflow-hidden rounded-[24px] pb-6 ${card.bg}`}
              >
                <img loading="lazy" decoding="async"
                  src={card.img}
                  alt=""
                  className="h-[380px] w-full object-cover object-bottom"
                />
                <div className="flex flex-col gap-3 px-6">
                  <h3 className="text-2xl font-semibold leading-[1.1] text-black">
                    {card.title}
                  </h3>
                  <p className="text-base font-medium leading-[23px] text-[#66716D]">
                    {card.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F2FFFB] px-5 py-16 font-['Plus_Jakarta_Sans'] md:px-10 lg:px-[170px] lg:py-[135px]">
        <div className="mx-auto flex max-w-[1097px] flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-8">
          {/* Copy */}
          <div className="flex w-full max-w-[439px] flex-col gap-5">
            <h2 className="max-w-[410px] text-[30px] font-semibold leading-[1.3] tracking-[-0.8px] text-[#17201E] md:text-[42px]">
              Because trust goes both ways
            </h2>
            <p className="text-base font-medium leading-[26px] text-[#66716D]">
              Mungo is designed for better communication and clearer service
              experiences &ndash; for pet parents and providers alike.
            </p>
          </div>

          {/* Checklist */}
          <ul className="flex flex-col gap-5">
            {point.map((point) => (
              <li key={point} className="flex items-start gap-[14px]">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#22947E] text-xs font-semibold text-white"
                >
                  ✓
                </span>
                <span className="text-base font-semibold leading-[23px] text-[#17201E]">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          {/* Illustration */}
          <img loading="lazy" decoding="async"
            src={begroomer12}
            alt="A happy dog and cat with chat bubbles"
            className="h-[202px] w-[312px] max-w-full shrink-0 object-contain"
          />
        </div>
      </section>

      {/* 9. FAQ */}
      <section
        className="w-full px-6 pb-16 pt-6 lg:px-20 lg:pb-[120px] lg:pt-20"
        style={{ fontFamily: '"Segoe UI", system-ui, -apple-system, Roboto, sans-serif' }}
      >
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-9">
          <div className="relative w-full max-w-[720px]">
            <h2 className="mx-auto max-w-[520px] text-center text-[32px] font-semibold leading-[1.5] tracking-[-0.76px] text-[#17201E] sm:text-[36px] lg:text-[37.4px]">
              Groomer questions, answered.
            </h2>
            <img loading="lazy" decoding="async"
              src={begroomer13}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-[80px] top-0 hidden h-[120px] w-[246px] object-contain lg:block"
            />
          </div>

          <div className="w-full max-w-[720px]">
            {[
              {
                q: "How do I become a Mungo Groomer?",
                a: "Create your provider profile through Mungo, adding the details of your grooming service.",
              },
              {
                q: "What information do I need to create my profile?",
                a: "Your services, experience, availability and any photos that showcase your grooming work.",
              },
              {
                q: "Can I choose which grooming services I offer?",
                a: "Yes. You can list exactly the services you provide, from nail care to breed-specific grooming.",
              },
              {
                q: "How do pet parents find me?",
                a: "Pet parents browsing grooming providers near them will see your profile in their search.",
              },
              {
                q: "How does communication work?",
                a: "Once connected, you and the pet parent can message each other directly within Mungo.",
              },
            ].map((item, i, arr) => (
              <details
                key={item.q}
                open={i === 0}
                className={`group border-t border-[rgba(23,32,30,0.1)] ${
                  i === arr.length - 1 ? "border-b" : ""
                }`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-1 py-[24px] [&::-webkit-details-marker]:hidden">
                  <span className="text-[17px] font-semibold leading-[26px] text-[#17201E]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex-none text-[22px] font-normal leading-[33px] text-[#22947E] transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-[580px] px-1 pb-[24px] text-[14.6px] leading-[22px] text-[#66716D]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section
        className="w-full bg-[#2DBB9F] px-6 py-16 lg:px-20 lg:py-[104px]"
        style={{ fontFamily: '"Segoe UI", system-ui, -apple-system, Roboto, sans-serif' }}
      >
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-6 lg:px-16">
          <div className="flex w-full max-w-[594px] flex-col items-center gap-[18px]">
            <h2 className="text-center text-[38px] font-bold leading-[1.3] tracking-[-0.5px] text-white sm:text-[50px] lg:text-[63px]">
              Ready to let your<br />work be discovered?
            </h2>
            <p className="max-w-[420px] pb-[14px] text-center text-[18px] leading-[1.5] text-white">
              Join Mungo and connect with pet parents looking for grooming
              care.
            </p>
          </div>

          <a
            href="/partners/apply?service=grooming"
            className="inline-flex items-center justify-center rounded-full bg-white px-[26px] py-[14px] text-[14.9px] font-semibold leading-[22px] text-[#22947E] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Become a Groomer
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}