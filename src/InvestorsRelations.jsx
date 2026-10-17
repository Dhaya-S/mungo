import { useState } from "react";
import { ArrowRight, ArrowDown, Check, Plus } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import investor1 from './assets/investor-1.png';
import investor2 from './assets/investor-2.png';
import investor3 from './assets/investor-3.png';
import investor4 from './assets/investor-4.png';
import investor5 from './assets/investor-5.png';
import investor6 from './assets/investor-6.png';

const IMG = {
  hero: investor1,
  opportunity: investor2,
  steps: [investor3, investor4, investor5, investor6],
};

const GLANCE = [
  { title: "Pet parents", text: "Finding and staying connected with the care their pets need." },
  { title: "Care providers", text: "Groomers, vets, sitters, walkers and boarding hosts." },
  { title: "Pet services", text: "Grooming, veterinary care, boarding, sitting, walking and products." },
  { title: "Pet ecosystem", text: "Brands, partners and organisations aligned around better pet care." },
];

const STEPS = [
  { title: "Find", text: "Discover the care, service or product that fits." },
  { title: "Choose", text: "Connect with the people behind the care." },
  { title: "Connect", text: "Stay connected while care takes place." },
  { title: "Stay Close", text: "Bring the journey to a clear finish." },
];

/* The Figma file repeats a second row of labels under the illustrations. */
const JOURNEY_LABELS = ["Find", "Connect", "Care", "Complete"];

const ECOSYSTEM = ["Pet Parents", "Mungo", "Care Providers", "Pet Brands", "Partners"];

const UPDATES = [
  { date: "September 2026", cat: "Company Update", title: "Mungo expands its pet-care experience", desc: "A look at how the Mungo product continues to grow.", href: "#" },
  { date: "September 2026", cat: "Product", title: "A closer look at the Mungo care journey", desc: "How Find, Connect, Care and Complete work together.", href: "#" },
  { date: "August 2026", cat: "Community", title: "Stories from the people and pets we serve", desc: "A look at the providers and pet parents on Mungo.", href: "#" },
];

const RESOURCES = [
  { label: "Company overview", href: "#" },
  { label: "Business overview", href: "#" },
  { label: "Press resources", href: "#" },
  { label: "Company updates", href: "#" },
  { label: "Partnership information", href: "/partner.html" },
  { label: "Contact investor relations", href: "#ir-contact" },
];

const FAQS = [
  { q: "What is Mungo?", a: "Mungo is a platform that connects pet parents with trusted pet-care providers, bringing discovery, connection and the service experience itself into one place." },
  { q: "What problem is Mungo solving?", a: "" },
  { q: "How does Mungo fit into the pet-care ecosystem?", a: "" },
  { q: "Who does Mungo serve?", a: "" },
  { q: "How can I request company information?", a: "" },
  { q: "How can I contact the investor relations team?", a: "" },
];

const ENQUIRY_TYPES = ["Investor enquiry", "Company information", "Strategic enquiry", "Media / press", "Something else"];

const H2 = "text-[32px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#17201E] md:text-[42px] md:leading-[63px]";
const fieldCls =
  "h-[49px] w-full rounded-xl border border-[#17201E]/[0.16] bg-white px-4 text-[15px] outline-none focus:border-[#2DBB9F] focus:ring-2 focus:ring-[#2DBB9F]/20";
const labelCls = "text-[13px] font-bold leading-5";

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
          {a || "Use the form below and the Mungo team will get back to you."}
        </p>
      )}
    </div>
  );
}

