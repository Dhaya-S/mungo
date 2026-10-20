import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import careers1 from './assets/careers-1.png';
import careers2 from './assets/careers-2.png';

const FONT = '"Segoe UI", system-ui, -apple-system, Roboto, sans-serif';

const FLOW = [
  { label: 'Pet parent', cls: 'bg-[#EAF8F4] text-[#17201E]' },
  { label: 'Mungo', cls: 'bg-[#17201E] text-white' },
  { label: 'Care provider', cls: 'bg-[#EAF8F4] text-[#17201E]' },
  { label: 'Better care', cls: 'bg-[#2DBB9F] text-white' },
];

const PRINCIPLES = [
  { title: 'Make it simple', text: 'Remove friction from every step of finding and giving care.' },
  { title: 'Build trust', text: 'Design for clarity and communication, not just transactions.' },
  { title: 'Care deeply', text: 'About the pets, the people, and the work itself.' },
];

const VALUES = [
  { title: 'Care deeply', text: 'About the work, the pets, and the people we work alongside.' },
  { title: 'Keep it simple', text: 'The best solution is usually the clearest one.' },
  { title: 'Build together', text: 'Good ideas come from collaboration, not silos.' },
  { title: 'Stay curious', text: 'Keep asking why, even after something works.' },
  { title: 'Make it happen', text: 'Thoughtful action beats waiting for perfect conditions.' },
];

const TEAMS = [
  { title: 'Product & Engineering', text: 'Build the systems that connect pet parents and providers.', bg: 'bg-[#EAF8F4]' },
  { title: 'Design', text: 'Shape an experience that feels warm, clear and premium.', bg: 'bg-[#FFF7E9]' },
  { title: 'Operations', text: 'Keep the day-to-day experience running smoothly.', bg: 'bg-[#FFF0ED]' },
  { title: 'Marketing & Growth', text: 'Help more pet parents and providers discover Mungo.', bg: 'bg-[#F4F1FA]' },
  { title: 'Business & Partnerships', text: "Grow the relationships that make Mungo's community stronger.", bg: 'bg-[#EAF8F4]' },
];

const benefits = [
  { title: "Work your way", text: "Flexibility in how and where you do your best work." },
  { title: "Keep growing", text: "Room to learn, stretch, and take on new challenges." },
  { title: "Take care of yourself", text: "Support for your health and wellbeing." },
  { title: "Time to recharge", text: "Time away from work that's genuinely respected." },
  { title: "Pet-friendly perks", text: "Because we build for pets — and love having them around." },
];

const ROLES = [
  { title: 'Senior Product Designer', team: 'Design', location: 'Bengaluru', type: 'Full-time', href: '/careers/details' },
  { title: 'Backend Engineer', team: 'Product & Engineering', location: 'Bengaluru', type: 'Full-time', href: '/careers/details' },
  { title: 'Operations Associate', team: 'Operations', location: 'Bengaluru', type: 'Full-time', href: '/careers/details' },
  { title: 'Growth Marketing Manager', team: 'Marketing & Growth', location: 'Remote', type: 'Full-time', href: '/careers/details' },
  { title: 'Partnerships Lead', team: 'Business & Partnerships', location: 'Bengaluru', type: 'Full-time', href: '/careers/details' },
];

const ArrowLink = ({ href, children, className = '' }) => (
  <a href={href} className={`inline-flex items-center gap-1.5 py-3.5 text-[#17201E] hover:opacity-70 ${className}`}>
    {children} <span aria-hidden="true">→</span>
  </a>
);

