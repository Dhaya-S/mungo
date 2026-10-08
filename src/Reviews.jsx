import React, { useState } from 'react';
import { Star, ChevronDown, CheckCircle2, Heart } from "lucide-react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Reviews() {
  const [filter, setFilter] = useState('All');

  const reviewsData = [
    {
      author: 'Priya Sharma',
      service: 'Vet Service',
      rating: 5,
      date: 'August 2, 2026',
      comment: 'Mungo made it so easy to find a trustworthy vet near me. The doctor was highly professional, patient with my nervous golden retriever, and resolved our issues quickly.',
      avatar: 'https://i.pravatar.cc/150?img=33'
    },
    {
      author: 'Arun Kumar',
      service: 'Boarding',
      rating: 5,
      date: 'July 28, 2026',
      comment: 'The boarding service was absolute peace of mind! I received regular updates, pictures, and videos of my cat playing. She felt right at home.',
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    {
      author: 'Meera T.',
      service: 'Grooming',
      rating: 5,
      date: 'July 15, 2026',
      comment: 'First time using Mungo for grooming. The stylist did a phenomenal job on my poodle, took time to understand my requests, and was super gentle.',
      avatar: 'https://i.pravatar.cc/150?img=38'
    },
    {
      author: 'Rahul J.',
      service: 'Walking',
      rating: 5,
      date: 'July 10, 2026',
      comment: 'Our daily walker is extremely punctual, updates us with the walk route, and my dog absolutely adores him! Best decision we ever made.',
      avatar: 'https://i.pravatar.cc/150?img=44'
    },
    {
      author: 'Sunita M.',
      service: 'Sitting',
      rating: 5,
      date: 'June 29, 2026',
      comment: 'Having a sitter come to our home was a savior while we went away for a weekend. Our cats were fed, played with, and kept completely happy.',
      avatar: 'https://i.pravatar.cc/150?img=45'
    },
    {
      author: 'David P.',
      service: 'Vet Service',
      rating: 5,
      date: 'June 18, 2026',
      comment: 'Unbelievably quick, empathetic care. Having an expert come right to our living room saved us from a highly stressful clinic car ride.',
      avatar: 'https://i.pravatar.cc/150?img=47'
    }
  ];

  const services = ['All', 'Vet Service', 'Boarding', 'Walking', 'Grooming', 'Sitting'];

  const filteredReviews = filter === 'All'
    ? reviewsData
    : reviewsData.filter(r => r.service === filter);

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 flex flex-col overflow-x-hidden">
      <Navbar currentPage="reviews" />

      {/* ---------------- Hero Section ---------------- */}
      <section className="relative pt-32 pb-32 px-6 lg:px-8 bg-white rounded-b-[40px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-50/60 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>

        <div className="max-w-[1000px] mx-auto z-10 flex flex-col items-center text-center relative">
          <span className="bg-pink-50 text-pink-500 text-sm font-bold tracking-wide px-4 py-1.5 rounded-full mb-6 uppercase border border-pink-100 flex items-center gap-2">
            Loved & Trusted <Heart className="w-4 h-4 fill-currentColor" />
          </span>
          <h1 className="text-5xl lg:text-[64px] font-extrabold text-[#113c34] leading-[1.1] mb-6 tracking-tight">
            Happy Pet <span className="text-pink-500">Parents</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-2xl font-medium">
            Read heartwarming stories from pet owners who rely on Mungo for their pets' daily happiness and healthcare.
          </p>

          {/* Ratings Banner */}
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col md:flex-row items-center justify-between gap-10 border border-gray-100 w-full max-w-3xl">
            <div className="text-center md:text-left flex-1">
              <div className="flex items-center justify-center md:justify-start text-5xl font-black text-slate-900 gap-2 mb-2">
                4.9 <Star className="text-amber-400 w-8 h-8 fill-currentColor" />
              </div>
              <p className="text-gray-500 text-sm font-medium">Average user rating across services</p>
            </div>
            <div className="h-[2px] w-20 md:h-16 md:w-[2px] bg-gray-100"></div>
            <div className="flex-1 flex flex-col items-center md:items-start">
              <div className="flex -space-x-4 mb-3">
                <img src="https://i.pravatar.cc/150?img=33" alt="" className="w-12 h-12 rounded-full border-4 border-white shadow-sm" />
                <img src="https://i.pravatar.cc/150?img=12" alt="" className="w-12 h-12 rounded-full border-4 border-white shadow-sm" />
                <img src="https://i.pravatar.cc/150?img=38" alt="" className="w-12 h-12 rounded-full border-4 border-white shadow-sm" />
                <img src="https://i.pravatar.cc/150?img=44" alt="" className="w-12 h-12 rounded-full border-4 border-white shadow-sm" />
              </div>
              <p className="text-slate-900 font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-500" /> Trusted by 10,000+ happy families
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Testimonials Grid ---------------- */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 max-w-[1720px] mx-auto">

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {services.map((svc) => (
            <button
              key={svc}
              onClick={() => setFilter(svc)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${filter === svc
                  ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20'
                  : 'bg-white text-slate-600 border border-gray-200 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-600'
                }`}
            >
              {svc}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[32px] p-8 border border-gray-100 flex flex-col justify-between hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-teal-50 text-teal-600 text-xs font-bold px-4 py-1.5 rounded-full border border-teal-100">
                    {rev.service}
                  </span>
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed mb-8">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img src={rev.avatar} alt={rev.author} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <h5 className="text-slate-900 font-bold text-[15px] group-hover:text-teal-600 transition-colors">{rev.author}</h5>
                  <p className="text-gray-400 font-medium text-xs mt-0.5">{rev.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="text-teal-500 font-bold border border-teal-500 px-8 py-4 rounded-xl hover:bg-teal-50 transition-colors inline-flex items-center gap-2">
            Load More Reviews <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ---------------- Footer ---------------- */}
      <Footer />
    </div>
  );
}
