import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import sitter1 from './assets/sitter-1.webp';
import sitter2 from './assets/sitter-2.webp';
import sitter3 from './assets/sitter-3.webp';
import sitter4 from './assets/sitter-4.webp';
import sitter5 from './assets/sitter-5.webp';
import sitter6 from './assets/sitter-6.webp';
import sitter7 from './assets/sitter-7.webp';
import sitter8 from './assets/sitter-8.webp';
import sitter9 from './assets/sitter-9.webp';
import sitter10 from './assets/sitter-10.webp';
import sitter11 from './assets/sitter-11.webp';
import sitter12 from './assets/sitter-12.webp';
import sitter13 from './assets/sitter-13.webp';

const cards = [
  {
    title: "Companionship",
    text: "Someone there while you're away.",
    bg: "bg-[#C9FAED]",
    img: sitter3,
  },
  {
    title: "Routine",
    text: "Keep their familiar day moving.",
    bg: "bg-[#FAEFC6]",
    img: sitter4,
  },
  {
    title: "Attention",
    text: "Give them the interaction they need.",
    bg: "bg-[#FAD3BB]",
    img: sitter5,
  },
];

const steps = [
  {
    label: "PROVIDER",
    text: "Browse pet sitters near you.",
    img: sitter6,
  },
  {
    label: "PROFILE",
    text: "Learn about their experience.",
    img: sitter7,
  },
  {
    label: "CHAT",
    text: "Message them directly.",
    img: sitter8,
  },
];

const step = [
  {
    label: "Find",
    text: "Choose a sitter that fits your pet.",
    img: sitter9,
  },
  {
    label: "Connect",
    text: "Find your sitter and chat directly.",
    img: sitter10,
  },
  {
    label: "Care",
    text: "Stay connected while they're being cared for.",
    img: sitter11,
  },
  {
    label: "Complete",
    text: "Know when the service is finished.",
    img: sitter12,
  },
];

