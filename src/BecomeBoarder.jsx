import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import beboarder1 from './assets/beboarder-1.webp';
import beboarder2 from './assets/beboarder-2.webp';
import beboarder3 from './assets/step-1.webp';
import beboarder4 from './assets/step-2.webp';
import beboarder5 from './assets/step-3.webp';
import beboarder6 from './assets/step-4.webp';
import beboarder7 from './assets/beboarder-7.webp';
import beboarder8 from './assets/beboarder-8.webp';
import beboarder9 from './assets/find-1.webp';
import beboarder10 from './assets/find-2.webp';
import beboarder11 from './assets/find-3.webp';
import beboarder12 from './assets/be-trust.webp';

import blob4 from './assets/icon-4.webp';
import blob5 from './assets/icon-5.webp';
import blob6 from './assets/icon-6.webp';
import blob7 from './assets/icon-7.webp';

import heart from './assets/heart-icon.webp';
import user from './assets/user-icon.webp';
import timer from './assets/timer-icon.webp';
import walker from './assets/walker-icon.webp';
import protection from './assets/protection-icon.webp';
import paw from './assets/paw-icon.webp';

const FONT = '"Segoe UI", system-ui, -apple-system, Roboto, sans-serif';

const Blob = ({ src, className = "" }) => (
  <img loading="lazy" decoding="async"
    src={src}
    alt=""
    aria-hidden="true"
    className={`pointer-events-none absolute hidden select-none object-contain lg:block ${className}`}
  />
);
/* ---------- Data ---------- */
const CARD_SHADOW =
  'shadow-[0_23px_9px_rgba(79,79,79,0.01),0_13px_8px_rgba(79,79,79,0.04),0_6px_6px_rgba(79,79,79,0.07),0_1px_3px_rgba(79,79,79,0.08)]';

const BENEFITS = [
  { title: 'Reach pet parents', text: 'Put your business in front of pet parents actively looking for care.', bg: 'bg-[#E8FFEC]', img: walker },
  { title: 'Introduce your business to the Mungo community', text: 'Bring your expertise into a growing pet-care ecosystem.', bg: 'bg-[#FFF7E9]', img: timer },
  { title: 'Create meaningful partnerships', text: 'Work with Mungo in a way that fits your business.', bg: 'bg-[#E9E4F4]', img: heart },
  { title: 'Build better pet-care experiences', text: 'Help shape what pet care looks like for the community.', bg: 'bg-[#FEFFE8]', img: protection },
];

const EXPERT_CARDS = [
  { title: 'Your expertise', text: 'Get more visibility and reach local pet parents looking for reliable care.', img: user },
  { title: 'Your availability', text: "Choose when you're available to provide care.", img: timer },
  { title: 'Your connections', text: 'Communicate directly with pet parents throughout the service journey.', img: heart },
];

const OFFER_TAGS = ['Grooming businesses', 'Pet-care businesses', 'Veterinary practices', 'Pet brands', 'Pet-friendly organizations'];

const STEPS = [
  { label: '01 — Create your profile', text: 'Show pet parents who you are, what you offer, and why they can trust your care.', img: beboarder3 },
  { label: '02 — Connect with pet parents', text: 'Connect through Mungo when someone is looking for the service you provide.', img: beboarder4 },
  { label: '03 — Provide care', text: 'Start the service and stay connected throughout the experience.', img: beboarder5 },
  { label: '04 — Complete the service', text: 'Complete the service and keep the relationship moving forward.', img: beboarder6 },
];

const SHOWCASE_ITEMS = ['Provider profile', 'Incoming service requests', 'Direct chat', 'Service status & timer', 'Complete service'];

const DISCOVER_CARDS = [
  { title: 'Grooming', text: 'For happy, healthy pets.', bg: 'bg-[#F0FFC3]', img: beboarder9 },
  { title: 'Grooming', text: 'For happy, healthy pets.', bg: 'bg-[#D1F5FD]', img: beboarder10 },
  { title: 'Grooming', text: 'For happy, healthy pets.', bg: 'bg-[#FAE8D7]', img: beboarder11 },
];

const TRUST_POINTS = [
  'Clear provider profiles',
  'Direct communication',
  'Visible service details',
  'A connected service journey',
  'Better visibility for both sides',
];

