import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


import blog1 from './assets/blog-1.webp';
import blog2 from './assets/blog-2.webp';
import blog3 from './assets/blog-3.webp';
import blog4 from './assets/blog-4.webp';
import blog5 from './assets/blog-5.webp';
import blog6 from './assets/blog-6.webp';
import blog7 from './assets/blog-7.webp';
import blog8 from './assets/blog-8.webp';
import blog9 from './assets/blog-9.webp';

const FONT = '"Segoe UI", system-ui, -apple-system, Roboto, sans-serif';

const CATEGORIES = ['All', 'Pet Care', 'Dogs', 'Cats', 'Wellness', 'Guides', 'Mungo', 'Provider stories'];

const FEATURED = {
  title: 'How to make every pet-care day a little easier',
  date: 'September 4, 2026',
  desc: 'From everyday routines to finding the right help, small changes can make caring for your pet feel much simpler.',
  caption: 'Pet parent & dog, calm morning at home',
  img: blog1,
  href: '/blog-details',
};

// `category` is a guess so the filter works. Adjust to your real taxonomy.
const ARTICLES = [
  { title: 'Building a Better Everyday Routine for Your Dog', date: 'September 2, 2026', excerpt: 'Simple routines can make walks, meals, playtime, and care easier for both of you.', category: 'Dogs', img: blog2, href: '/blog-details' },
  { title: 'Making Daily Walks Better for Your Dog', date: 'August 29, 2026', excerpt: 'A few small adjustments can turn an ordinary walk into something your dog genuinely looks forward to.', category: 'Dogs', img: blog3, href: '/blog-details' },
  { title: 'Creating a More Comfortable Home for Your Cat', date: 'August 25, 2026', excerpt: 'A few thoughtful touches around the home can make a real difference to how settled your cat feels.', category: 'Cats', img: blog4, href: '/blog-details' },
  { title: 'Small Everyday Habits That Support Better Pet Care', date: 'August 20, 2026', excerpt: 'Consistency matters more than perfection — a few small habits go a long way.', category: 'Wellness', img: blog5, href: '/blog-details' },
  { title: 'What to Look For When Choosing Pet Care', date: 'August 15, 2026', excerpt: 'A few questions worth asking before deciding who cares for your pet.', category: 'Guides', img: blog6, href: '/blog-details' },
  { title: 'Why We Built Mungo Around Connection', date: 'August 10, 2026', excerpt: 'The idea behind Mungo started with a simple question: what actually makes pet care feel easier?', category: 'Mungo', img: blog7, href: '/blog-details' },
  { title: 'The People Behind Better Pet Care', date: 'August 5, 2026', excerpt: 'Good care starts with people who take it seriously. A look at what that looks like on Mungo.', category: 'Provider stories', img: blog8, href: '/blog-details' },
  { title: 'Understanding What Your Dog Needs From a Walk', date: 'July 30, 2026', excerpt: "A good walk is about more than distance — here's what actually matters to your dog.", category: 'Dogs', img: blog9, href: '/blog-details' },
];

const TOTAL_PAGES = 8;

function pageList(current) {
  // Mirrors the design: 1 2 3 … 8
  const base = [1, 2, 3, '…', TOTAL_PAGES];
  if (current > 3 && current < TOTAL_PAGES) return [1, '…', current, '…', TOTAL_PAGES];
  if (current === TOTAL_PAGES) return [1, '…', TOTAL_PAGES - 1, TOTAL_PAGES];
  return base;
}

