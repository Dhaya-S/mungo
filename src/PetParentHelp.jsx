import { useState } from 'react';
import {
  BookOpen,
  CalendarDays,
  MessageCircle,
  CreditCard,
  ShieldCheck,
  User,
  Smartphone,
  ChevronRight,
} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import petparenthelp1 from './assets/petparenthelp-1.png';

const articleSlug = (label) =>
  label.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-');

const groups = [
  {
    id: 'getting-started',
    icon: BookOpen,
    title: 'Getting Started',
    sub: 'New to Mungo? Start here.',
    articles: [
      'What is Mungo?',
      'How do I create an account?',
      'How does Mungo work?',
      'Getting started as a pet parent',
      'How do I contact support?',
    ],
  },
  {
    id: 'bookings-services',
    icon: CalendarDays,
    title: 'Bookings & Services',
    sub: 'Booking, changing and cancelling.',
    articles: [
      'How do I book a service?',
      'How do I choose a care provider?',
      'How do I modify a booking?',
      'How do I cancel a booking?',
    ],
  },
  {
    id: 'chat-communication',
    icon: MessageCircle,
    title: 'Chat & Communication',
    sub: 'Talking with your care provider.',
    articles: [
      'How do I chat with my care provider?',
      'When can I contact my care provider?',
    ],
  },
  {
    id: 'payments',
    icon: CreditCard,
    title: 'Payments',
    sub: 'How payments work on Mungo.',
    articles: ['How do payments work?', 'Where can I view payment details?'],
  },
  {
    id: 'safety-trust',
    icon: ShieldCheck,
    title: 'Safety & Trust',
    sub: 'Feeling confident about your care.',
    articles: [
      'How does Mungo help create safer care experiences?',
      'What should I do if I have a concern about a service?',
    ],
  },
  {
    id: 'account-profile',
    icon: User,
    title: 'Account & Profile',
    sub: 'Managing your details and pets.',
    articles: ['How do I update my profile?', 'How do I manage my pet information?'],
  },
  {
    id: 'app-experience',
    icon: Smartphone,
    title: 'App Experience',
    sub: 'Using the Mungo app day to day.',
    articles: [
      'How do I know when my service starts?',
      'What happens when a service is completed?',
    ],
  },
];

export default function HelpCentre() {
  const [tab, setTab] = useState('parents');

  const tabClass = (active) =>
    `rounded-full px-[18px] py-[9px] text-[14px] font-semibold leading-[21px] transition-colors ${
      active
        ? 'bg-[#2DBB9F] text-white'
        : 'bg-[#F5FBF9] text-[#66716D] hover:bg-[#E1FEF6]'
    }`;

  return (
    <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#17201E]">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-10 px-6 py-12 md:flex-row md:gap-[107px] md:px-0">
        <div className="flex w-full max-w-[363px] flex-col gap-[25px]">
          <div className="flex flex-col gap-[9px]">
            <h1 className="text-[36.5px] font-semibold leading-[57px] tracking-[-0.76px]">
              Pet Parent Help
            </h1>
            <p className="text-[15px] font-medium leading-[23px] text-[#66716D]">
              Everything you need to get the most out of Mungo.
            </p>
          </div>
          <div className="flex gap-[10px]">
            <button className={tabClass(tab === 'parents')} onClick={() => setTab('parents')}>
              Pet Parents
            </button>
            <button className={tabClass(tab === 'providers')} onClick={() => setTab('providers')}>
              Care Providers
            </button>
          </div>
        </div>
        <img loading="lazy" decoding="async"
          src={petparenthelp1}
          alt="Puppy and kitten sitting together"
          className="h-auto w-full max-w-[614px] object-contain"
        />
      </section>

      {/* Article groups */}
      <section className="mx-auto max-w-[1200px] px-6 py-[34px] md:px-[120px]">
        <div className="flex flex-col">
          {groups.map(({ id, icon: Icon, title, sub, articles }) => (
            <div
              key={id}
              id={id}
              className="relative flex flex-col gap-5 border-t border-[#17201E]/[0.08] py-10"
            >
              {/* Icon bubble */}
              <div className="absolute left-0 top-10 hidden h-14 w-14 items-center justify-center rounded-full bg-[#E1FEF6] md:-left-16 md:flex">
                <Icon className="h-[26px] w-[26px] text-[#2CB29A]" strokeWidth={1.75} />
              </div>

              {/* Group head */}
              <div className="flex flex-wrap items-end justify-between gap-2">
                <div className="flex flex-col gap-[5px]">
                  <h2 className="text-[20px] font-semibold leading-[30px] tracking-[-0.4px]">
                    {title}
                  </h2>
                  <p className="text-[14px] font-medium leading-5 text-[#66716D]">{sub}</p>
                </div>
                <a
                  href="/articles"
                  className="text-[13.5px] font-bold leading-5 text-[#22947E] hover:underline"
                >
                  See all articles →
                </a>
              </div>

              {/* Articles */}
              <div className="flex flex-col">
                {articles.map((label, i) => (
                  <a
                    key={label}
                    href={`/help/${articleSlug(label)}`}
                    className={`flex items-center justify-between py-3 text-[15px] font-semibold leading-[22px] transition-colors hover:text-[#22947E] ${
                      i > 0 ? 'border-t border-[#17201E]/[0.06]' : ''
                    }`}
                  >
                    <span>{label}</span>
                    <ChevronRight className="h-6 w-6 text-[#2CB29A]" strokeWidth={2} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}