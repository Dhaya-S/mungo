import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

const PAGES = {
  Home: {
    slug: "https://mungo.app/",
    title: "Mungo – Better Care, Happier Pets, Stronger Bond",
    description:
      "Mungo connects pet owners with trusted care providers for grooming, walking, boarding, and more. Better care, happier pets, stronger bonds — all from one app.",
    keywords:
      "pet care app, dog walking app, pet grooming booking, pet boarding, pet sitting, Mungo app",
    ogDescription:
      "Book trusted pet care in one app. Better care, happier pets, stronger bonds.",
    twitterDescription: "Better care. Happier pets. Stronger bond. Download Mungo today.",
    alt: [
      { label: "Logo", value: "Mungo — pet care app for happier pets", note: 'Describes brand + purpose, not just "logo"' },
      { label: "Hero image", value: "Happy dog and owner using the Mungo pet care app together", note: "Describe the scene; avoid generic \"hero image\"" },
      { label: "App Store badge", value: "Download Mungo on the App Store", note: "" },
      { label: "Google Play badge", value: "Get Mungo on Google Play", note: "" },
      { label: "App screenshots", value: "Mungo app home screen showing nearby pet care providers", note: "Name the specific screen/feature shown" },
      { label: "Decorative icons", value: '""  (empty — purely decorative)', note: "" },
    ],
  },
  Services: {
    slug: "https://mungo.app/services",
    title: "Pet Care Services – Grooming, Walking & Boarding | Mungo",
    description:
      "Browse and book trusted pet care services on Mungo — grooming, walking, boarding, and vet-connected care from verified local providers.",
    keywords: "pet grooming, dog walking service, pet boarding, pet sitting, vet care app",
    ogDescription:
      "Grooming, walking, boarding, and more — booked easily through Mungo.",
    twitterDescription: "All your pet's care needs in one app. Browse services on Mungo.",
    alt: [
      { label: "Logo", value: "Mungo — pet care app for happier pets", note: "" },
      { label: "Hero image", value: "Pet groomer caring for a dog booked through Mungo", note: "Describe the scene; avoid generic \"hero image\"" },
      { label: "Service icon — grooming", value: "Grooming service icon", note: "" },
      { label: "Service icon — walking", value: "Dog walking service icon", note: "" },
      { label: "Service icon — boarding", value: "Pet boarding service icon", note: "" },
      { label: "App screenshots", value: "Mungo app service booking screen for grooming", note: "Name the specific screen/feature shown" },
    ],
  },
  "How It Works": {
    slug: "https://mungo.app/how-it-works",
    title: "How Mungo Works – Book Pet Care in 3 Steps",
    description:
      "See how easy it is to book pet care with Mungo. Search verified providers, choose a service, and track your pet's care in real time.",
    keywords: "how mungo works, book pet care, pet care app steps",
    ogDescription: "Search, book, and track pet care — all in three simple steps.",
    twitterDescription: "Booking pet care shouldn't be hard. Here's how Mungo makes it easy.",
    alt: [
      { label: "Logo", value: "Mungo — pet care app for happier pets", note: "" },
      { label: "Step 1 image", value: "Pet owner searching for verified providers on Mungo", note: "" },
      { label: "Step 2 image", value: "Pet owner booking a grooming appointment on Mungo", note: "" },
      { label: "Step 3 image", value: "Pet owner tracking a booked service on Mungo", note: "" },
      { label: "App screenshots", value: "Mungo app booking confirmation screen", note: "Name the specific screen/feature shown" },
    ],
  },
  Reviews: {
    slug: "https://mungo.app/reviews",
    title: "Mungo Reviews – What Pet Owners Are Saying",
    description:
      "Read real reviews from pet owners using Mungo for grooming, walking, and boarding. See why more pet parents trust Mungo every day.",
    keywords: "mungo reviews, pet care app reviews, dog walking reviews",
    ogDescription: "Real reviews from pet owners who trust Mungo for everyday care.",
    twitterDescription: "See what pet owners are saying about Mungo.",
    alt: [
      { label: "Logo", value: "Mungo — pet care app for happier pets", note: "" },
      { label: "Hero image", value: "Pet owner reading five-star reviews on the Mungo app", note: "" },
      { label: "Reviewer avatar", value: "Photo of Mungo user [Name], verified pet owner", note: "Use actual reviewer name when available" },
      { label: "Star rating icon", value: '""  (empty — purely decorative)', note: "" },
    ],
  },
  Blog: {
    slug: "https://mungo.app/blog",
    title: "Mungo Blog – Pet Care Tips, Guides & News",
    description:
      "Explore pet care tips, health guides, and stories from the Mungo team to help you and your pet live happier, healthier lives.",
    keywords: "pet care blog, dog care tips, pet health guides",
    ogDescription: "Pet care tips, guides, and stories from the Mungo team.",
    twitterDescription: "Tips, guides, and stories to help you and your pet thrive.",
    alt: [
      { label: "Logo", value: "Mungo — pet care app for happier pets", note: "" },
      { label: "Hero image", value: "Open notebook with a paw print, representing the Mungo blog", note: "" },
      { label: "Article thumbnail", value: "[Article title] — thumbnail image", note: "Replace with each post's actual title" },
      { label: "Author avatar", value: "Photo of [Author name], Mungo team", note: "" },
    ],
  },
  "About Us": {
    slug: "https://mungo.app/about-us",
    title: "About Mungo – Our Mission for Better Pet Care",
    description:
      "Learn about Mungo's mission to make pet care simple, trustworthy, and accessible for every pet owner and provider.",
    keywords: "about mungo, pet care mission, mungo company",
    ogDescription: "Our mission: simple, trustworthy pet care for every pet owner.",
    twitterDescription: "Meet the team building a better way to care for pets.",
    alt: [
      { label: "Logo", value: "Mungo — pet care app for happier pets", note: "" },
      { label: "Hero image", value: "Mungo team member with a dog, representing the company mission", note: "" },
      { label: "Team photo", value: "The Mungo team at [event/office]", note: "" },
      { label: "Founder photo", value: "[Founder name], founder of Mungo", note: "" },
    ],
  },
  Careers: {
    slug: "https://mungo.app/careers",
    title: "Careers at Mungo – Join Our Pet Care Team",
    description:
      "Explore open roles at Mungo and help build the future of pet care. See current openings and life at Mungo.",
    keywords: "mungo careers, pet care jobs, join mungo",
    ogDescription: "Help build the future of pet care. See open roles at Mungo.",
    twitterDescription: "We're hiring. Explore open roles at Mungo.",
    alt: [
      { label: "Logo", value: "Mungo — pet care app for happier pets", note: "" },
      { label: "Hero image", value: "Mungo team collaborating in the office", note: "" },
      { label: "Office photo", value: "Mungo office space and team culture", note: "" },
      { label: "Team photo", value: "Mungo team members working together on pet care features", note: "" },
    ],
  },
  Partners: {
    slug: "https://mungo.app/partners",
    title: "Become a Mungo Partner – List Your Pet Care Business",
    description:
      "Partner with Mungo to grow your pet care business, reach more pet owners, and manage bookings in one simple platform.",
    keywords: "mungo partners, list pet care business, pet care provider signup",
    ogDescription: "Grow your pet care business by partnering with Mungo.",
    twitterDescription: "List your pet care business on Mungo and reach more owners.",
    alt: [
      { label: "Logo", value: "Mungo — pet care app for happier pets", note: "" },
      { label: "Hero image", value: "Pet care provider partnering with Mungo, handshake illustration", note: "" },
      { label: "Provider photo", value: "Groomer working with a client's dog, a Mungo partner", note: "" },
      { label: "Dashboard screenshot", value: "Mungo partner dashboard showing bookings", note: "Name the specific screen/feature shown" },
    ],
  },
  "Terms of Service": {
    slug: "https://mungo.app/terms-of-service",
    title: "Terms of Service | Mungo",
    description:
      "Read Mungo's Terms of Service to understand the rules and guidelines for using our pet care app and booking services.",
    keywords: "mungo terms of service, terms and conditions",
    ogDescription: "Terms and conditions for using the Mungo pet care app.",
    twitterDescription: "Read Mungo's Terms of Service.",
    alt: [
      { label: "Logo", value: "Mungo — pet care app for happier pets", note: "" },
      { label: "Page content", value: "No supporting imagery — legal text page", note: "" },
    ],
  },
  "Privacy Policy": {
    slug: "https://mungo.app/privacy-policy",
    title: "Privacy Policy | Mungo",
    description:
      "Learn how Mungo collects, uses, and protects your personal information and your pet's data across our app and website.",
    keywords: "mungo privacy policy, data protection pet app",
    ogDescription: "How Mungo collects, uses, and protects your data.",
    twitterDescription: "Read Mungo's Privacy Policy.",
    alt: [
      { label: "Logo", value: "Mungo — pet care app for happier pets", note: "" },
      { label: "Page content", value: "No supporting imagery — legal text page", note: "" },
    ],
  },
};

