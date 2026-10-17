import { useState } from 'react';
import { Search, Info } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const audiences = [
  { title: "I'm a Pet Parent", sub: 'Bookings, chat, payments and more.', href: '/pet-parent-help' },
  { title: "I'm a Care Provider", sub: 'Services, clients, earnings and more.', href: '/partners' },
];

const popular = [
  {
    cat: 'Bookings & Services',
    title: 'How do I book a service?',
    desc: 'Step-by-step guide to booking grooming, walking, sitting, boarding or vet care.',
  },
  {
    cat: 'Chat & Communication',
    title: 'How do I chat with my care provider?',
    desc: "Using direct chat once you're connected with a provider.",
  },
  {
    cat: 'Account & Profile',
    title: 'How do I update my profile?',
    desc: 'Managing your personal details in the Mungo app.',
  },
  {
    cat: 'App Experience',
    title: 'How do I know when my service starts?',
    desc: "What you'll see in the app when a service begins.",
  },
  {
    cat: 'App Experience',
    title: 'What happens when a service is completed?',
    desc: 'What changes once your provider marks a service complete.',
  },
  {
    cat: 'Getting Started',
    title: 'How do I contact support?',
    desc: 'How to reach the Mungo team if you need help.',
  },
];

const categories = [
  { title: 'Getting Started', sub: 'New to Mungo? Start here.' },
  { title: 'Bookings & Services', sub: 'Booking, changing and cancelling.' },
  { title: 'Chat & Communication', sub: 'Talking with your care provider.' },
  { title: 'Payments', sub: 'How payments work on Mungo.' },
  { title: 'Safety & Trust', sub: 'Feeling confident about your care.' },
  { title: 'Account & Profile', sub: 'Managing your details and pets.' },
  { title: 'App Experience', sub: 'Using the Mungo app day to day.' },
];

const guides = [
  'Getting started as a pet parent',
  'How Mungo services work',
  'Getting started as a care provider',
];

const slug = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-');

