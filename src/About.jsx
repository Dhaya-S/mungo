import { useState } from "react";
import { Plus } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import about1 from './assets/about-1.png';
import about2 from './assets/about-2.png';
import about3 from './assets/about-3.png';
import about4 from './assets/about-4.png';
import about5 from './assets/about-5.png';
import about6 from './assets/about-6.png';
import about7 from './assets/about-7.png';
import about8 from './assets/about-8.png';
import about9 from './assets/about-9.png';
import about10 from './assets/about-10.png';
import about11 from './assets/about-11.png';

const IMG = {
  hero: about1,
  why: about2,
  belief: about7,
  providers: about11,
  audience: {
    parents: about8,
    providers: about9,
    brands: about10,
  },
  steps: [about3, about4, about5, about6],
};

const PROBLEM = [
  { title: "Find", text: "Finding the right person or service." },
  { title: "Choose", text: "Knowing what feels right for your pet." },
  { title: "Connect", text: "Having a clear connection with the person caring for them." },
  { title: "Stay Close", text: "Knowing what's happening throughout the care journey." },
];

const JOURNEY = [
  { title: "Find", text: "Discover the care, service or product that fits." },
  { title: "Choose", text: "Connect with the people behind the care." },
  { title: "Connect", text: "Stay connected while care takes place." },
  { title: "Stay Close", text: "Bring the journey to a clear finish." },
];

const SERVICES = ["Grooming", "Veterinary Care", "Boarding", "Sitting", "Walking", "Pet products"];

const AUDIENCE = [
  { title: "Pet parents", text: "A simpler way to discover, connect with and manage everyday pet care.", img: about8 },
  { title: "Care providers", text: "A better way for pet-care professionals to connect with the people looking for their services.", img: about9 },
  { title: "Pet brands & partners", text: "A connected environment for businesses and partners that want to contribute to better pet care.", img: about10 },
];

const VALUES = [
  { title: "Pet first", text: "Every decision starts with what is better for pets and the people caring for them." },
  { title: "Simple", text: "Pet care is already full of decisions. The experience around it should feel easier." },
  { title: "Connected", text: "Good care happens through strong connections between people, services and experiences." },
  { title: "Trustworthy", text: "Pet parents should feel confident about the care they choose." },
];

const FAQS = [
  {
    q: "What is Mungo?",
    a: "Mungo is a pet-care platform that brings everyday pet care into one connected experience — helping pet parents discover services, connect with providers, and stay connected throughout the care journey.",
  },
  { q: "Who is Mungo for?", a: "" },
  { q: "What services does Mungo offer?", a: "" },
  { q: "How does Mungo work?", a: "" },
  { q: "How does Mungo work with care providers?", a: "" },
  { q: "How can businesses partner with Mungo?", a: "" },
];

const H2 = "text-[32px] font-semibold leading-[1.2] tracking-[-0.022em] text-[#17201E] md:text-[42px] md:leading-[51px]";
const BTN = "inline-flex items-center justify-center rounded-full bg-[#2DBB9F] px-[26px] py-[15px] text-sm font-semibold text-white transition hover:bg-[#22947E]";

function Steps({ items }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
      {items.map((s, i) => (
        <div key={s.title} className="flex flex-col items-center gap-4 text-center">
          <img src={IMG.steps[i]} alt="" className="h-[181px] w-[186px] object-contain" />
          <h4 className="pt-3.5 text-xl font-bold tracking-[0.03em] text-[#22947E]">{s.title}</h4>
          <p className="max-w-[273px] text-base font-medium leading-[22px]">{s.text}</p>
        </div>
      ))}
    </div>
  );
}

