import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle2, Calendar, Clock, Eye, Heart, Lightbulb, Info } from "lucide-react";
import Navbar from './Navbar';
import Footer from './Footer';

/* ---------------------------------------------------------------- */
/* Data                                                               */
/* ---------------------------------------------------------------- */

const FAQS = [
  {
    q: 'How often should I visit a veterinarian?',
    a: 'Most healthy adult pets should see a veterinarian at least once a year for a routine wellness check. Puppies, kittens, and senior pets often need more frequent visits, so ask your vet to set a schedule that fits your pet’s age and health history.',
  },
  {
    q: 'What symptoms require emergency care?',
    a: 'Difficulty breathing, uncontrolled bleeding, repeated vomiting, collapse, seizures, or a bloated abdomen all call for immediate emergency care. When in doubt, it’s always safer to call your vet or an emergency clinic right away.',
  },
  {
    q: 'Can pets hide pain?',
    a: 'Yes — pets are instinctively good at masking pain, since showing weakness would make them vulnerable in the wild. Subtle changes in appetite, activity, or behavior are often the only early clue something is wrong.',
  },
  {
    q: 'How can I prevent illness in my pet?',
    a: 'Regular checkups, up-to-date vaccinations, a balanced diet, parasite prevention, and daily attention to your pet’s normal habits go a long way. Catching small changes early is the best way to prevent minor issues from becoming serious.',
  },
];

const CLINIC_IMAGES = [
  '/Image with Blob.jpg',
  '/assets/hero.png',
  '/assets/corgi.png',
];

const HERO_IMAGE =
  'https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784012549/a07c3017cee8c073f22963cb8a5e40d413fa6c17_mby41b.png';