export default function InvestorRelations() {
  const [f, setF] = useState({ name: "", email: "", org: "", type: "", message: "" });
  const [err, setErr] = useState("");
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!f.name.trim() || !/^\S+@\S+\.\S+$/.test(f.email) || !f.type || !f.message.trim()) {
      return setErr("Please add your name, a valid email, an enquiry type and a message.");
    }
    setErr("");
    // TODO: POST `f` to your backend / email service
    setSent(true);
  };

  return (
    <div className="bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#17201E]">
      <Navbar currentPage="investors" />

      {/* Hero */}
      <section className="mx-auto grid min-h-[440px] max-w-[1440px] items-center gap-10 px-6 py-12 md:grid-cols-[711px_1fr] md:gap-0 md:px-0 md:py-0">
        <div className="md:pl-20">
          <h1 className="max-w-[260px] text-[36px] font-semibold leading-[1.4] tracking-[-0.034em] md:text-[42px] md:leading-[71px]">
            Investors relations
          </h1>
          <p className="max-w-[300px] pt-3 text-[17px] font-medium leading-6 text-[#66716D]">
            Building a better way to care for the pets we love.
          </p>
        </div>
        <div
          className="h-[320px] rounded-3xl bg-gradient-to-br from-[#EAF8F4] to-[#F5FBF9] bg-cover bg-center md:mr-20 md:h-[407px]"
          style={{ backgroundImage: `url(${IMG.hero})` }}
          role="img"
          aria-label="Woman hugging a husky"
        />
      </section>

      {/* At a glance */}
      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:pb-[104px] md:pt-[103px]">
        <div className="mx-auto max-w-[1152px] text-center">
          <h2 className="mx-auto max-w-[620px] text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] md:text-[42px] md:leading-[46px]">
            Building the future of everyday pet care.
          </h2>
          <p className="mx-auto mt-[19px] max-w-[560px] text-base font-medium leading-[26px] text-[#66716D]">
            Mungo is building a connected experience that makes it easier for pet parents to discover, connect with and manage pet care.
          </p>
          <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {GLANCE.map((g) => (
              <div key={g.title} className="flex flex-col items-center gap-[7px] px-5 py-6">
                <h4 className="text-base font-bold tracking-[-0.02em]">{g.title}</h4>
                <p className="text-xs font-medium leading-5 text-[#66716D]">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity */}
      <section className="bg-[#F5FBF9] px-6 py-24 md:px-20 md:py-[104px]">
        <div className="mx-auto grid max-w-[1152px] items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="flex max-w-[548px] flex-col gap-3.5">
            <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] md:text-[42px] md:leading-[46px]">
              A better experience for everyday pet care.
            </h2>
            <p className="max-w-[473px] pt-0.5 text-base font-medium leading-[26px] text-[#66716D]">
              Pet care is increasingly fragmented across providers, services, products and everyday decisions. Mungo is designed to bring those experiences closer together — helping pet parents find care, connect with providers and stay connected throughout the journey.
            </p>
          </div>
          <div
            className="h-[320px] rounded-[28px] bg-[#dff3ee] bg-cover bg-center md:h-[433px]"
            style={{ backgroundImage: `url(${IMG.opportunity})` }}
            role="img"
            aria-label="Woman with puppies on the grass"
          />
        </div>
      </section>

      {/* How Mungo works */}
      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:pb-[104px] md:pt-[103px]">
        <div className="mx-auto flex max-w-[1152px] flex-col gap-12">
          <h2 className={`${H2} mx-auto max-w-[560px] text-center`}>One connected pet-care journey.</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {STEPS.map((s, i) => (
              <div key={s.title} className="flex flex-col items-center gap-4 text-center">
                <img src={IMG.steps[i]} alt="" className="h-[181px] w-[186px] object-contain" />
                <h4 className="pt-3.5 text-xl font-bold tracking-[0.03em] text-[#22947E]">{s.title}</h4>
                <p className="max-w-[273px] text-base font-medium leading-[22px]">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="hidden grid-cols-4 gap-5 text-center lg:grid" aria-hidden="true">
            {JOURNEY_LABELS.map((l) => (
              <span key={l} className="text-xl font-bold tracking-[0.03em] text-[#22947E]">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="bg-[#F5FBF9] px-6 py-24 md:px-20 md:py-[103px]">
        <div className="mx-auto flex max-w-[1152px] flex-col items-center gap-3.5">
          <h2 className={`${H2} max-w-[420px] text-center`}>One ecosystem. many opportunities.</h2>
          <ol className="flex flex-col items-center pt-[34px]">
            {ECOSYSTEM.map((node, i) => (
              <li key={node} className="flex flex-col items-center">
                <span
                  className={`rounded-full border px-8 py-3.5 text-sm ${
                    node === "Mungo"
                      ? "border-[#2DBB9F] bg-[#2DBB9F] text-white"
                      : "border-black/[0.32] bg-white/[0.06] text-[#17201E]"
                  }`}
                >
                  {node}
                </span>
                {i < ECOSYSTEM.length - 1 && (
                  <span className="py-2.5 text-[#2DBB9F]" aria-hidden="true">
                    <ArrowDown size={18} />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Company updates */}
      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:pb-[104px] md:pt-[103px]">
        <div className="mx-auto flex max-w-[1152px] flex-col gap-11">
          <h2 className={`${H2} text-center`}>Latest from Mungo.</h2>
          <div className="border-b border-[#17201E]/[0.09]">
            {UPDATES.map((u) => (
              <a
                key={u.title}
                href={u.href}
                className="group flex flex-col gap-3 border-t border-[#17201E]/[0.09] py-6 sm:flex-row sm:items-center sm:gap-5"
              >
                <p className="w-[90px] shrink-0 text-xs font-semibold leading-[19px] text-[#66716D]">{u.date}</p>
                <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
                  <p className="text-[11px] font-bold uppercase leading-4 tracking-[0.04em] text-[#22947E]">{u.cat}</p>
                  <p className="pt-2 text-[15px] font-bold leading-6">{u.title}</p>
                  <p className="text-xs font-medium leading-5 text-[#66716D]">{u.desc}</p>
                </div>
                <ArrowRight size={18} className="hidden shrink-0 text-[#22947E] transition group-hover:translate-x-1 sm:block" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-[#F5FBF9] px-6 py-24 md:px-20 md:py-[103px]">
        <div className="mx-auto flex max-w-[1152px] flex-col gap-11">
          <h2 className={`${H2} max-w-[560px]`}>Investor & company resources.</h2>
          <div className="border-b border-[#17201E]/[0.09]">
            {RESOURCES.map((r) => (
              <a
                key={r.label}
                href={r.href}
                className="group flex items-center justify-between border-t border-[#17201E]/[0.09] py-5 text-base font-bold hover:text-[#22947E]"
              >
                {r.label}
                <ArrowRight size={16} strokeWidth={2.5} className="text-[#22947E] transition group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto flex max-w-[1280px] flex-col items-center gap-11 px-6 py-24 md:px-16 md:py-[103px]">
        <h2 className={H2}>Questions, answered.</h2>
        <div className="w-full max-w-[760px]">
          {FAQS.map((x) => (
            <Faq key={x.q} {...x} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="ir-contact" className="scroll-mt-20 bg-[#F5FBF9] px-6 py-24 md:px-20 md:py-[103px]">
        <div className="mx-auto flex max-w-[600px] flex-col items-center gap-10">
          <div className="flex max-w-[560px] flex-col items-center gap-3.5 text-center">
            <h2 className={H2}>Let's talk about what's next.</h2>
            <p className="max-w-[520px] text-base font-medium leading-[26px] text-[#66716D]">
              For investor, company or strategic enquiries, get in touch with the Mungo team.
            </p>
          </div>
          {sent ? (
            <div className="w-full rounded-3xl border border-[#17201E]/10 bg-white p-10 text-center">
              <Check size={40} className="mx-auto mb-3 text-[#2DBB9F]" />
              <h3 className="text-2xl font-semibold">Thanks, {f.name.split(" ")[0]}.</h3>
              <p className="mt-2 text-[#66716D]">We've received your enquiry and will be in touch by email.</p>
            </div>
          ) : (
            <form
              id="irForm"
              onSubmit={submit}
              noValidate
              className="flex w-full flex-col gap-5 rounded-3xl border border-[#17201E]/10 bg-white p-6 pb-10 sm:p-10 sm:pb-14"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="iName" className={labelCls}>Name</label>
                  <input id="iName" value={f.name} onChange={set("name")} autoComplete="name" className={fieldCls} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="iEmail" className={labelCls}>Email</label>
                  <input id="iEmail" type="email" value={f.email} onChange={set("email")} autoComplete="email" className={fieldCls} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="iOrg" className={labelCls}>Organisation</label>
                <input id="iOrg" value={f.org} onChange={set("org")} autoComplete="organization" className={fieldCls} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="iType" className={labelCls}>Enquiry type</label>
                <select id="iType" value={f.type} onChange={set("type")} className={fieldCls}>
                  <option value="">Select one</option>
                  {ENQUIRY_TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="iMessage" className={labelCls}>Message</label>
                <textarea
                  id="iMessage"
                  value={f.message}
                  onChange={set("message")}
                  className="min-h-[110px] w-full resize-y rounded-xl border border-[#17201E]/[0.16] px-4 py-3 text-[15px] outline-none focus:border-[#2DBB9F] focus:ring-2 focus:ring-[#2DBB9F]/20"
                />
              </div>
              {err && <p className="text-xs text-red-600">{err}</p>}
              <button
                id="submitBtn"
                type="submit"
                className="h-12 w-full rounded-full bg-[#2DBB9F] text-sm font-bold text-white transition hover:bg-[#22947E]"
              >
                Get in Touch
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#2DBB9F] px-6 py-24 text-center md:px-20 md:py-[104px]">
        <div className="mx-auto flex max-w-[1152px] flex-col items-center gap-[18px]">
          <h2 className="max-w-[660px] text-[40px] font-bold leading-[1.02] tracking-[-0.015em] text-white md:text-[62.9px] md:leading-[63px]">
            Better care starts with better connections.
          </h2>
          <p className="text-base font-medium leading-[26px] text-white/85">Care made pawsible.</p>
          <a href="/" className="mt-1 rounded-full bg-white px-[26px] py-3.5 text-[14.9px] text-[#22947E]">
            Explore Mungo
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}