import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import home1 from './assets/home-1.png';
import home2 from './assets/home-2.png';
import home3 from './assets/home-3.png';
import home4 from './assets/home-4.png';
import home5 from './assets/home-5.png';
import home6 from './assets/home-6.png';
import home7 from './assets/home-7.png';
import home8 from './assets/home-8.png';
import home9 from './assets/home-9.png';
import home10 from './assets/home-10.png';
import home11 from './assets/home-11.png';
import home12 from './assets/home-12.png';
import home13 from './assets/home-13.png';
import home14 from './assets/home-14.png';
import home15 from './assets/home-15.png';
import home16 from './assets/home-16.png';
import home17 from './assets/home-17.png';
import home18 from './assets/home-18.png';
import home19 from './assets/home-19.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import middle from './assets/top-middle.png';
import left from './assets/top-left.png';
import right from './assets/top-right.png';
import dog1 from './assets/dog-1.png';
import cat1 from './assets/cat-1.png';
import yarn from './assets/yarn-ball.png';
import star from './assets/star-icon.png';
import ball from './assets/ball-icon.png';
import food from './assets/food-icon.png';
import bone from './assets/bone-icon.png';
import heart from './assets/heart-icon.png';
import rectangle1 from './assets/rectangle-1.png';
import rectangle2 from './assets/rectangle-2.png';
import blog5 from './assets/blog-5.png';
import blog6 from './assets/blog-6.png';
import blog8 from './assets/blog-8.png';


const pillars = [
  "Trusted care",
  "Clear communication",
  "Service visibility",
  "Support when you need it",
];

  const services = [
  {
    id: "grooming",
    href: "/grooming",
    title: "Fresh, clean, happy.",
    desc: "Book trusted groomers who treat every visit like your pet's own spa day.",
    cta: "Explore grooming",
    image: home3,
    alt: "Dog relaxing with cucumber slices on its eyes",
  },
  {
    id: "vet",
    href: "/veterinary-care",
    title: "Expert care when it matters.",
    desc: "Connect with veterinary professionals for check-ups and care your pet can count on.",
    cta: "Explore vet care",
    image: home4,
    alt: "Kitten getting a check-up from a vet",
  },
  {
    id: "boarding",
    href: "/pet-boarding",
    title: "A comfortable home away from home.",
    desc: "Safe, welcoming spaces for your pet to stay when you can't be there.",
    cta: "Explore boarding",
    image: home5,
    alt: "Dog sitting on a play ramp in a boarding room",
  },
  {
    id: "sitting",
    href: "/pet-sitting",
    title: "Expert care when it matters.",
    desc: "Connect with veterinary professionals for check-ups and care your pet can count on.",
    cta: "Explore sitting",
    image: home6,
    alt: "Woman relaxing with a golden retriever and a cat",
  },
  {
    id: "walking",
    href: "/dog-walking",
    title: "Because every walk matters.",
    desc: "Reliable walkers who keep your dog active, happy, and on schedule.",
    cta: "Explore walking",
    image: home7,
    alt: "Dog out for a walk in a sunny park",
  },
];

