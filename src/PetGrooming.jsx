import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import groomer1 from './assets/groomer-1.webp';
import groomer2 from './assets/groomer-2.webp';
import groomer3 from './assets/groomer-3.webp';
import groomer4 from './assets/groomer-4.webp';
import groomer5 from './assets/groomer-5.webp';
import groomer6 from './assets/groomer-6.webp';
import groomer7 from './assets/groomer-7.webp';
import groomer8 from './assets/groomer-8.webp';
import groomer9 from './assets/groomer-9.webp';
import groomer10 from './assets/groomer-10.webp';
import groomer11 from './assets/groomer-11.webp';
import groomer12 from './assets/groomer-12.webp';
import groomer13 from './assets/groomer-13.webp';
import groomer14 from './assets/groomer-14.webp';

const blob = "58% 42% 50% 50% / 62% 52% 48% 38%";
const BLOB_RADIUS = '58% 42% 50% 50% / 45% 55% 45% 55%';
const BLOB_PATH1 ="M0.58,0 C0.68,0 0.78,0.1 0.9,0.28 C1.02,0.46 1,0.75 0.85,0.9 C0.7,1.02 0.4,1 0.2,0.85 C0,0.7 -0.02,0.5 0.12,0.35 C0.3,0.15 0.45,0 0.58,0 Z";
const BLOB_PATH2 ="M0.44,0 C0.5,0 0.56,0.03 0.63,0.1 C0.68,0.15 0.72,0.14 0.8,0.15 C0.9,0.17 0.96,0.24 1,0.45 C1.01,0.58 0.98,0.65 0.91,0.69 C0.84,0.73 0.78,0.76 0.72,0.84 C0.67,0.92 0.65,1 0.57,1 C0.5,1 0.44,0.94 0.36,0.9 C0.28,0.86 0.18,0.9 0.15,0.8 C0.12,0.68 0.12,0.58 0.08,0.48 C0.04,0.4 0,0.37 0,0.29 C0,0.18 0.1,0.12 0.2,0.07 C0.3,0.02 0.38,0 0.44,0 Z";
const cards = [
  {
    title: "Everyday grooming",
    text: "For their regular grooming routine.",
    bg: "bg-[#FDF4D7]",
    img: groomer3,
  },
  {
    title: "Bath & care",
    text: "For those days when they need a little extra attention.",
    bg: "bg-[#FEEAEA]",
    img: groomer4,
  },
  {
    title: "Coat care",
    text: "Care suited to different coat types.",
    bg: "bg-[#E7DDFC]",
    img: groomer5,
  },
];

const steps = [
  {
    label: "PROVIDER",
    text: "Browse groomers near you.",
    img: groomer6,
    weight: "font-medium",
  },
  {
    label: "PROFILE",
    text: "Learn about their experience.",
    img: groomer7,
    weight: "font-normal",
  },
  {
    label: "CHAT",
    text: "Message them directly.",
    img: groomer8,
    weight: "font-normal",
  },
];

const step = [
  {
    label: "Find",
    text: "Choose the grooming care your pet needs.",
    img: groomer9,
    weight: "font-medium",
  },
  {
    label: "Connect",
    text: "Find your groomer and chat directly.",
    img: groomer10,
    weight: "font-medium",
  },
  {
    label: "Care",
    text: "Stay connected while grooming happens.",
    img: groomer11,
    weight: "font-medium",
  },
  {
    label: "Complete",
    text: "Know when the service is finished.",
    img: groomer12,
    weight: "font-normal",
  },
];

const faqs = [
  {
    q: "How do I find a groomer on Mungo?",
    a: "Open the Grooming service in Mungo and browse groomers available near you.",
  },
  {
    q: "How do I choose the right grooming provider?",
    a: "Add your answer here.",
  },
  {
    q: "Can I chat with a groomer?",
    a: "Add your answer here.",
  },
  {
    q: "How does a grooming service start?",
    a: "Add your answer here.",
  },
  {
    q: "How do I know when the service is complete?",
    a: "Add your answer here.",
  },
];

