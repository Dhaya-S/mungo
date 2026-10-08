import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Blog() {
  const trendingArticles = [
    { category: 'Health', rank: 1, title: 'Common Signs Your Pet Needs a Vet', meta: '6 min • 15.2K views', color: '#40843c' },
    { category: 'Training', rank: 2, title: 'Positive Reinforcement That Actually Works', meta: '5 min • 12K views', color: '#0a8775' },
    { category: 'Nutrition', rank: 3, title: 'Best Foods for a Shiny Coat and Strong Immunity', meta: '7 min • 10.1K views', color: '#9ac14b' },
    { category: 'Care', rank: 4, title: 'Summer Care Tips for Happy Pets', meta: '6 min • 8.6K views', color: '#efc338' },
    { category: 'Lifestyle', rank: 5, title: 'Creating a Pet-Friendly Home Environment', meta: '5 min • 7.3K views', color: '#498fd4' },
  ];

  const latestArticles = [
    {
      category: 'Veterinary Advice', title: 'When to Worry: 10 Symptoms You Should Never Ignore',
      desc: 'A vet-approved guide to help you recognize serious health issues early.',
      author: 'Dr. Ananya Rao', date: 'Jun 1 • 7 min', color: '#40843c',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    },
    {
      category: 'Behavior & Training', title: 'How to Stop Excessive Barking in 3 Simple Steps',
      desc: 'Practical techniques to help your dog stay calm and well-behaved.',
      author: 'Rohit Sharma', date: 'May 30 • 6 min', color: '#0a8775',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    },
    {
      category: 'Nutrition', title: 'Homemade Treats Your Pet Will Love',
      desc: 'Easy, healthy, and vet-recommended recipes you can make at home.',
      author: 'Megha Iyer', date: 'May 28 • 5 min', color: '#3a63a8',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    },
    {
      category: 'Grooming', title: 'Grooming Basics for Every Pet Parent',
      desc: 'Simple grooming habits that keep your pet clean, comfy, and confident.',
      author: 'Priya Menon', date: 'May 26 • 6 min', color: '#efc338',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
    },
    {
      category: 'Pet Care', title: 'Building a Routine That Works for You & Your Pet',
      desc: 'Create a daily routine that keeps your pet happy and your life balanced.',
      author: 'Karan Malhotra', date: 'May 24 • 7 min', color: '#9ac14b',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    },
    {
      category: 'Adoption Stories', title: 'Rescue, Love, Repeat: Real Pet Parent Stories',
      desc: 'Heartwarming stories from our community that will melt your heart.',
      author: 'Neha Kapoor', date: 'May 22 • 6 min', color: '#0eb493',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    }
  ];

  return (
    <div className="font-jakarta w-full flex flex-col min-h-screen bg-white relative">

      {/* Common Navbar */}
      <Navbar currentPage="blog" />

      {/* Main Hero Section */}
      <section className="relative w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden">

        {/* Background elements (Blob on the right) */}
        <div className="absolute right-0 top-0 w-full lg:w-[62%] h-[42%] sm:h-[52%] lg:h-[95%] bg-[#e6f4f0] rounded-b-[40px] sm:rounded-b-[80px] lg:rounded-tr-none lg:rounded-bl-[120px] lg:rounded-tl-[350px] -z-10"></div>

        <div className="flex flex-col lg:flex-row items-center relative z-10">

          {/* Left Column (Content) */}
          <div className="w-full lg:w-[48%] pr-0 lg:pr-12 pt-4 sm:pt-8 lg:pt-16">
            {/* Tag */}
            <div className="flex items-center gap-4 mb-6 lg:mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.04)] border border-gray-50">
                <svg className="w-4 h-4 text-[#FBBF24]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-[#0EB493] font-bold text-[14px]">PawCare Insights</span>
              </div>
              <svg className="w-6 h-6 text-[#0EB493]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 2v6M22 12h-6M6 6l4 4" />
              </svg>
            </div>

            {/* Title */}
            <h1 className="font-chewy text-4xl sm:text-5xl md:text-6xl lg:text-[85px] leading-[1.05] text-[#1a2b33] mb-6">
              Everything Your Pet<br className="hidden lg:inline" />
              Needs, <span className="text-[#0EB493]">All in One Place</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-500 text-base sm:text-lg lg:text-[20px] leading-relaxed mb-8 lg:mb-10 max-w-lg">
              Expert tips, trusted services, and a loving community to keep your pet healthy, happy, and cared for.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-[500px] mb-8 lg:mb-12 mt-2">
              <div className="flex items-center bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-2 sm:p-2.5">
                <div className="pl-3 sm:pl-4 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search articles, guides, more..."
                  className="flex-1 bg-transparent border-none outline-none px-2 sm:px-4 text-gray-700 placeholder-gray-400 text-sm sm:text-[17px]"
                />
                <button className="bg-[#0EB493] hover:bg-[#0c9c7f] transition-colors text-white font-bold py-2.5 px-5 sm:py-3.5 sm:px-8 rounded-2xl text-sm sm:text-[16px]">
                  Search
                </button>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['Care Tips', 'Health', 'Training', 'Nutrition', 'Grooming', 'Lifestyle'].map((category) => (
                <button key={category} className="px-4 py-1.5 sm:px-6 sm:py-2 rounded-full border-[1.5px] border-[#0EB493]/30 text-[#0EB493] font-bold text-xs sm:text-[14px] hover:bg-[#0EB493] hover:text-white transition-colors bg-white">
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column (Image and Cards) */}
          <div className="w-full lg:w-[52%] relative mt-8 sm:mt-12 lg:mt-0 flex justify-center lg:justify-end items-end h-[360px] sm:h-[460px] md:h-[520px] lg:h-[680px]">

            {/* Heart Icon SVG floating */}
            <svg className="absolute left-[8%] sm:left-[5%] top-[25%] w-6 h-6 sm:w-8 sm:h-8 text-[#0EB493] -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>

            {/* Sparkle lines floating */}
            <svg className="absolute right-[30%] sm:right-[28%] top-[15%] w-8 h-8 sm:w-10 sm:h-10 text-[#0EB493]" viewBox="0 0 40 40" fill="none">
              <path d="M10 20 L15 10 M20 5 L28 14 M35 25 L23 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>

            {/* Dot grid floating */}
            <svg className="absolute right-[22%] bottom-[8%] w-24 h-16 sm:w-32 sm:h-20 text-[#0EB493] hidden sm:block" viewBox="0 0 100 60" fill="currentColor">
              {[...Array(4)].map((_, r) => (
                [...Array(6)].map((_, c) => (
                  <circle key={`${r}-${c}`} cx={10 + c * 16} cy={10 + r * 16} r="2.5" opacity="0.4" />
                ))
              ))}
            </svg>

            {/* Main Pet Image */}
            <img
              src="https://res.cloudinary.com/dqsyzpxkg/image/upload/v1784566393/4d309321-b954-46c2-9bca-161b251af72c.png"
              alt="Golden Retriever and Tabby Cat"
              className="absolute bottom-0 right-[5%] sm:right-[10%] lg:right-[15%] z-10 w-[90%] sm:w-[80%] lg:w-[115%] max-w-[450px] sm:max-w-[550px] lg:max-w-[800px] object-contain object-bottom mix-blend-multiply brightness-105 contrast-105"
            />

            {/* Floating Cards */}
            <div className="absolute right-0 top-[5%] sm:top-[10%] hidden sm:flex flex-col gap-4 lg:gap-6 z-20 w-[240px] md:w-[280px] lg:w-[300px]">

              {/* Card 1 */}
              <div className="bg-white rounded-[24px] p-4 lg:p-6 shadow-[0_15px_50px_rgba(0,0,0,0.06)] border border-gray-50/50">
                <span className="inline-block px-3 py-1 bg-[#e6f4f0] text-[#0EB493] rounded-full text-[10px] lg:text-[11px] font-bold tracking-wide mb-3 lg:mb-4">
                  Featured Guide
                </span>
                <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-[#1a2b33] mb-1 lg:mb-2 leading-snug">
                  New Pet Parent Checklist
                </h3>
                <p className="text-gray-500 text-[12px] lg:text-[14px] mb-3 lg:mb-5 leading-relaxed">
                  Everything you need to get started
                </p>

              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-[24px] p-4 lg:p-6 shadow-[0_15px_50px_rgba(0,0,0,0.06)] border border-gray-50/50">
                <span className="inline-block px-3 py-1 bg-[#e6f4f0] text-[#0EB493] rounded-full text-[10px] lg:text-[11px] font-bold tracking-wide mb-3 lg:mb-4">
                  Community Pick
                </span>
                <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-[#1a2b33] mb-3 lg:mb-5 leading-snug">
                  How Daily Walks Improve Your Dog's Happiness
                </h3>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Trending Now Section */}
      <section className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 py-12 lg:py-16">
        <div className="flex flex-row justify-between items-end gap-4 mb-8 lg:mb-10">
          <div>
            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1a2b33] mb-1">Trending Now</h2>
            <p className="text-gray-400 text-sm sm:text-[15px]">What pet parents are reading this week</p>
          </div>
          <a href="#" className="text-[#0EB493] font-bold text-xs sm:text-[14px] flex items-center gap-1 hover:underline whitespace-nowrap">
            View all <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trendingArticles.map((article) => (
            <a href="/blog-details" key={article.rank} className="flex flex-col cursor-pointer group">
              <div
                className="h-36 rounded-[20px] p-4 flex justify-between items-start relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 shadow-sm"
                style={{ backgroundColor: article.color }}
              >
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-md">
                  <span className="text-white text-[12px] font-medium tracking-wide">{article.category}</span>
                </div>
                <span className="text-white font-bold text-lg">{article.rank}</span>
              </div>
              <h3 className="text-[#1a2b33] font-bold text-[17px] mt-4 mb-2 leading-snug group-hover:text-[#0EB493] transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-400 text-[13px] font-medium">
                {article.meta}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 py-12 lg:py-16 pb-24 lg:pb-32">
        <div className="flex flex-row justify-between items-end gap-4 mb-8 lg:mb-10">
          <div>
            <h2 className="text-2xl sm:text-[28px] font-bold text-[#1a2b33] mb-1">Latest Articles</h2>
            <p className="text-gray-400 text-sm sm:text-[15px]">Fresh reads from our pet care experts</p>
          </div>
          <a href="#" className="text-[#0EB493] font-bold text-xs sm:text-[14px] flex items-center gap-1 hover:underline whitespace-nowrap">
            See all articles <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {latestArticles.map((article, idx) => (
            <a href="/blog-details" key={idx} className="bg-white rounded-[24px] shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col cursor-pointer group hover:shadow-[0_8px_35px_rgba(0,0,0,0.08)] transition-shadow duration-300">

              {/* Card Header (Colored) */}
              <div className="h-44 relative p-6 flex flex-col justify-end overflow-hidden" style={{ backgroundColor: article.color }}>
                {/* CSS blob decoration */}
                <div className="absolute top-[-20%] right-[-10%] w-[120px] h-[120px] bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-[-30%] left-[-10%] w-[150px] h-[150px] bg-white/10 rounded-full blur-2xl"></div>

                {/* Icon */}
                <div className="absolute top-6 right-6">
                  <svg className="w-12 h-12 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    {article.icon}
                  </svg>
                </div>

                <span className="text-white text-[13px] font-bold tracking-wide relative z-10">{article.category}</span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[#1a2b33] font-bold text-[20px] lg:text-[22px] mb-3 leading-snug group-hover:text-[#0EB493] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-[15px] mb-8 leading-relaxed flex-1">
                  {article.desc}
                </p>

                {/* Card Footer */}
                <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${article.author}`} alt={article.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-[#1a2b33] text-[14px] font-bold leading-tight">{article.author}</p>
                      <p className="text-gray-400 text-[13px] font-medium">{article.date}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-[#0EB493] transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}
