import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* TODO before launch */
const LAST_UPDATED = "[DATE]";
const DOMAIN = "mungo.example";
const LEGAL_ADDRESS = "[VERIFIED LEGAL ADDRESS, IF REQUIRED]";
const SHOW_DRAFT_NOTES = true;

const INTRO =
  "This Privacy policy explains how Mungo collects, uses, shares and protects information when you use our website, app and services.";

const OPENING =
  "This Privacy Policy explains how Mungo collects, uses, shares and protects information when you use our website, app and services. This introduction is editable legal copy and must be reviewed before publication.";

/* block types: p, list, note (draft callout), link */
const SECTIONS = [
  {
    id: "overview",
    title: "Overview",
    blocks: [
      { t: "p", text: "Mungo is a pet-care platform that helps pet parents discover and connect with pet-care services and providers. This Privacy Policy explains how we handle personal information collected through our website, app and related services." },
      { t: "p", text: "This policy applies to Mungo's website, application and services generally. Specific URLs and product names referenced elsewhere on this site are illustrative and subject to change." },
    ],
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    blocks: [
      { t: "p", text: "The categories below are structured so Mungo's actual data practices can be confirmed and inserted here by the team responsible for data collection." },
      { t: "p", text: "This may include information such as your name, email address, phone number, account details, booking or service information, provider information (for care providers), and the content of support enquiries." },
      { t: "p", text: "Where applicable, this may include device information, browser information, IP address, usage information, and cookies. Only the categories Mungo actually uses should remain in the final version of this policy." },
    ],
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    blocks: [
      { t: "p", text: "Where applicable, information may be used to:" },
      {
        t: "list",
        items: [
          "Provide and operate Mungo's services",
          "Manage accounts",
          "Connect pet parents with care providers",
          "Process requests and bookings",
          "Communicate with users",
          "Improve our products and services",
          "Maintain the security of our platform",
          "Comply with applicable legal obligations",
        ],
      },
    ],
  },
  {
    id: "how-we-share-information",
    title: "How we share information",
    blocks: [
      { t: "p", text: "Mungo does not share information with a category of recipient unless this is actually true of our practices. Potential categories, to be confirmed, include:" },
      {
        t: "list",
        items: [
          "Service providers who help us operate Mungo",
          "Care providers or other users, as needed to facilitate a booking",
          "Business partners, where applicable",
          "Legal or regulatory authorities where required by law",
          "A successor entity in connection with a business transfer, where applicable",
        ],
      },
      { t: "note", label: "Placeholder", text: "This section must be confirmed against Mungo's actual data-sharing practices before publication." },
    ],
  },
  {
    id: "cookies",
    title: "Cookies & similar technologies",
    blocks: [
      { t: "p", text: "Cookies are small files placed on your device that help a website function and understand how it's used. Mungo may use necessary cookies to support core functionality, and optional cookies for preferences, analytics or marketing where applicable." },
      { t: "p", text: "You can review and change your cookie choices at any time." },
      { t: "link", text: "Manage cookie preferences", href: "#" },
    ],
  },
  {
    id: "your-choices-rights",
    title: "Your choices & rights",
    blocks: [
      { t: "p", text: "Depending on your location and applicable law, you may have choices regarding your information, which may include:" },
      {
        t: "list",
        items: [
          "Updating your account information",
          "Managing communication preferences",
          "Managing cookie preferences",
          "Submitting a privacy request",
          "Requesting access, correction or deletion of your information, where legally applicable",
        ],
      },
      { t: "note", label: "Placeholder", text: "Specific legal rights (such as under GDPR or CCPA) must be confirmed for Mungo's operating jurisdictions before publication." },
    ],
  },
  {
    id: "data-retention",
    title: "Data retention",
    blocks: [
      { t: "p", text: "This is placeholder language. Mungo retains information for as long as necessary to provide our services and for other legitimate business or legal purposes, consistent with applicable law. A specific retention period has not yet been finalized." },
    ],
  },
  {
    id: "security",
    title: "Security",
    blocks: [
      { t: "p", text: "Mungo uses measures designed to help protect information from unauthorized access, use or disclosure. However, no method of transmission or storage can be guaranteed to be completely secure." },
      { t: "note", label: "Important", text: "This section must not claim information is “100% secure” or use unverified language such as “bank-level” or “military-grade” security." },
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's privacy",
    blocks: [
      { t: "p", text: "Mungo is intended for individuals who are 18 years of age or older. Mungo is not directed to children, and we do not knowingly collect personal information from anyone under 18." },
      { t: "p", text: "If we learn that we have collected personal information from a person under 18, we will take reasonable steps to delete that information from our systems, subject to applicable law." },
      { t: "p", text: "If you believe that a person under 18 has provided personal information to Mungo, please contact us using the contact details provided in this Privacy Policy." },
    ],
  },
  {
    id: "third-party-services",
    title: "Third-party services",
    blocks: [
      { t: "p", text: "Mungo may use third-party services to help operate our website and app, such as analytics, hosting, payments or communications. Specific vendors are not named here and should only be added once verified and implemented." },
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    blocks: [
      { t: "p", text: "Mungo may update this Privacy Policy from time to time. When we do, we'll update the “Last updated” date at the top of this page." },
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    blocks: [
      { t: "p", text: "If you have questions about this Privacy Policy or Mungo's privacy practices, please contact us." },
      { t: "email" },
      { t: "p", text: `Address: ${LEGAL_ADDRESS}` },
    ],
  },
];

const pad = (n) => String(n + 1).padStart(2, "0");
const bodyP = "text-base leading-[29px] text-[#17201E]";

function Block({ b }) {
  switch (b.t) {
    case "p":
      return <p className={`${bodyP} font-medium`}>{b.text}</p>;
    case "list":
      return (
        <ul>
          {b.items.map((i) => (
            <li key={i} className="relative py-[5px] pl-[22px] text-base font-medium leading-[27px]">
              <span className="absolute left-0 top-[5px] text-[#22947E]">—</span>
              {i}
            </li>
          ))}
        </ul>
      );
    case "note":
      return SHOW_DRAFT_NOTES ? (
        <div className="flex flex-col gap-2 rounded-[14px] border border-[#2DBB9F]/25 bg-[#EAF8F4] px-[22px] pb-5 pt-[27px]">
          <span className="text-xs font-medium uppercase tracking-[0.055em] text-[#22947E]">{b.label}</span>
          <p className="text-sm font-medium leading-[26px]">{b.text}</p>
        </div>
      ) : null;
    case "link":
      return (
        <a href={b.href} className={`${bodyP} font-medium text-[#22947E] underline`}>
          {b.text}
        </a>
      );
    case "email":
      return (
        <p className={`${bodyP} font-medium`}>
          Email:{" "}
          <a href={`mailto:privacy@${DOMAIN}`} className="text-[#22947E] underline">
            privacy@{DOMAIN}
          </a>
        </p>
      );
    default:
      return null;
  }
}

export default function PrivacyPolicy() {
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
      <Navbar currentPage="privacy" />

      <main className="mx-auto max-w-[1200px] px-6 md:px-16">
        {/* Hero */}
        <section className="flex flex-col gap-2.5 py-14 md:py-20">
          <h1 className="text-[36px] font-semibold leading-[62px] tracking-[-0.03em] md:text-[42px]">Privacy policy</h1>
          <p className="pt-[3px] text-sm font-medium text-[#22947E]">Last updated: {LAST_UPDATED}</p>
          <p className="max-w-[640px] pt-2 text-base font-medium leading-[27px] text-[#66716D]">{INTRO}</p>
        </section>

        {/* Document */}
        <div className="flex flex-col gap-10 border-t border-[#17201E]/[0.06] pb-6 pt-12 md:flex-row md:gap-20 md:pt-16">
          <aside className="md:w-[240px] md:shrink-0">
            <nav aria-label="Table of contents" className="md:sticky md:top-24">
              <ul className="hidden md:block">
                {SECTIONS.map((s, i) => {
                  const on = active === s.id;
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`flex items-baseline gap-2.5 border-l-2 py-2 pl-3 text-sm ${
                          on ? "border-[#22947E] font-semibold text-[#22947E]" : "border-transparent font-medium text-[#66716D] hover:text-[#17201E]"
                        }`}
                      >
                        <span className={`w-5 shrink-0 ${on ? "font-semibold" : "font-normal"}`}>{pad(i)}</span>
                        <span className="leading-[21px]">{s.title}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
              {/* mobile: collapsible list */}
              <details className="rounded-xl border border-[#17201E]/10 px-4 py-3 md:hidden">
                <summary className="cursor-pointer text-sm font-semibold">On this page</summary>
                <ul className="mt-2">
                  {SECTIONS.map((s, i) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="flex gap-2.5 py-1.5 text-sm text-[#66716D]">
                        <span className="w-5">{pad(i)}</span>
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

            <a href="#" className="text-sm text-[#22947E]">Back to top ↑</a>

            <div className="mt-6 flex flex-col gap-[9px] border-t border-[#17201E]/10 pt-10">
              <h3 className="text-[20px] font-semibold leading-[30px] tracking-[-0.02em]">Questions about your privacy?</h3>
              <p className="max-w-[520px] pb-2 text-base leading-[25px] text-[#66716D]">
                If you have questions about this Privacy Policy or how your information is handled, please contact Mungo.
              </p>
              <a href="/contact.html" className="self-start rounded-full bg-[#2DBB9F] px-[26px] py-3.5 text-sm font-semibold text-white">
                Contact Mungo
              </a>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}