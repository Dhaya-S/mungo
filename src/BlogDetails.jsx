import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import blogdetails1 from './assets/blog-details-1.png';
import blogdetails2 from './assets/blog-details-2.png';
import blogdetails3 from './assets/blog-details-3.png';
import blogdetails4 from './assets/blog-details-4.png';
import blogdetails5 from './assets/blog-details-5.png';

const FONT = '"Segoe UI", system-ui, -apple-system, Roboto, sans-serif';

const ARTICLE = {
  title: 'How to Make Every Pet-Care Day a Little Easier',
  date: 'September 4, 2026',
  caption: 'Pet parent & dog, calm morning at home',
  heroImg: blogdetails1,
  intro:
    'Some days pet care feels effortless. Other days, everything happens at once. A few small shifts in how you approach the everyday can make even the busiest days feel more manageable.',
  // Body blocks render in order. Types: h2, p, img, checklist, quote.
  body: [
    { type: 'h2', text: "Start with what's already working" },
    {
      type: 'p',
      text: "Most pet parents already have routines that work — a walk before breakfast, a wind-down before bed. The easiest way to make pet care feel simpler isn't to add more structure, it's to notice what's already holding up and build around it.",
    },
    { type: 'p', text: 'Small, repeatable habits tend to stick better than big changes that are hard to keep up.' },
    { type: 'img', src: blogdetails2, alt: 'A person resting with their golden retriever' },
    { type: 'h2', text: 'Know where to turn when you need help' },
    {
      type: 'p',
      text: 'Even the best routine needs backup sometimes. Having a groomer, sitter or walker you already trust — rather than searching in the moment — turns a stressful gap into a small errand.',
    },
    {
      type: 'checklist',
      items: [
        { title: 'Keep a short list of trusted care options', text: 'Someone for walks, someone for grooming, someone for longer stays.' },
        { title: "Note your pet's basic care details somewhere easy to find", text: 'Feeding times, routines, anything a new sitter would need.' },
        { title: 'Build in flexibility, not just structure', text: "A routine that only works on perfect days isn't much of a routine." },
        { title: 'Keep communication simple', text: 'A quick message when plans change goes a long way.' },
      ],
    },
    { type: 'h2', text: 'Small changes add up' },
    {
      type: 'p',
      text: 'None of this requires an overhaul. Pick one thing that feels hardest right now — finding reliable help, keeping a routine steady — and start there.',
    },
    { type: 'quote', text: "Good pet care isn't about doing everything perfectly. It's about making the right care easier to give." },
    { type: 'h2', text: 'Where Mungo fits in' },
    {
      type: 'p',
      text: "Mungo brings the everyday parts of pet care — finding help, staying in touch, keeping track of what's happening — into one place, so the rest of your day can stay simple.",
    },
  ],
};

const RELATED = [
  { cat: 'Pet care', title: 'Building a Better Everyday Routine for Your Dog', date: 'September 2, 2026', img: blogdetails3, href: '/blog/everyday-routine-dog' },
  { cat: 'Wellness', title: 'Small Everyday Habits That Support Better Pet Care', date: 'August 20, 2026', img: blogdetails4, href: '/blog/small-everyday-habits' },
  { cat: 'Guides', title: 'What to Look For When Choosing Pet Care', date: 'August 15, 2026', img: blogdetails5, href: '/blog/choosing-pet-care' },
];

