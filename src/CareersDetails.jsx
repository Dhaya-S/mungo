import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const JOB = {
  title: "Senior product designer",
  team: "Design",
  location: "Bengaluru",
  type: "Full-time",
  mode: "Hybrid",
  overview: [
    "As a Senior Product Designer at Mungo, you'll help shape the experience that connects pet parents with the care providers they trust.",
    "You'll work closely with product and engineering to design flows that feel simple, warm, and genuinely useful — from first discovery through an ongoing service relationship. This is a hands-on role: you'll be designing real screens and flows, not just documenting a system.",
  ],
  responsibilities: [
    "Design end-to-end product experiences across the Mungo app, from early concepts to polished flows.",
    "Partner closely with product and engineering to ship work that holds up in the real product.",
    "Contribute to and help evolve Mungo's design system and visual language.",
    "Bring clarity to complex flows — service discovery, provider connection, and the active-care experience.",
  ],
  requirements: [
    "Several years of experience designing product experiences end-to-end.",
    "A strong portfolio showing thoughtful, detailed product work.",
    "Comfort working closely with engineering to get details right in production.",
    "Genuine care about craft, clarity, and the people using what you build.",
  ],
  niceToHave: [
    "Experience designing for two-sided marketplaces or service platforms.",
    "An interest in pets, pet care, or consumer lifestyle products.",
  ],
  benefits: [
    "Work your way — flexibility in how and where you do your best work.",
    "Keep growing — room to learn and take on new challenges.",
    "Take care of yourself — support for your health and wellbeing.",
    "Pet-friendly perks — because we build for pets, and love having them around.",
  ],
  about:
    "Mungo brings pet parents and trusted care providers together in one simple experience — from finding the right care to staying connected while it happens. We're a small, product-led team building the infrastructure for better pet care.",
};

const RELATED = [
  { title: "Backend Engineer", meta: "Product & Engineering — Bengaluru" },
  { title: "Operations Associate", meta: "Operations — Bengaluru" },
  { title: "Growth Marketing Manager", meta: "Marketing & Growth — Remote" },
];

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "responsibilities", label: "Responsibilities" },
  { id: "looking-for", label: "What we're looking for" },
  { id: "benefits", label: "Benefits" },
  { id: "about", label: "About Mungo" },
];

const H2 = "text-[20px] font-semibold tracking-[-0.024em] text-[#17201E]";

function DashList({ items }) {
  return (
    <ul>
      {items.map((t) => (
        <li key={t} className="relative py-2 pl-[26px] text-base leading-[26px]">
          <span className="absolute left-0 top-2 font-bold text-[#22947E]">—</span>
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function JobDetail() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    TOC.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white pb-24 font-['Plus_Jakarta_Sans',sans-serif] text-[#17201E] md:pb-0">
      <Navbar currentPage="careers" />

      <main className="px-6 md:px-20">
        <div className="mx-auto max-w-[1280px]">
          <nav className="pt-5 text-[13px] text-[#66716D]">
            <a href="/careers">Careers</a> / <a href="/careers/roles">Open Roles</a> /{" "}
            <span className="text-[#17201E]">Senior Product Designer</span>
          </nav>

          {/* Job header */}
          <section className="flex flex-col gap-[18px] border-b border-[#17201E]/[0.09] pb-11 pt-9">
            <h1 className="text-[42px] font-semibold leading-[48px] tracking-[-0.02em]">{JOB.title}</h1>
            <div className="flex flex-wrap gap-x-[22px] text-sm">
              <span className="py-[13px]">{JOB.team}</span>
              {[JOB.location, JOB.type, JOB.mode].map((m) => (
                <span key={m} className="py-[13px] text-[#66716D]">{m}</span>
              ))}
            </div>
            <div className="pt-2">
              <a href="/careers/apply" className="inline-flex rounded-full bg-[#2DBB9F] px-[26px] py-3.5 text-[14.5px] font-bold text-white">
                Apply for this role
              </a>
            </div>
          </section>

          {/* Body */}
          <div className="grid gap-10 pb-16 pt-14 md:grid-cols-[220px_1fr] md:gap-16">
            <aside className="hidden md:block">
              <div className="sticky top-24">
                <p className="pb-3.5 text-[11px] font-medium uppercase tracking-[0.05em] text-[#66716D]">On this page</p>
                <nav className="flex flex-col">
                  {TOC.map((t) => {
                    const on = active === t.id;
                    return (
                      <a
                        key={t.id}
                        href={`#${t.id}`}
                        className={`border-l-2 py-[7px] pl-3.5 text-sm ${
                          on ? "border-[#22947E] font-semibold text-[#22947E]" : "border-transparent font-medium text-[#66716D] hover:text-[#17201E]"
                        }`}
                      >
                        {t.label}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </aside>

            <div className="flex flex-col gap-11">
              <section id="overview" className="scroll-mt-24 space-y-[15px]">
                <h2 className={H2}>About the role</h2>
                <div className="max-w-[976px] space-y-0 text-base font-medium leading-[26px]">
                  {JOB.overview.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </section>

              <section id="responsibilities" className="scroll-mt-24 space-y-4">
                <h2 className={H2}>What you'll do</h2>
                <DashList items={JOB.responsibilities} />
              </section>

              <section id="looking-for" className="scroll-mt-24 space-y-2.5">
                <h2 className={H2}>What we're looking for</h2>
                <div className="pt-1.5"><DashList items={JOB.requirements} /></div>
                <h3 className="pt-3.5 text-base font-medium tracking-[-0.02em]">Nice to have</h3>
                <DashList items={JOB.niceToHave} />
              </section>

              <section id="benefits" className="scroll-mt-24 space-y-4">
                <h2 className={H2}>Benefits</h2>
                <div className="space-y-[9px] rounded-[20px] bg-[#F5FBF9] px-7 py-7">
                  {JOB.benefits.map((b) => (
                    <p key={b} className="text-base font-medium leading-[26px]">{b}</p>
                  ))}
                </div>
              </section>

              <section id="about" className="scroll-mt-24 space-y-[15px]">
                <h2 className={H2}>About Mungo</h2>
                <p className="text-base font-medium leading-[26px]">{JOB.about}</p>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Related roles */}
      <section className="bg-[#F5FBF9] px-6 py-16 md:px-20">
        <div className="mx-auto max-w-[1152px] space-y-8">
          <h2 className="text-[42px] font-semibold leading-[51px] tracking-[-0.015em]">Related roles</h2>
          <div className="border-b border-[#17201E]/[0.09]">
            {RELATED.map((r) => (
              <a
                key={r.title}
                href="/careers/details"
                className="flex flex-wrap items-center justify-between gap-1 border-t border-[#17201E]/[0.09] py-5 hover:text-[#22947E]"
              >
                <span className="text-base">{r.title}</span>
                <span className="text-[13px] text-[#66716D]">{r.meta}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile apply bar */}
      <div
        id="mobileApplyBar"
        className="fixed inset-x-0 bottom-0 z-30 border-t border-[#17201E]/10 bg-white px-6 py-3.5 shadow-[0_-8px_24px_rgba(23,32,30,0.08)] md:hidden"
      >
        <a
          id="mobileApplyLink"
          href="/careers/apply"
          className="flex justify-center rounded-full bg-[#2DBB9F] px-[26px] py-3.5 text-[14.5px] text-white"
        >
          Apply for this role
        </a>
      </div>
    </div>
  );
}