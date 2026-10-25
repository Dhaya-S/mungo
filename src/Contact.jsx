import { useRef, useState } from "react";
import { ArrowRight, Check, Plus } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import contact1 from './assets/contact-1.webp';

const DOMAIN = "mungo.example";
const HERO_IMG = contact1;

const ROUTES = [
  { audience: "Pet parent", text: "Questions about bookings, services, providers, or your pet.", cta: "Get help" },
  { audience: "Care provider", text: "Questions about providing services, bookings, profiles, or earnings.", cta: "Get provider help" },
  { audience: "Partnerships", text: "Interested in working with Mungo?", cta: "Talk to us" },
  { audience: "Feedback & other", text: "Have an idea, suggestion, or something else to share?", cta: "Send a message" },
];

const TOPICS = {
  "Pet parent": ["Bookings", "Services", "Finding a provider", "My pet", "My account"],
  "Care provider": ["Providing services", "Bookings", "My profile", "Earnings"],
  Partnerships: ["Brand partnership", "Strategic partnership", "Community & content", "Other"],
  "Feedback & other": ["Idea or suggestion", "Feedback", "Something else"],
};

const METHODS = [
  { title: "General", email: "hello", desc: "For general questions or anything that doesn't fit elsewhere." },
  { title: "Support", email: "support", desc: "For help with bookings, services, or your account." },
  { title: "Partnerships", email: "partners", desc: "For businesses and organizations interested in working with Mungo." },
];

const FAQS = [
  { q: "How do I contact my care provider?", a: "Once you're connected, you can message your care provider directly within the Mungo app." },
  { q: "How do I change or cancel a booking?", a: "" },
  { q: "What happens if I have an issue with a service?", a: "" },
  { q: "How do I become a care provider?", a: "" },
  { q: "Where can I find information about Mungo services?", a: "" },
];

const H2 = "text-[32px] font-semibold leading-[1.2] tracking-[-0.018em] text-[#17201E] md:text-[42px] md:leading-[57px]";
const fieldCls =
  "h-[49px] w-full rounded-xl border border-[#17201E]/[0.16] bg-white px-4 text-[15px] outline-none placeholder:text-[#757575] focus:border-[#2DBB9F] focus:ring-2 focus:ring-[#2DBB9F]/20";
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
        <p className="px-1 pb-6 text-[14.9px] font-medium leading-[22px] text-[#66716D]">
          {a || "You'll find the full answer in our Help Centre, or send us a message above."}
        </p>
      )}
    </div>
  );
}