export default function Blogdetails() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq((cur) => (cur === i ? null : i));

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 flex flex-col">
      <Navbar currentPage="blog" />

      <main className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 pt-32 pb-20 flex-1">

        {/* ---------------- Breadcrumb ---------------- */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-8">
          <span className="hover:text-teal-500 cursor-pointer">Home</span>
          <ChevronRight className="w-4 h-4" />
          <span className="hover:text-teal-500 cursor-pointer">Blog</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-600">Article</span>
        </div>

        {/* ---------------- Hero ---------------- */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="inline-block bg-teal-50 text-teal-600 text-sm font-bold tracking-wide px-4 py-1.5 rounded-full mb-6 shadow-sm border border-teal-100">
              Pet Health
            </span>
            <h1 className="text-4xl lg:text-[44px] font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight">
              10 Common Signs Your Pet Needs Immediate Veterinary Care
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium">
              Learn how to identify early warning signs in your pet and understand when it's time to
              visit a veterinarian before small issues become serious.
            </p>

            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover"
                  src="https://images.weserv.nl/?url=i.pravatar.cc/80?img=47"
                  alt="Dr. Ananya Rao"
                />
                <div>
                  <div className="font-bold text-slate-900 flex items-center gap-1 text-sm">
                    Dr. Ananya Rao <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  </div>
                  <div className="text-xs text-gray-400 font-medium">Veterinarian</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                <Calendar className="w-4 h-4" />
                <span>June 1, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                <Clock className="w-4 h-4" />
                <span>7 min read</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Dot grid decoration */}
            <div className="absolute top-4 -left-6 z-0">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="#2dd4bf" opacity="0.4">
                {[0, 1, 2, 3, 4].map((row) =>
                  [0, 1, 2, 3, 4].map((col) => (
                    <circle key={`${row}-${col}`} cx={6 + col * 12} cy={6 + row * 12} r="2" />
                  ))
                )}
              </svg>
            </div>

            <div className="relative z-10 bg-teal-50/50 rounded-br-[100px] rounded-tl-[100px] p-6 pr-0 pb-0 shadow-sm border border-teal-50">
              <img className="w-full h-auto rounded-tl-[80px] rounded-br-[80px] object-cover shadow-lg" src={HERO_IMAGE} alt="Veterinarian examining a golden retriever" />
            </div>

            {/* Stat Cards Overlay */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white">
              <StatCard icon={<Calendar className="text-teal-500 w-5 h-5" />} label="Published" value="June 1, 2026" />
              <StatCard icon={<Eye className="text-blue-500 w-5 h-5" />} label="Views" value="15.2K" />
              <StatCard icon={<Heart className="text-pink-500 w-5 h-5" fill="currentColor" />} label="Likes" value="2.3K" />
            </div>
          </div>
        </section>

        {/* ---------------- Article Content ---------------- */}
        <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-8 md:p-16 mb-16">

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
            <p className="text-gray-500 leading-relaxed font-medium">
              Our pets rely on us to keep them healthy and safe. While some health issues are obvious,
              others can be subtle. Recognizing the early warning signs can help you get timely treatment
              and possibly save your pet's life. Here are 10 common signs that indicate your pet may
              need immediate veterinary care.
            </p>
          </section>

          <hr className="border-gray-100 mb-12" />

          <section className="mb-12">
            <h3 className="text-xl font-bold text-slate-900 mb-6">1. Loss of Appetite</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                className="w-full h-48 object-cover rounded-2xl shadow-sm"
                src="https://placedog.net/600/450?id=15"
                alt="Dog lying on the floor, not eating"
              />
              <div>
                <p className="text-gray-500 leading-relaxed font-medium mb-6">
                  If your pet suddenly refuses food or shows a decreased interest in eating, it could be a
                  sign of an underlying health issue.
                </p>
                <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5 flex gap-4 items-start shadow-sm">
                  <Lightbulb className="w-6 h-6 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-teal-800 text-sm mb-1">Pro Tip</h4>
                    <p className="text-teal-700/80 text-sm font-medium">
                      If your pet doesn't eat for more than 24 hours, consult your veterinarian.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-100 mb-12" />

          <section className="mb-12">
            <h3 className="text-xl font-bold text-slate-900 mb-6">2. Difficulty Breathing</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-500 leading-relaxed font-medium">
                  Breathing problems can escalate quickly and may indicate serious conditions like heart
                  disease, infections, or allergies.
                </p>
              </div>
              <ul className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 space-y-4">
                <li className="flex items-center gap-3 text-gray-600 font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" /> Fast or heavy breathing
                </li>
                <li className="flex items-center gap-3 text-gray-600 font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" /> Wheezing or noisy breathing
                </li>
                <li className="flex items-center gap-3 text-gray-600 font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" /> Excessive coughing
                </li>
                <li className="flex items-center gap-3 text-gray-600 font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" /> Blue or pale gums
                </li>
              </ul>
            </div>
          </section>

          <hr className="border-gray-100 mb-12" />

          <section className="mb-12">
            <h3 className="text-xl font-bold text-slate-900 mb-6">3. Vomiting or Diarrhea</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                className="w-full h-48 object-cover rounded-2xl shadow-sm"
                src="https://cataas.com/cat?width=600&height=450"
                alt="Cat sitting near a litter box"
              />
              <div>
                <p className="text-gray-500 leading-relaxed font-medium mb-6">
                  Occasional vomiting may not be serious, but frequent vomiting or diarrhea can lead to
                  dehydration and signal infections, parasites, or other illnesses.
                </p>
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex gap-4 items-center shadow-sm">
                  <Info className="w-6 h-6 text-blue-500 shrink-0" />
                  <p className="text-blue-800/80 text-sm font-medium">
                    Monitor your pet and note the frequency, color, and any other unusual symptoms.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <blockquote className="bg-teal-50 rounded-3xl p-8 md:p-10 relative overflow-hidden">
            {/* Large quote mark decoration */}
            <div className="absolute top-4 left-4 text-teal-200/50">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
            </div>
            {/* Paw print decoration */}
            <div className="absolute bottom-4 right-6 text-teal-200">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-5 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-12.5 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm15 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7.5 3c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z" />
              </svg>
            </div>

            <div className="relative z-10 ml-8 md:ml-12">
              <p className="text-xl md:text-2xl font-bold text-slate-800 leading-snug mb-4">
                Early diagnosis can prevent serious complications and improve your pet's quality of
                life.
              </p>
              <cite className="text-gray-500 font-medium block not-italic">— Dr. Ananya Rao, Veterinarian</cite>
            </div>
          </blockquote>
        </div>

        {/* ---------------- In the Clinic ---------------- */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">In the Clinic</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLINIC_IMAGES.map((src, i) => (
              <img key={i} src={src} alt={`In the clinic ${i + 1}`} className="w-full h-48 object-cover rounded-3xl shadow-sm hover:-translate-y-1 transition-transform" onError={(e) => { e.target.src = 'https://placedog.net/600/400' }} />
            ))}
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section>
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
          <div className="space-y-3">
            {FAQS.map((item, i) => {
              const active = openFaq === i;
              return (
                <div className={`bg-white rounded-[20px] shadow-sm border overflow-hidden transition-colors ${active ? 'border-teal-200 bg-teal-50/30' : 'border-gray-100'}`} key={item.q}>
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={active}
                  >
                    <h4 className="font-bold text-slate-700">{item.q}</h4>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${active ? 'rotate-180 text-teal-500' : ''}`} />
                  </button>
                  {active && (
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-500 font-medium leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-white px-4 py-2 rounded-xl flex items-center gap-3">
      <div className="bg-gray-50 p-2 rounded-lg">
        {icon}
      </div>
      <div>
        <div className="text-[11px] text-gray-400 font-bold uppercase tracking-wider leading-none mb-1">{label}</div>
        <div className="text-sm font-bold text-slate-800 leading-none">{value}</div>
      </div>
    </div>
  );
}