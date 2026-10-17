import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import besitter1 from './assets/besitter-1.png';
import besitter2 from './assets/besitter-2.png';
import besitter3 from './assets/besitter-3.png';
import besitter4 from './assets/besitter-4.png';
import besitter5 from './assets/besitter-5.png';
import besitter6 from './assets/besitter-6.png';
import besitter12 from './assets/besitter-12.png';
import besitter7 from './assets/besitter-7.png';
import besitter8 from './assets/find-1.png';
import besitter9 from './assets/find-2.png';
import besitter10 from './assets/find-3.png';
import besitter11 from './assets/besitter-11.png';

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

const HomePawIcon = () => (
  <svg viewBox="0 0 28 28" className="h-7 w-7" strokeWidth="2" {...svgProps}>
    <path d="M4 13L14 4l10 9v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V13z" />
    <circle cx="12" cy="14" r="1" />
    <circle cx="16" cy="14" r="1" />
    <circle cx="10.5" cy="17.5" r="1" />
    <circle cx="17.5" cy="17.5" r="1" />
    <path d="M14 17c-1.5 0-2.5 1.2-2.5 2.2 0 .8.7 1.2 1.3 1.1.5-.1.8-.2 1.2-.2s.7.1 1.2.2c.6.1 1.3-.3 1.3-1.1C16.5 18.2 15.5 17 14 17z" />
  </svg>
);

