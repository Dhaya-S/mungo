import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const defaultDoc = {
  title: "Cookie policy",
  updated: "Last updated: [DATE]",
  intro:
    'This Cookie Policy explains how Mungo ("we", "us", or "our") uses cookies and similar tracking technologies when you visit our website, mobile platform, or use our pet care services.',
  lead:
    "This Privacy Policy explains how Mungo collects, uses, shares and protects information when you use our website, app and services. This introduction is editable legal copy and must be reviewed before publication.",
  sections: [
    {
      id: "overview",
      title: "Overview",
      blocks: [
        { p: "Mungo is a pet-care platform that helps pet parents discover and connect with pet-care services and providers. This Privacy Policy explains how we handle personal information collected through our website, app and related services." },
        { p: "This policy applies to Mungo's website, application and services generally. Specific URLs and product names referenced elsewhere on this site are illustrative and subject to change." },
      ],
    },
    {
      id: "information-we-collect",
      title: "Information we collect",
      blocks: [
        { p: "The categories below are structured so Mungo's actual data practices can be confirmed and inserted here by the team responsible for data collection." },
        { p: "This may include information such as your name, email address, phone number, account details, booking or service information, provider information (for care providers), and the content of support enquiries." },
        { p: "Where applicable, this may include device information, browser information, IP address, usage information, and cookies. Only the categories Mungo actually uses should remain in the final version of this policy." },
      ],
    },
    {
      id: "how-we-use-information",
      title: "How we use information",
      blocks: [
        { p: "Where applicable, information may be used to:" },
        {
          list: [
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
        { p: "Mungo does not share information with a category of recipient unless this is actually true of our practices. Potential categories, to be confirmed, include:" },
        {
          list: [
            "Service providers who help us operate Mungo",
            "Care providers or other users, as needed to facilitate a booking",
            "Business partners, where applicable",
            "Legal or regulatory authorities where required by law",
            "A successor entity in connection with a business transfer, where applicable",
          ],
        },
        { callout: ["PLACEHOLDER", "This section must be confirmed against Mungo's actual data-sharing practices before publication."] },
      ],
    },
    {
      id: "cookies",
      title: "Cookies & similar technologies",
      blocks: [
        { p: "Cookies are small files placed on your device that help a website function and understand how it's used. Mungo may use necessary cookies to support core functionality, and optional cookies for preferences, analytics or marketing where applicable." },
        { p: "You can review and change your cookie choices at any time." },
        { link: ["Manage cookie preferences", "#cookie-preferences"] },
      ],
    },
    {
      id: "your-choices-rights",
      title: "Your choices & rights",
      blocks: [
        { p: "Depending on your location and applicable law, you may have choices regarding your information, which may include:" },
        {
          list: [
            "Updating your account information",
            "Managing communication preferences",
            "Managing cookie preferences",
            "Submitting a privacy request",
            "Requesting access, correction or deletion of your information, where legally applicable",
          ],
        },
        { callout: ["PLACEHOLDER", "Specific legal rights (such as under GDPR or CCPA) must be confirmed for Mungo's operating jurisdictions before publication."] },
      ],
    },
    {
      id: "data-retention",
      title: "Data retention",
      blocks: [
        { p: "This is placeholder language. Mungo retains information for as long as necessary to provide our services and for other legitimate business or legal purposes, consistent with applicable law. A specific retention period has not yet been finalized." },
      ],
    },
    {
      id: "security",
      title: "Security",
      blocks: [
        { p: "Mungo uses measures designed to help protect information from unauthorized access, use or disclosure. However, no method of transmission or storage can be guaranteed to be completely secure." },
        { callout: ["IMPORTANT", "This section must not claim information is “100% secure” or use unverified language such as “bank-level” or “military-grade” security."] },
      ],
    },
    {
      id: "childrens-privacy",
      title: "Children's privacy", // Figma has the typo "Children' privacy"
      blocks: [
        { p: "This is a placeholder section. A specific age threshold has not been defined here and must be confirmed with legal counsel before publication." },
      ],
    },
    {
      id: "third-party-services",
      title: "Third-party services",
      blocks: [
        { p: "Mungo may use third-party services to help operate our website and app, such as analytics, hosting, payments or communications. Specific vendors are not named here and should only be added once verified and implemented." },
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      blocks: [
        { p: "Mungo may update this Privacy Policy from time to time. When we do, we'll update the “Last updated” date at the top of this page." },
      ],
    },
    {
      id: "contact",
      title: "Contact us",
      blocks: [
        { p: "If you have questions about this Privacy Policy or Mungo's privacy practices, please contact us." },
        { link: ["Email: privacy@[MUNGO_DOMAIN]", "mailto:privacy@[MUNGO_DOMAIN]"], plain: "Email: " },
        { p: "Address: [VERIFIED LEGAL ADDRESS, IF REQUIRED]", large: true },
        { top: true },
      ],
    },
  ],
};

const P = "text-base leading-[29px] text-[#17201E]";

function Block({ b }) {
  if (b.p) return <p className={`${P} ${b.large ? "text-[17px]" : ""}`}>{b.p}</p>;
  if (b.list)
    return (
      <ul className="pt-1">
        {b.list.map((li) => (
          <li key={li} className="relative py-[5.5px] pl-[22px] text-base leading-[27px] text-[#17201E]">
            <span className="absolute left-0 top-[5px] text-[16.5px] text-[#22947E]">—</span>
            {li}
          </li>
        ))}
      </ul>
    );
  if (b.callout)
    return (
      <div className="rounded-[14px] border border-[#2DBB9F]/25 bg-[#EAF8F4] px-[22px] pb-5 pt-[27px]">
        <span className="block text-[11px] tracking-[0.66px] text-[#22947E]">{b.callout[0]}</span>
        <p className="mt-2 text-[15px] leading-[26px] text-[#17201E]">{b.callout[1]}</p>
      </div>
    );
  if (b.link)
    return (
      <p className="text-[17px] leading-[29px]">
        <a href={b.link[1]} className="text-[#22947E] underline">
          {b.link[0]}
        </a>
      </p>
    );
  if (b.top)
    return (
      <a href="#top" className="text-sm text-[#22947E]">
        Back to top ↑
      </a>
    );
  return null;
}

export default function LegalPage({ doc = defaultDoc }) {
  const [active, setActive] = useState(doc.sections[0].id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    doc.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [doc]);

  return (
    <>
      <Navbar currentPage="privacy" />
      <main id="top" className="font-jakarta mx-auto w-full max-w-[1440px] px-6 text-[#17201E] md:px-[120px]">
      {/* HERO */}
      <section className="border-b border-[#17201E]/10 py-20">
        <h1 className="text-[42px] font-semibold leading-[62px] tracking-[-1.2px]">{doc.title}</h1>
        <p className="pt-[3px] text-sm leading-[22px] text-[#22947E]">{doc.updated}</p>
        <p className="max-w-[640px] pt-2 text-[15.1px] leading-[27px] text-[#53627A]" style={{ fontFamily: "'Noto Sans', sans-serif" }}>
          {doc.intro}
        </p>
      </section>

      {/* DOCUMENT */}
      <div className="flex gap-20 py-16">
        <nav aria-label="On this page" className="sticky top-24 hidden h-fit w-[240px] shrink-0 lg:block">
          <p className="mb-4 text-[11px] tracking-[0.575px] text-[#66716D]">ON THIS PAGE</p>
          <ul>
            {doc.sections.map((s, i) => {
              const on = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`flex items-start gap-2.5 border-l-2 py-2 pl-3 text-sm leading-[21px] ${
                      on ? "border-[#22947E] font-semibold text-[#22947E]" : "border-transparent text-[#66716D]"
                    }`}
                  >
                    <span className="w-5 pt-px text-xs leading-[18px]">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <article className="w-full max-w-[760px]">
          <p className={P}>{doc.lead}</p>
          <div className="flex flex-col gap-[22px] pb-6">
            {doc.sections.map((s, i) => (
              <section key={s.id} id={s.id} className={`flex scroll-mt-24 flex-col gap-[17px] ${i === 0 ? "pt-2" : "pt-[52px]"}`}>
                <h2 className="pt-[5px] text-xl font-semibold leading-[35px] tracking-[-0.56px]">{s.title}</h2>
                {s.blocks.map((b, j) => (
                  <Block key={j} b={b} />
                ))}
              </section>
            ))}
          </div>

          <div className="flex flex-col gap-[9px] border-t border-[#17201E]/10 pt-10">
            <h3 className="text-xl font-semibold leading-[30px] tracking-[-0.4px]">Questions about your privacy?</h3>
            <p className="max-w-[520px] pb-2 text-base font-medium leading-[25px] text-[#66716D]">
              If you have questions about this Privacy Policy or how your information is handled, please contact Mungo.
            </p>
            <a href="#contact" className="w-fit rounded-full bg-[#2DBB9F] px-[26px] py-3.5 text-sm font-semibold text-white">
              Contact Mungo
            </a>
          </div>
        </article>
      </div>
      </main>
      <Footer />
    </>
  );
}