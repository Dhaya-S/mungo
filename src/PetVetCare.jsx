import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import vet1 from './assets/vet-1.png';
import vet2 from './assets/vet-2.png';
import vet3 from './assets/vet-3.png';
import vet4 from './assets/vet-4.png';
import vet5 from './assets/vet-5.png';
import vet6 from './assets/vet-6.png';
import vet7 from './assets/vet-7.png';
import vet8 from './assets/vet-8.png';
import vet9 from './assets/vet-9.png';
import vet10 from './assets/vet-10.png';
import vet11 from './assets/vet-11.png';
import vet12 from './assets/vet-12.png';
import vet13 from './assets/vet-13.png';

const cards = [
  {
    title: "General veterinary care",
    text: "For everyday health and well being.",
    bg: "bg-[#B9EAFC]",
    img: vet3,
  },
  {
    title: "Consultation",
    text: "For questions and professional guidance.",
    bg: "bg-[#FFEBFC]",
    img: vet4,
  },
  {
    title: "Follow-up care",
    text: "Continuing care when they need it.",
    bg: "bg-[#DFFED0]",
    img: vet5,
  },
];

const steps = [
  {
    label: "PROVIDER",
    text: "Browse veterinary providers near you.",
    img: vet6,
  },
  {
    label: "PROFILE",
    text: "Learn about their experience.",
    img: vet7,
  },
  {
    label: "CHAT",
    text: "Message them directly.",
    img: vet8,
  },
];

const step = [
  {
    label: "Find",
    text: "Choose the veterinary care your pet needs.",
    img: vet9,
  },
  {
    label: "Connect",
    text: "Find your provider and chat directly.",
    img: vet10,
  },
  {
    label: "Care",
    text: "Stay connected while the service happens.",
    img: vet11,
  },
  {
    label: "Complete",
    text: "Know when the service is finished.",
    img: vet12,
  },
];

const FAQS = [
  {
    q: "How do I find veterinary care on Mungo?",
    a: "Open the Veterinary Care service in Mungo and browse providers available near you.",
  },
  { q: "How do I choose the right provider?", a: "Add your answer here." },
  { q: "Can I chat with a provider?", a: "Add your answer here." },
  { q: "How does a veterinary service start?", a: "Add your answer here." },
  { q: "How do I know when the service is complete?", a: "Add your answer here." },
];