const DogIcon = () => (
  <svg viewBox="0 0 32 28" className="h-7 w-8" strokeWidth="2" {...svgProps}>
    <path d="M3 4c2-2 5 0 5 2l4 1 10 2c2 .5 3 2 3 4v8h-3v-5H15v5h-3v-6c-3 0-5-2-5-5L3 4z" />
    <circle cx="9" cy="8" r=".6" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 28 28" className="h-7 w-7" strokeWidth="2" {...svgProps}>
    <path d="M14 24S4 18 4 11a5 5 0 0 1 10-1 5 5 0 0 1 10 1c0 7-10 13-10 13z" />
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
const WHY_JOIN = [
  { title: 'Showcase your approach to pet care', text: 'Let pet parents see how you care for the pets you look after.', bg: 'bg-[#E8FFEC]', Icon: HomePawIcon },
  { title: 'Choose the services you offer', text: 'Decide what kind of sitting care you provide.', bg: 'bg-[#FFF7E9]', Icon: DogIcon },
  { title: 'Connect with pet parents', text: 'Chat and coordinate through Mungo, one to one.', bg: 'bg-[#E9E4F4]', Icon: HeartIcon },
  { title: 'Build trusted relationships', text: 'Keep conversations and service status organized in one place.', bg: 'bg-[#FEFFE8]', Icon: ShieldIcon },
];

const FLEXIBILITY = [
  { title: 'Your expertise', text: 'Showcase the services and experience that make your care different.', Icon: UserIcon },
  { title: 'Your availability', text: "Choose when you're available to provide care.", Icon: ClockIcon },
  { title: 'Your connections', text: 'Communicate directly with pet parents throughout the service journey.', Icon: HeartIcon },
];

const OFFER_TAGS = ['In-home sitting', 'Pet companionship', 'Feeding routines', 'Play & enrichment', 'Check-ins'];

const JOURNEY = [
  { label: '01 — Create your profile', text: 'Show pet parents who you are, what you offer, and why they can trust your care.', img: besitter3 },
  { label: '02 — Connect with pet parents', text: 'Connect through Mungo when someone is looking for the service you provide.', img: besitter4 },
  { label: '03 — Provide care', text: 'Start the service and stay connected throughout the experience.', img: besitter5 },
  { label: '04 — Complete the service', text: 'Complete the service and keep the relationship moving forward.', img: besitter6 },
];

const SHOWCASE_ITEMS = ['Provider profile', 'Incoming service requests', 'Direct chat', 'Service status & timer', 'Complete service'];

const TRUST_POINTS = [
  'Clear provider profiles',
  'Direct communication',
  'Visible service details',
  'A connected service journey',
  'Better visibility for both sides',
];

const CARDS = [
  { title: "Grooming", text: "For happy, healthy pets.", bg: "bg-[#C3D7FD]", img: besitter8 },
  { title: "Grooming", text: "For happy, healthy pets.", bg: "bg-[#FEEAEA]", img: besitter9 },
  { title: "Grooming", text: "For happy, healthy pets.", bg: "bg-[#E4FCFE]", img: besitter10 },
];

const FAQS = [
  { q: 'How do I become a Mungo Pet Sitter?', a: 'Create your provider profile through Mungo, adding the details of your sitting care.' },
  { q: 'Can I choose the services I provide?', a: 'Yes. You decide which sitting services to offer, such as in-home visits, overnight stays, or feeding and play.' },
  { q: 'How do I manage my availability?', a: 'Set the days and times you can provide care directly from your profile.' },
  { q: 'How do pet parents contact me?', a: 'Pet parents message you directly through Mungo once they choose your profile.' },
  { q: 'How does the service journey work?', a: 'From the first request to the completed visit, everything is tracked in one place in the app.' },
];

const CARD_SHADOW =
  'shadow-[0_23px_9px_rgba(79,79,79,0.01),0_13px_8px_rgba(79,79,79,0.04),0_6px_6px_rgba(79,79,79,0.07),0_1px_3px_rgba(79,79,79,0.08)]';

/* ---------- Small shared piece ---------- */
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

export default function BecomeSitter() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white" style={{ fontFamily: FONT }}>
      <Navbar currentPage="features" />

      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden bg-white px-5 py-16 md:px-10 lg:py-[120px]">
        {/* Decorative blobs (custom PNGs) */}
        <Blob src={blob2} className="-left-[120px] -top-[20px] -z-10 h-[306px] w-[324px]" />
        <Blob src={blob1} className="left-[544px] -top-[100px] -z-10 h-[306px] w-[324px]" />
        <Blob src={blob3} className="-right-[110px] top-[37px] -z-10 h-[306px] w-[324px]" />
        <PawIcon className="pointer-events-none absolute bottom-[110px] right-[140px] hidden h-12 w-12 rotate-12 lg:block" />

        <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full max-w-[480px] flex-col items-start gap-12 lg:gap-[72px]">
            <div className="flex flex-col gap-[18px]">
              <h1 className="max-w-[508px] text-[40px] font-semibold leading-[1.2] text-[#17201E] md:text-[64px]">
                Turn great pet care into trusted connections.
              </h1>
              <p className="max-w-[460px] pt-0.5 text-base font-medium leading-6 text-[#66716D]">
                Show pet parents what makes your care special and connect with pets who need someone like you.
              </p>
            </div>
            <a
              href="/become-a-partner"
              className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#2DBB9F] px-[26px] text-sm font-semibold leading-[22px] text-white transition hover:bg-[#25a78d]"
            >
              Become a pet sitter
            </a>
          </div>

          <div className="w-full max-w-[702px] shrink-0 lg:pr-[26px]">
            <img
              src={besitter1}
              alt="A woman giving a high five to a Shiba Inu on a couch"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="w-full bg-[#F5FBF9] px-5 py-16 md:px-10 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-8">
          <h2 className="max-w-[559px] text-center text-[30px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#17201E] md:text-[42px]">
            More ways to grow your pet-care work.
          </h2>
          <p className="max-w-[342px] pt-0.5 text-center text-base font-medium leading-6 text-[#66716D]">
            Mungo helps connect you with pet parents. You bring the expertise and care.
          </p>

          <div className="mt-4 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-20">
            {WHY_JOIN.map(({ title, text, bg, Icon }) => (
              <div key={title} className={`flex min-h-[218px] flex-col items-start gap-[15px] rounded-2xl p-4 ${CARD_SHADOW} ${bg}`}>
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

      {/* FLEXIBILITY */}
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
            {FLEXIBILITY.map(({ title, text, Icon }) => (
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

      {/* WHAT YOU CAN OFFER */}
      <section className="w-full bg-[#E7F8F3] px-5 py-16 md:px-10 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10 lg:flex-row lg:gap-14">
          <div className="w-full max-w-[658px] shrink-0">
            <img
              src={besitter2}
              alt="A pet sitter smiling with two dogs in a cozy living room"
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="flex w-full max-w-[548px] flex-col items-start gap-8">
            <h2 className="text-[30px] font-semibold leading-[1.3] tracking-[-0.8px] text-[#17201E] md:text-[42px]">
              Care that feels like home.
            </h2>
            <ul className="flex flex-wrap gap-3">
              {OFFER_TAGS.map((tag) => (
                <li key={tag} className="rounded-full bg-white px-4 pb-[9px] pt-2 text-xs font-semibold leading-5 text-[#22947E]">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW MUNGO WORKS */}
      <section className="relative w-full overflow-hidden bg-[#FEFEFE] px-5 py-16 lg:px-20 lg:py-[120px]">
        {/* Decorative blobs (custom PNGs) */}
        <Blob src={blob6} className="-right-[98px] top-[80px] h-[306px] w-[324px]" />
        <Blob src={blob7} className="-left-[88px] top-[180px] h-[306px] w-[324px]" />

        <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-[22px]">
          <h2 className="text-center text-[30px] font-semibold leading-[1.4] tracking-[-0.8px] text-[#17201E] md:text-[42px] md:leading-[60px]">
            From profile to complete.
          </h2>

          <div className="mt-6 grid w-full grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {JOURNEY.map((step) => (
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
          <div className="flex w-full max-w-[450px] flex-col items-start gap-[33px]">
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
          <div className="w-full max-w-[603px] shrink-0">
            <img
              src={besitter12}
              alt="A smiling woman holding a tabby cat"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="w-full bg-[#F2FFFB] px-5 py-16 md:px-10 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex max-w-[1167px] flex-col items-center gap-12 lg:flex-row lg:gap-[93px]">
          <div className="w-full max-w-[594px] shrink-0">
            <img
              src={besitter7}
              alt="A woman smiling while holding a fluffy blue-eyed cat"
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="flex w-full max-w-[480px] flex-col items-start gap-8">
            <h2 className="text-[30px] font-semibold leading-[1.3] tracking-[-0.8px] text-[#17201E] md:text-[42px]">
              Great care is personal.
              <br />
              It begins here.
            </h2>
            <p className="max-w-[480px] text-base font-medium leading-6 text-[#434B48]">
              Mungo is built for people who take pet care seriously &mdash; a place where your patience and attention are what pet parents see first.
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
          <img
            src={besitter11}
            alt="A happy dog and cat with chat bubbles"
            className="h-[202px] w-[312px] max-w-full shrink-0 object-contain"
          />
        </div>
      </section>

    <section className="w-full bg-white px-5 py-16 font-['Plus_Jakarta_Sans'] md:px-10 lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1302px] flex-col items-center gap-12">
        <h2 className="text-center text-[28px] font-semibold leading-[1.3] tracking-[-0.88px] text-[#17201E] md:text-[42px] md:leading-[66px]">
          Find grooming that fits.
        </h2>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:gap-9">
          {CARDS.map((card, i) => (
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

      {/* FAQ */}
      <section className="w-full px-6 pb-16 pt-10 lg:px-20 lg:pb-[120px] lg:pt-10">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 lg:px-16">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-[13px] font-bold tracking-[0.52px] text-[#22947E]">FAQ</p>
            <h2 className="max-w-[420px] text-[32px] font-semibold leading-[1.5] tracking-[-0.76px] text-[#17201E] sm:text-[36px]">
              Pet Sitter questions, answered.
            </h2>
          </div>

          <div className="w-full max-w-[720px]">
            {FAQS.map((item, i, arr) => (
              <details
                key={item.q}
                open={i === 0}
                className={`group border-t border-[rgba(23,32,30,0.1)] ${i === arr.length - 1 ? 'border-b' : ''}`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-1 py-6 [&::-webkit-details-marker]:hidden">
                  <span className="text-[17px] font-semibold leading-[26px] text-[#17201E]">{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="flex-none text-[22px] font-normal leading-[33px] text-[#22947E] transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-[580px] px-1 pb-6 text-[14.6px] leading-[22px] text-[#66716D]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full bg-[#2DBB9F] px-6 py-16 lg:px-20 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-4 text-center lg:px-16">
          <h2 className="max-w-[790px] text-[38px] font-bold leading-[1.3] tracking-[-0.5px] text-white sm:text-[50px] lg:text-[63px]">
            Ready to turn great care into trusted connections?
          </h2>
          <p className="max-w-[480px] pb-2 text-[18px] leading-[1.5] text-white">
            Join Mungo and connect with pet parents looking for pet sitting care.
          </p>
          <a
            href="/partners"
            className="inline-flex items-center justify-center rounded-full bg-white px-[26px] py-[14px] text-[14.9px] font-semibold leading-[22px] text-[#22947E] transition-opacity hover:opacity-90"
          >
            Become a Pet Sitter
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}