function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="pt-8 text-[26px] font-semibold leading-9 tracking-[-0.6px] text-[#17201E] sm:text-[29px]">
          {block.text}
        </h2>
      );
    case 'p':
      return <p className="text-lg font-medium leading-[33px] text-[#17201E]">{block.text}</p>;
    case 'img':
      return <img src={block.src} alt={block.alt || ''} className="h-auto w-full rounded-3xl object-cover sm:h-[333px]" />;
    case 'checklist':
      return (
        <ul className="flex flex-col gap-[18px] pt-4">
          {block.items.map((item) => (
            <li key={item.title} className="flex items-start gap-[14px]">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF8F4] text-sm text-[#66716D]"
              >
                ✓
              </span>
              <div>
                <p className="text-base font-semibold leading-[29px] text-[#17201E]">{item.title}</p>
                <p className="text-sm font-medium leading-[25px] text-[#66716D]">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote className="flex flex-col gap-[7px] pb-2 pt-10">
          <span aria-hidden="true" className="text-[64px] font-semibold leading-[38px] text-[#2DBB9F] opacity-50">&ldquo;</span>
          <p className="text-[25px] font-semibold leading-[38px] tracking-[-0.3px] text-[#17201E] sm:text-[28.7px]">
            {block.text}
          </p>
        </blockquote>
      );
    default:
      return null;
  }
}

export default function BlogArticle({ article = ARTICLE, related = RELATED }) {
  const handleShare = async () => {
    const data = { title: article.title, url: window.location.href };
    try {
      if (navigator.share) await navigator.share(data);
      else await navigator.clipboard.writeText(data.url);
    } catch {
      /* user cancelled */
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-white" style={{ fontFamily: FONT }}>
      <Navbar currentPage="blog" />

      {/* ARTICLE HERO */}
      <section className="w-full bg-[#EAF8F4]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-stretch gap-8 px-6 py-10 lg:min-h-[560px] lg:flex-row lg:items-center lg:gap-16 lg:p-16">
          <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-3xl lg:h-[625px]">
            <img src={article.heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <span className="absolute bottom-4 left-4 rounded-full bg-[rgba(23,32,30,0.55)] px-[11px] py-[7px] text-[11px] leading-4 text-white backdrop-blur-[3px]">
              {article.caption}
            </span>
          </div>
          <div className="flex w-full flex-col justify-center lg:w-[484px] lg:shrink-0">
            <h1 className="py-4 text-[40px] font-semibold leading-[1.05] tracking-[-1.04px] text-[#17201E] sm:text-[52px] lg:text-[64px] lg:leading-[67px]">
              {article.title}
            </h1>
            <p className="py-3 text-base font-medium uppercase leading-5 tracking-[0.39px] text-[#66716D]">{article.date}</p>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="mx-auto w-full max-w-[720px] px-6 pb-14 pt-16 lg:px-16 lg:pt-20">
        <div className="flex justify-end pb-2">
          <button onClick={handleShare} className="flex items-end gap-1.5 px-1.5 text-[13.5px] font-bold leading-5 text-[#66716D] hover:text-[#17201E]">
            <span aria-hidden="true" className="text-xs">↗</span> Share
          </button>
        </div>
        <div className="flex flex-col gap-[19px]">
          <p className="text-lg font-medium leading-[37px] text-[#17201E]">{article.intro}</p>
          {article.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </article>

      {/* ARTICLE NAV */}
      <nav className="mx-auto flex w-full max-w-[720px] items-center justify-between border-t border-[rgba(23,32,30,0.1)] px-6 py-8 text-base font-medium leading-[22px]">
        <a href="/blog" className="text-[#66716D] hover:text-[#17201E]">Back to Blog</a>
        <a href="/blog/next" className="text-[#17201E]">Next article →</a>
      </nav>

      {/* RELATED */}
      <section className="w-full bg-[#F5FBF9] px-6 py-16 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-11 lg:px-16">
          <h2 className="max-w-[600px] text-[28px] font-semibold leading-[1.5] tracking-[-0.72px] text-[#17201E] sm:text-[34.5px]">
            More from the Mungo Journal
          </h2>
          <div className="grid grid-cols-1 gap-9 md:grid-cols-3">
            {related.map((r) => (
              <a key={r.title} href={r.href} className="group flex flex-col gap-[10px] pb-[11px]">
                <div className="overflow-hidden rounded-xl">
                  <img src={r.img} alt="" className="h-[240px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] lg:h-[270px]" />
                </div>
                <p className="pt-1.5 text-[11px] font-bold uppercase leading-4 tracking-[0.55px] text-[#22947E]">{r.cat}</p>
                <h4 className="text-[16.5px] font-semibold leading-[22px] tracking-[-0.34px] text-[#17201E]">{r.title}</h4>
                <p className="text-[11px] font-semibold uppercase leading-4 text-[#66716D]">{r.date}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full bg-[#2DBB9F] px-6 py-16 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex max-w-[1152px] flex-col items-center gap-5 text-center">
          <h2 className="text-[36px] font-semibold leading-[1.5] tracking-[-0.84px] text-white sm:text-[50px] lg:text-[63px]">
            Because better care starts with knowing where to look.
          </h2>
          <p className="max-w-[440px] text-base font-medium leading-6 text-white/85">
            Explore Mungo and find the care your pet needs.
          </p>
          <a
            href="/services"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-[26px] py-[14px] text-[14.9px] font-semibold leading-[22px] text-[#22947E] transition-opacity hover:opacity-90"
          >
            Explore services
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}