export default function VeterinaryCare() {
  return (
    <div className="font-sans min-h-screen bg-white text-gray-900 flex flex-col relative overflow-hidden">
      <Navbar currentPage="features" />

      {/* BREADCRUMB */}
      <div
        className="w-full px-6 pt-6 lg:px-20"
        style={{ fontFamily: '"Segoe UI", system-ui, -apple-system, Roboto, sans-serif' }}
      >
        <div className="mx-auto w-full max-w-[1280px] lg:px-16">
          <p className="text-[13px] font-semibold leading-5 text-[#66716D]">
            Services / <span className="text-[#17201E]">Veterinary Care</span>
          </p>
        </div>
      </div>

      {/* 1. HERO */}
    <section className="w-full bg-white px-5 py-16 font-['Plus_Jakarta_Sans'] md:px-10 lg:px-16 lg:py-[120px]">
      <div className="mx-auto grid max-w-[1312px] grid-cols-1 items-start gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-9">
          <div className="flex flex-col gap-[18px]">
            <h1 className="max-w-[360px] text-[32px] font-semibold leading-[1.2] text-[#17201E] md:text-[42px]">
              Care when they need it most.
            </h1>
            <p className="max-w-[480px] pt-0.5 text-base font-normal leading-6 text-[#66716D]">
              Find veterinary care and connect with professionals through Mungo.
            </p>
          </div>
          <a
            href="/become-vet"
            className="inline-flex h-[52px] items-center rounded-full bg-[#2DBB9F] px-[26px] text-sm font-semibold leading-[22px] text-white transition hover:bg-[#25a78d]"
          >
            Find veterinary care
          </a>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={vet1}
            alt="A veterinarian in blue gloves holding a tabby cat"
            className="h-auto w-full max-w-[605px] object-contain"
          />
        </div>
      </div>
    </section>

      {/* 2. BECAUSE THEIR HEALTH MATTERS */}
    <section className="w-full bg-white px-5 py-16 font-['Plus_Jakarta_Sans'] md:px-10 lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10 lg:flex-row lg:gap-16">
        {/* Image */}
        <div className="w-full max-w-[629px] shrink-0">
          <img
            src={vet2}
            alt="A veterinarian giving a brown dog a gentle checkup"
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Copy */}
        <div className="flex max-w-[420px] flex-col items-start gap-6 lg:flex-1">
          <h2 className="max-w-[335px] text-[28px] font-semibold leading-[1.4] tracking-[-0.92px] text-[#17201E] md:text-[36px] md:leading-[50px]">
            Because their health matters.
          </h2>
          <p className="pt-[2.7px] text-base font-medium leading-[26px] text-[#66716D]">
            Finding the right veterinary care should feel simple. Mungo helps
            bring pet parents and veterinary providers together.
          </p>
        </div>
      </div>
    </section>

      {/* 3. FIND CARE THAT FITS */}
    <section className="w-full bg-white px-5 py-16 font-['Plus_Jakarta_Sans'] md:px-10 lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1302px] flex-col items-center gap-[30px]">
        <h2 className="max-w-[460px] text-center text-[28px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#17201E] md:text-[42px] md:leading-[66px]">
          Find care that fits their needs.
        </h2>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:gap-9">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`flex flex-col gap-5 overflow-hidden rounded-[24px] pb-6 ${card.bg}`}
            >
              <img
                src={card.img}
                alt={card.title}
                className="h-[380px] w-full object-cover object-bottom"
              />
              <div className="flex flex-col gap-3 px-6">
                <h3 className="text-2xl font-semibold leading-[30px] tracking-[-0.4px] text-[#17201E]">
                  {card.title}
                </h3>
                <p className="text-base font-medium leading-[22px] text-[#66716D]">
                  {card.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

      {/* 4. PROVIDER JOURNEY */}
    <section className="w-full bg-white px-5 py-16 font-['Plus_Jakarta_Sans'] lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[52px]">
        {/* Head */}
        <div className="flex max-w-[848px] flex-col items-center gap-4 text-center">
          <h2 className="text-[28px] font-semibold leading-[1.3] text-[#17201E] md:text-[42px] md:leading-[66px]">
            Meet the people behind their care.
          </h2>
          <p className="max-w-[416px] pt-0.5 text-base font-normal leading-[26px] text-[#66716D]">
            Discover a provider and connect with them directly through Mungo.
          </p>
        </div>

        {/* Steps */}
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3 md:gap-6">
          {steps.map((step) => (
            <div key={step.label} className="flex flex-col items-center gap-6">
              <img
                src={step.img}
                alt={step.label}
                className="h-[202px] w-auto max-w-full object-contain"
              />
              <div className="flex flex-col items-center gap-3 text-center">
                <h4 className="text-xl font-bold leading-[18px] tracking-[0.6px] text-[#22947E]">
                  {step.label}
                </h4>
                <p className="text-base font-medium leading-[22px] text-[#17201E]">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* 5. STAY CONNECTED */}
     <section className="w-full bg-[#F5FBF9] px-5 py-16 font-['Plus_Jakarta_Sans'] lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center">
        <h2 className="text-center text-[28px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#17201E] md:text-[42px] md:leading-[66px]">
          Stay connected.
        </h2>

        {/* Steps */}
        <div className="mt-10 grid w-full grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {step.map((step) => (
            <div
              key={step.label}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-[197px] items-end justify-center">
                <img
                  src={step.img}
                  alt={step.label}
                  className="max-h-[197px] w-auto max-w-full object-contain"
                />
              </div>
              <h4 className="mt-4 text-xl font-bold leading-[18px] tracking-[0.6px] text-[#22947E]">
                {step.label}
              </h4>
              <p className="mt-[14px] max-w-[240px] text-base font-medium leading-[22px] text-[#17201E]">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Crosslink bar */}
        <div className="mt-12 flex w-full flex-col items-start justify-between gap-4 rounded-[20px] bg-white px-6 py-4 sm:flex-row sm:items-center">
          <p className="text-base font-semibold leading-[23px] text-[#17201E]">
            Looking for pet grooming?
          </p>
          <a
            href="/grooming"
            className="inline-flex h-12 items-center rounded-full bg-[#2DBB9F] px-[26px] text-sm font-semibold leading-[22px] text-white transition hover:bg-[#25a78d]"
          >
            Explore Veterinary Care
          </a>
        </div>
      </div>
    </section>
      {/* 6. FAQ */}
    <section className="w-full bg-white px-5 py-16 font-['Plus_Jakarta_Sans'] lg:px-16 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10">
        <div className="relative w-full max-w-[720px]">
          <h2 className="mx-auto max-w-[550px] text-center text-[28px] font-semibold leading-[1.3] text-[#17201E] md:text-[42px]">
            Veterinary care questions, answered.
          </h2>
          <img
            src={vet13}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-[80px] top-0 hidden h-[117px] w-[178px] object-contain lg:block"
          />
        </div>

        <div className="w-full max-w-[720px] border-b border-[#17201E]/10">
          {FAQS.map((item, i) => (
            <details key={item.q} open={i === 0} className="group border-t border-[#17201E]/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-1 py-6 [&::-webkit-details-marker]:hidden">
                <span className="text-[17.9px] font-semibold leading-[26px] text-[#17201E]">{item.q}</span>
                <span
                  aria-hidden="true"
                  className="flex h-[33px] w-[14px] shrink-0 items-center justify-center text-[22px] leading-[33px] text-[#22947E] transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[580px] px-1 pb-6 text-sm font-medium leading-[22px] text-[#66716D]">{item.a}</p>
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
          <div className="flex w-full max-w-[632px] flex-col items-center gap-[18px]">
            <h2 className="text-center text-[38px] font-bold leading-[1.3] tracking-[-0.5px] text-white sm:text-[50px] lg:text-[63px]">
              When they need care,<br />know where to start.
            </h2>
            <p className="max-w-[480px] pb-[14px] text-center text-[18px] leading-[1.5] text-white">
              Connect with veterinary professionals through Mungo.
            </p>
          </div>

          <a
            href="/features#vet-providers"
            className="inline-flex items-center justify-center rounded-full bg-white px-[26px] py-[14px] text-[14px] font-semibold leading-[22px] text-[#22947E] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Find veterinary care
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}