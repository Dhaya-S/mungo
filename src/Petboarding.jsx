import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import boarding1 from './assets/boarding-1.webp';
import boarding2 from './assets/boarding-2.webp';
import boarding3 from './assets/boarding-3.webp';
import boarding4 from './assets/boarding-4.webp';
import boarding5 from './assets/boarding-5.webp';
import boarding6 from './assets/boarding-6.webp';
import boarding7 from './assets/boarding-7.webp';
import boarding8 from './assets/boarding-8.webp';
import boarding9 from './assets/boarding-9.webp';
import boarding10 from './assets/boarding-10.webp';
import boarding11 from './assets/boarding-11.webp';
import boarding12 from './assets/boarding-12.webp';
import boarding13 from './assets/boarding-13.webp';

const cards = [
  {
    title: "Comfortable stays",
    text: "A warm, welcoming space to spend their time.",
    bg: "bg-[#C3D8FD]",
    img: boarding3,
    textPos: "mt-[0px]",
  },
  {
    title: "Familiar routines",
    text: "Care that keeps their day feeling normal.",
    bg: "bg-[#FEEAEA]",
    img: boarding4,
    textPos: "mt-[0px]",
  },
  {
    title: "Attentive hosts",
    text: "Providers who genuinely look after them.",
    bg: "bg-[#E4FCFE]",
    img: boarding5,
    textPos: "mt-[22px]",
  },
];

const steps = [
  {
    label: "PROVIDER",
    text: "Browse boarding hosts near you.",
    img: boarding6,
  },
  {
    label: "PROFILE",
    text: "Learn about their experience.",
    img: boarding7,
  },
  {
    label: "CHAT",
    text: "Message them directly.",
    img: boarding8,
  },
];

const step = [
  {
    label: "Find",
    text: "Choose boarding that fits your pet.",
    img: boarding9,
  },
  {
    label: "Connect",
    text: "Find a host and chat directly.",
    img: boarding10,
  },
  {
    label: "Care",
    text: "Stay connected while their stay is active.",
    img: boarding11,
  },
  {
    label: "Complete",
    text: "Know when their stay is complete.",
    img: boarding12,
  },
];

const BOARDING_FAQS = [
  {
    q: "How do I find boarding on Mungo?",
    a: "Open the Pet Boarding service in Mungo and browse hosts available near you.",
  },
  {
    q: "How do I communicate with a host?",
    a: "Once you've connected with a host, you can message them directly in the app.",
  },
  {
    q: "How should I prepare for boarding?",
    a: "Share your pet's routine, food and any care notes with your host before the stay begins.",
  },
  {
    q: "How does a boarding service start?",
    a: "Once your booking is confirmed, you'll be notified when the stay begins.",
  },
  {
    q: "How do I know when the stay is complete?",
    a: "Mungo lets you know as soon as the boarding stay has finished.",
  },
];

