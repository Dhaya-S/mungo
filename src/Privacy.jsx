import React, { useState } from "react";
import { Shield, Lock, Calendar, User, Users, PawPrint, Mail, ChevronRight, CheckCircle2, ChevronDown, Headset, ShieldCheck } from "lucide-react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function PrivacyPolicy() {
    const sidebar = [
        { label: "Introduction", active: true },
        { label: "Information We Collect", active: false },
        { label: "How We Use Your Data", active: false },
        { label: "Cookies & Tracking", active: false },
        { label: "Third-Party Services", active: false },
        { label: "Data Security", active: false },
        { label: "Your Rights", active: false },
        { label: "Contact Us", active: false },
    ];

    const accordions = [
        "4. Cookies & Tracking Technologies",
        "5. Third-Party Services",
        "6. Data Security",
        "7. Your Rights & Choices"
    ];

    return (
        <div className="bg-slate-50 min-h-screen font-sans text-slate-800 flex flex-col overflow-x-hidden">
            <Navbar currentPage="privacy" />

            {/* ---------------- Hero ---------------- */}
            <section className="bg-white rounded-b-[40px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] pt-32 pb-20 relative overflow-hidden">
                {/* Background blobs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50/60 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

                <div className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center gap-12">

                    <div className="lg:w-1/2">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-8">
                            <span className="hover:text-teal-500 cursor-pointer">Home</span>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-600">Privacy Policy</span>
                        </div>

                        <h1 className="text-5xl lg:text-[64px] font-extrabold text-[#113c34] leading-[1.1] mb-6 tracking-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-lg font-medium">
                            Your privacy is important to us. This policy explains how
                            Mungo collects, uses, and protects your personal information when you use our platform.
                        </p>
                    </div>

                    <div className="lg:w-1/2 relative flex justify-center items-center mt-10 lg:mt-0">

                    </div>
                </div>

                {/* Hero Stat Cards */}
                <div className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 mt-16 relative z-10">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white border border-gray-100 rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex gap-4 items-center">
                            <div className="text-teal-500 shrink-0"><Lock className="w-8 h-8" /></div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">Secure Data</h3>
                                <p className="text-gray-500 text-[13px] font-medium leading-relaxed">We use industry-standard security to protect your data.</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex gap-4 items-center">
                            <div className="text-teal-500 shrink-0"><Shield className="w-8 h-8" /></div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">No Selling of Data</h3>
                                <p className="text-gray-500 text-[13px] font-medium leading-relaxed">We will never sell your personal information to third parties.</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex gap-4 items-center">
                            <div className="text-teal-500 shrink-0"><CheckCircle2 className="w-8 h-8" /></div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">User Control</h3>
                                <p className="text-gray-500 text-[13px] font-medium leading-relaxed">You have full control over your data and communication preferences.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------- Main Content Layout ---------------- */}
            <section className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 py-20">
                <div className="grid lg:grid-cols-12 gap-10 items-start">

                    {/* Left Sidebar */}
                    <div className="lg:col-span-3 space-y-8">
                        <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                            <h3 className="font-bold text-slate-900 mb-4 px-2">On this page</h3>
                            <ul className="space-y-1">
                                {sidebar.map((item, i) => (
                                    <li key={i}>
                                        <button className={`w-full text-left px-4 py-3 rounded-xl font-bold text-[14px] flex items-center justify-between transition-colors ${item.active ? 'bg-teal-50 text-teal-600' : 'text-gray-500 hover:bg-gray-50 hover:text-slate-900'}`}>
                                            <span className="flex items-center gap-3">
                                                {i === 0 && <span className="w-4 flex justify-center"><User className="w-4 h-4 opacity-50" /></span>}
                                                {i === 1 && <span className="w-4 flex justify-center"><User className="w-4 h-4 opacity-50" /></span>}
                                                {i === 2 && <span className="w-4 flex justify-center"><User className="w-4 h-4 opacity-50" /></span>}
                                                {i > 2 && <span className="w-4 flex justify-center"><Shield className="w-4 h-4 opacity-50" /></span>}
                                                {item.label}
                                            </span>
                                            {item.active && <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-teal-50 rounded-[24px] border border-teal-100 p-8 text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-teal-500">
                                <Headset className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-teal-900 mb-3">Have questions?</h3>
                            <p className="text-teal-800/80 text-sm font-medium mb-6 leading-relaxed">
                                We're here to help you with any privacy related concerns.
                            </p>
                            <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold w-full py-3 rounded-xl transition-colors shadow-sm">
                                Contact Support
                            </button>
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="lg:col-span-9 space-y-8">

                        {/* 1. Introduction */}
                        <div className="bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Introduction</h2>
                            <p className="text-gray-500 font-medium leading-relaxed mb-8">
                                Mungo ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and services.
                            </p>
                            <div className="bg-teal-50 rounded-[24px] p-8 relative">
                                <div className="absolute top-4 left-4 text-teal-200/50">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                                </div>
                                <div className="absolute bottom-4 right-6 text-teal-200">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-5 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-12.5 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm15 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7.5 3c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z" />
                                    </svg>
                                </div>
                                <p className="text-slate-800 font-bold text-lg leading-relaxed relative z-10 ml-8 max-w-2xl">
                                    We believe in transparency and giving you control over your personal information.
                                </p>
                            </div>
                        </div>

                        {/* 2. Information We Collect */}
                        <div className="bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
                            <p className="text-gray-500 font-medium leading-relaxed mb-8">
                                We collect information that helps us provide better services for you and your pets.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="border border-gray-100 rounded-[20px] p-6 shadow-sm">
                                    <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-500 mb-4">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2 text-[15px]">Personal Information</h3>
                                    <p className="text-gray-500 text-[13px] font-medium leading-relaxed">Name, email, phone number, address, and account details.</p>
                                </div>
                                <div className="border border-gray-100 rounded-[20px] p-6 shadow-sm">
                                    <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500 mb-4">
                                        <PawPrint className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2 text-[15px]">Pet Information</h3>
                                    <p className="text-gray-500 text-[13px] font-medium leading-relaxed">Pet name, breed, age, medical history, and preferences.</p>
                                </div>
                                <div className="border border-gray-100 rounded-[20px] p-6 shadow-sm">
                                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-500 mb-4">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2 text-[15px]">Usage Information</h3>
                                    <p className="text-gray-500 text-[13px] font-medium leading-relaxed">Device information, IP address, app usage, and analytics.</p>
                                </div>
                            </div>
                        </div>

                        {/* 3. How We Use Your Data */}
                        <div className="bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Data</h2>
                            <p className="text-gray-500 font-medium leading-relaxed mb-8">
                                We use your information for the following purposes:
                            </p>

                            <div className="flex flex-col md:flex-row items-center gap-10">
                                <ul className="space-y-4 flex-1">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                                        <span className="text-slate-600 font-bold text-sm">To provide, operate, and maintain our services</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                                        <span className="text-slate-600 font-bold text-sm">To personalize your experience</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                                        <span className="text-slate-600 font-bold text-sm">To communicate with you about updates and offers</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                                        <span className="text-slate-600 font-bold text-sm">To ensure platform safety and prevent fraud</span>
                                    </li>
                                </ul>
                                <div className="shrink-0">
                                    <img src="/assets/corgi.png" alt="Corgi" className="w-64 h-40 object-cover rounded-3xl" onError={(e) => { e.target.src = 'https://placedog.net/600/400?id=12' }} />
                                </div>
                            </div>
                        </div>

                        {/* Accordions */}
                        <div className="space-y-4">
                            {accordions.map((title, i) => (
                                <div key={i} className="bg-white border border-gray-100 rounded-[20px] p-6 flex justify-between items-center cursor-pointer hover:border-teal-200 transition-colors shadow-sm">
                                    <h3 className="font-bold text-slate-900">{title}</h3>
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* ---------------- Banner ---------------- */}
            <section className="max-w-[1400px] mx-auto px-6 pb-20">
                <div className="bg-teal-50 rounded-[40px] px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-10 border border-teal-100">

                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-teal-500">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-[#113c34] mb-2">Your trust means everything to us</h2>
                            <p className="text-teal-800/80 font-medium text-sm">If you have any questions about this Privacy Policy or how we handle your data,<br className="hidden md:block" /> please reach out. We're always here to help.</p>
                        </div>
                    </div>

                    <div className="shrink-0 w-full md:w-auto">
                        <button className="w-full md:w-auto bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-4 rounded-xl shadow-sm transition-colors">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            {/* ---------------- Footer ---------------- */}
            <Footer />
        </div>
    );
}