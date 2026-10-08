import React from 'react';
import { ChevronRight, CheckCircle2, PawPrint, Users, Heart, Star, Navigation, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Partners() {

    const waysToPartner = [
        { title: 'Veterinary Clinics', desc: 'Join our network of trusted vets and pet hospitals.', icon: <span className="text-3xl">🏥</span>, color: 'text-teal-500' },
        { title: 'Pet Boarding & Daycare', desc: 'Offer a safe and loving home away from home.', icon: <span className="text-3xl">🏠</span>, color: 'text-pink-500' },
        { title: 'Grooming Salons', desc: 'Partner with us to connect with more pet parents.', icon: <span className="text-3xl">✂️</span>, color: 'text-blue-500' },
        { title: 'Pet Stores', desc: 'Sell quality pet products to a community that trusts you.', icon: <span className="text-3xl">🛍️</span>, color: 'text-amber-500' },
        { title: 'Trainers & Behaviorists', desc: 'Help pets learn better habits with your expertise.', icon: <span className="text-3xl">🦮</span>, color: 'text-purple-500' },
        { title: 'Corporate Partners', desc: 'Collaborate with us for mutual growth and impact.', icon: <span className="text-3xl">🤝</span>, color: 'text-indigo-500' }
    ];

    const partners = [
        { name: 'Paws & Claws Clinic', type: 'Veterinary Clinic', location: 'Bengaluru, Karnataka', rating: 4.9, img: 'https://placedog.net/600/400?id=30' },
        { name: 'Happy Tails Daycare', type: 'Pet Boarding', location: 'Mumbai, Maharashtra', rating: 4.8, img: 'https://placedog.net/600/400?id=33' },
        { name: 'FurStyle Grooming', type: 'Pet Grooming', location: 'Delhi, NCR', rating: 4.7, img: 'https://placedog.net/600/400?id=43' },
        { name: 'Pet Lovers Store', type: 'Pet Store', location: 'Pune, Maharashtra', rating: 4.9, img: '/assets/corgi.png' },
        { name: 'Pawsitive Training', type: 'Dog Training', location: 'Hyderabad, Telangana', rating: 4.9, img: '/assets/hero.png' }
    ];

    const whyPartner = [
        "Access to a large & engaged pet parent community",
        "Dedicated partner support & resources",
        "Build trust with Mungo's verified partner badge",
        "Grow your brand with co-marketing opportunities"
    ];

    return (
        <div className="bg-slate-50 min-h-screen font-sans text-slate-800 flex flex-col overflow-x-hidden">
            <Navbar currentPage="partners" />

            {/* ---------------- Hero ---------------- */}
            <section className="bg-white rounded-b-[40px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] pt-32 pb-20 relative overflow-hidden">
                {/* Background blobs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50/60 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

                <div className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center gap-12">

                    <div className="lg:w-[45%]">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-8">
                            <span className="hover:text-teal-500 cursor-pointer">Home</span>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-600">Partners</span>
                        </div>

                        <span className="inline-block bg-teal-50 text-teal-600 text-sm font-bold tracking-wide px-4 py-1.5 rounded-full mb-6 uppercase border border-teal-100">
                            Partner With Mungo
                        </span>
                        <h1 className="text-5xl lg:text-[60px] font-extrabold text-[#113c34] leading-[1.1] mb-6 tracking-tight">
                            Stronger Together for Happier Pets
                        </h1>
                        <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg font-medium">
                            Join our network of trusted partners and help pet parents access the best care, services, and products for their beloved companions.
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-4 rounded-xl shadow-sm transition-colors flex items-center gap-2">
                                Become a Partner <PawPrint className="w-5 h-5" />
                            </button>
                            <button className="bg-white hover:bg-gray-50 text-teal-500 border border-teal-200 font-bold px-8 py-4 rounded-xl shadow-sm transition-colors flex items-center gap-2">
                                Partner Login <Navigation className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-[55%] flex justify-center">
                        <div className="bg-white rounded-[32px] shadow-2xl border border-gray-100 p-8 sm:p-10 w-full max-w-xl">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Become a Partner Today</h3>
                            <p className="text-gray-400 text-sm font-medium mb-6">Fill in the form and our team will get back to you within 24 hours.</p>

                            <form className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 font-medium" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Business Name</label>
                                        <input type="text" placeholder="Paws & Care Clinic" className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 font-medium" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 font-medium" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                                        <input type="tel" placeholder="+91 98765 43210" className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 font-medium" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Partnership Type</label>
                                    <select className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 font-medium text-gray-600">
                                        <option>Select a category</option>
                                        <option>Veterinary Clinic</option>
                                        <option>Pet Boarding & Daycare</option>
                                        <option>Pet Grooming</option>
                                        <option>Pet Food & Nutrition</option>
                                        <option>Pet Insurance / Health</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">City / Location</label>
                                    <input type="text" placeholder="Bengaluru, India" className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 font-medium" />
                                </div>

                                <button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3.5 rounded-xl transition-colors shadow-sm shadow-teal-200 flex items-center justify-center gap-2 mt-2">
                                    Submit Application <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

                {/* Counter / Stats Bar */}
                <div className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 mt-20 pt-10 border-t border-gray-100 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-teal-50 border border-teal-100 text-teal-500 rounded-xl flex items-center justify-center shrink-0">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-slate-800">500+</div>
                                <div className="text-[13px] font-bold text-slate-900 mb-0.5 mt-1">Active Partners</div>
                                <div className="text-[12px] text-gray-500 font-medium leading-snug">Growing network of trusted businesses.</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 pt-8 md:pt-0 md:pl-8">
                            <div className="w-14 h-14 bg-teal-50 border border-teal-100 text-teal-500 rounded-xl flex items-center justify-center shrink-0">
                                <PawPrint className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-slate-800">50K+</div>
                                <div className="text-[13px] font-bold text-slate-900 mb-0.5 mt-1">Pets Impacted</div>
                                <div className="text-[12px] text-gray-500 font-medium leading-snug">Together, we're improving pet lives every day.</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 pt-8 md:pt-0 md:pl-8">
                            <div className="w-14 h-14 bg-teal-50 border border-teal-100 text-teal-500 rounded-xl flex items-center justify-center shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-slate-800">200+</div>
                                <div className="text-[13px] font-bold text-slate-900 mb-0.5 mt-1">Cities Covered</div>
                                <div className="text-[12px] text-gray-500 font-medium leading-snug">Delivering love and care across India.</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 pt-8 md:pt-0 md:pl-8">
                            <div className="w-14 h-14 bg-teal-50 border border-teal-100 text-teal-500 rounded-xl flex items-center justify-center shrink-0">
                                <Star className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-slate-800">4.8/5</div>
                                <div className="text-[13px] font-bold text-slate-900 mb-0.5 mt-1">Partner Satisfaction</div>
                                <div className="text-[12px] text-gray-500 font-medium leading-snug">Partners love growing with Mungo.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------- Partner With Us In Multiple Ways ---------------- */}
            <section className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-[40px] font-bold text-slate-900 mb-4 tracking-tight">Partner With Us In Multiple Ways</h2>
                    <p className="text-gray-500 font-medium text-lg">Choose the partnership type that best fits your business.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                    {waysToPartner.map((way, i) => (
                        <div key={i} className="bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform cursor-pointer group">
                            <div className="mb-6 bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                {way.icon}
                            </div>
                            <h3 className="font-bold text-slate-900 mb-3 text-sm">{way.title}</h3>
                            <p className="text-[13px] text-gray-500 font-medium mb-6 flex-1 leading-relaxed">{way.desc}</p>
                            <div className={`${way.color} font-bold text-xs flex items-center gap-1 group-hover:underline`}>
                                Learn more <ArrowRight className="w-3 h-3" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------------- Our Valued Partners ---------------- */}
            <section className="bg-white border-y border-gray-100 py-24">
                <div className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-[40px] font-bold text-slate-900 mb-4 tracking-tight">Our Valued Partners</h2>
                        <p className="text-gray-500 font-medium text-lg">Proud to collaborate with amazing brands and experts.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {partners.map((partner, i) => (
                            <div key={i} className="bg-white rounded-[24px] border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer flex flex-col">
                                <div className="h-40 overflow-hidden relative">
                                    <img src={partner.img} alt={partner.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.src = 'https://placedog.net/600/400' }} />
                                </div>
                                <div className="p-5 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start gap-2 mb-2">
                                        <h3 className="font-bold text-slate-900 text-[15px] leading-tight">{partner.name}</h3>
                                        <div className="flex items-center gap-1 bg-amber-50 text-amber-500 px-2 py-0.5 rounded text-xs font-bold shrink-0">
                                            <Star className="w-3 h-3 fill-currentColor" /> {partner.rating}
                                        </div>
                                    </div>
                                    <div className="text-[13px] text-teal-600 font-bold mb-1">{partner.type}</div>
                                    <div className="text-[12px] text-gray-400 font-medium mt-auto flex items-center gap-1">
                                        <MapPin className="w-3 h-3" /> {partner.location}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="text-teal-500 border border-teal-500 font-bold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors inline-flex items-center gap-2">
                            View All Partners <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>

            {/* ---------------- Why Partner With Mungo? ---------------- */}
            <section className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 py-24">
                <div className="bg-teal-50 rounded-[40px] flex flex-col lg:flex-row overflow-hidden border border-teal-100">

                    <div className="lg:w-1/2 p-10 lg:p-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Why Partner With Mungo?</h2>
                        <p className="text-teal-800/80 font-medium text-lg leading-relaxed mb-10 max-w-md">
                            We provide the tools, support, and exposure you need to expand your reach and grow your business.
                        </p>

                        <ul className="space-y-5 mb-10">
                            {whyPartner.map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="bg-white p-1 rounded-full text-teal-500 shrink-0 mt-0.5 shadow-sm">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <span className="text-slate-700 font-bold leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:w-1/2 relative min-h-[300px]">
                        <img src="/Image with Blob.jpg" alt="Partner smiling" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80" onError={(e) => { e.target.src = 'https://placedog.net/600/400?id=99' }} />

                        {/* Quote Card */}
                        <div className="absolute bottom-8 right-8 left-8 lg:left-auto bg-white rounded-[24px] p-6 shadow-xl border border-gray-100 max-w-md">
                            <div className="flex gap-1 text-amber-400 mb-3">
                                <Star className="w-4 h-4 fill-currentColor" /><Star className="w-4 h-4 fill-currentColor" /><Star className="w-4 h-4 fill-currentColor" /><Star className="w-4 h-4 fill-currentColor" /><Star className="w-4 h-4 fill-currentColor" />
                            </div>
                            <p className="text-sm font-medium text-gray-600 leading-relaxed italic mb-4">
                                "Mungo has helped us reach more pet parents and grow our business like never before!"
                            </p>
                            <div className="flex items-center gap-3">
                                <img src="https://i.pravatar.cc/100?img=11" alt="Dr. Rohan" className="w-10 h-10 rounded-full" />
                                <div>
                                    <div className="font-bold text-sm text-slate-900">- Dr. Rohan Mehta</div>
                                    <div className="text-xs text-gray-400 font-medium">Paws & Claws Clinic</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

               {/* ---------------- Footer ---------------- */}
            <Footer />
        </div>
    );
}