export default function PetSitting() {
  return (
    <div className="font-sans min-h-screen bg-white text-gray-900 flex flex-col relative overflow-hidden">
      <Navbar currentPage="features" />

      {/* BREADCRUMB */}
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start pt-6">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center font-['Plus_Jakarta_Sans'] text-[13px] font-semibold leading-5 text-[#66716D]"
        >
          <a href="/services" className="hover:text-[#1A1F1D] transition-colors">
            Services
          </a>
          <span className="mx-1" aria-hidden="true">/</span>
          <span aria-current="page" className="text-[#1A1F1D]">
            Pet Sitting
          </span>
        </nav>
      </div>

      {/* 1. HERO */}
    <section className="w-full bg-white px-5 py-16 font-['Plus_Jakarta_Sans'] md:px-10 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-0">
        {/* Copy */}
        <div className="flex w-full flex-col items-start gap-9 lg:flex-1">
          <div className="flex flex-col gap-[18px]">
            <h1 className="max-w-[350px] text-[32px] font-semibold leading-[1.2] text-[#17201E] md:text-[42px]">
              Their routine. Your peace of mind.
            </h1>
            <p className="max-w-[480px] pt-0.5 text-base font-medium leading-[26px] text-[#66716D]">
              Find someone who can care for your pet and keep their day feeling
              familiar.
            </p>
          </div>

          <a
            href="/become-sitter"
            className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#2DBB9F] px-[26px] text-sm font-semibold leading-[22px] text-white transition hover:bg-[#25a78d]"
          >
            Find a pet sitter
          </a>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-[586px] shrink-0">
          {/* Mint blob */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-0 h-[100%] w-full rounded-[40%_60%_55%_45%/45%_40%_60%_55%] bg-[#D0FAED]"
          />
          <img loading="lazy" decoding="async"
            src={sitter1}
            alt="A woman with curly hair petting her dog"
            className="relative ml-4 h-auto w-[100%] object-contain"
          />
        </div>
      </div>
    </section>

      {/* 2. SOMETIMES THEY DON'T NEED A NEW PLACE */}
    <section className="w-full bg-white px-5 py-16 font-['Plus_Jakarta_Sans'] md:px-10 lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10 lg:flex-row lg:justify-start lg:gap-14">
        {/* Image */}
        <div className="w-full max-w-[571px] shrink-0 lg:max-w-[547.88px]">
          <img loading="lazy" decoding="async"
            src={sitter2}
            alt="A smiling woman on a couch with a golden puppy and an orange cat"
            className="h-auto w-full object-contain lg:h-[452.13px] lg:w-[547.88px] "
          />
        </div>

        {/* Copy */}
        <h2 className="max-w-[553px] text-[30px] font-semibold leading-[1.3] text-[#17201E] md:text-[42px] lg:flex-1">
          Sometimes they don&apos;t need a new place.
          <br />
          They just need someone there.
        </h2>
      </div>
    </section>

      {/* 3. KEEP THEIR DAY FEELING FAMILIAR */}
    <section className="w-full bg-white px-5 py-16 font-['Plus_Jakarta_Sans'] md:px-10 lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1302px] flex-col items-center gap-[30px]">
        <h2 className="max-w-[520px] text-center text-[28px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#17201E] md:text-[42px] md:leading-[66px]">
          Keep their day feeling familiar.
        </h2>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:gap-9">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`flex min-h-[526px] min-w-[410px] flex-col gap-5 overflow-hidden rounded-[24px] pb-6 ${card.bg}`}
            >
              <img loading="lazy" decoding="async"
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
        <div className="flex max-w-[887px] flex-col items-center gap-4 text-center">
          <h2 className="text-[28px] font-semibold leading-[1.3] text-[#17201E] md:text-[42px] md:leading-[66px]">
            Find someone they&apos;ll feel comfortable with.
          </h2>
          <p className="max-w-[384px] pt-0.5 text-base font-medium leading-[26px] text-[#66716D]">
            Discover a provider and connect with them directly through Mungo.
          </p>
        </div>

        {/* Steps */}
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3 md:gap-6">
          {steps.map((step) => (
            <div key={step.label} className="flex flex-col items-center gap-6">
              <div className="flex h-[202px] items-end justify-center">
                <img loading="lazy" decoding="async"
                  src={step.img}
                  alt={step.label}
                  className="max-h-[202px] w-auto max-w-full object-contain"
                />
              </div>
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

      {/* 5. CONNECTED FROM HELLO TO DONE */}
    <section className="w-full bg-[#F5FBF9] px-5 py-16 font-['Plus_Jakarta_Sans'] lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center">
        <h2 className="max-w-[597px] text-center text-[28px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#17201E] md:text-[42px] md:leading-[66px]">
          Connected from hello to done.
        </h2>

        {/* Steps */}
        <div className="mt-10 grid w-full grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {step.map((step) => (
            <div
              key={step.label}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-[200px] items-end justify-center">
                <img loading="lazy" decoding="async"
                  src={step.img}
                  alt={step.label}
                  className="max-h-[200px] w-auto max-w-full object-contain"
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
        <div className="mt-12 flex w-full flex-col items-start justify-between gap-4 rounded-[20px] bg-white px-[26px] py-4 sm:flex-row sm:items-center">
          <p className="text-base font-semibold leading-[23px] text-[#17201E]">
            Need more outdoor time instead?
          </p>
          <a
            href="/dog-walking"
            className="inline-flex h-12 items-center rounded-full bg-[#2DBB9F] px-[26px] text-sm font-semibold leading-[22px] text-white transition hover:bg-[#25a78d]"
          >
            Explore Pet Sitting
          </a>
        </div>
      </div>
    </section>

      {/* 6. FAQ */}
      <section
        className="w-full px-6 py-16 lg:px-20 lg:py-[120px]"
        style={{ fontFamily: '"Segoe UI", system-ui, -apple-system, Roboto, sans-serif' }}
      >
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-9">
          <div className="relative w-full max-w-[720px]">
            <h2 className="mx-auto max-w-[520px] text-center text-[32px] font-semibold leading-[1.3] text-[#17201E] sm:text-[38px] lg:text-[42px]">
              Pet sitting questions, answered.
            </h2>
            <img loading="lazy" decoding="async"
              src={sitter13}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-[80px] top-0 hidden h-[150px] w-[246px] object-contain lg:block"
            />
          </div>

          <div className="w-full max-w-[720px]">
            {[
              {
                q: "How do I find a sitter on Mungo?",
                a: "Open the Pet Sitting service in Mungo and browse sitters available near you.",
              },
              {
                q: "How do I communicate with my sitter?",
                a: "Once you've connected with a sitter, you can message them directly in the app.",
              },
              {
                q: "How does a sitting service start?",
                a: "Once your booking is confirmed, you'll be notified when your sitter arrives.",
              },
              {
                q: "How do I know when the service is complete?",
                a: "Mungo lets you know as soon as the pet sitting service has finished.",
              },
              {
                q: "How is sitting different from boarding?",
                a: "Pet sitting keeps your pet in their own home; boarding means staying at a host's place instead.",
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
                  <span className="text-[16.7px] font-bold leading-[26px] text-[#17201E]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex-none text-[22px] font-normal leading-[33px] text-[#22947E] transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-[580px] px-1 pb-[24px] text-[14.8px] leading-[22px] text-[#66716D]">
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
          <div className="flex w-full max-w-[580px] flex-col items-center gap-[18px]">
            <h2 className="text-center text-[38px] font-bold leading-[1.3] tracking-[-0.5px] text-white sm:text-[50px] lg:text-[63px]">
              Keep their day feeling like home.
            </h2>
            <p className="max-w-[480px] pb-[14px] text-center text-[18px] leading-[1.5] text-white">
              Find a sitter who can keep their routine familiar.
            </p>
          </div>

          <a
            href="/become-sitter"
            className="inline-flex items-center justify-center rounded-full bg-white px-[26px] py-[14px] text-[14.9px] font-semibold leading-[22px] text-[#22947E] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Find a pet sitter
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}