export default function Grooming() {
  return (
    <div className="font-sans min-h-screen bg-white text-gray-900 flex flex-col relative overflow-hidden">
      <Navbar currentPage="features" />

    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-6 pb-16 pt-6 font-['Plus_Jakarta_Sans'] md:px-12 lg:flex-row lg:px-20 lg:pb-[120px] lg:pt-[40px]">
      <div className="flex w-full flex-col items-start gap-9 lg:w-[576px] lg:flex-1">
        <div className="flex flex-col gap-[18px]">
          <h1 className="text-[42px] font-semibold leading-[1.2] text-[#17201E]">
            Fresh coat.
            <br />
            Happy pup.
          </h1>
          <p className="max-w-[480px] pt-0.5 text-base font-medium leading-[1.3] text-[#66716D]">
            Find grooming care that fits your pet's needs, routine, and personality.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-2">
          <a
            href="/become-groomer"
            className="inline-flex items-center rounded-full bg-[#2DBB9F] px-[26px] py-3 text-sm font-semibold leading-[22px] text-white transition hover:brightness-95"
          >
            Find a groomer
          </a>
        </div>
      </div>

      <div className="relative w-[704px] h-[568px] flex-none">
        <img loading="lazy" decoding="async"
          src={groomer14}
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-0 w-[667.04px] h-[568px] object-contain"
        />
        <img loading="lazy" decoding="async"
          src={groomer1}
          alt="Two dogs playing with a tennis ball and a rope toy"
          className="absolute left-[36.96px] top-0 w-[667.04px] h-[568px] object-contain"
        />
      </div>
    </section>

    <section className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-center gap-10 px-6 py-16 font-['Plus_Jakarta_Sans',sans-serif] md:py-20 lg:flex-row lg:gap-14 lg:px-0 lg:py-[120px]">
      {/* Visual */}
      <div className="relative aspect-[630/583] w-full max-w-[630px] flex-none">
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <defs>
            <clipPath id="grooming-blob" clipPathUnits="objectBoundingBox">
              <path d={BLOB_PATH2} />
            </clipPath>
          </defs>
        </svg>

        {/* Back blob */}
        <div
          className="absolute left-0 top-0 h-[94.85%] w-full bg-[#C3E4DD]"
          style={{ clipPath: "url(#grooming-blob)" }}
        />

        {/* Photo blob */}
        <div
          className="absolute bottom-0 left-0 h-[97%] w-full"
          style={{ clipPath: "url(#grooming-blob)" }}
        >
          <img loading="lazy" decoding="async"
            src={groomer2}
            alt="An apricot poodle in a grey hoodie looking up at the camera"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex w-full max-w-[594px] flex-col gap-6">
        <h2 className="text-[28px] font-semibold leading-[1.4] tracking-[-0.92px] text-[#17201E] md:text-[36px] md:leading-[50px]">
          More than looking good.
        </h2>
        <p className="max-w-[420px] pt-0.5 text-base font-medium leading-[150%] text-[#66716D]">
          Good grooming is part of keeping up with their everyday care. Find a
          grooming experience that works for them and fits your routine.
        </p>
      </div>
    </section>

      {/* 3. FIND GROOMING THAT FITS */}
    <section className="w-full bg-white px-5 py-16 md:px-10 lg:py-[120px] font-['Plus_Jakarta_Sans']">
      <div className="mx-auto flex w-full max-w-[1302px] flex-col items-center gap-[30px]">
        <h2 className="text-center text-[28px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#17201E] md:text-[42px] md:leading-[66px]">
          Find grooming that fits.
        </h2>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:gap-9">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`flex h-full flex-col gap-5 overflow-hidden rounded-[24px] pb-6 ${card.bg}`}
            >
              <img
                loading="lazy"
                decoding="async"
                src={card.img}
                alt={card.title}
                className="h-[380px] w-full flex-none object-cover object-center"
              />
              <div className="flex flex-col gap-3 px-6">
                <h3 className="text-2xl font-semibold leading-[30px] tracking-[-0.4px] text-[#17201E]">
                  {card.title}
                </h3>
                <p className="text-base font-medium leading-6 text-[#66716D]">
                  {card.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

      {/* 4. PROVIDER JOURNEY */}
      <section className="w-full bg-white px-5 py-16 font-['Plus_Jakarta_Sans'] lg:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[52px]">
        {/* Head */}
        <div className="flex max-w-[848px] flex-col items-center gap-4 text-center">
          <h2 className="text-[28px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#17201E] md:text-[42px] md:leading-[66px]">
            The right care starts with the right person.
          </h2>
          <p className="max-w-[416px] pt-0.5 text-base font-medium leading-[26px] text-[#66716D]">
            Discover a provider and connect with them directly through Mungo.
          </p>
        </div>

        {/* Steps */}
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3 md:gap-6">
          {steps.map((step) => (
            <div key={step.label} className="flex flex-col items-center gap-6">
              <img loading="lazy" decoding="async"
                src={step.img}
                alt={step.label}
                className="h-[202px] w-[312px] max-w-full object-contain"
              />
              <div className="flex flex-col items-center gap-3">
                <h4 className="text-xl font-bold leading-[18px] tracking-[0.6px] text-[#22947E]">
                  {step.label}
                </h4>
                <p className={`text-base leading-[22px] text-[#17201E] ${step.weight}`}>
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* 5. FROM HELLO TO DONE */}
    <section className="w-full bg-[#F5FBF9] px-5 py-16 font-['Plus_Jakarta_Sans'] lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center">
        <h2 className="text-center text-[28px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#17201E] md:text-[42px] md:leading-[66px]">
          From hello to done.
        </h2>

        {/* Steps */}
        <div className="mt-10 grid w-full grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {step.map((step) => (
            <div
              key={step.label}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-[160px] items-end justify-center">
                <img loading="lazy" decoding="async"
                  src={step.img}
                  alt={step.label}
                  className="max-h-[155px] w-auto max-w-full object-contain"
                />
              </div>
              <h4 className="mt-4 text-xl font-bold leading-[18px] tracking-[0.6px] text-[#22947E]">
                {step.label}
              </h4>
              <p
                className={`mt-[14px] max-w-[260px] text-base leading-[22px] text-[#17201E] ${step.weight}`}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Crosslink bar */}
        <div className="mt-12 flex w-full flex-col items-start justify-between gap-4 rounded-[20px] bg-white px-6 py-4 sm:flex-row sm:items-center">
          <p className="text-base font-semibold leading-[23px] text-[#17201E]">
            Looking for veterinary care?
          </p>
          <a
            href="/grooming"
            className="inline-flex h-12 items-center rounded-full bg-[#2DBB9F] px-[26px] text-sm font-semibold leading-[22px] text-white transition hover:bg-[#25a78d]"
          >
            Explore Grooming
          </a>
        </div>
      </div>
    </section>

      {/* 6. FAQ */}
    <section className="w-full bg-white px-5 py-16 font-['Plus_Jakarta_Sans'] lg:px-16 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10">
        {/* Heading */}
        <div className="relative w-full max-w-[720px]">
          <img loading="lazy" decoding="async"
            src={groomer13}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 hidden h-[117px] w-[178px] object-contain md:block lg:-left-[20px] lg:-bottom-[45px]"
          />
          <h2 className="mx-auto max-w-[450px] text-center text-[28px] font-semibold leading-[1.3] text-[#17201E] md:text-[42px]">
            Grooming questions, answered.
          </h2>
        </div>

        {/* Items */}
        <div className="w-full max-w-[720px] border-b border-[#17201E]/10">
          {faqs.map((item, i) => (
            <details
              key={item.q}
              open={i === 0}
              className="group border-t border-[#17201E]/10"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-1 py-6 [&::-webkit-details-marker]:hidden">
                <span className="text-[17.9px] font-semibold leading-[26px] text-[#17201E]">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-[33px] w-[14px] shrink-0 items-center justify-center text-[22px] font-normal leading-[33px] text-[#22947E] transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[580px] px-1 pb-6 text-base font-medium leading-[22px] text-[#66716D]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>

      {/* 7. FINAL CTA */}
      <section
        className="w-full bg-[#2DBB9F] px-6 py-16 lg:px-20 lg:py-20"
        style={{ fontFamily: '"Segoe UI", system-ui, -apple-system, Roboto, sans-serif' }}
      >
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-6 lg:px-16">
          <div className="flex w-full max-w-[480px] flex-col items-center gap-[18px]">
            <h2 className="text-center text-[40px] font-bold leading-[1.3] tracking-[-0.5px] text-white sm:text-[52px] lg:text-[63px]">
              Ready for their<br />next glow-up?
            </h2>
            <p className="max-w-[480px] pb-[14px] text-center text-[18px] leading-[1.5] text-white">
              Find grooming care that works for both of you.
            </p>
          </div>

          <a
            href="/download"
            className="inline-flex items-center justify-center rounded-full bg-white px-[26px] py-[14px] text-[14.8px] font-semibold leading-[22px] text-[#22947E] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Download Mungo
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}