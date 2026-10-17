import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import beboarder1 from './assets/beboarder-1.png';
import beboarder2 from './assets/beboarder-2.png';
import beboarder3 from './assets/beboarder-3.png';
import beboarder4 from './assets/beboarder-4.png';
import beboarder5 from './assets/beboarder-5.png';
import beboarder6 from './assets/beboarder-6.png';
import beboarder7 from './assets/beboarder-7.png';
import beboarder8 from './assets/beboarder-8.png';
import beboarder9 from './assets/find-1.png';
import beboarder10 from './assets/find-2.png';
import beboarder11 from './assets/find-3.png';
import beboarder12 from './assets/beboarder-12.png';

import blob1 from './assets/icon-1.png';
import blob2 from './assets/icon-2.png';
import blob3 from './assets/icon-3.png';
import blob4 from './assets/icon-4.png';
import blob5 from './assets/icon-5.png';
import blob6 from './assets/icon-6.png';
import blob7 from './assets/icon-7.png';

const FONT = '"Segoe UI", system-ui, -apple-system, Roboto, sans-serif';

/* ---------- Decorative blobs (same placement system as BecomeVet) ---------- */
const Blob = ({ src, className = "" }) => (
  <img
    src={src}
    alt=""
    aria-hidden="true"
    className={`pointer-events-none absolute hidden select-none object-contain lg:block ${className}`}
  />
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

/* ---------- Icons ---------- */
const svgProps = {
  fill: 'none',
  stroke: '#2DBB9F',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const MegaphoneIcon = () => (
  <svg viewBox="0 0 28 28" className="h-7 w-7" strokeWidth="2" {...svgProps}>
    <path d="M4 12v4h4l9 5V7L8 12H4z" />
    <path d="M21 10c1.5 1 1.5 7 0 8" />
  </svg>
);

const StoreIcon = () => (
  <svg viewBox="0 0 28 28" className="h-7 w-7" strokeWidth="2" {...svgProps}>
    <path d="M4 11l2-6h16l2 6M5 11v12h18V11" />
    <path d="M11 23v-7h6v7" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" strokeWidth="1.8" {...svgProps}>
    <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.5 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 28 28" className="h-7 w-7" strokeWidth="2" {...svgProps}>
    <path d="M14 3l9 3v7c0 6-4 10-9 12-5-2-9-6-9-12V6l9-3z" />
    <path d="M10 14l3 3 5-6" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" strokeWidth="1.8" {...svgProps}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 19c1.2-3.2 3.8-4.8 7-4.8s5.8 1.6 7 4.8" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" strokeWidth="1.8" {...svgProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l2 2" />
  </svg>
);

/* ---------- Data ---------- */
const CARD_SHADOW =
  'shadow-[0_23px_9px_rgba(79,79,79,0.01),0_13px_8px_rgba(79,79,79,0.04),0_6px_6px_rgba(79,79,79,0.07),0_1px_3px_rgba(79,79,79,0.08)]';

const BENEFITS = [
  { title: 'Reach pet parents', text: 'Put your business in front of pet parents actively looking for care.', bg: 'bg-[#E8FFEC]', Icon: MegaphoneIcon },
  { title: 'Introduce your business to the Mungo community', text: 'Bring your expertise into a growing pet-care ecosystem.', bg: 'bg-[#FFF7E9]', Icon: StoreIcon },
  { title: 'Create meaningful partnerships', text: 'Work with Mungo in a way that fits your business.', bg: 'bg-[#E9E4F4]', Icon: HeartIcon },
  { title: 'Build better pet-care experiences', text: 'Help shape what pet care looks like for the community.', bg: 'bg-[#FEFFE8]', Icon: ShieldIcon },
];

const EXPERT_CARDS = [
  { title: 'Your expertise', text: 'Get more visibility and reach local pet parents looking for reliable care.', Icon: UserIcon },
  { title: 'Your availability', text: "Choose when you're available to provide care.", Icon: ClockIcon },
  { title: 'Your connections', text: 'Communicate directly with pet parents throughout the service journey.', Icon: HeartIcon },
];

const OFFER_TAGS = ['Grooming businesses', 'Pet-care businesses', 'Veterinary practices', 'Pet brands', 'Pet-friendly organizations'];

const STEPS = [
  { label: '01 — Create your profile', text: 'Show pet parents who you are, what you offer, and why they can trust your care.', img: beboarder3 },
  { label: '02 — Connect with pet parents', text: 'Connect through Mungo when someone is looking for the service you provide.', img: beboarder4 },
  { label: '03 — Provide care', text: 'Start the service and stay connected throughout the experience.', img: beboarder5 },
  { label: '04 — Complete the service', text: 'Complete the service and keep the relationship moving forward.', img: beboarder6 },
];

const SHOWCASE_ITEMS = ['Provider profile', 'Incoming service requests', 'Direct chat', 'Service status & timer', 'Complete service'];

// Placeholder copy from Figma: replace with real titles and text.
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

// Only the first answer exists in Figma; the rest are drafts to replace.
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
        {/* Decorative blobs (custom PNGs) */}
        <Blob src={blob2} className="-left-[120px] -top-[20px] -z-10 h-[306px] w-[324px]" />
        <Blob src={blob1} className="left-[544px] -top-[100px] -z-10 h-[306px] w-[324px]" />
        <Blob src={blob3} className="-right-[110px] top-[37px] -z-10 h-[306px] w-[324px]" />
        <PawIcon className="pointer-events-none absolute bottom-[110px] right-[140px] hidden h-12 w-12 rotate-12 lg:block" />

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
            <img src={beboarder1} alt="A woman with several dogs in a park" className="h-auto w-full object-contain" />
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
            {BENEFITS.map(({ title, text, bg, Icon }) => (
              <div key={title} className={`flex min-h-[236px] flex-col items-start gap-[15px] rounded-2xl p-4 ${CARD_SHADOW} ${bg}`}>
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-white">
                  <Icon />
                </div>
                <h3 className="text-base font-bold leading-[18px] tracking-[0.6px] text-[#22947E]">{title}</h3>
                <p className="text-base font-medium leading-[22px] text-[#66716D]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERT */}
      <section className="relative w-full overflow-hidden bg-white px-5 py-16 md:px-10 lg:px-20 lg:py-[120px]">
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
            Mungo helps connect you with pet parents. You bring the expertise and care.
          </p>
          <div className="mt-6 grid w-full max-w-[856px] grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-20">
            {EXPERT_CARDS.map(({ title, text, Icon }) => (
              <div key={title} className={`flex flex-col items-start gap-[15px] rounded-2xl bg-[#E7F8F3] p-4 sm:min-h-[222px] ${CARD_SHADOW}`}>
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white">
                  <Icon />
                </div>
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
            <img src={beboarder2} alt="A cat looking out of a pet carrier" className="h-auto w-full object-contain" />
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
        <Blob src={blob6} className="-right-[98px] top-[80px] h-[306px] w-[324px]" />
        <Blob src={blob7} className="-left-[88px] top-[180px] h-[306px] w-[324px]" />

        <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-[22px]">
          <h2 className="text-center text-[30px] font-semibold leading-[1.4] tracking-[-0.8px] text-[#17201E] md:text-[42px] md:leading-[60px]">
            From profile to complete.
          </h2>
          <div className="mt-6 grid w-full grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.label} className="flex flex-col items-center gap-4">
                <img src={step.img} alt="" className="h-[182px] w-[200px] object-contain" />
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
                Manage your business, communicate with pet parents and keep everything in one place.e what you do best and reach more pet parents who need your care
              </p>
            </div>
            <CheckList items={SHOWCASE_ITEMS} />
          </div>
          <div className="w-full max-w-[620px] shrink-0">
            <img src={beboarder7} alt="A woman playing with several small dogs" className="h-auto w-full object-contain" />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="w-full bg-[#F2FFFB] px-5 py-16 md:px-10 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex max-w-[1231px] flex-col items-center gap-12 lg:flex-row lg:gap-[93px]">
          <div className="w-full max-w-[658px] shrink-0">
            <img src={beboarder8} alt="A person sitting among several cats" className="h-auto w-full object-contain" />
          </div>
          <div className="flex w-full max-w-[480px] flex-col items-start gap-8">
            <h2 className="text-[30px] font-semibold leading-[1.3] tracking-[-0.8px] text-[#17201E] md:text-[42px]">
              Great care is personal.
              <br />
              It begins here.
            </h2>
            <p className="max-w-[450px] text-base font-medium leading-6 text-[#434B48]">
              Mungo is built for people who take pet care seriously &mdash; a place where your patience and attention are what pet parents see first.
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
                <img src={card.img} alt="" className="h-[380px] w-full object-cover object-bottom" />
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
              Mungo is designed for better communication and clearer service experiences &ndash; for pet parents and providers alike.
            </p>
          </div>
          <CheckList items={TRUST_POINTS} />
          <img src={beboarder12} alt="A happy dog and cat with chat bubbles" className="h-[202px] w-[312px] max-w-full shrink-0 object-contain" />
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
            Have an idea? Let&apos;s make it pawsible.
          </h2>
          <p className="max-w-[480px] pb-3 text-base font-medium leading-6 text-white">
            Partner with Mungo and bring your expertise to the pet-care community.
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