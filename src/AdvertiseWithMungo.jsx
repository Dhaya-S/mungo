import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Advertise1 from './assets/Advertise-1.png';
import Advertise2 from './assets/Advertise-2.png';
import Advertise3 from './assets/Advertise-3.png';
import Advertise4 from './assets/Advertise-4.png';

const IMG = {
  hero: Advertise1,
  stories: [
    Advertise2,
    Advertise3,
    Advertise4,
  ],
  whyMungo: "",
};

const reach = [
  ["Discover", "Pet parents discovering care, products and services."],
  ["Decide", "People comparing options and choosing what's right for their pet."],
  ["Care", "People actively managing everyday pet needs."],
  ["Return", "Ongoing relationships with services, brands and care providers."],
];

const why = [
  ["01", "Relevant discovery", "Help your brand appear alongside relevant pet-care needs."],
  ["02", "High-intent moments", "Connect with people when they're actively exploring products, services or care."],
  ["03", "Context that matters", "Position your brand within useful, trustworthy pet-care experiences."],
  ["04", "Long-term connection", "Build familiarity beyond a single interaction."],
];

const ways = [
  ["In-App visibility", "Relevant brand placements within the Mungo experience."],
  ["Service discovery", "Appear alongside relevant care categories and services."],
  ["Product discovery", "Introduce products in relevant pet-care contexts."],
  ["Content & editorial", "Collaborate on useful, pet-first content."],
  ["Campaign partnerships", "Build campaigns around specific pet-care moments."],
  ["Custom brand collaborations", "Create tailored campaigns with the Mungo team."],
];

const packages = [
  {
    name: "Enhanced",
    desc: "For brands looking for deeper engagement.",
    items: ["Expanded visibility", "Content collaboration","Enhanced campaign placement","Additional promotional opportunities"],
  },
  {
    name: "Essential",
    desc: "For brands looking to build awareness and visibility.",
    items: [
      "Custom campaign strategy",
      "Multiple touchpoints",
      "Bespoke creative collaboration",
      "Campaign reporting where available",
    ],
  },
  {
    name: "Custom",
    desc: "For brands looking for a tailored campaign.",
    items: [
      "Custom campaign strategy",
      "Multiple touchpoints",
      "Bespoke creative collaboration",
      "Campaign reporting where available",
    ],
  },
];

const compare = [
  ["In-App visibility", "yes", "yes", "Custom"],
  ["Content collaboration", "no", "yes", "yes"],
  ["Campaign support", "no", "yes", "yes"],
  ["Custom activation", "no", "no", "yes"],
  ["Reporting", "Available where applicable", "Available where applicable", "Available where applicable"],
];

const stories = [
  ["Service Discovery Placement", "Brand presence alongside a relevant care category."],
  ["Editorial Collaboration", "Content built around a real pet-care moment."],
  ["Campaign Partnership", "A tailored activation around a specific launch or season."],
];

const faqs = [
  ["Who can advertise with Mungo?", "Brands and businesses whose products or services are relevant to pet parents."],
  ["What advertising opportunities does Mungo offer?", ""],
  ["Can campaigns be customised?", ""],
  ["Can brands collaborate on content?", ""],
  ["How do I get started?", ""],
  ["Is there a media kit?", ""],
  ["How are campaigns measured?", ""],
  ["What types of brands does Mungo work with?", ""],
];

const H2 = "text-[42px] font-semibold text-[#17201E] text-center";
const LEDE = "text-base font-medium leading-[26px] text-[#66716D] text-center";

function Cell({ v }) {
  if (v === "yes") return <span className="text-sm text-[#22947E]">✓</span>;
  if (v === "no") return <span className="text-sm text-[#17201E]/25">—</span>;
  return <span className="text-[13px] text-[#17201E]">{v}</span>;
}