export default function ContactPage() {
  const formRef = useRef(null);
  const [f, setF] = useState({ name: "", email: "", audience: "", topic: "", subject: "", message: "" });
  const [err, setErr] = useState("");
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const route = (audience) => {
    setF((p) => ({ ...p, audience, topic: "" }));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submit = (e) => {
    e.preventDefault();
    if (!f.name.trim() || !/^\S+@\S+\.\S+$/.test(f.email) || !f.audience || !f.message.trim()) {
      return setErr("Please add your name, a valid email, who you are, and a message.");
    }
    setErr("");
    // TODO: POST `f` to your backend / email service
    setSent(true);
  };

  return (
    <div className="bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#17201E]">
      <Navbar currentPage="contact" />

      {/* Hero */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 pt-12 md:grid-cols-2 md:px-16 md:pt-16">
        <div className="flex flex-col gap-[11px]">
          <h1 className="text-[40px] font-semibold leading-[65px] tracking-[-0.03em] md:text-[42px]">Let's talk.</h1>
          <p className="max-w-[401px] text-base font-medium leading-[27px] text-[#66716D]">
            Questions, ideas, feedback, or just need a little help? We're here.
          </p>
          <p className="max-w-[420px] text-sm font-medium leading-[22px] text-[#66716D]">
            Tell us what you need and we'll point you in the right direction.
          </p>
        </div>
        <div
          className="h-[320px] rounded-[28px] bg-[#dff3ee] bg-cover bg-center md:h-[435px]"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
          role="img"
          aria-label="Woman hugging her golden retriever"
        />
      </section>

      {/* Routing */}
      <section className="mx-auto max-w-[1200px] px-6 pb-24 pt-20 md:px-16">
        <div className="text-center">
          <h2 className={H2}>How can we help?</h2>
          <p className="mt-[22px] text-base font-medium leading-[26px] text-[#66716D]">Choose what you're contacting us about.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ROUTES.map((r) => (
            <button
              key={r.audience}
              onClick={() => route(r.audience)}
              className="group flex min-h-[162px] flex-col items-center justify-center gap-3 rounded-[18px] bg-white px-4 py-6 text-center transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(23,32,30,0.08)]"
            >
              <span className="text-base font-semibold tracking-[-0.02em]">{r.audience}</span>
              <span className="max-w-[240px] text-sm font-medium leading-[18px] text-[#66716D]">{r.text}</span>
              <span className="flex items-center gap-1 text-sm font-medium text-[#22947E]">
                {r.cta} <ArrowRight size={13} />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Form */}
      <section ref={formRef} id="contact-form" className="scroll-mt-20 bg-[#F5FBF9] px-6 py-24 md:px-20">
        <div className="mx-auto flex max-w-[640px] flex-col items-center gap-10">
          <div className="text-center">
            <h2 className={H2}>Tell us what's up.</h2>
            <p className="mt-3.5 text-base font-medium leading-[26px] text-[#66716D]">
              A few details will help us get you to the right person faster.
            </p>
          </div>

          {sent ? (
            <div className="w-full rounded-3xl bg-white p-11 text-center shadow-[0_20px_50px_rgba(23,32,30,0.06)]">
              <Check size={40} className="mx-auto mb-3 text-[#2DBB9F]" />
              <h3 className="text-2xl font-semibold">Message sent</h3>
              <p className="mt-2 text-[#66716D]">Thanks, {f.name.split(" ")[0]}. We'll get back to you by email.</p>
            </div>
          ) : (
            <form
              id="contactFormEl"
              onSubmit={submit}
              noValidate
              className="flex w-full flex-col gap-5 rounded-3xl bg-white p-6 pb-10 shadow-[0_20px_50px_rgba(23,32,30,0.06)] sm:p-11 sm:pb-[60px]"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="cName" className={labelCls}>Name</label>
                  <input id="cName" value={f.name} onChange={set("name")} autoComplete="name" className={fieldCls} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="cEmail" className={labelCls}>Email</label>
                  <input id="cEmail" type="email" value={f.email} onChange={set("email")} autoComplete="email" className={fieldCls} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="cAudience" className={labelCls}>I'm contacting you as</label>
                <select
                  id="cAudience"
                  value={f.audience}
                  onChange={(e) => setF({ ...f, audience: e.target.value, topic: "" })}
                  className={fieldCls}
                >
                  <option value="">Select one</option>
                  {Object.keys(TOPICS).map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="cTopic" className={labelCls}>What can we help with?</label>
                <select id="cTopic" value={f.topic} onChange={set("topic")} disabled={!f.audience} className={`${fieldCls} disabled:opacity-60`}>
                  <option value="">Select a topic</option>
                  {(TOPICS[f.audience] || []).map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="cSubject" className={labelCls}>Subject</label>
                <input id="cSubject" value={f.subject} onChange={set("subject")} className={fieldCls} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="cMessage" className={labelCls}>Message</label>
                <textarea
                  id="cMessage"
                  value={f.message}
                  onChange={set("message")}
                  className="min-h-[120px] w-full resize-y rounded-xl border border-[#17201E]/[0.16] px-4 py-3 text-[15px] outline-none focus:border-[#2DBB9F] focus:ring-2 focus:ring-[#2DBB9F]/20"
                />
              </div>
              {err && <p className="text-xs text-red-600">{err}</p>}
              <button
                id="submitBtn"
                type="submit"
                className="h-12 w-full rounded-full bg-[#2DBB9F] text-sm font-bold text-white transition hover:bg-[#22947E]"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Other ways */}
      <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-16">
        <div className="grid gap-5 md:grid-cols-3">
          {METHODS.map((m) => (
            <div key={m.title} className="flex flex-col items-center gap-[7px] rounded-[18px] border border-[#17201E]/10 px-[26px] py-[25px] text-center">
              <h4 className="text-base font-bold uppercase tracking-[-0.02em]">{m.title}</h4>
              <a href={`mailto:${m.email}@${DOMAIN}`} className="text-[15px] font-medium text-[#22947E] hover:underline">
                {m.email}@{DOMAIN}
              </a>
              <p className="text-[13.2px] font-medium leading-5 text-[#66716D]">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Help centre bridge */}
      <section className="bg-[#FFF7E9] px-6 py-24">
        <div className="mx-auto flex max-w-[560px] flex-col items-center gap-3.5 text-center">
          <h2 className={`${H2} md:leading-[51px]`}>Maybe we already have the answer.</h2>
          <p className="max-w-[432px] text-base font-medium leading-[26px] text-[#66716D]">
            Before sending us a message, take a look through the Mungo Help Centre. You might find what you're looking for in a few seconds.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            <a href="#" className="flex items-center gap-2 rounded-full bg-[#2DBB9F] px-[26px] py-[15px] text-sm font-semibold text-white">
              Visit Help Centre <ArrowRight size={15} strokeWidth={2.5} />
            </a>
            <a href="#" className="px-1 py-3.5 text-sm font-semibold">Browse all articles</a>
          </div>
        </div>
      </section>

      {/* Quick answers */}
      <section className="mx-auto flex max-w-[1200px] flex-col items-center gap-7 px-6 py-24 md:px-16">
        <h2 className={H2}>Quick answers</h2>
        <div className="mt-3 w-full max-w-[720px]">
          {FAQS.map((x) => (
            <Faq key={x.q} {...x} />
          ))}
        </div>
        <a href="#" className="mt-4 flex items-center gap-1.5 px-1 py-3.5 text-base">
          See all answers <ArrowRight size={14} />
        </a>
      </section>

      {/* Final CTA */}
      <section className="bg-[#2DBB9F] px-6 py-24 text-center md:py-[97px]">
        <div className="mx-auto flex max-w-[1072px] flex-col items-center gap-[18px]">
          <h2 className="max-w-[560px] text-[40px] font-bold leading-[1.05] tracking-[-0.014em] text-white md:text-[62.9px] md:leading-[66px]">
            We're here for you — and them.
          </h2>
          <p className="max-w-[440px] text-base font-medium leading-[26px] text-white/85">
            Whatever you need, we're happy to help make pet care a little easier.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2.5">
            <a href="/" className="rounded-full bg-white px-[26px] py-[15px] text-[14.9px] font-semibold text-[#22947E]">
              Explore Mungo
            </a>
            <a href="#" className="px-1 py-3.5 text-[14.9px] font-semibold text-white">Visit Help Centre</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}