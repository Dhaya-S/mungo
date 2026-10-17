import { useState } from "react";
import { ArrowRight, Check, Plus } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import partners1 from './assets/partners-1.png';
import partners2 from './assets/partners-2.png';
import partners3 from './assets/partners-3.png';
import partners4 from './assets/partners-4.png';
import partners5 from './assets/partners-5.png';
import partners6 from './assets/partners-6.png';

/* Replace image paths with your exported Figma images */
const IMG = {
  hero: partners1,
  bring: partners6,
};

const PRINCIPLES = [
  { title: "Reach", text: "Connect with a growing ecosystem of pet parents and care professionals." },
  { title: "Relevance", text: "Build partnerships around real pet-care needs." },
  { title: "Trust", text: "Create experiences that put pets and their people first." },
  { title: "Opportunity", text: "Explore new ways to grow, collaborate and contribute." },
];

const PATHS = [
  {
    title: "Care providers",
    desc: "For groomers, veterinarians, sitters, walkers, boarding providers and other care professionals.",
    cta: "Become a Provider",
    arrow: true,
    img: partners2,
  },
  {
    title: "Pet brands",
    desc: "For brands creating products and services for pets and their people.",
    cta: "Partner With Mungo",
    img: partners3,
  },
  {
    title: "Strategic partners",
    desc: "For organisations that can contribute technology, expertise, community or ecosystem value.",
    cta: "Explore partnership",
    img: partners4,
  },
  {
    title: "Community & content",
    desc: "For relevant creators, communities and organisations interested in meaningful pet-care initiatives.",
    cta: "Start a conversation",
    arrow: true,
    img: partners5,
    caption: "Community moment, pets & people",
  },
];

const BRING = [
  "A connected pet-care experience",
  "A trusted environment",
  "Access to relevant pet-care audiences",
  "A growing network of care professionals",
  "Opportunities for meaningful collaboration",
];

const STEPS = ["Tell us about you", "Explore the fit", "Build the partnership", "Grow together"];
const VALUES = ["Pet first", "Useful", "Built to last"];

const FAQS = [
  {
    q: "Who can partner with Mungo?",
    a: "Care providers, pet brands, strategic partners and community or content organizations aligned with better pet care.",
  },
  { q: "What types of partnerships does Mungo offer?", a: "" },
  { q: "Can service providers partner with Mungo?", a: "" },
  { q: "Can pet brands partner with Mungo?", a: "" },
  { q: "Can organisations propose a custom partnership?", a: "" },
  { q: "How do I apply?", a: "" },
  { q: "What happens after I submit an enquiry?", a: "" },
  { q: "How long does the partnership process take?", a: "" },
];

const TYPES = ["Care provider", "Pet brand", "Strategic partner", "Community & content", "Something else"];

const H2 = "text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#17201E] md:text-[42px]";
const inputCls =
  "h-[49px] w-full rounded-xl border border-[#17201E]/[0.16] bg-white px-4 text-[15px] outline-none placeholder:text-[#757575] focus:border-[#2DBB9F] focus:ring-2 focus:ring-[#2DBB9F]/20";
const labelCls = "text-[13px] font-bold leading-5";