function Faq({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-[#17201E]/10 last:border-b">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-1 py-6 text-left text-[17.9px] font-semibold"
      >
        {q}
        <Plus size={20} className={`shrink-0 text-[#22947E] transition-transform ${open ? "rotate-45" : ""}`} />
      </button>
      {open && (
        <p className="px-1 pb-6 text-sm font-medium leading-[22px] text-[#66716D]">
          {a || "Get in touch via our Contact page and we'll be happy to help."}
        </p>
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#17201E]">
      <Navbar currentPage="about" />

      {/* Hero */}
      <section className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 pt-12 md:grid-cols-2 md:px-16 md:pt-[68px]">
        <div className="flex flex-col gap-[13px]">
          <h1 className="max-w-[450px] text-[44px] font-semibold leading-[1.2] tracking-[-0.02em] md:text-[64px]">Care should feel less complicated.</h1>
          <p className="max-w-[480px] pt-1 text-base font-medium leading-[26px] text-[#66716D]">
            We're building a simpler, more connected way to care for the pets we love.
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-3.5">
            <a href="/" className={BTN}>Explore Mungo</a>
            <a href="#" className="px-6 py-3.5 text-sm font-semibold">Explore Services</a>
          </div>
        </div>
        <div
          className="aspect-square rounded-xl bg-[#dff3ee] bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG.hero})` }}
          role="img"
          aria-label="Woman cuddling her golden retriever"
        />
      </section>

      {/* Why Mungo exists */}
      <section className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 py-24 md:grid-cols-[522px_1fr] md:gap-14 md:px-16 md:py-[110px]">
        <div
          className="h-[300px] rounded-xl bg-[#dff3ee] bg-cover bg-center md:h-[356px]"
          style={{ backgroundImage: `url(${IMG.why})` }}
          role="img"
          aria-label="Cat being cuddled"
        />
        <div className="flex flex-col">
          <h2 className={`${H2} pb-4`}>Because they're family.</h2>
          <div className="flex flex-col gap-[17px] text-base font-medium leading-[29px]">
            <p>Caring for a pet is made up of countless little decisions — finding the right groomer, choosing a vet, arranging a walk, planning a stay, or simply finding something they need.</p>
            <p className="text-[#66716D]">But pet care can often feel scattered across different places, people and experiences.</p>
            <p className="text-[#66716D]">Mungo exists to bring those pieces closer together.</p>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-[#F5FBF9] px-6 py-24 md:px-20 md:pb-[129px] md:pt-[109px]">
        <div className="mx-auto flex max-w-[1152px] flex-col gap-10">
          <h2 className={`${H2} mx-auto max-w-[640px] text-center`}>Pet care is personal. It shouldn't be complicated.</h2>
          <Steps items={PROBLEM} />
          <p className="text-center text-lg font-bold leading-7 text-[#22947E]">Mungo brings these moments into one connected experience.</p>
        </div>
      </section>

      {/* What we're building */}
      <section className="bg-[#2DBB9F] px-6 py-24 md:px-20 md:py-[109px]">
        <div className="mx-auto flex max-w-[1152px] flex-col items-center gap-[13px] text-center">
          <h2 className="max-w-[350px] text-[32px] font-semibold leading-[1.3] tracking-[-0.025em] text-white md:text-[42px] md:leading-[55px]">
            One place for their care.
          </h2>
          <p className="max-w-[460px] pt-3 text-base font-medium leading-[26px] text-white/85">
            Mungo brings pet parents, care providers, services and products closer together — making everyday pet care easier to discover, manage and trust.
          </p>
          <div className="mt-6 grid w-full grid-cols-2 gap-y-2 sm:grid-cols-3 lg:grid-cols-6">
            {SERVICES.map((s) => (
              <a key={s} href="#" className="px-4 py-6 text-lg font-bold text-white hover:underline">
                {s}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-[109px]">
        <div className="mx-auto flex max-w-[1152px] flex-col gap-[52px]">
          <h2 className={`${H2} mx-auto max-w-[420px] text-center`}>From finding care to feeling connected.</h2>
          <Steps items={JOURNEY} />
        </div>
      </section>

      {/* Our belief */}
      <section className="bg-[#EAF8F4] px-6 py-24 md:px-20 md:py-[110px]">
        <div className="mx-auto grid max-w-[1152px] items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="flex max-w-[530px] flex-col pt-4">
            <h2 className="text-[32px] font-semibold leading-[1.28] tracking-[-0.024em] md:text-[42px] md:leading-[54px]">
              Better care starts with better connections.
            </h2>
            <p className="max-w-[440px] pt-[17px] text-base font-medium leading-[29px] text-[#66716D]">
              We believe pet care works better when the people, services and experiences around it feel connected.
            </p>
            <p className="max-w-[440px] pt-[17px] text-base font-medium leading-[29px] text-[#66716D]">
              Mungo is designed around that belief.
            </p>
          </div>
          <div
            className="h-[300px] rounded-3xl bg-[#dff3ee] bg-cover bg-center md:h-[354px]"
            style={{ backgroundImage: `url(${IMG.belief})` }}
            role="img"
            aria-label="Family relaxing with their dog and cat"
          />
        </div>
      </section>

      {/* Who Mungo is for */}
      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-[109px]">
        <div className="mx-auto flex max-w-[1152px] flex-col gap-[52px]">
          <h2 className={`${H2} mx-auto max-w-[490px] text-center`}>Built around every side of pet care.</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {AUDIENCE.map((a) => (
              <div key={a.title} className="flex flex-col gap-[9px]">
                <div
                  className="aspect-[368/294] rounded-[28px] bg-[#dff3ee] bg-cover bg-center"
                  style={{ backgroundImage: `url(${a.img})` }}
                  role="img"
                  aria-label={a.title}
                />
                <h3 className="text-xl font-bold leading-8 tracking-[-0.02em]">{a.title}</h3>
                <p className="text-base font-medium leading-[22px] text-[#66716D]">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we value */}
      <section className="bg-[#F5FBF9] px-6 py-24 md:px-20 md:py-[109px]">
        <div className="mx-auto flex max-w-[1152px] flex-col gap-12">
          <h2 className={`${H2} mx-auto max-w-[450px] text-center`}>The way we think about care.</h2>
          <div className="border-b border-[#17201E]/[0.09]">
            {VALUES.map((v, i) => (
              <div key={v.title} className="flex gap-5 border-t border-[#17201E]/[0.09] py-7">
                <p className="w-[90px] shrink-0 text-[13px] font-bold leading-[21px] text-[#22947E]">{String(i + 1).padStart(2, "0")}</p>
                <div className="flex flex-col gap-[7px]">
                  <h3 className="text-lg font-bold leading-[30px] tracking-[-0.022em]">{v.title}</h3>
                  <p className="max-w-[500px] text-base font-medium leading-[22px] text-[#66716D]">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 py-24 md:grid-cols-2 md:gap-14 md:px-16 md:py-[110px]">
        <div
          className="h-[320px] rounded-[28px] bg-[#dff3ee] bg-cover bg-center md:h-[465px]"
          style={{ backgroundImage: `url(${IMG.providers})` }}
          role="img"
          aria-label="Groomer with a fluffy white dog"
        />
        <div className="flex flex-col gap-[13px]">
          <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] md:text-[42px] md:leading-[47px]">
            Care is better when the right people are connected.
          </h2>
          <p className="max-w-[433px] pb-2 pt-[3px] text-base font-medium leading-[26px] text-[#66716D]">
            Mungo brings pet parents closer to the people who care for their pets — from groomers and veterinarians to sitters, walkers and boarding providers.
          </p>
          <a href="/partner.html" className={`${BTN} self-start`}>Become a provider</a>
        </div>
      </section>

      {/* The future */}
      <section className="bg-[#F5FBF9] px-6 py-24 md:py-[109px]">
        <div className="mx-auto flex max-w-[600px] flex-col items-center gap-3.5 text-center">
          <h2 className="max-w-[360px] text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[42px] md:leading-[46px]">
            We're just getting started.
          </h2>
          <p className="max-w-[468px] pb-4 pt-0.5 text-base font-medium leading-[26px] text-[#66716D]">
            There is still a lot to make simpler, more connected and more thoughtful about everyday pet care. Mungo is building toward a future where finding and managing pet care feels less like a task — and more like something that simply works.
          </p>
          <a href="/" className={BTN}>Explore Mungo</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto flex max-w-[1280px] flex-col items-center gap-11 px-6 py-24 md:px-16 md:py-[109px]">
        <h2 className={H2}>Questions, answered.</h2>
        <div className="w-full max-w-[760px]">
          {FAQS.map((f) => (
            <Faq key={f.q} {...f} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden bg-[#2DBB9F] px-6 py-24 text-center md:px-20 md:py-[110px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-[0.16]"
          style={{ backgroundImage: `url(${IMG.ctaBg})` }}
        />
        <div className="mx-auto flex max-w-[1152px] flex-col items-center gap-[18px]">
          <h2 className="max-w-[420px] text-[44px] font-semibold leading-[1.05] tracking-[-0.018em] text-white md:text-[62.9px] md:leading-[59px]">
            Better care starts here.
          </h2>
          <p className="max-w-[455px] text-base font-medium leading-[26px] text-white/80">
            Discover a simpler, more connected way to care for the pets you love.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-3">
            <a href="/" className="rounded-full border border-white/70 bg-[#2DBB9F] px-[26px] py-[15px] text-[14.9px] font-bold text-white hover:bg-[#22947E]">
              Explore Mungo
            </a>
            <a href="#" className="px-1 py-3.5 text-[15.8px] font-bold text-white">Download Now</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}