import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import walker1 from './assets/walker-1.png';
import walker2 from './assets/walker-2.png';
import walker3 from './assets/walker-3.png';
import walker4 from './assets/walker-4.png';
import walker5 from './assets/walker-5.png';
import walker6 from './assets/walker-6.png';
import walker7 from './assets/walker-7.png';
import walker8 from './assets/walker-8.png';
import walker9 from './assets/walker-9.png';
import walker10 from './assets/walker-10.png';
import walker11 from './assets/walker-11.png';
import walker12 from './assets/walker-12.png';
import walker13 from './assets/walker-13.png';

const BLOB_PATH ="M300 0C380 0 450 60 500 150C540 230 545 330 520 430C495 530 420 610 330 660C250 700 150 690 90 620C30 550 0 450 0 350C0 250 50 170 110 100C170 30 230 0 300 0Z";

const cards = [
  {
    title: "Everyday walks",
    text: "Regular movement to fit their routine.",
    bg: "bg-[#F0FFC3]",
    img: walker3,
  },
  {
    title: "Energetic play",
    text: "For pets who need to burn off energy.",
    bg: "bg-[#D1F5FD]",
    img: walker4,
  },
  {
    title: "Calm, steady pace",
    text: "Gentle walks for a relaxed outing.",
    bg: "bg-[#FAE8D7]",
    img: walker5,
  },
];

const steps = [
  {
    label: "PROVIDER",
    text: "Browse walkers near you.",
    img: walker6,
    alt: "Dog with a leash next to a map and paw pin",
  },
  {
    label: "PROFILE",
    text: "Learn about their experience.",
    img: walker7,
    alt: "Dog beside a walker profile card with a star",
  },
  {
    label: "CHAT",
    text: "Message them directly.",
    img: walker8,
    alt: "Dog and walker with speech bubbles",
  },
];

const step = [
  {
    label: "Find",
    text: "Choose a walker that fits your pet.",
    img: walker9,
    alt: "Puppy with a magnifying glass",
  },
  {
    label: "Connect",
    text: "Find your walker and chat directly.",
    img: walker10,
    alt: "Cat with chat bubbles",
  },
  {
    label: "Care",
    text: "Stay connected while the walk happens.",
    img: walker11,
    alt: "Puppy in a harness with a walk tracker card",
  },
  {
    label: "Complete",
    text: "Know when the walk is finished.",
    img: walker12,
    alt: "Cat with a checkmark badge",
  },
];