const careItems = [
  {
    id: 'trust',
    title: 'Who can I trust?',
    body: 'All our sitters are carefully vetted, background-checked, and rated by other pet parents. You can feel confident knowing your dog is in safe, loving hands.',
    icon: (
      <svg width="26" height="30" viewBox="0 0 24 28" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2 3 5v7c0 6 4 10 9 13 5-3 9-7 9-13V5l-9-3Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'book',
    title: 'Where do I book?',
    body: 'Pick a sitter, choose your dates, and book in a few taps right from the app.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2.5" />
        <path d="M8 2v4M16 2v4M4 9h16M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01" />
      </svg>
    ),
  },
  {
    id: 'away',
    title: 'What’s happening while I’m away?',
    body: 'Get photo and video updates so you always know how your pet is doing.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="5.5" cy="10" rx="1.6" ry="2.2" />
        <ellipse cx="9.5" cy="5.8" rx="1.6" ry="2.2" />
        <ellipse cx="14.5" cy="5.8" rx="1.6" ry="2.2" />
        <ellipse cx="18.5" cy="10" rx="1.6" ry="2.2" />
        <path d="M12 11c-3 0-5.5 3.2-5.5 5.5 0 1.8 1.4 2.5 2.8 2.5 1 0 1.8-.5 2.7-.5s1.7.5 2.7.5c1.4 0 2.8-.7 2.8-2.5C17.5 14.2 15 11 12 11Z" />
      </svg>
    ),
  },
  {
    id: 'done',
    title: 'When will the service be done?',
    body: 'Track every visit in real time and get notified the moment it’s complete.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

const pillar = [
  'Trusted care',
  'Clear communication',
  'Service visibility',
  'Support when you need it',
];

const benefits = [
  { title: "Find care", text: "Discover the service your pet needs." },
  { title: "Choose confidently", text: "Find the right provider." },
  { title: "Stay connected", text: "Chat and follow the service." },
  { title: "Keep it together", text: "Your pet's care journey in one place." },
];

const steps = [
  { title: "Find", text: "Choose the care your pet needs.", image: home10, alt: "Find" },
  { title: "Connect", text: "Find your provider and chat directly.", image: home11, alt: "Connect" },
  { title: "Care", text: "Stay connected while the service is happening.", image: home12, alt: "Care" },
  { title: "Complete", text: "Know when the service is finished.", image: home13, alt: "Complete" },
];


const partners = [
  { label: "Groomers", image: home14, alt: "Terrier with shampoo foam on its head" },
  { label: "Veterinary Partners", image: home15, alt: "Vet examining a border collie" },
  { label: "Pet Sitters", image: home16, alt: "Woman being licked by a dog" },
  { label: "Dog Walkers", image: home17, alt: "Golden retriever on a walk" },
  { label: "Pet Businesses", image: home18, alt: "Woman playing with a happy dog on a sofa" },
];

const faqs = [
  {
    q: "What services can I find on Mungo?",
    a: "Grooming, veterinary care, boarding, pet sitting, dog walking and pet products — all in one place.",
  },
  {
    q: "How do I book a service?",
    a: "Browse providers in the app, pick the service and time that suit you, and confirm your booking in a few taps.",
  },
  {
    q: "Can I chat with my provider?",
    a: "Yes. Once you've found a provider, you can message them directly in the app before and during the service.",
  },
  {
    q: "Can I see when a service starts and finishes?",
    a: "Yes. You can follow each service in the app and see when it starts and when it's complete.",
  },
  {
    q: "How does Mungo keep my pet's care journey organized?",
    a: "Your bookings, chats and service updates live together in one place, so you always know what's happened and what's next.",
  },
];

const blogPosts = [
  {
    cat: 'Pet care',
    title: 'How to prepare your dog for their first grooming session',
    meta: '5 min read',
    art: { background: 'rgba(172, 197, 240, 0.2)' },
    img: blog6,
  },
  {
    cat: 'Health',
    title: 'What every pet parent should know about routine vet care',
    meta: '6 min read',
    art: { background: 'rgba(241, 217, 155, 0.2)' },
    img: blog8,
  },
  {
    cat: 'Mungo',
    title: "What's new at Mungo",
    meta: '3 min read',
    art: { background: 'linear-gradient(148.13deg, #FFF0ED 0%, #FFF8F6 100%)' },
    img: blog5,
  },
];


function ServiceRow({ service, reversed }) {
  return (
    <div
      className={`flex flex-col items-center gap-10 border-t border-[#17201E]/[0.08] px-6 py-16 md:px-16 lg:gap-16 lg:py-[120px] ${
        reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } lg:justify-between`}
    >
      <div className="flex w-full flex-col gap-6 lg:w-[544px]">
        <div className="flex flex-col gap-2">
          <h3 className="text-[28px] font-semibold leading-[130%] text-[#17201E] md:text-[36px]">
            {service.title}
          </h3>
          <p className="max-w-[400px] text-base font-medium leading-6 text-[#66716D]">
            {service.desc}
          </p>
        </div>
        <a
          href={service.href}
          className="w-fit rounded-full bg-[#2DBB9F] px-[26px] py-3 text-base font-semibold leading-[130%] text-white transition-colors hover:bg-[#22947E]"
        >
          {service.cta}
        </a>
      </div>

      <div className="relative aspect-[430/384] w-full max-w-[430px] shrink-0">
        <div
          aria-hidden="true"
          className={`absolute inset-0 ${reversed ? 'translate-x-[-6.5%]' : 'translate-x-[6.5%]'} translate-y-[3.5%]`}
          style={{ background: service.backBg, borderRadius: service.backBlob }}
        />
        <img
          src={service.image}
          alt={service.alt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ borderRadius: service.blob }}
        />
      </div>
    </div>
  );
}