export default function AdvertisePage() {
  return (
    <>
      <Navbar currentPage="advertise" />
      <main className="font-jakarta bg-white text-[#17201E]">
      {/* HERO */}
      <section className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 py-12 md:grid-cols-2 md:px-16">
        <div className="max-w-[561px]">
          <h1 className="text-[42px] font-semibold leading-[65px] tracking-[-1.28px]">
            Reach pet parents.
            <br />
            Grow your brand.
          </h1>
          <p className="mt-3 max-w-[480px] text-base font-medium leading-[26px] text-[#66716D]">
            Connect your brand with people who care deeply about the pets in their lives.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2 pt-3">
            <a href="#contact" className="rounded-full bg-[#2DBB9F] px-[26px] py-[14px] text-sm font-semibold text-white">
              Let's talk
            </a>
            <a href="#packages" className="flex items-center gap-1.5 px-1 py-3.5 text-sm font-semibold">
              Explore opportunities <span className="text-base font-bold">→</span>
            </a>
          </div>
        </div>
        <img loading="lazy" decoding="async" src={IMG.hero} alt="Dog playing fetch in a park" className="h-[561px] w-full rounded-[28px] object-cover" />
      </section>

      {/* WHO YOU REACH */}
      <section className="mx-auto max-w-[1280px] px-6 py-[103px] md:px-16">
        <h2 className={`${H2} mx-auto max-w-[560px] leading-[48px] tracking-[-0.88px]`}>
          Meet the people behind the paws.
        </h2>
        <p className={`${LEDE} mx-auto mt-[19px] max-w-[570px]`}>
          Mungo sits within the everyday pet-care journey — the moments where pet parents are actively
          discovering, deciding, and caring for the pets they love.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reach.map(([t, d]) => (
            <div key={t} className="px-[22px] py-[26px] text-center">
              <h4 className="text-base font-bold tracking-[-0.32px]">{t}</h4>
              <p className="mt-[9px] text-xs font-medium leading-[23px]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY ADVERTISE */}
      <section className="bg-[#F5FBF9] px-6 py-[103px] md:px-20">
        <div className="mx-auto max-w-[1280px] md:px-16">
          <h2 className={`${H2} leading-[66px] tracking-[-0.88px]`}>More than visibility.</h2>
          <p className={`${LEDE} mx-auto mt-3 max-w-[480px]`}>
            Mungo connects brands with pet parents at meaningful moments across the pet-care journey.
          </p>
          <div className="mt-12 border-b border-[#17201E]/[0.09]">
            {why.map(([n, t, d]) => (
              <div key={n} className="flex gap-6 border-t border-[#17201E]/[0.09] py-[29px]">
                <p className="w-[90px] shrink-0 self-start text-[13px] font-bold text-[#22947E]">{n}</p>
                <div>
                  <h3 className="text-lg font-bold leading-[33px] tracking-[-0.44px]">{t}</h3>
                  <p className="mt-[7px] text-base font-medium text-[#66716D]">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAYS TO SHOW UP */}
      <section className="mx-auto max-w-[1280px] px-6 py-[103px] md:px-16">
        <h2 className={`${H2} leading-[66px] tracking-[-0.88px]`}>Ways to show up.</h2>
        <div className="mx-auto mt-12 grid max-w-[1104px] gap-x-[68px] gap-y-[31px] md:grid-cols-3">
          {ways.map(([t, d]) => (
            <div key={t} className="min-h-[96px] rounded-lg border-[0.8px] border-[#B2B2B2] p-2">
              <h4 className="text-lg tracking-[-0.36px]">{t}</h4>
              <p className="mt-[19px] text-sm font-medium leading-[21px] text-[#66716D]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="bg-[#F5FBF9] px-6 py-[103px] md:px-20">
        <div className="mx-auto max-w-[1280px] md:px-16">
          <h2 className={`${H2} leading-[66px] tracking-[-0.88px]`}>Choose your reach.</h2>
          <p className={`${LEDE} mt-4`}>Flexible opportunities for brands at different stages of growth.</p>
          <div className="mt-12 grid gap-10 md:grid-cols-3 lg:gap-20">
            {packages.map((p) => (
              <div key={p.name} className="flex flex-col rounded-xl bg-white p-[30px]">
                <h3 className="text-2xl font-semibold tracking-[-0.48px]">{p.name}</h3>
                <p className="mt-[17px] text-sm font-medium leading-[22px] text-[#66716D]">{p.desc}</p>
                <ul className="mt-[17px] flex flex-1 flex-col gap-3">
                  {p.items.map((i) => (
                    <li key={i} className="flex gap-2 text-[14.5px] leading-[22px]">
                      <span className="text-[13.7px] font-semibold text-[#22947E]">✓</span>
                      {i}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-[17px] rounded-full bg-[#2DBB9F] py-3.5 text-center text-[15px] font-bold text-white">
                  Let's Talk
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="mx-auto max-w-[1280px] px-6 py-[103px] md:px-16">
        <h2 className="max-w-[600px] text-[42px] font-semibold leading-[66px] tracking-[-0.88px]">
          Compare opportunities.
        </h2>
        <div className="mt-11 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                <th className="px-[18px] py-4 text-left text-[13px] font-bold uppercase tracking-[0.39px]">Feature</th>
                {["Essential", "Enhanced", "Custom"].map((h) => (
                  <th key={h} className="px-[18px] py-4 text-center text-[13px] font-bold uppercase tracking-[0.39px] text-[#22947E]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compare.map(([f, ...cells]) => (
                <tr key={f} className="border-t border-[#17201E]/10">
                  <td className="px-[18px] py-[16.5px] text-[13px] font-semibold">{f}</td>
                  {cells.map((c, i) => (
                    <td key={i} className="px-[18px] py-[16.5px] text-center">
                      <Cell v={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* WHY MUNGO */}
      <section className="bg-[#2DBB9F] px-6 pb-[104px] pt-[120px] md:px-20">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center md:px-16">
          <h2 className="text-[42px] font-semibold leading-[78px] tracking-[-1.04px] text-white">Why Mungo?</h2>
          <p className="max-w-[560px] pb-12 pt-4 text-center text-base font-medium leading-[26px] text-white/[0.68]">
            Pet care is personal. The brands that become part of that journey should feel relevant, useful and trustworthy.
          </p>
          <div
            className="relative flex h-[471px] w-full max-w-[1100px] items-end justify-center rounded-[28px] bg-cover bg-center p-[18px]"
            style={{
              backgroundImage: IMG.whyMungo
                ? `url(${IMG.whyMungo})`
                : "linear-gradient(132.58deg,#1D2A27 0%,#141C1A 100%)",
            }}
          >
            <span className="rounded-full bg-[#17201E]/[0.55] px-3 py-[7px] text-[11.5px] text-white backdrop-blur-[3px]">
              The Mungo product experience
            </span>
          </div>
        </div>
      </section>

      {/* CAMPAIGN STORIES */}
      <section className="mx-auto max-w-[1280px] px-6 py-[103px] md:px-16">
        <h2 className={`${H2} leading-[60px] tracking-[-0.8px]`}>Built around better pet care.</h2>
        <p className={`${LEDE} mx-auto mt-4 max-w-[480px]`}>
          Conceptual campaign formats — structured for future content as real collaborations take shape.
        </p>
        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {stories.map(([t, d], i) => (
            <div key={t}>
              <div
                className="h-[278px] rounded-[28px] bg-[#d3e9e2] bg-cover bg-center"
                style={{ backgroundImage: `url(${IMG.stories[i]})` }}
              />
              <h4 className="pt-[14px] text-xl font-bold tracking-[-0.32px]">{t}</h4>
              <p className="mt-[5px] text-base font-medium leading-5 text-[#66716D]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5FBF9] px-6 py-[103px] md:px-20">
        <h2 className={`${H2} tracking-[-0.76px]`}>Questions, answered.</h2>
        <div className="mx-auto mt-11 max-w-[760px] border-b border-[#17201E]/10">
          {faqs.map(([q, a]) => (
            <details key={q} className="group border-t border-[#17201E]/10">
              <summary className="flex cursor-pointer list-none items-center justify-between px-1 py-[26px] text-[17.9px] font-bold">
                {q}
                <span className="text-xl font-normal text-[#22947E] transition-transform group-open:rotate-45">+</span>
              </summary>
              {a && <p className="px-1 pb-5 text-sm font-medium leading-[22px] text-[#66716D]">{a}</p>}
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="bg-[#2DBB9F] px-6 py-[104px] md:px-20">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[18px] text-center">
          <h2 className="max-w-[720px] text-[40px] font-bold leading-[1.02] tracking-[-1px] text-white md:text-[62.9px]">
            Let's Build Something Worth Barking About.
          </h2>
          <p className="max-w-[480px] text-base font-medium leading-[26px] text-white/85">
            Tell us what you're trying to achieve and we'll explore what could work for your brand.
          </p>
          <a href="mailto:hello@mungo.com" className="rounded-full bg-white px-[26px] py-3.5 text-[14.9px] text-[#22947E]">
            Let's Talk
          </a>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}