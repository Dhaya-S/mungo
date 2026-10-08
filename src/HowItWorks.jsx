import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-slate-50 text-[#1E293B] font-sans flex flex-col">
      <Navbar currentPage="how-it-works" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-[#E8FAF5] via-white to-slate-50 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[#23B4A2]/5 rounded-bl-[200px] -z-10"></div>
        <div className="max-w-4xl mx-auto z-10 flex flex-col items-center">
          <span className="bg-[#23B4A2]/10 text-[#23B4A2] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
            Simple & Seamless
          </span>
          <h1 className="font-chewy text-5xl md:text-7xl text-[#1E293B] mb-6 leading-tight">
            How Mungo <span className="text-[#23B4A2]">Works</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            Getting premium care for your furry family members is as easy as a few taps. Discover our simple process.
          </p>
          <a href="#" className="bg-[#FF6B8A] hover:bg-[#ff5577] text-white px-8 py-4 rounded-xl font-bold text-[17px] transition-all duration-300 shadow-lg shadow-[#FF6B8A]/30 transform hover:-translate-y-0.5">
            Get Started Now
          </a>
        </div>
      </section>

      {/* Main Process Section */}
      <section className="py-24 px-6 sm:px-12 lg:px-20 bg-white">
        <div className="max-w-[1720px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-4">
              For Pet Parents
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Follow these three simple steps to book verified, loving care for your pets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="bg-[#FFF8E6] rounded-[40px] p-10 flex flex-col items-center relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-amber-100/50">
              <div className="absolute top-6 left-8 text-6xl font-black text-black/5">01</div>
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mb-8 text-[#FFB800] text-3xl font-bold">
                🔍
              </div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4 text-center">Find a Service</h3>
              <p className="text-gray-600 text-base leading-relaxed text-center">
                Select from Vet Service, Boarding, Walking, Sitting, or Grooming. Custom-tailor the booking to match your pet's routine.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#E6F8F5] rounded-[40px] p-10 flex flex-col items-center relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-[#23B4A2]/10">
              <div className="absolute top-6 left-8 text-6xl font-black text-black/5">02</div>
              <div className="w-20 h-20 bg-teal-100 rounded-2xl flex items-center justify-center mb-8 text-[#23B4A2] text-3xl font-bold">
                📅
              </div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4 text-center">Book Instantly</h3>
              <p className="text-gray-600 text-base leading-relaxed text-center">
                Choose dates, times, and a verified caregiver. Make a safe, digital payment and get instant booking confirmation.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#F4EFFF] rounded-[40px] p-10 flex flex-col items-center relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-purple-100/50">
              <div className="absolute top-6 left-8 text-6xl font-black text-black/5">03</div>
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mb-8 text-purple-500 text-3xl font-bold">
                ❤️
              </div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4 text-center">Relax & Enjoy</h3>
              <p className="text-gray-600 text-base leading-relaxed text-center">
                Our care partner does the rest with love and attention. Receive updates and tracking information through the Mungo app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Caregivers Section */}
      <section className="py-24 px-6 sm:px-12 lg:px-20 bg-slate-50 border-t border-gray-100">
        <div className="max-w-[1720px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#FF6B82] font-bold uppercase tracking-wider text-sm mb-3 block">
                JOIN THE COMMUNITY
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-6 leading-tight">
                Want to become a Mungo Partner?
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Offer your pet care services on Mungo and turn your love for animals into dynamic income. We support you with insurance, 24/7 support, and continuous training.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm shrink-0">✓</div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-base">Complete Your Profile</h4>
                    <p className="text-slate-500 text-sm">Tell us about yourself, your pet experience, and submit verification details.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm shrink-0">✓</div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-base">Get Verified & Listed</h4>
                    <p className="text-slate-500 text-sm">Pass our background check and safety screening to get listed on our marketplace.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm shrink-0">✓</div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-base">Start Earning</h4>
                    <p className="text-slate-500 text-sm">Accept bookings on your schedule, coordinate care, and get paid securely.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100 flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center text-[#23B4A2] mb-6">
                🤝
              </div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Start Your Caregiver Journey</h3>
              <p className="text-gray-500 text-sm max-w-sm mb-8 leading-relaxed">
                Connect with thousands of pet parents looking for trusted services in your area.
              </p>
              <a href="/partners" className="bg-[#23B4A2] hover:bg-[#1fa191] text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all duration-300 w-full">
                Apply as Partner
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