export default function Careers() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white" style={{ fontFamily: FONT }}>
      <Navbar currentPage="about" />

      {/* HERO */}
      <section className="w-full px-6 pb-16 pt-12 lg:px-16 lg:pt-[68px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-stretch gap-10 lg:flex-row lg:items-center lg:gap-0">
          <div className="flex flex-col gap-[13px] lg:w-[561px] lg:shrink-0">
            <h1 className="max-w-[331px] text-[40px] font-semibold leading-[1.08] tracking-[-1.36px] text-[#17201E] sm:text-[52px] lg:text-[64px] lg:leading-[69px]">
              Build a better way to care.
            </h1>
            <p className="max-w-[486px] pt-[3px] text-base font-medium leading-[26px] text-[#66716D]">
              Mungo brings pet parents and trusted care providers together in one simple experience. We&apos;re building the infrastructure for better pet care — and we&apos;re looking for thoughtful, ambitious people to help us make it happen.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-4">
              <a href="#roles" className="inline-flex h-[52px] items-center rounded-full bg-[#2DBB9F] px-[26px] text-sm font-semibold text-white transition hover:bg-[#25a78d]">
                View open roles
              </a>
              <ArrowLink href="#life" className="px-1 text-sm font-semibold">Life at Mungo</ArrowLink>
            </div>
          </div>
          <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-[28px] lg:ml-[120px] lg:h-[588px]">
            <img loading="lazy" decoding="async" src={careers1} alt="Two people with golden retrievers" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* WHY MUNGO */}
      <section className="w-full px-6 py-16 lg:px-16 lg:py-[103px]">
        <div className="mx-auto flex max-w-[1152px] flex-col items-center gap-[52px] text-center">
          <div className="flex flex-col items-center gap-[19px]">
            <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.88px] text-[#17201E] md:text-[42px]">What we build matters.</h2>
            <p className="max-w-[450px] text-base font-medium leading-[26px] text-[#66716D]">
              Pet care today is fragmented — scattered across word of mouth, disconnected bookings, and little visibility once care actually begins. Mungo is building a simpler, more connected experience for both sides.
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
            {FLOW.map((node, i) => (
              <React.Fragment key={node.label}>
                <div className={`w-full rounded-2xl px-[18px] py-[21px] text-center text-[14.5px] leading-[22px] md:w-[255px] ${node.cls}`}>{node.label}</div>
                {i < FLOW.length - 1 && (
                  <span aria-hidden="true" className="rotate-90 text-xl text-[#22947E] md:rotate-0">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="w-full bg-[#F5FBF9] px-6 py-16 lg:px-20 lg:py-[103px]">
        <div className="mx-auto flex max-w-[1152px] flex-col items-center gap-[52px] text-center">
          <div className="flex flex-col items-center gap-[14px]">
            <h2 className="text-[32px] font-semibold leading-[1.4] tracking-[-0.8px] text-[#17201E] md:text-[42px]">Make pet care feel easier.</h2>
            <p className="max-w-[470px] text-base font-medium leading-[26px] text-[#66716D]">
              We&apos;re here to make great care easier to find, easier to trust, and easier to experience.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="flex flex-col gap-[7px]">
                <h3 className="text-base font-bold leading-[33px] tracking-[-0.44px] text-[#17201E]">{p.title}</h3>
                <p className="text-sm font-medium leading-[22px] text-[#66716D]">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFE AT MUNGO */}
      <section id="life" className="w-full px-6 py-16 lg:px-16 lg:py-[104px]">
        <div className="mx-auto flex max-w-[1152px] flex-col items-stretch gap-10 lg:flex-row lg:items-center lg:gap-14">
          <div className="relative min-h-[300px] overflow-hidden rounded-[28px] lg:h-[466px] lg:flex-[1.7]">
            <img loading="lazy" decoding="async" src={careers2} alt="A couple with their golden retriever outdoors" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="flex flex-col gap-2 lg:flex-1">
            <h2 className="pt-1.5 text-[34px] font-semibold leading-[1.05] tracking-[-0.8px] text-[#17201E] md:text-[42px] md:leading-[44px]">
              Work that feels human.
            </h2>
            <p className="max-w-[420px] pt-2 text-base font-medium leading-[26px] text-[#66716D]">
              Thoughtful collaboration, ambitious ideas, and work that means something — with pets genuinely part of the environment, not just the product.
            </p>
            <ArrowLink href="#" className="px-1">Life at Mungo</ArrowLink>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="w-full bg-[#F5FBF9] px-6 py-16 lg:px-20 lg:py-[103px]">
        <div className="mx-auto flex max-w-[1152px] flex-col gap-[52px]">
          <h2 className="text-center text-[32px] font-semibold leading-[1.2] tracking-[-0.48px] text-[#17201E] md:text-[42px]">The way we work matters.</h2>
          <ol className="flex flex-col">
            {VALUES.map((v, i, arr) => (
              <li key={v.title} className={`flex gap-5 border-t border-[rgba(23,32,30,0.09)] py-[26px] ${i === arr.length - 1 ? 'border-b' : ''}`}>
                <span className="w-[60px] shrink-0 pt-1 text-[13px] font-bold leading-[21px] text-[#22947E]">{String(i + 1).padStart(2, '0')}</span>
                <div className="flex flex-col gap-[5px]">
                  <h3 className="text-lg font-bold leading-[30px] tracking-[-0.4px] text-[#17201E]">{v.title}</h3>
                  <p className="text-base font-medium leading-[22px] text-[#66716D]">{v.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TEAMS */}
      <section className="w-full px-6 py-16 lg:px-16 lg:py-[103px]">
        <div className="mx-auto flex max-w-[1152px] flex-col gap-[52px]">
          <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.88px] text-[#17201E] md:text-[42px]">Find your place at Mungo.</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TEAMS.map((t) => (
              <div key={t.title} className={`flex flex-col gap-[7px] rounded-[20px] px-6 py-7 ${t.bg}`}>
                <h3 className="text-xl font-bold leading-7 tracking-[-0.38px] text-[#17201E]">{t.title}</h3>
                <p className="max-w-[311px] text-base font-medium leading-[22px] text-[#66716D]">{t.text}</p>
                <ArrowLink href="#roles" className="-mx-1 px-1 pb-0 pt-5">Explore roles</ArrowLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="w-full bg-[#F5FBF9] px-6 py-[103px] md:px-20 font-['Plus_Jakarta_Sans']">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[52px] md:px-16">
          <h2 className="text-center text-[32px] md:text-[42px] font-semibold leading-[1.1] tracking-[-0.48px] text-[#17201E]">
            Good work deserves good things.
          </h2>

          <div className="flex flex-wrap justify-center gap-x-7 gap-y-[52px]">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex w-full max-w-[363px] flex-col items-center gap-[9px] text-center md:w-[365px]"
              >
                <h4 className="text-[20px] font-bold uppercase leading-[20px] tracking-[0.52px] text-[#22947E]">
                  {b.title}
                </h4>
                <p className="text-[16px] font-medium leading-[23px] text-[#17201E]">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL MOMENT */}
      <section className="w-full bg-[#17201E] px-6 py-16 lg:px-20 lg:py-[104px]">
        <div className="mx-auto flex max-w-[1152px] flex-col items-center gap-[13px]">
          <div
            className="relative flex min-h-[320px] w-full items-end rounded-[28px] p-[18px] lg:h-[494px]"
            style={{ background: 'linear-gradient(132.58deg, #1D2A27 0%, #141C1A 100%)' }}
          >
            {/* Add a real photo here when available */}
            <span className="ml-auto mr-auto rounded-full bg-[rgba(23,32,30,0.55)] px-3 py-[7px] text-[11.5px] leading-[17px] text-white backdrop-blur-[3px] lg:ml-[576px] lg:mr-0">
              Team member &amp; dog, genuine moment
            </span>
          </div>
          <h2 className="max-w-[571px] pt-[27px] text-center text-[32px] font-semibold leading-[1.38] tracking-[-1px] text-white md:text-[42px] md:leading-[58px]">
            We build for people who care a lot.
          </h2>
          <p className="text-base leading-[22px] text-white/60">And we&apos;re okay with that.</p>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section id="roles" className="w-full px-6 py-16 lg:px-16 lg:py-[104px]">
        <div className="mx-auto flex max-w-[1152px] flex-col gap-11">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[32px] font-semibold leading-[1.4] tracking-[-0.8px] text-[#17201E] md:text-[42px] md:leading-[60px]">Come build with us.</h2>
            <ArrowLink href="/careers/roles" className="text-sm">View all open roles</ArrowLink>
          </div>
          <div className="flex flex-col">
            {ROLES.map((r, i, arr) => (
              <a
                key={r.title}
                href={r.href}
                className={`group grid grid-cols-1 items-center gap-1 border-t border-[rgba(23,32,30,0.09)] py-6 md:grid-cols-[1.9fr_1fr_1fr_1fr_24px] md:gap-4 md:py-[38px] ${i === arr.length - 1 ? 'border-b' : ''}`}
              >
                <span className="text-base font-semibold leading-[25px] text-[#17201E]">{r.title}</span>
                <span className="text-[13px] leading-5 text-[#66716D]">{r.team}</span>
                <span className="text-[13px] leading-5 text-[#66716D]">{r.location}</span>
                <span className="text-[13px] leading-5 text-[#66716D]">{r.type}</span>
                <span aria-hidden="true" className="hidden text-lg text-[#22947E] transition-transform group-hover:translate-x-1 md:block">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full bg-[#2DBB9F] px-6 py-16 lg:px-20 lg:py-[104px]">
        <div className="mx-auto flex max-w-[1152px] flex-col items-center gap-[18px] text-center">
          <h2 className="max-w-[560px] text-[38px] font-semibold leading-[1.3] tracking-[-1.08px] text-white sm:text-[50px] lg:text-[63px] lg:leading-[81px]">
            Your next chapter could start here.
          </h2>
          <p className="max-w-[480px] pb-3 text-base font-medium leading-[26px] text-white/85">
            If you&apos;re excited about building something meaningful for pets and the people who love them, we&apos;d love to meet you.
          </p>
          <a href="#roles" className="inline-flex items-center justify-center rounded-full bg-white px-[26px] py-[14px] text-[14.9px] text-[#22947E] transition-opacity hover:opacity-90">
            Explore open roles
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}