export default function DogWalking() {
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
            Services / <span className="text-[#17201E]">Dog Walking</span>
          </p>
        </div>
      </div>

      {/* 1. HERO */}
    <section className="relative isolate mx-auto flex min-h-[558px] w-full max-w-[1440px] items-center overflow-hidden px-6 py-16 md:px-20 md:py-[120px]">
      {/* Text column */}
      <div className="relative z-10 flex flex-col items-start gap-9">
        <div className="flex flex-col gap-[18px]">
          <h1 className="font-jakarta text-[42px] font-semibold leading-[120%] text-[#17201E]">
            More walks.
            <br />
            More tail wags.
          </h1>
          <p className="max-w-[480px] pt-[2px] font-jakarta text-base font-medium leading-[26px] text-[#66716D]">
            Find someone to give them the movement, attention, and outdoor time
            they need.
          </p>
        </div>

        <a
          href="/become-walker"
          className="inline-flex items-center rounded-full bg-[#2DBB9F] px-[26px] pb-[15px] pt-[14px] font-jakarta text-sm font-semibold leading-[22px] text-white transition hover:brightness-95"
        >
          Find a dog walker
        </a>
      </div>

      <img
        src={walker1}
        alt="Woman walking a corgi"
        className="pointer-events-none absolute right-[165px] top-[11px] hidden h-[578px] w-[453px] -scale-x-100 object-contain md:block rotate-[-180]"
      />
    </section>

      {/* 2. EVERY WALK IS MORE THAN A WALK */}
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-6 py-16 md:flex-row md:gap-14 md:px-20 md:py-[120px]">
      {/* Blob image group */}
      <div className="relative aspect-[576/687] w-full max-w-[576px] shrink-0">
        {/* Mint back shape */}
        <svg
          aria-hidden="true"
          viewBox="0 0 545 687"
          className="absolute left-0 top-0 h-full w-[94.6%]"
          preserveAspectRatio="none"
        >
        </svg>

        {/* Photo, clipped to the same blob, shifted right by 31px */}
        <svg
          viewBox="0 0 545 687"
          className="absolute right-0 top-0 h-full w-[94.6%]"
          preserveAspectRatio="none"
        >
          <image
            href={walker2}
            width="545"
            height="687"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>

      {/* Text */}
      <div className="flex w-full max-w-[548px] flex-col gap-6">
        <h2 className="font-jakarta text-[42px] font-semibold leading-[130%] text-[#17201E]">
          Every walk is more than a walk.
        </h2>
        <p className="max-w-[420px] pt-[2.7px] font-jakarta text-base font-medium leading-6 text-[#66716D]">
          A good walk gives them time outside, attention, and a little more of
          the world to explore.
        </p>
      </div>
    </section>

      {/* 3. FIND THEIR WALKING MATCH */}
    <section className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-20 md:py-[120px]">
      <div className="flex flex-col items-center gap-[30px]">
        <h2 className="text-center font-jakarta text-[32px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#17201E] md:text-[42px] md:leading-[66px]">
          Find their walking match.
        </h2>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-9">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`flex flex-col overflow-hidden rounded-3xl pb-6 ${card.bg}`}
            >
              {/* Image area: 380px tall in Figma */}
              <div className="h-[380px] w-full">
                <img
                  src={card.img}
                  alt=""
                  className="h-full w-full object-cover object-bottom"
                />
              </div>

              <div className="mt-5 flex flex-col gap-3 px-6">
                <h3 className="font-jakarta text-2xl font-semibold leading-[30px] tracking-[-0.4px] text-[#17201E]">
                  {card.title}
                </h3>
                <p className="font-jakarta text-base font-medium leading-[22px] text-[#66716D]">
                  {card.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

      {/* 4. PROVIDER JOURNEY */}
    <section className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-20 md:py-[120px]">
      <div className="flex flex-col items-center gap-[52px]">
        {/* Head */}
        <div className="flex max-w-[887px] flex-col items-center gap-4 text-center">
          <h2 className="font-jakarta text-[32px] font-semibold leading-[1.3] text-[#17201E] md:text-[42px] md:leading-[66px]">
            Good walks start with the right person.
          </h2>
          <p className="max-w-[384px] pt-[2px] font-jakarta text-base font-medium leading-[26px] text-[#66716D]">
            Discover a provider and connect with them directly through Mungo.
          </p>
        </div>

        {/* Steps */}
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3 md:gap-6">
          {steps.map((step) => (
            <div key={step.label} className="flex flex-col items-center">
              {/* Illustration area, bottom-aligned so the ground lines sit level */}
              <div className="flex h-[237px] w-full items-end justify-center">
                <img
                  src={step.img}
                  alt={step.alt}
                  className="max-h-full w-auto max-w-full object-contain"
                />
              </div>

              <div className="mt-6 flex flex-col items-center gap-3 text-center">
                <h4 className="font-jakarta text-xl font-bold uppercase leading-[18px] tracking-[0.6px] text-[#22947E]">
                  {step.label}
                </h4>
                <p className="font-jakarta text-base font-medium leading-[22px] text-[#17201E]">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* 5. STAY CONNECTED WHILE THEY'RE OUT */}
    <section className="w-full bg-[#F5FBF9]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 py-16 md:px-20 md:py-[120px]">
        <h2 className="text-center font-jakarta text-[32px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#17201E] md:text-[42px] md:leading-[66px]">
          Stay connected while they're out.
        </h2>

        {/* Steps */}
        <div className="mt-12 grid w-full grid-cols-1 gap-12 sm:grid-cols-2 md:mt-6 lg:grid-cols-4 lg:gap-5">
          {step.map((step) => (
            <div key={step.label} className="flex flex-col items-center">
              {/* Fixed 200px art area so labels line up across columns */}
              <div className="flex h-[200px] w-full items-center justify-center">
                <img
                  src={step.img}
                  alt={step.alt}
                  className="max-h-full w-auto max-w-full object-contain"
                />
              </div>

              <div className="mt-[34px] flex flex-col items-center gap-[14px] text-center">
                <h4 className="font-jakarta text-xl font-bold leading-[18px] tracking-[0.6px] text-[#22947E]">
                  {step.label}
                </h4>
                <p className="max-w-[253px] font-jakarta text-base font-medium leading-[22px] text-[#17201E]">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Crosslink bar */}
        <div className="mt-12 flex w-full flex-col items-start gap-4 rounded-[20px] bg-white px-[26px] py-4 sm:flex-row sm:items-center sm:justify-between md:mt-14">
          <p className="font-jakarta text-base font-semibold leading-[23px] text-[#17201E]">
            Time for a tidy-up after the walk?
          </p>
          <a
            href="#explore-pet-walking"
            className="inline-flex items-center rounded-full bg-[#2DBB9F] px-[26px] py-3 font-jakarta text-sm font-semibold leading-[22px] text-white transition hover:brightness-95"
          >
            Explore Pet Walking
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
              Dog walking questions, answered.
            </h2>
            <img
              src={walker13}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -left-[80px] top-0 hidden h-[150px] w-[246px] object-contain lg:block"
            />
          </div>

          <div className="w-full max-w-[720px]">
            {[
              {
                q: "How do I find a walker on Mungo?",
                a: "Open the Dog Walking service in Mungo and browse walkers available near you.",
              },
              {
                q: "Can I chat with my walker?",
                a: "Yes. Once you've connected with a walker, you can message them directly in the app.",
              },
              {
                q: "How does a walk start?",
                a: "Once your booking is confirmed, you'll be notified when your walker arrives.",
              },
              {
                q: "Can I see the walk in progress?",
                a: "Yes. You can stay connected and follow along while the walk is happening.",
              },
              {
                q: "How do I know when the walk is complete?",
                a: "Mungo lets you know as soon as the walk has finished.",
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
                <p className="max-w-[580px] px-1 pb-[24px] text-[14.9px] leading-[22px] text-[#66716D]">
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
          <div className="flex w-full max-w-[448px] flex-col items-center gap-[18px]">
            <h2 className="text-center text-[38px] font-bold leading-[1.3] tracking-[-0.5px] text-white sm:text-[50px] lg:text-[63px]">
              Their next walk<br />starts here.
            </h2>
            <p className="max-w-[480px] pb-[14px] text-center text-[18px] leading-[1.5] text-white">
              Find a walker who fits their pace and personality.
            </p>
          </div>

          <a
            href="/features#dog-walkers"
            className="inline-flex items-center justify-center rounded-full bg-white px-[26px] py-[14px] text-[14.9px] font-semibold leading-[22px] text-[#22947E] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Find a dog walker
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}