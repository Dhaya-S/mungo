import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-Mungo-dark font-sans flex flex-col w-full overflow-x-hidden">
        <Navbar currentPage="about" />

        {/* HERO SECTION */}
        <section
          id="about-us"
          className="relative bg-cover bg-center min-h-[550px] md:min-h-[700px] lg:min-h-[850px] flex items-center pt-28 sm:pt-36 lg:pt-48 pb-16 sm:pb-20 px-6 sm:px-12 lg:px-20"
          style={{ backgroundImage: `url('/Hero Section background.png')` }}
        >
          {/* Transparent overlay */}
          <div className="absolute inset-0 bg-transparent pointer-events-none"></div>

          <div className="max-w-[1720px] mx-auto w-full relative z-10">
            <div className="max-w-xl lg:max-w-2xl flex flex-col items-start text-left">
              {/* Pill */}
              <span className="bg-white text-[#2bc2a7] text-[12px] sm:text-[13px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full mb-4 sm:mb-6 inline-block shadow-sm">
                ABOUT US
              </span>

              {/* Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-bold leading-[1.15] sm:leading-[1.1] text-white drop-shadow-sm mb-4 sm:mb-6 select-none font-chewy">
                We're here for pets, <br />
                just like family.
              </h1>

              {/* Subtext */}
              <p className="text-sm sm:text-base text-white/95 leading-relaxed mb-6 sm:mb-8 max-w-md drop-shadow-sm font-normal">
                Mungo was born out of a simple belief – pets deserve the best care and love, always. We make pet care easy, reliable, and stress-free for pet parents.
              </p>

              {/* Floating Card */}
              <div className="bg-white rounded-full shadow-lg py-2.5 sm:py-3 pl-3 sm:pl-4 pr-6 sm:pr-16 md:pr-24 flex items-center gap-3 sm:gap-4 border border-slate-50/50 max-w-full sm:max-w-md transform hover:scale-[1.01] transition-transform duration-300">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2ac0a4] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-slate-800 font-bold text-[14px] sm:text-[15.5px] leading-tight">Trusted care. Happy pets.</h4>
                  <p className="text-slate-500 text-[11.5px] sm:text-[12.5px] leading-tight mt-0.5 font-normal">Peace of mind for everyone.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION SECTION */}
        <section className="bg-white py-14 sm:py-20 px-6 sm:px-12 lg:px-20">
          <div className="max-w-[1720px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14">
            {/* Card 1: Our Mission */}
            <div className="bg-[#f2fcfb] p-8 sm:p-12 lg:p-16 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col items-start text-left border border-emerald-50 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-sm text-[#23B4A2] mb-6 sm:mb-8">
                {/* Flag icon */}
                <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-19m0 0h14.5l-2.5 4 2.5 4h-14.5" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-slate-800 font-jakarta">Our Mission</h2>
              <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
                To simplify pet care by connecting pet parents with trusted service providers who treat every pet with love, compassion, and respect.
              </p>
            </div>

            {/* Card 2: Our Vision */}
            <div className="bg-[#f2fcfb] p-8 sm:p-12 lg:p-16 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col items-start text-left border border-emerald-50 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-sm text-[#23B4A2] mb-6 sm:mb-8">
                {/* Eye icon */}
                <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-slate-800 font-jakarta">Our Vision</h2>
              <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
                To become the most trusted pet care platform that enhances the lives of and brings peace of mind to pet parents everywhere.
              </p>
            </div>
          </div>
        </section>

        {/* OUR VALUES SECTION */}
        <section className="bg-white py-14 sm:py-20 px-6 sm:px-12 lg:px-20 text-center border-t border-slate-50">
          <div className="max-w-[1720px] mx-auto">
            {/* Header */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-slate-800 font-jakarta">Our Values</h2>
            {/* Underline heart vector element */}
            <div className="flex items-center justify-center gap-3 mb-12 sm:mb-16">
              <div className="w-14 sm:w-20 h-[2.5px] bg-[#2ac0a4]"></div>
              <svg className="w-4 h-4 fill-[#2ac0a4]" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <div className="w-14 sm:w-20 h-[2.5px] bg-[#2ac0a4]"></div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
              {/* Value 1 */}
              <div className="flex flex-col items-center p-6 rounded-3xl hover:bg-slate-50/80 transition-colors">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#eff6ff] flex items-center justify-center text-blue-600 mb-5 sm:mb-6 transform hover:scale-105 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#239491] font-jakarta">Trust & Safety</h3>
                <p className="text-slate-500 text-base leading-relaxed max-w-[280px] font-medium">
                  We verify and work only with trusted and experienced caregivers.
                </p>
              </div>

              {/* Value 2 */}
              <div className="flex flex-col items-center p-6 rounded-3xl hover:bg-slate-50/80 transition-colors">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#fff1f2] flex items-center justify-center text-rose-500 mb-5 sm:mb-6 transform hover:scale-105 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#239491] font-jakarta">Compassion</h3>
                <p className="text-slate-500 text-base leading-relaxed max-w-[280px] font-medium">
                  Every pet is treated with love, patience, and understanding.
                </p>
              </div>

              {/* Value 3 */}
              <div className="flex flex-col items-center p-6 rounded-3xl hover:bg-slate-50/80 transition-colors">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#fffbeb] flex items-center justify-center text-amber-500 mb-5 sm:mb-6 transform hover:scale-105 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.25.588 1.81l-3.974 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.89a1 1 0 00-1.176 0l-3.976 2.89c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.976-2.89c-.77-.56-.371-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#239491] font-jakarta">Quality</h3>
                <p className="text-slate-500 text-base leading-relaxed max-w-[280px] font-medium">
                  We deliver high-quality pet care services you can rely on.
                </p>
              </div>

              {/* Value 4 */}
              <div className="flex flex-col items-center p-6 rounded-3xl hover:bg-slate-50/80 transition-colors">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#faf5ff] flex items-center justify-center text-purple-500 mb-5 sm:mb-6 transform hover:scale-105 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#239491] font-jakarta">Community</h3>
                <p className="text-slate-500 text-base leading-relaxed max-w-[280px] font-medium">
                  We're building a loving community of pet lovers and caregivers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR STORY SECTION */}
        <section className="bg-white py-16 sm:py-24 px-6 sm:px-12 lg:px-20 overflow-hidden border-t border-slate-50">
          <div className="max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2ac0a4] mb-3">
                OUR STORY
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-bold leading-tight mb-6 sm:mb-8 text-slate-800 font-jakarta">
                Because they <br />
                <span className="text-[#2ac0a4]">deserve the best.</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 font-normal text-left">
                As pet parents ourselves, we understand the worry that comes with leaving your pets behind. Finding reliable care shouldn't be difficult.
              </p>
              <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 font-normal text-left">
                That's why we created Mungo – to bring convenience, trust, and love together in one place.
              </p>

              {/* Bottom Thank You message */}
              <div className="flex items-start gap-3 text-[#2ac0a4]">
                <svg className="w-5 h-5 mt-1 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span className="font-bold text-base tracking-wide text-left">
                  Thank you for trusting us<br />
                  with your fur babies.
                </span>
              </div>
            </div>

            {/* Right Image with Blob */}
            <div className="lg:col-span-6 relative flex justify-center items-center py-6 overflow-hidden">
              <img
                src="/Vector 62.png"
                alt="Teal background blob"
                className="absolute w-[110%] max-w-none h-auto z-0 object-contain left-[-5%] top-[-3%] select-none pointer-events-none opacity-100 hidden sm:block"
              />
              <img
                src="/Image with Blob.jpg"
                alt="Golden Retriever and Tabby Cat"
                className="w-full max-w-[420px] sm:max-w-[540px] h-auto relative z-10 select-none object-cover mix-blend-multiply"
              />
            </div>
          </div>
        </section>

        {/* APP BANNER SECTION */}
        <section className="bg-white py-16 sm:py-24 lg:py-32 px-6 sm:px-12 lg:px-20">
          <div className="max-w-[1720px] mx-auto relative">
            <div className="bg-[#57CABD] rounded-[28px] sm:rounded-[48px] relative w-full flex flex-col lg:flex-row items-center px-8 py-12 sm:px-16 sm:py-16 lg:px-20 lg:py-0 lg:h-[500px] shadow-xl z-10 overflow-hidden">
              {/* Background Paws */}
              <div className="absolute inset-0 rounded-[48px] overflow-hidden pointer-events-none">
                <img src="https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784028918/328e2875-ed9e-412d-9d57-30632063e8a6.png" alt="" className="absolute -top-20 -left-10 w-56 opacity-100 transform rotate-[17deg]" />
                <img src="https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784028918/328e2875-ed9e-412d-9d57-30632063e8a6.png" alt="" className="absolute top-0 right-10 w-56 opacity-100 transform -rotate-[21deg]" />
              </div>

              {/* Left Content */}
              <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-lg w-full">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-jakarta">Ready to pamper your pet?</h2>
                <p className="text-white/95 text-base sm:text-lg lg:text-xl">Download the Mungo app and book trusted pet services in just a few taps.</p>
                <div className="flex items-center justify-center lg:justify-start gap-4 mt-2 flex-wrap">
                  <a href="#" className="hover:opacity-90 transition-opacity">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-12 sm:h-14" />
                  </a>
                  <a href="#" className="hover:opacity-90 transition-opacity">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12 sm:h-14" />
                  </a>
                </div>
              </div>

              {/* Right Phone Image */}
              <div className="relative z-10 mt-8 lg:mt-0 lg:absolute lg:bottom-0 lg:right-16 h-[320px] sm:h-[420px] lg:h-[640px] w-auto flex justify-center pointer-events-none">
                <img src="https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784025975/63debea9e75555611f7f27aaa6b78b3a3d3e128d_tz3zxe.png" alt="Mungo App" className="h-full w-auto object-contain object-bottom" />
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER SECTION */}
        <Footer />
      </div>
    </>

  )
}
