import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* TODO before launch */
const EFFECTIVE_DATE = "[DATE]";
const DOMAIN = "mungo.example";
const SHOW_DRAFT_NOTES = true;

const INTRO = "Please read these Terms of Service carefully before using Mungo.";
const OPENING =
  "Welcome to Mungo. These Terms of Service govern your access to and use of Mungo's website, application, marketplace, and related services.";

/* block types: p, list, note (draft: true = hideable), email */
const SECTIONS = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    blocks: [
      { t: "p", text: "By accessing or using Mungo, you agree to be bound by these Terms of Service. If you do not agree to these Terms, you should not access or use Mungo." },
      { t: "note", label: "Important", text: "Please review these Terms carefully before using Mungo." },
    ],
  },
  {
    id: "about-mungo",
    title: "About Mungo",
    blocks: [
      { t: "p", text: "Mungo is a platform that helps connect pet parents with independent pet-care providers, including groomers, veterinary professionals, pet sitters, dog walkers and boarding hosts." },
      { t: "p", text: "Mungo facilitates discovery and communication between pet parents and providers. The exact nature of Mungo's role in any given service — and the responsibilities of providers — is described further in the sections below." },
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    blocks: [
      { t: "p", text: "You must be at least 18 years old and have the legal capacity to enter into a binding agreement under applicable law to create an account and use Mungo." },
      { t: "p", text: "By accessing or using Mungo, you represent and warrant that you meet these eligibility requirements and that all information you provide is accurate and complete." },
      { t: "p", text: "Mungo is intended for use by adults and is not directed to or intended for persons under 18 years of age. If we learn that an account has been created or used by a person under 18, we may suspend or terminate the account and take reasonable steps to delete the associated information, subject to applicable law." }
    ],
  },
  {
    id: "accounts",
    title: "Accounts",
    blocks: [
      { t: "p", text: "To use certain features of Mungo, you'll need to create an account. You agree to provide accurate information and to keep that information up to date." },
      {
        t: "list",
        items: [
          "You are responsible for maintaining the security of your account credentials.",
          "You are responsible for activity that occurs under your account.",
          "Let us know promptly if you believe your account has been compromised.",
        ],
      },
    ],
  },
  {
    id: "services",
    title: "Mungo services",
    blocks: [
      { t: "p", text: "Mungo provides access to pet-care services and related experiences, which may include:" },
      { t: "list", items: ["Grooming", "Veterinary Care", "Pet Boarding", "Pet Sitting", "Dog Walking", "Pet Products"] },
      { t: "p", text: "Availability of specific services may vary by location and provider." },
    ],
  },
  {
    id: "providers",
    title: "Service providers",
    blocks: [
      { t: "p", text: "Care providers on Mungo are independent from Mungo. Mungo helps facilitate discovery and communication between pet parents and providers, but the provider is responsible for the care and services they deliver." },
      { t: "p", text: "This section does not make any representation regarding background checks, certifications, insurance, or guarantees beyond what Mungo has confirmed as an active product feature." },
    ],
  },
  {
    id: "bookings",
    title: "Bookings and service experience",
    blocks: [
      { t: "p", text: "When you book a service through Mungo, you'll be able to review relevant details before confirming. Once a service is confirmed, you can communicate with your provider and follow the status of the service through the app." },
      { t: "p", text: "Specific booking, modification and cancellation mechanics are described within the product experience itself and may be updated from time to time." },
    ],
  },
  {
    id: "payments",
    title: "Payments and fees",
    blocks: [
      { t: "p", text: "Applicable fees, payment terms, and any related policies will be presented to you where relevant before a transaction is completed." },
      { t: "note", draft: true, label: "Placeholder", text: "Exact fee structures, payment timing, and refund mechanics will be finalized separately and are not represented in this placeholder document." },
    ],
  },
  {
    id: "user-responsibilities",
    title: "User responsibilities",
    blocks: [
      { t: "p", text: "When using Mungo, you agree to act responsibly and in good faith, including providing accurate information about yourself and your pet, and treating providers and other users respectfully." },
    ],
  },
  {
    id: "safety",
    title: "Safety",
    blocks: [
      { t: "p", text: "Mungo is designed around clear provider profiles, direct communication and visible service status, with the goal of supporting a trustworthy experience for both pet parents and providers." },
      { t: "p", text: "This section does not constitute a guarantee of any particular safety outcome." },
    ],
  },
  {
    id: "content-ip",
    title: "Content and intellectual property",
    blocks: [
      { t: "p", text: "Mungo's branding, application, and platform content are owned by Mungo or its licensors. You may not use Mungo's trademarks or content except as permitted by these Terms." },
      { t: "p", text: "If you submit content to Mungo (such as a profile description or a message), you retain ownership of that content, and you grant Mungo the rights necessary to operate the platform and display that content as intended." },
    ],
  },
  {
    id: "third-party",
    title: "Third-party services and links",
    blocks: [
      { t: "p", text: "Mungo may link to or integrate with third-party services. Those services are governed by their own terms and policies, which we encourage you to review." },
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    blocks: [
      { t: "p", text: "This is placeholder legal language. Mungo's services are provided on an “as is” and “as available” basis, without warranties of any kind, to the extent permitted by applicable law." },
      { t: "note", draft: true, label: "Placeholder", text: "This section requires review by qualified legal counsel before publication." },
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    blocks: [
      { t: "p", text: "This is placeholder legal language regarding limitation of liability. Final language will be determined by Mungo's legal counsel in accordance with applicable law." },
    ],
  },
  {
    id: "indemnification",
    title: "Indemnification",
    blocks: [
      { t: "p", text: "This is placeholder legal language regarding indemnification. Final language will be determined by Mungo's legal counsel." },
    ],
  },
  {
    id: "termination",
    title: "Termination",
    blocks: [
      { t: "p", text: "Mungo may suspend or terminate access to the platform in accordance with these Terms and applicable law. You may also stop using Mungo and close your account at any time." },
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    blocks: [
      { t: "p", text: "Mungo may update these Terms from time to time. Where required by applicable law, we will provide notice of material changes. Continued use of Mungo after changes take effect constitutes acceptance of the updated Terms." },
    ],
  },
  {
    id: "governing-law",
    title: "Governing law / Dispute resolution",
    blocks: [
      { t: "p", text: "This is a placeholder section. Governing law, jurisdiction, and dispute resolution terms will be determined by Mungo's legal counsel and are not represented here." },
      { t: "note", draft: true, label: "Placeholder", text: "Do not treat this section as finalized. Jurisdiction and dispute-resolution terms are not yet defined." },
    ],
  },
  {
    id: "contact",
    title: "Contact",
    blocks: [{ t: "p", text: "Questions about these Terms? Contact Mungo at:" }, { t: "email" }],
  },
];

const pad = (n) => String(n + 1).padStart(2, "0");
const bodyP = "text-base leading-[29px] text-[#17201E]";

function Block({ b }) {
  switch (b.t) {
    case "p":
      return <p className={bodyP}>{b.text}</p>;
    case "list":
      return (
        <ul>
          {b.items.map((i) => (
            <li key={i} className="relative py-[5px] pl-[22px] text-base leading-[27px]">
              <span className="absolute left-0 top-[5px] text-[#22947E]">—</span>
              {i}
            </li>
          ))}
        </ul>
      );
    case "note":
      if (b.draft && !SHOW_DRAFT_NOTES) return null;
      return (
        <div className="flex flex-col gap-2 rounded-[14px] border border-[#2DBB9F]/25 bg-[#EAF8F4] px-[22px] pb-5 pt-[27px]">
          <span
            className={`font-semibold uppercase tracking-[0.033em] text-[#22947E] ${
              b.draft ? "text-[11px] font-normal tracking-[0.06em]" : "text-xl"
            }`}
          >
            {b.label}
          </span>
          <p className="text-[15px] leading-[26px]">{b.text}</p>
        </div>
      );
    case "email":
      return (
        <p className="text-[17px] leading-[29px]">
          <a href={`mailto:legal@${DOMAIN}`} className="text-[#22947E] underline">
            legal@{DOMAIN}
          </a>
        </p>
      );
    default:
      return null;
  }
}

export default function TermsOfService() {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#17201E]">
      <Navbar currentPage="terms" />

      <main className="mx-auto max-w-[1200px] px-6 md:px-16">
        <section className="flex flex-col gap-[13px] py-14 md:py-20">
          <h1 className="text-[36px] font-semibold leading-[62px] tracking-[-0.03em] md:text-[42px]">Terms of service</h1>
          <p className="text-sm text-[#22947E]">Effective: {EFFECTIVE_DATE}</p>
          <p className="max-w-[640px] pt-[5px] text-[17px] font-medium leading-[27px] text-[#66716D]">{INTRO}</p>
        </section>

        <div className="flex flex-col gap-10 border-t border-[#17201E]/[0.06] pb-6 pt-12 md:flex-row md:gap-20 md:pt-16">
          <aside className="md:w-[240px] md:shrink-0">
            <nav aria-label="Table of contents" className="md:sticky md:top-24">
              <p className="mb-4 hidden text-[11px] font-medium uppercase tracking-[0.05em] text-[#66716D] md:block">On this page</p>
              <ul className="hidden md:block">
                {SECTIONS.map((s, i) => {
                  const on = active === s.id;
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`flex items-baseline gap-2.5 border-l-2 py-2 pl-3 text-sm ${
                          on ? "border-[#22947E] font-semibold text-[#22947E]" : "border-transparent text-[#66716D] hover:text-[#17201E]"
                        }`}
                      >
                        <span className={`w-5 shrink-0 text-xs ${on ? "font-semibold" : ""}`}>{pad(i)}</span>
                        <span className="leading-[21px]">{s.title}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
              <details className="rounded-xl border border-[#17201E]/10 px-4 py-3 md:hidden">
                <summary className="cursor-pointer text-sm font-semibold">On this page</summary>
                <ul className="mt-2">
                  {SECTIONS.map((s, i) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="flex gap-2.5 py-1.5 text-sm text-[#66716D]">
                        <span className="w-5 text-xs">{pad(i)}</span>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </nav>
          </aside>

          <article className="min-w-0 max-w-[760px] flex-1">
            <p className={bodyP}>{OPENING}</p>

            <div className="mt-5 flex flex-col pb-6">
              {SECTIONS.map((s) => (
                <section key={s.id} id={s.id} className="flex scroll-mt-24 flex-col gap-[17px] pt-[52px] first:pt-2">
                  <h2 className="pt-[5px] text-[20px] font-semibold leading-[35px] tracking-[-0.028em]">{s.title}</h2>
                  {s.blocks.map((b, i) => (
                    <Block key={i} b={b} />
                  ))}
                </section>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-2.5 border-t border-[#17201E]/10 pt-10">
              <h3 className="text-[20px] font-semibold leading-[30px] tracking-[-0.02em]">Questions?</h3>
              <p className="max-w-[520px] pb-2 text-base leading-[25px] text-[#66716D]">
                If you have questions about these Terms, please contact Mungo.
              </p>
              <a href="/contact.html" className="self-start rounded-full bg-[#2DBB9F] px-[26px] py-3.5 text-sm font-semibold text-white">
                Contact Mungo
              </a>
              <a href="#" className="text-sm text-[#22947E]">Back to top ↑</a>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}