function CareSection() {
  const [active, setActive] = useState('trust');

  return (
    <section className="w-full bg-white font-['Plus_Jakarta_Sans'] px-6 py-16 md:px-12 lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-12 lg:flex-row lg:gap-[93px]">
        <div className="flex w-full flex-col lg:w-[587px] lg:shrink-0">
          <div className="flex flex-col gap-3">
            <h2 className="text-[32px] font-semibold leading-[130%] text-[#17201E] md:text-[42px]">
              Because finding good care shouldn’t be complicated.
            </h2>
            <p className="text-base font-medium leading-7 text-[#66716D]">
              From trusted sitters to easy bookings, we make it simple for you to give your pet the best care even when you’re not around.
            </p>
          </div>

          <div className="relative mt-10 h-[342px] w-full max-w-[547px]">
            <img
              src={home1}
              alt="Happy border collie"
              className="absolute bottom-0 left-0 h-full w-full object-contain object-left-bottom"
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-8 lg:w-[630px]">
          {careItems.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                aria-expanded={isActive}
                className={`flex w-full rounded-xl border px-[18px] py-4 text-left transition-colors ${
                  isActive
                    ? 'flex-col justify-center gap-[18px] border-[#2DBB9F]/80 bg-[#F5FFFC]'
                    : 'flex-row items-center gap-[14px] border-[#DFE7E6] bg-white'
                }`}
              >
                <span
                  className={`flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full ${
                    isActive ? 'bg-[#5AB6A4] text-white' : 'bg-[#D8FDF2] text-[#2DBB9F]'
                  }`}
                >
                  {item.icon}
                </span>

                {isActive ? (
                  <span className="flex flex-col gap-[14px]">
                    <span className="text-lg font-semibold leading-[130%] text-[#17201E]">{item.title}</span>
                    <span className="text-base font-normal leading-[130%] text-[#66716D]">{item.body}</span>
                  </span>
                ) : (
                  <span className="text-lg font-semibold leading-[130%] text-[#17201E]">{item.title}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [open, setOpen] = useState(0);

  return (
    <div className="font-sans min-h-screen bg-white text-gray-900 flex flex-col relative overflow-hidden">
      <Navbar currentPage="home" />

      <section className="relative -mt-[77px] w-full overflow-hidden bg-[#E7F8F3]">
        <div className="relative mx-auto h-[856.3px] w-[1440px] max-w-full">
          <img src={left} alt="" aria-hidden="true" className="pointer-events-none absolute left-[-120px] top-[3px] h-[309px] w-[320px] max-w-none rotate-[10deg]" />
          <img src={middle} alt="" aria-hidden="true" className="pointer-events-none absolute left-[623.55px] top-[-100px] h-[261px] w-[270px] max-w-none rotate-[-30deg]" />
          <img src={right} alt="" aria-hidden="true" className="pointer-events-none absolute left-[1280px] top-[-10px] h-[261px] w-[270px] max-w-none rotate-[-20deg]" />

          <img src={rectangle1} alt="" aria-hidden="true" className="absolute left-[-78.99px] top-[580.25px] h-[307.42px] w-[402.85px] max-w-none rotate-[2deg]" />
          <img src={rectangle2} alt="" aria-hidden="true" className="absolute left-[1036px] top-[630px] h-[257px] w-[435px] max-w-none rotate-[4deg]" />

          <img
            src={dog1}
            alt="Happy dog leaning over a ledge"
            className="absolute left-[-50px] top-[303px] h-[474px] w-[339.27px] max-w-none rotate-[10deg] object-contain"
            style={{
              filter:
                'drop-shadow(-8px 45px 18px rgba(0,0,0,0.02)) drop-shadow(-4px 25px 15px rgba(0,0,0,0.07)) drop-shadow(-2px 11px 11px rgba(0,0,0,0.12)) drop-shadow(0px 3px 6px rgba(0,0,0,0.14))',
            }}
          />

          <img
            src={cat1}
            alt="Ginger cat looking up"
            className="absolute left-[1060px] top-[331px] h-[415.53px] w-[415.53px] max-w-none rotate-[-12deg] object-contain"
            style={{
              filter:
                'drop-shadow(53px 98px 44px rgba(0,0,0,0.01)) drop-shadow(30px 55px 38px rgba(0,0,0,0.05)) drop-shadow(13px 24px 28px rgba(0,0,0,0.09)) drop-shadow(3px 6px 15px rgba(0,0,0,0.1))',
            }}
          />

          <img src={bone} alt="" aria-hidden="true" className="absolute left-[320px] top-[400px] h-[161px] w-[161px] max-w-none object-contain" />
          <img src={yarn} alt="" aria-hidden="true" className="absolute left-[1070px] top-[230px] h-[155px] w-[155px] max-w-none object-contain" />
          <img src={ball} alt="" aria-hidden="true" className="absolute left-[859px] top-[510px] h-[81px] w-[89px] max-w-none rotate-[-38deg] object-contain" />
          <img src={star} alt="" aria-hidden="true" className="absolute left-[980px] top-[460px] h-[95px] w-[95px] max-w-none object-contain" />
          <img src={heart} alt="" aria-hidden="true" className="absolute left-[512px] top-[516px] h-[87px] w-[87px] max-w-none object-contain" />
          <img src={food} alt="" aria-hidden="true" className="absolute left-[650px] top-[500px] h-[157px] w-[157px] max-w-none object-contain rotate-[-8deg]" />
          <img src={icon1} alt="" aria-hidden="true" className="absolute left-[375px] top-[300px] h-[52.74px] w-[61.22px] max-w-none object-contain" style={{ transform: 'matrix(-0.73, 0.68, 0.68, 0.73, 0, 0)' }} />
          <img src={icon2} alt="" aria-hidden="true" className="absolute left-[990px] top-[370px] h-[61.98px] w-[71.94px] max-w-none rotate-[58deg] object-contain" />

          <div className="absolute left-[calc(50%-305px)] top-[calc(47%-87.15px)] flex w-[609px] flex-col items-center">
            <h1 className="whitespace-nowrap text-center font-['Newsreader',serif] text-[64px] font-semibold leading-[120%] text-[#17201E]">
              Care made pawsible.
            </h1>
            <p className="mx-auto w-[480px] pt-3 text-center font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-normal leading-[28px] text-[#66716D]">
              From everyday walks to expert care, Mungo makes it easier to find, book and stay connected with trusted pet services.
            </p>
          </div>

          <a
            href="#services"
            className="absolute left-[calc(50%-98px)] top-[709px] flex h-[48px] w-[194px] items-center justify-center rounded-full bg-[#2DBB9F] px-[26px] py-3 font-['Plus_Jakarta_Sans',sans-serif] text-[17px] font-semibold leading-[22px] text-white transition-opacity hover:opacity-85"
          >
            Explore services
          </a>
        </div>
      </section>

      <CareSection />

    <section className="w-full bg-[#E7F8F3] font-['Plus_Jakarta_Sans'] px-6 py-16 md:px-12 lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
        {/* Text */}
        <div className="flex w-full max-w-[420px] flex-col gap-4">
          <h2 className="text-[34px] font-semibold leading-[130%] text-[#17201E] md:text-[46px] spacing-[0.5%]">
            One place for<br />
            all their care.<br />
          </h2>
          <p className="pt-[3px] text-base font-medium leading-[130%] tracking-[0.005em] text-[#66716D]">
            From everyday walks and grooming to veterinary care, boarding and more, Mungo helps you
            find the care your pet needs and stay connected every step of the way.
          </p>
        </div>

        {/* Image */}
        <img
          src={home2}
          alt="Golden retriever being brushed at home"
          className="aspect-[712/444] w-full rounded-[20px] object-cover lg:w-[712px]"
        />
      </div>
    </section>

    <section className="flex w-full justify-center bg-white font-['Plus_Jakarta_Sans']">
      <div className="flex w-full max-w-[1280px] flex-col items-center gap-6 px-0 py-20">
        <div className="flex w-full flex-col items-center gap-[10px] px-6 pb-12 text-center">
          <h2 className="max-w-[460px] text-[32px] font-semibold leading-[130%] tracking-[-0.92px] text-[#17201E] md:text-[42px]">
            Whatever they need. Mungo's got it.
          </h2>
          <p className="text-base font-medium leading-[130%] text-[#66716D]">
            Everyday essentials, expert care, and everything in between.
          </p>
        </div>

        <div className="flex w-full flex-col">
          {services.map((service, i) => (
            <ServiceRow key={service.id} service={service} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>

    <section className="w-full bg-[#E7F8F3] font-['Plus_Jakarta_Sans'] px-6 py-16 md:px-12 lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-center gap-10 lg:flex-row lg:items-start lg:gap-[63px]">
        {/* Image */}
        <img
          src={home8}
          alt="Woman relaxing on a bean bag with her golden retriever"
          className="aspect-[574/459] w-full max-w-[574px] shrink-0 rounded-[48px] object-cover lg:rounded-[100px]"
        />

        {/* Text */}
        <div className="flex w-full max-w-[522px] flex-col justify-center gap-6 lg:h-[459px]">
          <div className="flex flex-col gap-3">
            <h2 className="text-[28px] font-semibold leading-[130%] text-[#17201E] md:text-[36px]">
              Because they're family.
            </h2>
            <p className="max-w-[420px] pt-0.5 text-base font-medium leading-6 text-[#66716D]">
              Choosing someone to care for your pet is a big decision. Mungo is designed to make
              that decision feel easier.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-x-[28px] gap-y-6 pt-[22px] sm:grid-cols-2">
            {pillars.map((label) => (
              <li key={label} className="flex flex-col gap-3">
                <span className="h-[2.5px] w-[30px] rounded-sm bg-[#2DBB9F]" />
                <p className="text-base font-semibold leading-6 text-[#17201E]">{label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="w-full bg-white font-['Plus_Jakarta_Sans'] px-6 py-16 md:px-12 lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-12 lg:flex-row lg:px-16">
        {/* Text */}
        <div className="flex w-full max-w-[534px] flex-col gap-[13px]">
          <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.88px] text-[#17201E] md:text-[42px]">
            You take care of them. We'll make the rest easier.
          </h2>

          <ul className="flex flex-col gap-[22px] pt-[19px]">
            {benefits.map((b) => (
              <li key={b.title} className="flex flex-wrap items-baseline gap-x-4">
                <p className="text-lg font-semibold leading-[25px] text-[#17201E]">
                  {b.title}{" "}
                  <span className="text-sm font-medium leading-[22px] text-[#66716D]">
                    — {b.text}
                  </span>
                </p>
              </li>
            ))}
          </ul>

          <div className="pt-[19px]">
            <a
              href="#download"
              className="inline-flex items-center rounded-full bg-[#2DBB9F] px-[26px] py-[14px] text-base font-semibold leading-[130%] text-white transition-colors hover:bg-[#22947E]"
            >
              Download Mungo
            </a>
          </div>
        </div>

        {/* Image */}
        <img
          src={home9}
          alt="Woman holding a phone showing the Mungo app while her golden retriever rests its head on her lap"
          className="aspect-[453/477] w-full max-w-[453px] shrink-0 rounded-[64px] object-cover lg:rounded-[100px]"
        />
      </div>
    </section>

    <section className="w-full bg-[#E7F8F3] font-['Plus_Jakarta_Sans'] px-6 pb-16 pt-16 md:px-12 lg:px-20 lg:pb-20 lg:pt-[120px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10">
        <h2 className="max-w-[468px] text-center text-[32px] font-semibold leading-[130%] text-[#17201E] md:text-[42px]">
          From "I need care" to "they're taken care of."
        </h2>

        <ol className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[51px]">
          {steps.map((step) => (
            <li key={step.title} className="flex flex-col items-center">
              {/* Image slot: 273 x 235 */}
              <div className="aspect-[273/235] w-full max-w-[273px]">
                {step.image && (
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="h-full w-full object-contain"
                  />
                )}
              </div>

              <div className="flex w-full max-w-[273px] flex-col items-center gap-3 pt-3 text-center">
                <h4 className="text-xl font-bold tracking-[0.25px] text-[#22947E]">
                  {step.title}
                </h4>
                <p className="max-w-[210px] text-base font-medium leading-6 text-[#17201E]">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="w-full bg-white font-['Plus_Jakarta_Sans'] px-6 py-16 lg:py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-8">
          <h2 className="max-w-[400px] text-center text-[32px] font-semibold leading-[1.15] tracking-[-0.88px] text-[#17201E] md:text-[42px]">
            Great care deserves to be discovered.
          </h2>
          <p className="max-w-[420px] text-center text-base font-medium leading-[26px] text-[#66716D]">
            Mungo helps pet-care professionals connect with pet parents looking for the care they
            provide.
          </p>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-[22px]">
          {partners.map((p) => (
            <li key={p.label} className="flex w-[222px] flex-col items-center gap-[22px]">
              <img
                src={p.image}
                alt={p.alt}
                className="aspect-square w-full rounded-[20px] object-cover"
              />
              <span className="rounded-full bg-[#EAF8F4] px-4 pb-[9px] pt-2 text-[13.5px] font-semibold leading-5 text-[#22947E]">
                {p.label}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="#partner"
          className="mt-8 inline-flex items-center rounded-full bg-[#2DBB9F] px-[26px] py-3 text-base font-semibold leading-[130%] text-white transition-colors hover:bg-[#22947E]"
        >
          Partner with Mungo
        </a>
      </div>
    </section>

    <section className="w-full bg-white font-['Plus_Jakarta_Sans'] px-6 py-16 lg:px-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[760px] flex-col items-center gap-12">
        {/* Heading */}
        <div className="relative flex w-full justify-center">
          <h2 className="max-w-[320px] text-center text-[32px] font-semibold leading-[1.15] text-[#17201E] md:text-[42px]">
            Questions? We've got you.
          </h2>
          <img
            src={home19}
            alt=""
            aria-hidden="true"
            className="absolute right-0 top-0 hidden h-[144px] w-[154px] object-contain md:block lg:-right-[60px]"
          />
        </div>

        {/* Items */}
        <div className="w-full">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`border-t border-[#17201E]/10 ${i === faqs.length - 1 ? "border-b" : ""}`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-[26px] text-left"
                  >
                    <span className="text-[17.9px] font-semibold leading-[27px] text-[#17201E]">
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-[26px] font-normal leading-[33px] text-[#22947E] transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  className={`grid transition-[grid-template-rows] duration-200 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[651px] pb-6 text-base font-medium leading-[23px] text-[#66716D]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

      <section id="blog" className="w-full bg-[#F5FBF9] px-6 py-16 lg:px-20 lg:py-[120px]" style={{ fontFamily: '"Segoe UI", system-ui, -apple-system, Roboto, sans-serif' }}>
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-[14px] lg:px-16">
          <h2 className="text-[30px] font-semibold leading-[1.3] tracking-[-0.8px] text-[#17201E] sm:text-[34px] lg:text-[38px] lg:leading-[60px]">
            From the Mungo journal.
          </h2>

          <div className="grid w-full grid-cols-1 gap-8 pt-[42px] md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <a key={post.title} href="/blog" className="group flex flex-col items-start gap-[10.8px] pb-[13px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2DBB9F]">
                <div className="h-[220px] w-full overflow-hidden rounded-[28px] transition-transform duration-200 group-hover:-translate-y-1 sm:h-[272px]" style={post.art}>
                  <img src={post.img} alt={post.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <p className="pt-[7px] text-[14px] font-semibold uppercase leading-[17px] tracking-[0.46px] text-[#22947E]">{post.cat}</p>
                <h3 className="text-[18.4px] font-semibold leading-[1.3] text-[#17201E] group-hover:underline">{post.title}</h3>
                <p className="text-[12px] leading-5 text-[#66716D]">{post.meta}</p>
              </a>
            ))}
          </div>

          <a href="/blog" className="flex items-start gap-3 px-1 pt-[26px] text-[16px] font-semibold leading-6 text-[#17201E] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2DBB9F]">
            Read all stories <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section id="download" className="w-full bg-[#2DBB9F] px-6 py-16 lg:px-20 lg:py-20" style={{ fontFamily: '"Segoe UI", system-ui, -apple-system, Roboto, sans-serif' }}>
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-6 lg:px-16">
          <div className="flex w-full max-w-[480px] flex-col items-center gap-[18px]">
            <h2 className="text-center text-[40px] font-bold leading-[1.3] tracking-[-0.5px] text-white sm:text-[52px] lg:text-[63px]">
              Better care<br />starts here.
            </h2>
            <p className="max-w-[480px] pb-[14px] text-center text-[18px] leading-[1.5] text-white">
              Whatever they need next, Mungo makes it easier to find the right care.
            </p>
          </div>

          <a href="/download" className="inline-flex items-center justify-center rounded-full bg-white px-[26px] py-[14px] text-[14.8px] font-semibold leading-[22px] text-[#22947E] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Download Mungo
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