function Faq({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-[#17201E]/10 last:border-b">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-1 py-[26px] text-left text-[17.9px] font-semibold"
      >
        {q}
        <Plus size={20} className={`shrink-0 text-[#22947E] transition-transform ${open ? "rotate-45" : ""}`} />
      </button>
      {open && (
        <p className="px-1 pb-6 text-sm font-medium leading-[22px] text-[#66716D]">
          {a || "Get in touch via the enquiry form below and our team will walk you through the details."}
        </p>
      )}
    </div>
  );
}

function PathRow({ p, flip }) {
  return (
    <div
      className={`flex flex-col items-center gap-8 border-t border-[#17201E]/[0.09] py-11 last:border-b md:gap-12 ${
        flip ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div
        className="relative flex h-[300px] w-full items-end rounded-[28px] bg-[#dff3ee] bg-cover bg-center p-[18px] md:h-[414px] md:flex-1"
        style={{ backgroundImage: `url(${p.img})` }}
      >
        {p.caption && (
          <span className="rounded-full bg-[#17201E]/[0.55] px-3 py-[7px] text-[11.5px] text-white backdrop-blur-sm">
            {p.caption}
          </span>
        )}
      </div>
      <div className="flex w-full flex-col gap-[9px] md:flex-1 md:px-4">
        <h3 className="text-[30px] font-semibold leading-[48px] tracking-[-0.018em] md:text-[36px]">{p.title}</h3>
        <p className="max-w-[420px] text-base font-medium leading-[23px] text-[#66716D]">{p.desc}</p>
        <a href="#enquiry" className="mt-4 inline-flex items-center gap-1.5 py-1 text-base font-semibold hover:text-[#22947E]">
          {p.cta}
          {p.arrow && <ArrowRight size={16} strokeWidth={2.5} />}
        </a>
      </div>
    </div>
  );
}

export default function PartnerPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", website: "", type: "", idea: "" });
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !/^\S+@\S+\.\S+$/.test(form.email) || !form.type) {
      return setErr("Please add your name, a valid work email and a partnership type.");
    }
    setErr("");
    // TODO: POST form to your backend / email service
    setSent(true);
  };

  return (
    <div className="bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#17201E]">
      <Navbar currentPage="partners" />

      {/* Hero */}
      <section className="mx-auto flex max-w-[1280px] flex-col items-center gap-10 px-6 pb-8 pt-12 md:flex-row md:px-16 md:pt-[68px]">
        <div className="flex flex-1 flex-col gap-[13px]">
          <h1 className="text-[36px] font-semibold leading-[1.45] tracking-[-0.027em] md:text-[42px] md:leading-[61px]">
            Let's build better pet care together.
          </h1>
          <p className="max-w-[480px] text-base font-medium leading-[26px] text-[#66716D]">
            Mungo brings pet parents and trusted care together. Partner with us to help make that experience better.
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-[15px]">
            <a href="#enquiry" className="rounded-full bg-[#2DBB9F] px-[26px] py-[15px] text-sm font-semibold text-white">
              Partner with Mungo
            </a>
            <a href="#how" className="flex items-center gap-1.5 px-1 py-3.5 text-sm font-semibold">
              See how it works <ArrowRight size={14} />
            </a>
          </div>
        </div>
        <div
          className="h-[300px] w-full rounded-3xl bg-[#dff3ee] bg-cover bg-center md:h-[443px] md:w-[644px]"
          style={{ backgroundImage: `url(${IMG.hero})` }}
          role="img"
          aria-label="Pet parent with two dogs"
        />
      </section>

      {/* Why partner */}
      <section className="mx-auto max-w-[1280px] px-6 pb-24 pt-24 md:px-16">
        <h2 className="mb-12 text-center text-[36px] leading-[66px] tracking-[-0.021em] md:text-[41.6px]">Better together.</h2>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="flex flex-col items-center gap-[9px] px-[22px] py-[26px] text-center">
              <h4 className="text-base font-bold tracking-[-0.02em]">{p.title}</h4>
              <p className="max-w-[244px] text-xs font-medium leading-[22px] text-[#66716D]">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership paths */}
      <section className="bg-[#F5FBF9] px-6 pb-[104px] pt-24 md:px-20 md:pt-[207px]">
        <div className="mx-auto max-w-[1280px] md:px-16">
          <h2 className={`${H2} mx-auto mb-12 max-w-[440px] text-center`}>Find your place in the Mungo ecosystem.</h2>
          <div>
            {PATHS.map((p, i) => (
              <PathRow key={p.title} p={p} flip={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* What Mungo brings */}
      <section className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-16">
        <div
          className="h-[360px] rounded-[28px] bg-[#dff3ee] bg-cover bg-center md:h-[466px]"
          style={{ backgroundImage: `url(${IMG.bring})` }}
          role="img"
          aria-label="Pet parent with her dog"
        />
        <div className="flex flex-col gap-3.5">
          <h2 className="text-[32px] font-semibold leading-[44px] tracking-[-0.019em] md:text-[42px]">What we bring to the table.</h2>
          <ul className="flex flex-col gap-3.5 pt-2.5">
            {BRING.map((b) => (
              <li key={b} className="flex items-start gap-3 text-base font-medium leading-6">
                <Check size={16} strokeWidth={3} className="mt-1 shrink-0 text-[#22947E]" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="scroll-mt-24 bg-[#F5FBF9] px-6 py-24 md:px-20">
        <div className="mx-auto max-w-[1152px]">
          <h2 className={`${H2} mx-auto mb-12 max-w-[360px] text-center`}>Simple to start. Built to grow.</h2>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <li key={s} className="flex flex-col items-center text-center">
                <h4 className="text-base font-bold tracking-[-0.02em]">{s}</h4>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-[430px] px-6 py-24 text-center">
        <h2 className={`${H2} leading-[46px]`}>Good partnerships start with the right intent.</h2>
        <div className="grid gap-6 pt-9 sm:grid-cols-3">
          {VALUES.map((v) => (
            <h3 key={v} className="text-xl font-bold tracking-[-0.02em] text-[#22947E]">{v}</h3>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5FBF9] px-6 py-24 md:px-20">
        <div className="mx-auto flex max-w-[760px] flex-col gap-11">
          <h2 className={`${H2} text-center`}>Questions, answered.</h2>
          <div>
            {FAQS.map((f) => (
              <Faq key={f.q} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquiry" className="scroll-mt-20 bg-[#F5FBF9] px-6 pb-24 pt-8 md:px-20">
        <div className="mx-auto flex max-w-[640px] flex-col items-center gap-10">
          <h2 className={`${H2} max-w-[300px] text-center`}>Have an idea? let's talk.</h2>
          {sent ? (
            <div className="w-full rounded-3xl bg-white p-11 text-center shadow-[0_20px_50px_rgba(23,32,30,0.06)]">
              <Check size={40} className="mx-auto mb-3 text-[#2DBB9F]" />
              <h3 className="text-2xl font-semibold">Thanks, {form.name.split(" ")[0]}.</h3>
              <p className="mt-2 text-[#66716D]">We've received your enquiry and will follow up by email.</p>
            </div>
          ) : (
            <form
              onSubmit={submit}
              noValidate
              className="flex w-full flex-col gap-5 rounded-3xl bg-white p-6 pb-10 shadow-[0_20px_50px_rgba(23,32,30,0.06)] sm:p-11 sm:pb-[60px]"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="pName" className={labelCls}>Full name</label>
                  <input id="pName" value={form.name} onChange={set("name")} autoComplete="name" className={inputCls} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="pEmail" className={labelCls}>Work email</label>
                  <input id="pEmail" type="email" value={form.email} onChange={set("email")} autoComplete="email" className={inputCls} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="pCompany" className={labelCls}>Company / Organisation</label>
                  <input id="pCompany" value={form.company} onChange={set("company")} autoComplete="organization" className={inputCls} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="pWebsite" className={labelCls}>Website</label>
                  <input id="pWebsite" type="url" placeholder="https://" value={form.website} onChange={set("website")} className={inputCls} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="pType" className={labelCls}>Partnership type</label>
                <select id="pType" value={form.type} onChange={set("type")} className={inputCls}>
                  <option value="">Select one</option>
                  {TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="pIdea" className={labelCls}>Tell us about your idea</label>
                <textarea
                  id="pIdea"
                  value={form.idea}
                  onChange={set("idea")}
                  className="min-h-[120px] w-full resize-y rounded-xl border border-[#17201E]/[0.16] px-4 py-3 text-[15px] outline-none focus:border-[#2DBB9F] focus:ring-2 focus:ring-[#2DBB9F]/20"
                />
              </div>
              {err && <p className="text-xs text-red-600">{err}</p>}
              <button
                id="submitBtn"
                type="submit"
                className="h-12 w-full rounded-full bg-[#2DBB9F] text-sm font-bold text-white transition hover:bg-[#22947E]"
              >
                Send partnership enquiry
              </button>
              <p className="text-center text-xs leading-[19px] text-[#66716D]">
                Your information is used only to follow up on your enquiry.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#2DBB9F] px-6 py-24 text-center md:px-20 md:py-[104px]">
        <div className="mx-auto flex max-w-[1152px] flex-col items-center gap-[18px]">
          <h2 className="max-w-[762px] text-[40px] font-bold leading-[1.02] tracking-[-0.015em] text-white md:text-[62.9px] md:leading-[64px]">
            The best partnerships start with a conversation.
          </h2>
          <a href="#enquiry" className="mt-2 rounded-full bg-white px-[26px] py-3.5 text-[14.9px] text-[#22947E]">
            Partner with Mungo
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}