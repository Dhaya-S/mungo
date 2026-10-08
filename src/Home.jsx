import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white text-gray-900 flex flex-col relative overflow-hidden">
      <Navbar currentPage="home" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 lg:pt-48 pb-20 px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center min-h-[85vh]">

        {/* Background elements (abstract shapes) */}
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full bg-gradient-to-br from-[#E8FAF5] to-white rounded-bl-[150px] -z-10 opacity-70"></div>

        {/* Left: Text Content */}
        <div className="flex-1 w-full flex flex-col items-start z-10 pt-10">
          <h1 className="font-chewy text-6xl md:text-7xl lg:text-[90px] leading-[1.05] text-[#1E293B] mb-6">
            Happy pets,<br />
            Happy <span className="text-[#23B4A2]">life.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-[450px] mb-10 leading-relaxed">
            Your pet's care, our priority. From vet visits to walks, we're here for every tail wag and purr.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <button className="bg-[#FF6B8A] hover:bg-[#ff5577] text-white px-8 py-4 rounded-xl font-bold text-[17px] transition-colors w-full sm:w-auto shadow-lg shadow-[#FF6B8A]/30">
              Download App &rarr;
            </button>
            <button className="bg-white border-2 border-gray-200 text-[#1E293B] px-8 py-4 rounded-xl font-bold text-[17px] transition-colors w-full sm:w-auto hover:bg-gray-50">
              <a href="/features">Explore Services</a>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex -space-x-4">
              <img src="https://i.pravatar.cc/150?img=33" alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
              <img src="https://i.pravatar.cc/150?img=12" alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
              <img src="https://i.pravatar.cc/150?img=38" alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
              <img src="https://i.pravatar.cc/150?img=44" alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
            </div>
            <div>
              <p className="text-[#1E293B] font-bold text-sm mb-1">Loved by 10,000+ pet parents</p>
              <div className="flex items-center text-[#FFB800] text-sm gap-1">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                <span className="text-gray-800 font-bold ml-1">4.9</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="flex-1 w-full relative mt-16 lg:mt-0 flex justify-center lg:justify-end">
          <img
            src="https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784012549/a07c3017cee8c073f22963cb8a5e40d413fa6c17_mby41b.png"
            alt="Hero Pets"
            className="w-full max-w-[600px] h-auto object-cover relative z-10"
          />
          <div className="absolute -bottom-8 -right-4 lg:-bottom-12 lg:-right-12 bg-[#23B4A2] text-white p-6 rounded-[32px] md:rounded-[48px] shadow-xl z-20 flex flex-col items-center justify-center transform rotate-3">
            <span className="font-bold text-lg md:text-xl text-center leading-tight">
              Trusted<br />by pet<br />parents
            </span>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <div className="flex-1">
            <p className="text-pink-500 font-bold uppercase tracking-wider text-sm mb-2">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1f2c] leading-tight max-w-lg">
              Everything Your Pet<br />Needs, <span className="text-[#23B4A2]">All in One Place.</span>
            </h2>
          </div>

        </div>

        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 gap-6 snap-x hide-scrollbar">
          {[
            { title: "Vet Service", color: "bg-[#E6F8F5]", icon: "2c5210d0b6b4c0a71f1a209e14d6294d58069057_hfb52l.png", pet: "39dbc72bda7e3c9c51d19288dbadfbf780e2a5be_p4gdq3.png", desc: "Trusted veterinary care for a healthy and happy life." },
            { title: "Boarding", color: "bg-[#FFEBF0]", icon: "12feb41f03fda3b06ef33c2870ed001fba94d992_e8wanj.png", pet: "6ebea475455643ce5e4abe368149caf00591b8e0_d5ncov.png", desc: "A safe, comfortable stay while you're away." },
            { title: "Walking", color: "bg-[#EAF9ED]", icon: "8fe413df3b41d4ce791a063ba3ac995a6d97c739_pnuf1y.png", pet: "3e7e36da79b616fc8568f80a550a47301e108ca4_qsqvhl.png", desc: "Daily walks and exercise for a happier pet." },
            { title: "Grooming", color: "bg-[#F4EFFF]", icon: "4a971407c21ceec324370145f138f539e7fa301a_unftyz.png", pet: "a59ac303a648ae523b88399d9281d46052d90f37_cfgpjb.png", desc: "Professional grooming for a fresh new look." },
            { title: "Sitting", color: "bg-[#EAF9ED]", icon: "fe2c013c25c9a9bc1d8ae60ce0cf7443e0419340_my0uge.png", pet: "37ba5cb2c33ae83d37632933967b5827116d1a2a_dbrygr.png", desc: "Compassionate care and company at home." }
          ].map((srv, idx) => (
            <div key={idx} className="min-w-[280px] lg:min-w-[300px] flex-shrink-0 snap-center rounded-[32px] border border-gray-100 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col h-[480px]">
              <div className={`w-full h-[280px] relative flex items-end justify-center pt-8 ${srv.color}`}>
                <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-full p-2 shadow-sm">
                  <img src={`https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784021569/${srv.icon}`} alt={srv.title} className="w-full h-full object-contain" />
                </div>
                <img src={`https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784021472/${srv.pet}`} alt={srv.title} className="w-auto h-[90%] object-contain object-bottom" />
              </div>
              <div className="flex-1 p-6 flex flex-col items-center text-center justify-center gap-3">
                <h3 className="text-xl font-bold text-[#1E293B]">{srv.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-2">{srv.desc}</p>
                <a href="#" className="text-[#23B4A2] font-bold text-sm hover:underline">Book now &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. APP BANNER SECTION */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#E6F8F5] rounded-[48px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
          <div className="flex-1 z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-6 leading-tight">
              Care you can trust,<br />love they deserve.
            </h2>
            <p className="text-gray-600 mb-10 max-w-md">
              Our verified pet care experts are passionate about pets and committed to providing the best care, every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              {[
                { title: "Verified Experts", desc: "Experienced & background-checked", icon: "b7929cf9-51ac-458c-97a3-c406a29eec3f.png" },
                { title: "Safe & Secure", desc: "Your pet's safety is our promise", icon: "5ea16b89-6804-438a-b20c-c417733d116f.png" },
                { title: "24/7 Support", desc: "We're here whenever you need", icon: "96197360-6e6a-4e21-a173-8fb7dc9d44b8.png" }
              ].map((ft, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="w-12 h-12 mb-2">
                    <img src={`https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784023427/${ft.icon}`} alt={ft.title} className="w-full h-full object-contain" />
                  </div>
                  <h4 className="font-bold text-[#1E293B] text-sm">{ft.title}</h4>
                  <p className="text-xs text-gray-500">{ft.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full relative h-[400px] flex items-center justify-center lg:justify-end z-10">
            <img src="https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784023069/0f77396570a473f92122fb98b7c5d1b4227a893f_1_dxxp2u.png" alt="App Preview" className="w-full max-w-[400px] h-full object-cover rounded-3xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-[#FF6B82] font-bold uppercase tracking-wider text-sm mb-3 block">HOW IT WORKS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-16">Quality care in 3<br />simple steps.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Choose a Service", desc: "Pick the service your pet needs.", img: "47fab9ed-2570-4206-8739-8dc398431257.png", bg: "bg-[#FFF8E6]" },
              { num: "02", title: "Book with Ease", desc: "Select date, time and confirm your booking.", img: "c9d5d3c9-6eac-45d6-99f3-8b3ebd23baf5.png", bg: "bg-[#E6F8F5]" },
              { num: "03", title: "Relax, We Care", desc: "Our expert takes care of your pet with love.", img: "aef62b56-d276-4b44-b453-ffe8e4077f22.png", bg: "bg-[#F4EFFF]" }
            ].map((step, i) => (
              <div key={i} className={`${step.bg} rounded-[40px] p-10 flex flex-col items-center relative overflow-hidden transition-transform hover:-translate-y-2`}>
                <div className="absolute top-6 left-8 text-4xl font-black text-black/5 opacity-50">{step.num}</div>
                <img src={`https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784024058/${step.img}`} alt={step.title} className="h-40 mb-8 object-contain" />
                <h3 className="text-xl font-bold text-[#1E293B] mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
