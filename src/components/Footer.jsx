import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Subscribed: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-white border-t border-slate-100 font-sans text-slate-700">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 lg:pr-8">
            <a href="/" className="inline-flex items-center gap-2.5 mb-5 no-underline">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784019754/a44962e9-259e-4885-a21c-31063e437a8a.png"
                  alt="Mungo Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl sm:text-[26px] font-extrabold text-[#113c34] tracking-tight font-jakarta">
                Mungo
              </span>
            </a>
            <p className="text-slate-500 font-medium leading-relaxed mb-6 text-[15px]">
              Better care. Happier pets.<br />Stronger bond.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center font-bold text-xs hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-colors no-underline text-slate-500"
              >
                f
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center font-bold text-xs hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-colors no-underline text-slate-500"
              >
                t
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center font-bold text-xs hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-colors no-underline text-slate-500"
              >
                i
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-[17px] mb-5 text-slate-900 font-jakarta">Quick Links</h4>
            <ul className="space-y-3.5 list-none m-0 p-0 font-semibold text-slate-500 text-[14.5px]">
              <li><a href="/" className="hover:text-teal-500 transition-colors">Home</a></li>
              <li><a href="/features" className="hover:text-teal-500 transition-colors">Services</a></li>
              <li><a href="/how-it-works" className="hover:text-teal-500 transition-colors">How It Works</a></li>
              <li><a href="/reviews" className="hover:text-teal-500 transition-colors">Reviews</a></li>
              <li><a href="/blog" className="hover:text-teal-500 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-[17px] mb-5 text-slate-900 font-jakarta">Company</h4>
            <ul className="space-y-3.5 list-none m-0 p-0 font-semibold text-slate-500 text-[14.5px]">
              <li><a href="/about" className="hover:text-teal-500 transition-colors">About Us</a></li>
              <li><a href="/careers" className="hover:text-teal-500 transition-colors">Careers</a></li>
              <li><a href="/terms" className="hover:text-teal-500 transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-teal-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Subscribe Column */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-[17px] mb-3 text-slate-900 font-jakarta">Stay in the loop</h4>
            <p className="text-slate-500 font-medium mb-5 text-[14.5px] leading-relaxed">
              Get pet care tips, offers and updates straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3.5 outline-none focus:border-teal-500 focus:bg-white transition-colors w-full font-medium text-[14.5px] text-slate-800"
              />
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl px-4 py-3.5 transition-colors w-full text-[14.5px] shadow-sm shadow-teal-500/20"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-100 py-6 px-4">
        <p className="text-center text-slate-400 font-medium text-[13.5px] m-0">
          &copy; 2026 Mungo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
