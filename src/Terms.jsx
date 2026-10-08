import React from "react";
import {
    ChevronDown,
    Download,
    FileText,
    Headset,
    AlertTriangle,
    User,
    Calendar,
    CheckCircle2
} from "lucide-react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Terms() {
    const sidebar = [
        "1. Acceptance of Terms",
        "2. User Responsibilities",
        "3. Booking & Services",
        "4. Payments",
        "5. Cancellations & Refunds",
        "6. Intellectual Property",
        "7. Limitation of Liability",
        "8. Termination",
        "9. Governing Law",
        "10. Contact Us"
    ];

    const faq = [
        "Are these terms legally binding?",
        "Can these terms change?",
        "How will I be notified of changes?",
        "Where can I get more help?"
    ];

    const termsContent = [
        {
            title: "1. Acceptance of Terms",
            desc: "By accessing or using Mungo, you agree to be bound by these Terms & Conditions."
        },
        {
            title: "2. User Responsibilities",
            desc: "You agree to use our platform only for lawful purposes and in a way that doesn't harm others."
        },
        {
            title: "3. Booking & Services",
            desc: "All bookings are subject to availability and confirmation."
        },
        {
            title: "4. Payments",
            desc: "All payments must be made through our approved payment methods."
        },
        {
            title: "5. Cancellations & Refunds",
            desc: "Refunds are processed based on our cancellation policy and service conditions."
        },
        {
            title: "6. Intellectual Property",
            desc: "All content, logos, and trademarks on Mungo are our property."
        },
        {
            title: "7. Limitation of Liability",
            desc: "Mungo is not liable for indirect or consequential damages."
        },
        {
            title: "8. Termination",
            desc: "We may suspend or terminate access if terms are violated."
        },
        {
            title: "9. Governing Law",
            desc: "These terms are governed by the laws of India."
        },
        {
            title: "10. Contact Us",
            desc: "For any legal queries, reach out to our support team."
        }
    ];

    return (
        <div className="bg-slate-50 font-sans text-slate-800 min-h-screen flex flex-col">
            <Navbar currentPage="terms" />

            {/* Hero Section */}
            <section className="bg-white rounded-b-[40px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] pt-32 pb-0 relative overflow-hidden">
                {/* Decorative blob in background */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50/60 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none"></div>

                <div className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 pt-12 relative z-10">
                    <div className="text-sm font-medium text-gray-400 mb-8 flex items-center gap-2">
                        <span>Home</span> <ChevronDown className="w-4 h-4 -rotate-90" /> <span className="text-gray-600">Terms & Conditions</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h1 className="text-5xl md:text-[56px] font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                                Terms & Conditions
                            </h1>
                            <p className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed mb-14 font-medium">
                                These terms govern your use of Mungo's website, mobile app, and services. By accessing our platform, you agree to these terms.
                            </p>

                        </div>


                    </div>
                </div>
            </section>

            {/* Main Content Layout */}
            <section className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 py-16">
                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* Left Sidebar */}
                    <aside className="lg:col-span-3 space-y-6 sticky top-28">
                        <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-6">
                            <h3 className="font-bold text-lg mb-6 text-slate-800">On this page</h3>
                            <nav className="space-y-1">
                                {sidebar.map((item, i) => (
                                    <button
                                        key={i}
                                        className={`w-full flex items-center justify-between text-left px-4 py-3.5 rounded-xl font-semibold transition-colors ${i === 0
                                            ? "bg-teal-50 text-teal-600 border border-teal-100 shadow-sm"
                                            : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            {i === 0 ? <User className="w-[18px] h-[18px]" /> : <FileText className="w-[18px] h-[18px]" />}
                                            <span className="truncate text-[15px]">{item}</span>
                                        </div>
                                        {i === 0 && <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-6 text-center">
                            <div className="w-12 h-12 bg-teal-50 text-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg text-teal-500 mb-2">Download Full Terms</h3>
                            <p className="text-gray-500 text-sm mb-6 font-medium leading-relaxed">
                                Get a copy of our Terms & Conditions in PDF format.
                            </p>
                            <button className="w-full flex items-center justify-center gap-2 border-2 border-teal-500 text-teal-500 font-bold py-3.5 rounded-xl hover:bg-teal-50 transition-colors">
                                <Download className="w-5 h-5" /> Download PDF
                            </button>
                        </div>
                    </aside>

                    {/* Middle Content - Accordions */}
                    <main className="lg:col-span-6 space-y-4">
                        {termsContent.map((term, i) => (
                            <div key={i} className="bg-white border border-gray-100 rounded-[20px] p-7 shadow-sm hover:shadow-md transition-all cursor-pointer group">
                                <div className="flex justify-between items-start gap-4">
                                    <div>
                                        <h3 className="font-bold text-[18px] text-slate-800 mb-2 group-hover:text-teal-500 transition-colors">
                                            {term.title}
                                        </h3>
                                        <p className="text-gray-500 leading-relaxed font-medium text-[15px]">
                                            {term.desc}
                                        </p>
                                    </div>
                                    <ChevronDown className="text-gray-400 w-5 h-5 group-hover:text-teal-500 transition-colors flex-shrink-0 mt-1" />
                                </div>
                            </div>
                        ))}
                    </main>

                    {/* Right Sidebar */}
                    <aside className="lg:col-span-3 space-y-6 sticky top-28">
                        {/* Important Alert */}
                        <div className="bg-[#fff9eb] rounded-[24px] border border-[#ffebba] p-6 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-amber-100 p-2 rounded-xl text-amber-500">
                                    <AlertTriangle className="w-[22px] h-[22px]" />
                                </div>
                                <h3 className="font-bold text-[17px] text-amber-600">Important</h3>
                            </div>
                            <p className="text-amber-700/80 text-[14px] leading-[1.6] font-medium">
                                Please read these terms carefully before using our services. Continued use indicates your acceptance.
                            </p>
                        </div>

                        {/* FAQ */}
                        <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-6">
                            <h3 className="font-bold text-[17px] mb-5 text-slate-800">Frequently Asked Questions</h3>
                            <div className="space-y-3">
                                {faq.map((q, i) => (
                                    <div key={i} className="border border-gray-100 rounded-xl p-4 flex justify-between items-center cursor-pointer hover:border-teal-200 hover:bg-teal-50/50 transition-colors">
                                        <span className="text-[14px] font-bold text-gray-600">{q}</span>
                                        <ChevronDown className="w-4 h-4 text-gray-400" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Need Help? */}
                        <div className="bg-teal-50 rounded-[24px] border border-teal-100 p-6 text-center shadow-sm">
                            <div className="w-12 h-12 bg-white text-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-teal-100/50">
                                <Headset className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-[17px] text-teal-600 mb-2">Need Help?</h3>
                            <p className="text-teal-700/70 text-[14px] leading-[1.6] mb-6 font-medium">
                                Our support team is here for you if you have any questions.
                            </p>
                            <button className="w-full bg-teal-500 text-white font-bold py-3.5 rounded-xl hover:bg-teal-600 transition-colors shadow-sm shadow-teal-500/20">
                                Contact Support
                            </button>
                        </div>
                    </aside>

                </div>
            </section>

            {/* App Banner */}
            <section className="max-w-[1400px] mx-auto px-6 pb-24 mt-10">
                <div className="bg-teal-50 rounded-[40px] px-12 py-14 flex flex-col lg:flex-row items-center justify-between gap-10 relative border border-teal-100 shadow-sm overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-60 pointer-events-none"></div>

                    <div className="lg:w-[45%] z-10 text-center lg:text-left">
                        <h2 className="text-[40px] md:text-[44px] font-extrabold text-[#113c34] mb-5 leading-[1.1] tracking-tight">
                            Ready to give your pet<br />the best care?
                        </h2>
                        <p className="text-[#113c34]/70 font-medium text-[17px] mb-8 max-w-lg leading-relaxed">
                            Book services, get expert advice, and manage your pet's well-being all in one place.
                        </p>
                        <div className="flex items-center justify-center lg:justify-start gap-4">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-[46px] hover:opacity-90 cursor-pointer shadow-sm rounded-lg" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-[46px] hover:opacity-90 cursor-pointer shadow-sm rounded-lg" />
                        </div>
                    </div>

                    <div className="flex items-center gap-12 z-10">
                        <div className="relative h-[320px] w-[210px] hidden sm:block mt-16 translate-y-10">
                            {/* Phone Mockup */}
                            <div className="absolute inset-0 bg-white rounded-[36px] shadow-2xl border-[10px] border-[#1a2b33] overflow-hidden">
                                <img src="/Image with Blob.jpg" alt="App UI" className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
                                <div className="absolute top-0 w-full h-7 bg-[#1a2b33] flex justify-center"><div className="w-[30%] h-4 bg-black rounded-b-xl"></div></div>
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

function HeroCard({ icon, title, desc }) {
    return (
        <div className="bg-white border border-gray-100 rounded-[20px] p-5 flex-1 shadow-[0_2px_15px_rgba(0,0,0,0.02)] flex items-start gap-4 hover:-translate-y-1 transition-transform">
            <div className="bg-teal-50 p-3 rounded-2xl shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-slate-900 mb-1.5 text-[15px]">{title}</h4>
                <p className="text-gray-500 text-[13px] font-medium leading-[1.5]">{desc}</p>
            </div>
        </div>
    );
}
