import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import allarticles1 from './assets/allarticles-1.webp';

const FONT = '"Segoe UI", system-ui, -apple-system, Roboto, sans-serif';

const svg = {
  fill: 'none',
  stroke: '#2CB29A',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const BookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...svg}>
    <path d="M12 6v14M12 6C10 4.5 7 4 3 4v14c4 0 7 .5 9 2 2-1.5 5-2 9-2V4c-4 0-7 .5-9 2z" />
  </svg>
);
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...svg}>
    <rect x="3" y="5" width="18" height="16" rx="3" />
    <path d="M8 3v4M16 3v4M3 11h18" />
  </svg>
);
const ChatIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...svg}>
    <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5A8 8 0 1 1 21 12z" />
    <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
  </svg>
);
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...svg}>
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const SearchIcon = () => (
  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="#66716D" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
    <circle cx="7" cy="7" r="4.7" />
    <path d="M10.5 10.5L14 14" />
  </svg>
);
const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#2CB29A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 7l5 5-5 5" />
  </svg>
);

const FILTERS = ['All', 'Pet Parents', 'Care Providers'];

// `audience` drives the filter. Only pet-parent groups exist in the design.
const GROUPS = [
  {
    id: 'getting-started',
    title: 'Getting started — Pet parent',
    audience: 'Pet Parents',
    Icon: BookIcon,
    articles: [
      { title: 'What is Mungo?', href: '/help/what-is-mungo' },
      { title: 'How does Mungo work?', href: '/help/how-mungo-works' },
      { title: 'How do I contact support?', href: '/help/contact-support' },
      { title: 'How do I create an account?', href: '/help/create-account' },
      { title: 'Getting started as a pet parent', href: '/help/getting-started-pet-parent' },
    ],
  },
  {
    id: 'bookings',
    title: 'Bookings & services — Pet parent',
    audience: 'Pet Parents',
    Icon: CalendarIcon,
    articles: [
      { title: 'How do I book a service?', href: '/help/book-a-service' },
      { title: 'How do I modify a booking?', href: '/help/modify-a-booking' },
      { title: 'How do I choose a care provider?', href: '/help/choose-a-provider' },
      { title: 'How do I cancel a booking?', href: '/help/cancel-a-booking' },
    ],
  },
  {
    id: 'chat',
    title: 'Chat & communication — Pet parent',
    audience: 'Pet Parents',
    Icon: ChatIcon,
    articles: [
      { title: 'How do I chat with my care provider?', href: '/help/chat-with-provider' },
      { title: 'When can I contact my care provider?', href: '/help/when-to-contact-provider' },
    ],
  },
  {
    id: 'payments',
    title: 'Payments — Pet parent',
    audience: 'Pet Parents',
    Icon: ShieldIcon,
    articles: [
      { title: 'How do payments work?', href: '/help/how-payments-work' },
      { title: 'Where can I view payment details?', href: '/help/view-payment-details' },
    ],
  },
];

const PAGE_SIZE = 4; // groups shown before "Load more"

export default function HelpArticles() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [shown, setShown] = useState(PAGE_SIZE);

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GROUPS.filter((g) => filter === 'All' || g.audience === filter)
      .map((g) => ({
        ...g,
        articles: q ? g.articles.filter((a) => a.title.toLowerCase().includes(q)) : g.articles,
      }))
      .filter((g) => g.articles.length > 0);
  }, [query, filter]);

  const visible = groups.slice(0, shown);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white" style={{ fontFamily: FONT }}>
      <Navbar currentPage="guide" />

      {/* HERO */}
      <section className="w-full px-6 pt-8 lg:px-[120px]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 lg:min-h-[400px] lg:flex-row lg:items-center">
          <div className="flex w-full max-w-[435px] flex-col gap-[9px] py-6">
            <h1 className="text-[32px] font-semibold leading-[57px] tracking-[-0.76px] text-[#17201E] sm:text-[36.5px]">
              All articles
            </h1>
            <p className="text-base font-medium leading-[23px] text-[#66716D]">
              Browse everything in the Mungo Help Centre.
            </p>

            <div className="relative pt-[17px]">
              <span className="pointer-events-none absolute left-[17px] top-[17px] flex h-[47px] items-center">
                <SearchIcon />
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShown(PAGE_SIZE);
                }}
                placeholder="Search articles"
                aria-label="Search articles"
                className="h-[47px] w-full rounded-full border border-[rgba(23,32,30,0.14)] bg-white py-[13px] pl-11 pr-[18px] text-[14.5px] text-[#17201E] outline-none placeholder:text-[#757575] focus:border-[#2DBB9F]"
              />
            </div>

            <div className="flex flex-wrap gap-[10px] pt-[13px]" role="tablist">
              {FILTERS.map((f) => {
                const active = f === filter;
                return (
                  <button
                    key={f}
                    role="tab"
                    aria-selected={active}
                    onClick={() => {
                      setFilter(f);
                      setShown(PAGE_SIZE);
                    }}
                    className={`rounded-full px-4 py-[9px] text-[13.5px] leading-[17px] transition-colors ${
                      active
                        ? 'bg-[#2DBB9F] font-bold text-white'
                        : 'bg-[#F5FBF9] font-semibold text-[#66716D] hover:text-[#17201E]'
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>

          <img loading="lazy" decoding="async"
            src={allarticles1}
            alt="A kitten and a puppy reading a book together"
            className="h-auto w-full max-w-[669px] object-contain lg:h-[400px]"
          />
        </div>
      </section>

      {/* ARTICLE GROUPS */}
      <section className="w-full px-6 pb-4 pt-8 lg:px-[120px]">
        <div className="mx-auto max-w-[1200px] lg:px-16">
          {visible.length === 0 ? (
            <p className="border-t border-[rgba(23,32,30,0.08)] py-16 text-center text-base text-[#66716D]">
              No articles match your search.
            </p>
          ) : (
            visible.map(({ id, title, Icon, articles }) => (
              <div key={id} className="relative flex flex-col gap-4 border-t border-[rgba(23,32,30,0.08)] py-10">
                <span
                  aria-hidden="true"
                  className="absolute -left-3 top-[41px] hidden h-14 w-14 items-center justify-center rounded-full bg-[#E1FEF6] lg:flex lg:-left-16 xl:-left-[61px]"
                >
                  <Icon />
                </span>
                <h2 className="text-[13px] font-bold uppercase leading-5 tracking-[0.65px] text-[#22947E]">{title}</h2>
                <ul>
                  {articles.map((a, i) => (
                    <li key={a.title} className={i > 0 ? 'border-t border-[rgba(23,32,30,0.06)]' : ''}>
                      <a href={a.href} className="group flex items-center justify-between gap-4 py-[11px]">
                        <span className="text-[15px] font-semibold leading-[22px] text-[#17201E] group-hover:text-[#22947E]">
                          {a.title}
                        </span>
                        <span className="shrink-0 transition-transform group-hover:translate-x-0.5">
                          <ChevronIcon />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}

          {shown < groups.length && (
            <div className="flex justify-center pb-6 pt-9">
              <button
                onClick={() => setShown((n) => n + PAGE_SIZE)}
                className="rounded-full bg-[#EAF8F4] px-[22px] py-3 text-sm font-semibold leading-[18px] text-[#22947E] transition-colors hover:bg-[#dff3ec]"
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}