const FAQS = [
  { q: 'Who can partner with Mungo?', a: 'Pet-care businesses, veterinary practices, grooming businesses, pet brands, and other pet-friendly organizations.' },
  { q: 'What types of partnerships do you offer?', a: 'We work with partners in different ways depending on their business. Get in touch to find the right fit.' },
  { q: 'How can my business reach Mungo pet parents?', a: 'Once you partner with Mungo, your business appears to pet parents looking for the care you provide.' },
  { q: 'How do partnerships work?', a: 'Tell us about your business, and the Mungo team will work with you to set up your profile and services.' },
  { q: 'How can I contact the Mungo team?', a: 'Use the Partner with Mungo button and send us a message. We will get back to you.' },
];

/* ---------- Shared piece ---------- */
const CheckList = ({ items }) => (
  <ul className="flex flex-col gap-5">
    {items.map((point) => (
      <li key={point} className="flex items-start gap-[14px]">
        <span
          aria-hidden="true"
          className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#22947E] text-xs font-semibold text-white"
        >
          ✓
        </span>
        <span className="text-base font-semibold leading-[23px] text-[#17201E]">{point}</span>
      </li>
    ))}
  </ul>
);

export default function BecomeBoarder() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white" style={{ fontFamily: FONT }}>
      <Navbar currentPage="features" />

      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden bg-white px-5 py-16 md:px-10 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-12 lg:flex-row lg:items-center">
          <div className="flex w-full flex-col items-start gap-12 lg:flex-1 lg:gap-[72px]">
            <div className="flex flex-col gap-[18px]">
              <h1 className="max-w-[579px] text-[40px] font-semibold leading-[1.2] text-[#17201E] md:text-[64px]">
                Let&apos;s make pet care better, together.
              </h1>
              <p className="max-w-[480px] pt-0.5 text-base font-medium leading-6 text-[#66716D]">
                Partner with Mungo to connect your business, expertise, or services with a growing pet-care community.
              </p>
            </div>
            <a
              href="/partners"
              className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#2DBB9F] px-[26px] text-sm font-semibold leading-[22px] text-white transition hover:bg-[#25a78d]"
            >
              Partner With Mungo
            </a>
          </div>
          <div className="w-full max-w-[537px] shrink-0">
            <img loading="lazy" decoding="async" src={beboarder1} alt="A woman with several dogs in a park" className="h-auto w-full object-contain" />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="w-full bg-[#F5FBF9] px-5 py-16 md:px-10 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-8">
          <h2 className="max-w-[579px] text-center text-[30px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#17201E] md:text-[42px]">
            More ways to grow your pet-care work.
          </h2>
          <p className="max-w-[342px] pt-0.5 text-center text-base font-medium leading-6 text-[#66716D]">
            Mungo helps connect you with pet parents. You bring the expertise and care.
          </p>
          <div className="mt-4 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-20">
            {BENEFITS.map(({ title, text, bg, img }) => (
              <div key={title} className={`flex min-h-[236px] flex-col items-start gap-[15px] rounded-2xl p-4 ${CARD_SHADOW} ${bg}`}>
                <img loading="lazy" decoding="async" src={img} alt="" className="h-[52px] w-[52px] shrink-0 object-contain" />
                <h3 className="text-base font-bold leading-[18px] tracking-[0.6px] text-[#22947E]">{title}</h3>
                <p className="text-base font-medium leading-[22px] text-[#66716D]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERT */}
      <section className="relative w-full overflow-hidden bg-white px-5 py-16 md:px-10 lg:px-20 lg:py-[120px]">
        <Blob src={blob4} className="-left-[130px] top-[150px] h-[306px] w-[324px]" />
        <Blob src={blob5} className="-right-[50px] top-[120px] h-[315px] w-[305px] " />

        <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-[22px]">
          <div className="relative">
            <h2 className="max-w-[479px] text-center text-[30px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#17201E] md:text-[42px]">
              You&apos;re the expert.
              <br />
              Stay in control.
            </h2>
            <img loading="lazy" decoding="async" src={paw} alt="Paw print icon" className="absolute -right-[110px] top-[55%] hidden h-9 w-9 rotate-[15deg] lg:block" />
          </div>
          <p className="max-w-[342px] pt-0.5 text-center text-base font-medium leading-6 text-[#66716D]">
            Mungo helps connect you with pet parents. You bring the expertise and care.
          </p>
          <div className="mt-6 grid w-full max-w-[856px] grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-20">
            {EXPERT_CARDS.map(({ title, text, img }) => (
              <div key={title} className={`flex flex-col items-start gap-[15px] rounded-2xl bg-[#E7F8F3] p-4 sm:min-h-[222px] ${CARD_SHADOW}`}>
                <img loading="lazy" decoding="async" src={img} alt="" className="h-[52px] w-[52px] shrink-0 object-contain" />
                <h3 className="text-base font-bold leading-[18px] tracking-[0.6px] text-[#22947E]">{title}</h3>
                <p className="text-sm font-medium leading-[22px] text-[#17201E]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO CAN PARTNER */}
      <section className="w-full bg-[#E7F8F3] px-5 py-16 md:px-10 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10 lg:flex-row lg:gap-14">
          <div className="w-full max-w-[582px] shrink-0">
            <img loading="lazy" decoding="async" src={beboarder2} alt="A cat looking out of a pet carrier" className="h-auto w-full object-contain" />
          </div>
          <div className="flex w-full max-w-[548px] flex-col items-start gap-8">
            <h2 className="text-[30px] font-semibold leading-[1.3] tracking-[-0.8px] text-[#17201E] md:text-[42px]">
              Bring your expertise to the Mungo community.
            </h2>
            <ul className="flex flex-wrap gap-3">
              {OFFER_TAGS.map((tag) => (
                <li key={tag} className="rounded-full bg-white px-4 py-2 text-xs font-semibold leading-5 text-[#22947E]">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FROM PROFILE TO COMPLETE */}
      <section className="relative w-full overflow-hidden bg-white px-5 py-16 lg:px-20 lg:py-[120px]">
        {/* Decorative blobs (custom PNGs) */}
        <Blob src={blob6} className="-right-[98px] top-[30px] h-[306px] w-[324px]" />
        <Blob src={blob7} className="-left-[88px] top-[180px] h-[306px] w-[324px]" />

        <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-[22px]">
          <h2 className="text-center text-[30px] font-semibold leading-[1.4] tracking-[-0.8px] text-[#17201E] md:text-[42px] md:leading-[60px]">
            From profile to complete.
          </h2>
          <div className="mt-6 grid w-full grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.label} className="flex flex-col items-center gap-4">
                <img loading="lazy" decoding="async" src={step.img} alt="" className="h-[182px] w-[200px] object-contain" />
                <div className="flex flex-col items-center gap-4 text-center">
                  <h4 className="pt-[14px] text-lg font-bold leading-[18px] tracking-[0.6px] text-[#22947E]">{step.label}</h4>
                  <p className="max-w-[290px] text-base font-medium leading-[22px] text-[#17201E]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="w-full bg-[#FDF6F6] px-5 py-16 md:px-10 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 lg:flex-row lg:justify-center lg:gap-[154px]">
          <div className="flex w-full max-w-[460px] flex-col items-start gap-[33px]">
            <div className="flex flex-col gap-5">
              <h2 className="text-[30px] font-semibold leading-[1.3] tracking-[-0.8px] text-[#17201E] md:text-[42px]">
                Everything you need to stay connected.
              </h2>
              <p className="text-base font-medium leading-[26px] text-[#66716D]">
                Manage your business, communicate with pet parents and <br /> keep everything in one place.e what you do best and reach <br /> more pet parents who need your care
              </p>
            </div>
            <CheckList items={SHOWCASE_ITEMS} />
          </div>
          <div className="w-full max-w-[620px] shrink-0">
            <img loading="lazy" decoding="async" src={beboarder7} alt="A woman playing with several small dogs" className="h-auto w-full object-contain" />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="w-full bg-[#F2FFFB] px-5 py-16 md:px-10 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex max-w-[1231px] flex-col items-center gap-12 lg:flex-row lg:gap-[93px]">
          <div className="w-full max-w-[658px] shrink-0">
            <img loading="lazy" decoding="async" src={beboarder8} alt="A person sitting among several cats" className="h-auto w-full object-contain" />
          </div>
          <div className="flex w-full max-w-[480px] flex-col items-start gap-8">
            <h2 className="text-[30px] font-semibold leading-[1.3] tracking-[-0.8px] text-[#17201E] md:text-[42px]">
              Great care is personal.
              <br />
              It begins here.
            </h2>
            <p className="max-w-[480px] text-base font-medium leading-6 text-[#434B48]">
              Mungo is built for people who take pet care seriously &mdash; a <br /> place where your patience and attention are what pet <br /> parents see first.
            </p>
            <a
              href="/partners"
              className="mt-2 inline-flex h-[52px] items-center justify-center rounded-full bg-[#2DBB9F] px-[26px] text-sm font-semibold leading-[22px] text-white transition hover:bg-[#25a78d] lg:mt-12"
            >
              Meet your next client
            </a>
          </div>
        </div>
      </section>

      {/* FIND GROOMING THAT FITS (placeholder copy in Figma) */}
      <section className="w-full bg-white px-5 py-16 md:px-10 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex max-w-[1302px] flex-col items-center gap-12">
          <h2 className="text-center text-[28px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#17201E] md:text-[42px] md:leading-[66px]">
            Find grooming that fits.
          </h2>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:gap-9">
            {DISCOVER_CARDS.map((card, i) => (
              <article key={i} className={`flex min-h-[484px] flex-col gap-5 overflow-hidden rounded-[24px] pb-6 ${card.bg}`}>
                <img loading="lazy" decoding="async" src={card.img} alt="" className="h-[380px] w-full object-cover object-bottom" />
                <div className="flex flex-col gap-3 px-6">
                  <h3 className="text-2xl font-semibold leading-[1.1] text-black">{card.title}</h3>
                  <p className="text-base font-medium leading-[23px] text-[#66716D]">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="w-full bg-[#F2FFFB] px-5 py-16 md:px-10 lg:px-[170px] lg:py-[135px]">
        <div className="mx-auto flex max-w-[1097px] flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-8">
          <div className="flex w-full max-w-[439px] flex-col gap-5">
            <h2 className="max-w-[410px] text-[30px] font-semibold leading-[1.3] tracking-[-0.8px] text-[#17201E] md:text-[42px]">
              Because trust goes both ways
            </h2>
            <p className="text-base font-medium leading-[26px] text-[#66716D]">
              Mungo is designed as a unified better communication and <br  /> clearer service experiences - for pet parents and provides <br  /> alike.
            </p>
          </div>
          <CheckList items={TRUST_POINTS} />
          <img loading="lazy" decoding="async" src={beboarder12} alt="A happy dog and cat with chat bubbles" className="h-[202px] w-[312px] max-w-full shrink-0 object-contain" />
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full px-6 pb-16 pt-10 lg:px-20 lg:pb-[120px] lg:pt-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 lg:px-16">
          <h2 className="max-w-[420px] text-center text-[32px] font-semibold leading-[1.5] tracking-[-0.76px] text-[#17201E] sm:text-[37px]">
            Partnership questions, answered.
          </h2>
          <div className="w-full max-w-[720px]">
            {FAQS.map((item, i, arr) => (
              <details
                key={item.q}
                open={i === 0}
                className={`group border-t border-[rgba(23,32,30,0.1)] ${i === arr.length - 1 ? 'border-b' : ''}`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-1 py-6 [&::-webkit-details-marker]:hidden">
                  <span className="text-[17px] font-semibold leading-[26px] text-[#17201E]">{item.q}</span>
                  <span aria-hidden="true" className="flex-none text-[22px] font-normal leading-[33px] text-[#22947E] transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-[580px] px-1 pb-6 text-sm font-medium leading-[22px] text-[#66716D]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full bg-[#2DBB9F] px-6 py-16 lg:px-20 lg:py-[104px]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[18px] text-center lg:px-16">
          <h2 className="max-w-[700px] text-[40px] font-bold leading-[1.3] tracking-[-0.5px] text-white sm:text-[52px] lg:text-[63px]">
            Have an idea?  <br /> Let's make it pawsible.
          </h2>
          <p className="max-w-[480px] pb-3 text-base font-medium leading-6 text-white">
            Partner with Mungo and bring your expertise to the pet- <br /> care community.
          </p>
          <a
            href="/partners"
            className="inline-flex items-center justify-center rounded-full bg-white px-[26px] py-[14px] text-[14.9px] font-semibold leading-[22px] text-[#22947E] transition-opacity hover:opacity-90"
          >
            Partner with Mungo
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}