export default function HelpCentreHome() {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();

  const results = q
    ? popular.filter((a) => `${a.title} ${a.desc} ${a.cat}`.toLowerCase().includes(q))
    : popular;

  return (
    <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#17201E]">
      <Navbar />

      <main>
        {/* Search hero */}
        <section className="bg-[#FFF7E9] px-6 pb-20 pt-16">
          <div className="mx-auto flex max-w-[512px] flex-col items-center gap-[11px]">
            <h1 className="text-center text-[34px] font-semibold leading-[1.4] tracking-[-0.8px] md:text-[42px] md:leading-[60px]">
              How can we help?
            </h1>
            <p className="text-center text-[16px] font-medium leading-[23px] text-[#66716D]">
              Find answers about Mungo, pet care, bookings and more.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative mt-[15px] w-full"
              role="search"
            >
              <Search className="pointer-events-none absolute left-5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#66716D]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Mungo Help Centre"
                className="h-14 w-full rounded-full border border-[#17201E]/[0.14] bg-white py-4 pl-[50px] pr-5 text-[15.5px] text-[#17201E] outline-none placeholder:text-[#757575] focus:border-[#2DBB9F]"
              />
            </form>
          </div>
        </section>

        {/* Audience switcher */}
        <section className="mx-auto max-w-[1200px] px-6 pt-6 md:px-16">
          <div className="grid gap-4 md:grid-cols-2">
            {audiences.map((a) => (
              <a
                key={a.title}
                href={a.href}
                className="flex flex-col gap-[5px] rounded-2xl border border-[#17201E]/[0.12] bg-white px-5 py-[21px] transition-colors hover:border-[#2DBB9F]"
              >
                <span className="text-[16px] font-semibold leading-5 tracking-[-0.33px] text-black">
                  {a.title}
                </span>
                <span className="text-[14px] font-medium leading-[18px] text-[#66716D]">
                  {a.sub}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Popular */}
        <section className="mx-auto flex max-w-[1200px] flex-col gap-7 px-6 py-20 md:px-16">
          <h2 className="text-center text-[34px] font-semibold leading-[42px] tracking-[-0.56px] md:text-[42px]">
            {q ? 'Search results' : 'Popular right now'}
          </h2>

          {results.length === 0 ? (
            <p className="text-center text-[15px] font-medium text-[#66716D]">
              No articles match &ldquo;{query}&rdquo;. Try different keywords.
            </p>
          ) : (
            <div className="grid gap-4 md:grid-cols-3">
              {results.map((a) => (
                <a
                  key={a.title}
                  href="#"
                  className="flex flex-col gap-[5px] rounded-[14px] border border-[#17201E]/10 px-5 pb-5 pt-[19px] transition-colors hover:border-[#2DBB9F]"
                >
                  <p className="text-[12px] font-semibold leading-5 tracking-[0.25px] text-[#66716D]">
                    {a.cat}
                  </p>
                  <h3 className="pt-[3px] text-[15px] font-semibold leading-[21px] tracking-[-0.31px]">
                    {a.title}
                  </h3>
                  <p className="text-[12px] font-medium leading-5 text-[#66716D]">{a.desc}</p>
                </a>
              ))}
            </div>
          )}
        </section>

        {/* Browse by category */}
        <section className="bg-[#F5FBF9] px-6 py-20 md:px-[120px] md:py-[120px]">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-7 md:px-16">
            <div className="flex flex-col items-center gap-[10px] text-center">
              <h2 className="text-[34px] font-semibold leading-[42px] tracking-[-0.56px] md:text-[42px]">
                Browse by category
              </h2>
              <p className="text-[16px] font-medium leading-[22px] text-[#66716D]">
                Find the answers you&rsquo;re looking for.
              </p>
            </div>

            <div className="grid gap-[14px] sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((c) => (
                <a
                  key={c.title}
                  href={`#${slug(c.title)}`}
                  className="flex gap-3 rounded-[14px] bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#EAF8F4]">
                    <Info className="h-[18px] w-[18px] text-[#22947E]" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h4 className="text-[14.5px] font-semibold leading-[22px]">{c.title}</h4>
                    <p className="text-[12px] font-medium leading-[19px] text-[#66716D]">
                      {c.sub}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Featured guides */}
        <section className="mx-auto flex max-w-[1200px] flex-col gap-7 px-6 py-20 md:px-16">
          <h2 className="text-center text-[34px] font-semibold leading-[42px] tracking-[-0.56px] md:text-[42px]">
            New to Mungo?
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {guides.map((g) => (
              <a
                key={g}
                href="#"
                className="flex flex-col gap-[7px] rounded-2xl border border-[#17201E]/10 p-[22px] transition-colors hover:border-[#2DBB9F]"
              >
                <h3 className="pt-0.5 text-[16px] font-semibold leading-[25px] tracking-[-0.33px]">
                  {g}
                </h3>
                <span className="text-[13.5px] font-bold leading-5 text-[#22947E]">
                  Read guide →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Still need a hand */}
        <section className="mx-auto mb-0 w-full max-w-[1312px] px-4 md:px-0">
          <div className="flex flex-col items-center gap-4 rounded-[28px] bg-[#2DBB9F] px-8 py-20 text-center md:py-[120px]">
            <div className="flex flex-col items-center gap-[18px]">
              <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.25px] text-white md:text-[62.9px]">
                Still need a hand?
              </h2>
              <p className="text-[16px] font-medium leading-[22px] text-white/65">
                Can&rsquo;t find what you&rsquo;re looking for? We&rsquo;re here to help.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-[10px] pt-[13px]">
              <a
                href="#contact"
                className="rounded-full bg-white px-6 py-3 text-[14.9px] font-semibold leading-[22px] text-[#2DBB9F] transition-opacity hover:opacity-90"
              >
                Contact support
              </a>
              <a
                href="/articles"
                className="rounded-full border border-white px-6 py-3 text-[14.5px] font-semibold leading-[22px] text-white transition-colors hover:bg-white/10"
              >
                Browse all articles
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}