export default function Blog() {
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);

  const visible = category === 'All' ? ARTICLES : ARTICLES.filter((a) => a.category === category);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white" style={{ fontFamily: FONT }}>
      <Navbar currentPage="blog" />

      {/* HERO */}
      <section className="w-full px-6 pb-14 pt-16 lg:px-16 lg:pt-[87px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-5 text-center">
          <h1 className="text-[40px] font-semibold leading-[1.04] tracking-[-1.28px] text-[#17201E] sm:text-[52px] lg:text-[62px]">
            The Mungo journal
          </h1>
          <p className="max-w-[560px] text-base font-medium leading-[27px] text-[#66716D]">
            Helpful guides, thoughtful stories, and everything worth knowing about caring for the pets you love.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <div className="w-full border-y border-[rgba(23,32,30,0.08)] px-6 lg:px-36">
        <div className="mx-auto flex max-w-[1152px] gap-8 overflow-x-auto py-5" role="tablist">
          {CATEGORIES.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={active}
                onClick={() => setCategory(c)}
                className={`relative shrink-0 whitespace-nowrap py-1.5 text-[14.5px] font-semibold leading-[22px] transition-colors ${
                  active ? 'text-[#22947E]' : 'text-[#66716D] hover:text-[#17201E]'
                }`}
              >
                {c}
                {active && <span className="absolute inset-x-0 -bottom-[2px] h-[2px] bg-[#2DBB9F]" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* FEATURED */}
      {category === 'All' && (
        <section className="w-full px-6 pt-14 lg:px-16">
          <div className="mx-auto flex max-w-[1168px] flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:justify-between">
            <a href={FEATURED.href} className="relative block w-full overflow-hidden rounded-xl lg:w-[598px] lg:shrink-0">
              <img loading="lazy" decoding="async" src={FEATURED.img} alt="" className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[494px]" />
              <span className="absolute bottom-4 left-4 rounded-full bg-[rgba(23,32,30,0.55)] px-[11px] py-[7px] text-[11px] leading-4 text-white backdrop-blur-[3px]">
                {FEATURED.caption}
              </span>
            </a>
            <div className="flex w-full flex-col items-start gap-3 lg:max-w-[570px] lg:self-stretch lg:pl-[43px] lg:pt-3">
              <h2 className="max-w-[527px] text-[30px] font-semibold leading-[1.14] tracking-[-0.84px] text-[#17201E] sm:text-[36px] lg:text-[40px]">
                {FEATURED.title}
              </h2>
              <p className="text-[12.5px] font-semibold leading-[19px] tracking-[0.25px] text-[#66716D]">{FEATURED.date}</p>
              <p className="max-w-[420px] pt-1 text-base font-medium leading-6 text-[#66716D]">{FEATURED.desc}</p>
              <a
                href={FEATURED.href}
                className="mt-1 inline-flex items-center rounded-full bg-[#2DBB9F] px-5 py-1.5 text-sm font-semibold leading-[22px] text-white transition hover:bg-[#25a78d]"
              >
                Read article
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ARTICLE GRID */}
      <section className="w-full px-6 pb-10 pt-14 lg:px-16 lg:pt-[96px]">
        <div className="mx-auto max-w-[1152px]">
          {visible.length === 0 ? (
            <p className="py-20 text-center text-base text-[#66716D]">No articles in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 gap-x-10 gap-y-[81px] md:grid-cols-2">
              {visible.map((a) => (
                <a key={a.title} href={a.href} className="group flex flex-col gap-[10px] pb-[14px]">
                  <div className="overflow-hidden rounded-xl">
                    <img loading="lazy" decoding="async"
                      src={a.img}
                      alt=""
                      className="h-[260px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] sm:h-[340px] lg:h-[417px]"
                    />
                  </div>
                  <h3 className="pt-[1px] text-[20px] font-semibold leading-[27px] tracking-[-0.42px] text-[#17201E]">{a.title}</h3>
                  <p className="pt-[1px] text-[11.5px] font-semibold uppercase leading-[17px] tracking-[0.345px] text-[#66716D]">{a.date}</p>
                  <p className="max-w-[491px] text-base font-medium leading-[22px] text-[#66716D]">{a.excerpt}</p>
                </a>
              ))}
            </div>
          )}

          {/* PAGINATION */}
          <nav className="mt-16 flex flex-wrap items-center justify-center gap-x-7 gap-y-3" aria-label="Pagination">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex items-center gap-1 px-1.5 text-[14.5px] font-semibold text-[#66716D] disabled:opacity-50"
            >
              <span aria-hidden="true">←</span> Previous
            </button>

            <div className="flex items-center gap-4 text-sm font-semibold">
              {pageList(page).map((n, i) =>
                n === '…' ? (
                  <span key={`e${i}`} className="text-[#66716D]">…</span>
                ) : (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    aria-current={n === page ? 'page' : undefined}
                    className={n === page ? 'text-[#22947E]' : 'text-[#66716D] hover:text-[#17201E]'}
                  >
                    {n}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
              disabled={page === TOTAL_PAGES}
              className="flex items-center gap-1 px-1.5 text-[14.5px] font-semibold text-[#17201E] disabled:opacity-50"
            >
              Next <span aria-hidden="true" className="font-bold">→</span>
            </button>
          </nav>
        </div>
      </section>

      {/* BLOG CTA */}
      <section className="w-full bg-[#2DBB9F] px-6 py-16 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex max-w-[700px] flex-col items-center gap-5 text-center">
          <h2 className="text-[38px] font-semibold leading-[1.5] tracking-[-0.25px] text-white sm:text-[50px] lg:text-[63px]">
            Better care starts with better information.
          </h2>
          <p className="text-base font-medium leading-[26px] text-white">Explore more guides and stories from Mungo.</p>
          <a
            href="/services"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-[26px] py-[14px] text-[14.9px] font-semibold leading-[22px] text-[#17201E] transition-opacity hover:opacity-90"
          >
            Explore services
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}