export default function PetBoarding() {
  return (
    <div className="font-sans min-h-screen bg-white text-gray-900 flex flex-col relative overflow-hidden">
      <Navbar currentPage="features" />

      {/* 1. HERO */}
    <section className="w-full bg-white px-5 py-16 font-['Plus_Jakarta_Sans'] md:px-10 lg:px-[76px] lg:py-[127px]">
      <div className="mx-auto flex max-w-[1289px] flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-[100px]">
        {/* Copy */}
        <div className="flex w-full max-w-[458px] flex-col items-start gap-9">
          <div className="flex flex-col gap-[18px]">
            <h1 className="text-[32px] font-semibold leading-[1.2] text-[#17201E] md:text-[42px]">
              Somewhere they&apos;ll feel at home.
            </h1>
            <p className="max-w-[350px] pt-0.5 text-base font-normal leading-6 text-[#66716D]">
              Find a comfortable place for your pet to stay when you
              can&apos;t be there.
            </p>
          </div>

          <a
            href="/become-boarder"
            className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#2DBB9F] px-[26px] text-sm font-semibold leading-[22px] text-white transition hover:bg-[#25a78d]"
          >
            Find boarding
          </a>
        </div>

        {/* Image */}
        <div className="relative aspect-[739/488] w-full max-w-[673px]">
          {/* Mint blob behind the car */}
          <div
            aria-hidden="true"
            className="absolute right-[8%] top-[7%] h-[82%] w-[57%] rounded-[45%_55%_40%_60%/55%_45%_55%_45%] bg-[#E7F8F3]"
          />
          <img loading="lazy" decoding="async"
            src={boarding1}
            alt="Pug and cat in sunglasses driving a yellow toy car"
            className="absolute inset-0 h-full w-full [filter:drop-shadow(0_33px_33px_rgba(69,69,69,0.31))_drop-shadow(0_8px_18px_rgba(69,69,69,0.35))]"
          />
        </div>
      </div>
    </section>

      {/* 2. BEING AWAY DOESN'T HAVE TO FEEL FAR AWAY */}
    <section className="w-full bg-white px-5 py-16 font-['Plus_Jakarta_Sans'] md:px-10 lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10 lg:flex-row lg:gap-16">
        {/* Image */}
        <div className="w-full max-w-[485px] shrink-0 overflow-hidden rounded-[28px]">
          <img loading="lazy" decoding="async"
            src={boarding2}
            alt="Sitter & dog, warm companionship at home"
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Copy */}
        <div className="flex flex-col items-start gap-6 lg:flex-1">
          <h2 className="max-w-[520px] text-[30px] font-semibold leading-[1.2] text-[#17201E] md:text-[42px]">
            Being away doesn&apos;t have to feel far away.
          </h2>
          <p className="max-w-[420px] text-base font-normal leading-6 text-[#66716D]">
            Familiar routines, companionship, and a comfortable environment
            &mdash; find a stay that keeps them feeling at ease while
            you&apos;re away.
          </p>
        </div>
      </div>
    </section>

      {/* 3. FIND THEIR HOME AWAY FROM HOME */}
    <section className="w-full bg-white px-5 py-16 font-['Plus_Jakarta_Sans'] md:px-10 lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1302px] flex-col items-center gap-[30px]">
        <h2 className="max-w-[520px] text-center text-[28px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#17201E] md:text-[42px] md:leading-[66px]">
          Find their home away from home.
        </h2>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:gap-9">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`flex min-h-[514px] flex-col overflow-hidden rounded-[24px] pb-6 ${card.bg}`}
            >
              <div className="flex h-[380px] items-end">
                <img loading="lazy" decoding="async"
                  src={card.img}
                  alt={card.title}
                  className="h-[322px] w-full object-cover object-bottom"
                />
              </div>
              <div className={`flex flex-col gap-3 px-6 pt-5 ${card.textPos}`}>
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
            Find. Connect. Feel comfortable.
          </h2>
          <p className="max-w-[384px] pt-0.5 text-base font-medium leading-[26px] text-[#66716D]">
            Discover a provider and connect with them directly through Mungo.
          </p>
        </div>

        {/* Steps */}
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3 md:gap-6">
          {steps.map((step) => (
            <div key={step.label} className="flex flex-col items-center gap-6">
              <div className="flex h-[223px] items-end justify-center">
                <img loading="lazy" decoding="async"
                  src={step.img}
                  alt={step.label}
                  className="max-h-[223px] w-auto max-w-full object-contain"
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

      {/* 5. THEIR STAY, CONNECTED */}
    <section className="w-full bg-[#F5FBF9] px-5 py-16 font-['Plus_Jakarta_Sans'] lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center">
        <h2 className="max-w-[736px] text-center text-[28px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#17201E] md:text-[42px] md:leading-[66px]">
          Their stay, connected through Mungo.
        </h2>

        {/* Steps */}
        <div className="mt-10 grid w-full grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {step.map((step) => (
            <div
              key={step.label}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-[191px] items-end justify-center">
                <img loading="lazy" decoding="async"
                  src={step.img}
                  alt={step.label}
                  className="max-h-[191px] w-auto max-w-full object-contain"
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
            Looking for daytime care instead?
          </p>
          <a
            href="/daycare"
            className="inline-flex h-12 items-center rounded-full bg-[#2DBB9F] px-[26px] text-sm font-semibold leading-[22px] text-white transition hover:bg-[#25a78d]"
          >
            Explore Pet Boarding
          </a>
        </div>
      </div>
    </section>

      {/* 6. FAQ */}
      <section
        className="w-full px-6 py-16 lg:px-20 lg:py-[120px]"
        style={{ fontFamily: '"Segoe UI", system-ui, -apple-system, Roboto, sans-serif' }}
      >
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10">
          <div className="relative w-full max-w-[720px]">
            <h2 className="mx-auto max-w-[495px] text-center text-[30px] font-semibold leading-[1.3] text-[#17201E] sm:text-[36px] lg:text-[42px]">
              Pet boarding questions, answered.
            </h2>
            <img loading="lazy" decoding="async"
              src={boarding13}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -left-[150px] top-[-95px] hidden h-[209px] w-[246px] object-contain lg:block"
            />
          </div>

          <div className="w-full max-w-[720px]">
            {BOARDING_FAQS.map((item, i, arr) => (
              <details
                key={item.q}
                open={i === 0}
                className={`group border-t border-[rgba(23,32,30,0.1)] ${i === arr.length - 1 ? "border-b" : ""}`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-1 py-6 [&::-webkit-details-marker]:hidden">
                  <span className="text-[17.9px] font-semibold leading-[26px] text-[#17201E]">{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="flex h-[33px] w-[14px] flex-none items-center justify-center text-[22px] font-normal leading-[33px] text-[#22947E] transition-transform duration-200 group-open:rotate-45"
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
          <div className="flex w-full max-w-[680px] flex-col items-center gap-[18px]">
            <h2 className="text-center text-[38px] font-bold leading-[1.3] tracking-[-0.5px] text-white sm:text-[50px] lg:text-[63px]">
              Give them a stay<br />that feels like home.
            </h2>
            <p className="max-w-[480px] pb-[14px] text-center text-[18px] leading-[1.5] text-white">
              Find boarding care that keeps them comfortable while you're
              away.
            </p>
          </div>

          <a
            href="/features#boarding-hosts"
            className="inline-flex items-center justify-center rounded-full bg-white px-[26px] py-[14px] text-[14px] font-semibold leading-[22px] text-[#22947E] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Find boarding
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}