const GROUPS = [
  { label: "Core", items: ["Home"] },
  { label: "Product", items: ["Services", "How It Works", "Reviews"] },
  { label: "Company", items: ["About Us", "Careers", "Partners"] },
  { label: "Resources", items: ["Blog"] },
  { label: "Legal", items: ["Terms of Service", "Privacy Policy"] },
];

function buildMetaTags(page) {
  return `<title>${page.title}</title>
<meta name="description"
    content="${page.description}">
<meta name="keywords"
    content="${page.keywords}">
<meta property="og:title" content="${page.title}">
<meta property="og:description" content="${page.ogDescription}">
<meta property="og:url" content="${page.slug}">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${page.title}">
<meta name="twitter:description" content="${page.twitterDescription}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${page.slug}">`;
}

export default function MungoSEOTool() {
  const [active, setActive] = useState("Home");
  const [copied, setCopied] = useState(false);
  const page = PAGES[active];
  const metaTags = buildMetaTags(page);

  const handleCopy = () => {
    navigator.clipboard.writeText(metaTags);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen bg-stone-50 px-6 py-10 sm:px-10 font-sans">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-900">
            <span className="text-teal-600">mungo</span> — SEO Meta Tags, Slugs
            &amp; Alt Text
          </h1>
          <a
            href="/"
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-teal-500 hover:text-teal-600 transition"
          >
            &larr; Back to Home
          </a>
        </div>
        <p className="mt-2 text-slate-500">
          Complete SEO configuration for every page. Click a tab to view its tags.
        </p>

        {GROUPS.map((group) => (
          <div key={group.label} className="mt-6">
            <p className="text-xs font-semibold tracking-wide text-slate-400">
              {group.label.toUpperCase()}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {group.items.map((name) => (
                <button
                  key={name}
                  onClick={() => setActive(name)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    active === name
                      ? "bg-teal-600 text-white font-medium shadow-sm"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-teal-300"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8">
          <p className="text-xs font-semibold tracking-wide text-slate-400">
            SLUG
          </p>
          <div className="mt-2 rounded-lg border border-teal-200 bg-teal-50 px-4 py-3 font-mono text-sm text-teal-700">
            {page.slug}
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xs font-semibold tracking-wide text-slate-400">
            META TAGS — PASTE INSIDE &lt;HEAD&gt;
          </p>
          <div className="relative mt-2 rounded-lg bg-slate-900 p-4">
            <button
              onClick={handleCopy}
              className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-slate-700 px-3 py-1.5 text-xs text-white hover:bg-slate-600 transition"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied" : "Copy"}
            </button>
            <pre className="overflow-x-auto whitespace-pre-wrap break-words pr-16 font-mono text-[13px] leading-6">
              {metaTags.split("\n").map((line, i) => (
                <div key={i}>
                  <span className="text-pink-400">
                    {line.match(/^<\/?[a-zA-Z]+/)?.[0] || ""}
                  </span>
                  <span className="text-slate-300">
                    {line.replace(/^<\/?[a-zA-Z]+/, "")}
                  </span>
                </div>
              ))}
            </pre>
          </div>
        </div>

        <div className="mt-8 pb-10">
          <p className="text-xs font-semibold tracking-wide text-slate-400">
            ALT TEXT TESTS
          </p>
          <div className="mt-2 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white shadow-sm">
            {page.alt.map((row, i) => (
              <div key={i} className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[180px_1fr]">
                <span className="font-mono text-sm text-teal-600 font-semibold">
                  {row.label}
                </span>
                <div>
                  <p className="font-mono text-sm text-slate-800">
                    alt="{row.value}"
                  </p>
                  {row.note && (
                    <p className="mt-0.5 text-xs text-slate-400">{row.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
