import React, { useState, useRef } from 'react';
import { CheckCircle2, ChevronRight, Upload, Users, Shield, Rocket, Heart, Smile, X, Send, MapPin, Briefcase, Clock, Phone, Mail, User, FileText } from "lucide-react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// ─── Apply Now Modal ─────────────────────────────────────────────────────────
function ApplyModal({ job, onClose }) {
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', countryCode: '+91',
    location: '', experience: '', noticePeriod: '',
    resume: null, coverLetter: '', agreed: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef();

  const countryCodes = ['+91', '+1', '+44', '+61', '+971', '+65', '+49'];
  const experienceLevels = ['0–1 year (Fresher)', '1–3 years', '3–5 years', '5–8 years', '8+ years'];
  const noticePeriods = ['Immediately', '15 days', '1 month', '2 months', '3 months'];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') setForm(f => ({ ...f, [name]: checked }));
    else if (type === 'file') setForm(f => ({ ...f, resume: files[0] }));
    else setForm(f => ({ ...f, [name]: value }));
  };

  const handleDrop = (e) => {
    e.preventDefault(); setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) setForm(f => ({ ...f, resume: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)' }}>
        <div className="bg-white rounded-[28px] p-12 max-w-md w-full text-center shadow-2xl relative animate-fadeIn">
          <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-5 h-5" />
          </button>
          <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-teal-500" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Application Submitted! 🎉</h3>
          <p className="text-gray-500 font-medium mb-2">
            Thank you for applying for <span className="text-teal-600 font-bold">{job.title}</span>.
          </p>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            Our team will review your application and get back to you within 5–7 business days.
          </p>
          <button onClick={onClose}
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors w-full shadow-sm shadow-teal-200">
            Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)' }}>
      <div className="bg-white rounded-[28px] w-full max-w-2xl shadow-2xl flex flex-col" style={{ maxHeight: '90vh' }}>

        {/* Modal Header */}
        <div className="px-8 pt-8 pb-5 border-b border-gray-100 flex items-start justify-between shrink-0">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Apply for <span className="text-teal-500">{job.title}</span></h2>
            <p className="text-gray-400 font-medium mt-1 text-sm flex items-center gap-3 flex-wrap">
              <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{job.department}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{job.type}</span>
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full p-2 transition-colors ml-4 shrink-0">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto px-8 py-6">
          <p className="text-sm text-gray-400 font-medium mb-6">Fill in your details and our team will get back to you.</p>
          <form id="apply-form" onSubmit={handleSubmit} className="space-y-5">

            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name <span className="text-red-400">*</span></label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <input required name="fullName" value={form.fullName} onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-50 outline-none text-sm font-medium text-slate-700 placeholder-gray-300 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address <span className="text-red-400">*</span></label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <input required type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-50 outline-none text-sm font-medium text-slate-700 placeholder-gray-300 transition-all" />
                </div>
              </div>
            </div>

            {/* Row 2: Phone & Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number <span className="text-red-400">*</span></label>
                <div className="flex gap-2">
                  <select name="countryCode" value={form.countryCode} onChange={handleChange}
                    className="pl-3 pr-2 py-3 rounded-xl border border-gray-200 focus:border-teal-400 outline-none text-sm font-semibold text-slate-700 bg-gray-50 transition-all shrink-0">
                    {countryCodes.map(c => <option key={c}>{c}</option>)}
                  </select>
                  <div className="relative flex-1">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                    <input required type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-50 outline-none text-sm font-medium text-slate-700 placeholder-gray-300 transition-all" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Current Location <span className="text-red-400">*</span></label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <input required name="location" value={form.location} onChange={handleChange}
                    placeholder="Enter your current location"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-50 outline-none text-sm font-medium text-slate-700 placeholder-gray-300 transition-all" />
                </div>
              </div>
            </div>

            {/* Row 3: Experience & Notice Period */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Experience Level <span className="text-red-400">*</span></label>
                <select required name="experience" value={form.experience} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-50 outline-none text-sm font-medium text-slate-700 bg-white transition-all appearance-none">
                  <option value="">Select experience</option>
                  {experienceLevels.map(e => <option key={e}>{e}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Notice Period <span className="text-red-400">*</span></label>
                <select required name="noticePeriod" value={form.noticePeriod} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-50 outline-none text-sm font-medium text-slate-700 bg-white transition-all appearance-none">
                  <option value="">Select notice period</option>
                  {noticePeriods.map(n => <option key={n}>{n}</option>)}
                </select>
              </div>
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Resume / CV <span className="text-red-400">*</span></label>
              <div
                onClick={() => fileRef.current.click()}
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-2xl px-6 py-7 text-center cursor-pointer transition-all ${
                  dragging ? 'border-teal-400 bg-teal-50' : form.resume ? 'border-teal-300 bg-teal-50/50' : 'border-gray-200 hover:border-teal-300 hover:bg-gray-50'
                }`}>
                <input ref={fileRef} type="file" name="resume" accept=".pdf,.doc,.docx" className="hidden" onChange={handleChange} required={!form.resume} />
                {form.resume ? (
                  <div className="flex items-center justify-center gap-3 text-teal-600">
                    <FileText className="w-5 h-5" />
                    <span className="font-semibold text-sm">{form.resume.name}</span>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setForm(f => ({ ...f, resume: null })); }}
                      className="text-gray-400 hover:text-red-400 ml-2 transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="w-6 h-6 text-gray-300 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-400">
                      Drag & drop your file here or <span className="text-teal-500 font-bold">browse</span>
                    </p>
                    <p className="text-xs text-gray-300 mt-1">PDF, DOC, DOCX (Max. 5MB)</p>
                  </>
                )}
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Cover Letter <span className="text-gray-400 font-normal">(Optional)</span></label>
              <textarea name="coverLetter" value={form.coverLetter} onChange={handleChange} rows={4}
                placeholder="Tell us why you're a great fit for this role..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-50 outline-none text-sm font-medium text-slate-700 placeholder-gray-300 resize-none transition-all leading-relaxed" />
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer select-none group">
              <div className="relative mt-0.5">
                <input type="checkbox" name="agreed" checked={form.agreed} onChange={handleChange} required className="sr-only" />
                <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${form.agreed ? 'bg-teal-500 border-teal-500' : 'border-gray-300 group-hover:border-teal-400'}`}>
                  {form.agreed && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                </div>
              </div>
              <span className="text-sm text-gray-500 font-medium leading-relaxed">
                I agree to the <span className="text-teal-500 font-semibold hover:underline cursor-pointer">Terms of Service</span> and <span className="text-teal-500 font-semibold hover:underline cursor-pointer">Privacy Policy</span>
              </span>
            </label>
          </form>
        </div>

        {/* Modal Footer */}
        <div className="px-8 py-5 border-t border-gray-100 flex items-center justify-end gap-3 shrink-0 bg-white rounded-b-[28px]">
          <button type="button" onClick={onClose}
            className="px-6 py-3 rounded-xl font-semibold text-gray-500 hover:bg-gray-100 transition-colors text-sm">
            Cancel
          </button>
          <button type="submit" form="apply-form"
            className="bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-white font-bold px-7 py-3 rounded-xl shadow-sm shadow-teal-200 transition-all flex items-center gap-2 text-sm">
            Submit Application <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Careers Component ───────────────────────────────────────────────────
export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);

  const openPositions = [
    {
      title: 'UI/UX Designer',
      department: 'Design Team',
      type: 'Full-time',
      location: 'Bengaluru, India',
      desc: 'Create delightful experiences for pet parents and help shape the future of Mungo.',
      badge: 'On-site'
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Bengaluru, India',
      desc: 'Build fast, responsive and beautiful web experiences that pet parents love.',
      badge: 'On-site'
    },
    {
      title: 'Customer Support Executive',
      department: 'Support',
      type: 'Full-time',
      location: 'Remote',
      desc: 'Be the voice of Mungo and help pet parents with love and care.',
      badge: 'Remote'
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      type: 'Full-time',
      location: 'Bengaluru, India',
      desc: 'Spread the love! Drive campaigns that connect Mungo with more pet parents.',
      badge: 'Hybrid'
    },
    {
      title: 'Pet Care Specialist',
      department: 'Operations',
      type: 'Full-time',
      location: 'Mumbai, India',
      desc: 'Work closely with pet care experts and ensure the best care for every pet.',
      badge: 'On-site'
    }
  ];

  const whyWork = [
    "Work with a passionate and friendly team",
    "Flexible work options",
    "Learning & development opportunities",
    "Pet-friendly environment",
    "Health & wellness benefits",
    "Make a real impact every day"
  ];

  const values = [
    { title: "We Care Deeply", desc: "We care for pets, pet parents, and each other.", icon: <Users className="w-6 h-6" /> },
    { title: "We Do the Right Thing", desc: "Integrity, trust, and transparency always.", icon: <Shield className="w-6 h-6" /> },
    { title: "We Keep Improving", desc: "We learn, innovate, and never stop growing.", icon: <Rocket className="w-6 h-6" /> },
    { title: "We Are Better Together", desc: "Teamwork and kindness drive everything we do.", icon: <Heart className="w-6 h-6" /> },
    { title: "We Celebrate Wins", desc: "Big or small, we celebrate every happy moment.", icon: <Smile className="w-6 h-6" /> }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 pb-20">

      {/* Apply Modal */}
      {selectedJob && <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />}

      {/* ---------------- Navbar ---------------- */}
      <Navbar currentPage="careers" />

      {/* ---------------- Hero ---------------- */}
      <section className="bg-white rounded-b-[40px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] pt-24 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-50/60 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center gap-12">

          <div className="lg:w-1/2">
            <h1 className="text-[52px] lg:text-[68px] font-extrabold text-[#113c34] leading-[1.1] mb-6 tracking-tight">
              Build Your Career,<br />
              <span className="text-teal-500">Make Tails Wag</span>
            </h1>
            <p className="text-gray-500 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl font-medium">
              Join Mungo and be part of a team that's passionate about pets and dedicated to making a difference every day.
            </p>
            <button
              onClick={() => document.getElementById('open-positions').scrollIntoView({ behavior: 'smooth' })}
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-4 rounded-xl shadow-sm transition-colors flex items-center gap-2 text-base">
              View Open Positions <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="lg:w-1/2 relative flex justify-center items-center mt-10 lg:mt-0">
            <div className="absolute -top-4 right-10 z-0">
              <svg width="80" height="80" viewBox="0 0 60 60" fill="#2dd4bf" opacity="0.4">
                {[0, 1, 2, 3].map((row) =>
                  [0, 1, 2, 3].map((col) => (
                    <circle key={`${row}-${col}`} cx={6 + col * 16} cy={6 + row * 16} r="2.5" />
                  ))
                )}
              </svg>
            </div>

            <img src="/Image with Blob.jpg" alt="Pets" className="w-[85%] max-w-[540px] object-cover mix-blend-multiply relative z-10" onError={(e) => { e.target.src = 'https://placedog.net/600/400?id=12' }} />

            <div className="absolute top-[10%] left-[5%] bg-white rounded-xl shadow-lg border border-gray-100 p-3.5 flex items-center gap-3 z-20">
              <div className="text-teal-500"><Heart className="w-5 h-5" /></div>
              <div>
                <div className="text-[13px] font-bold text-slate-800">Purpose Driven</div>
                <div className="text-[11px] text-gray-500 font-medium">Work that matters</div>
              </div>
            </div>
            <div className="absolute bottom-[20%] left-[-5%] bg-white rounded-xl shadow-lg border border-gray-100 p-3.5 flex items-center gap-3 z-20">
              <div className="text-teal-500"><Smile className="w-5 h-5" /></div>
              <div>
                <div className="text-[13px] font-bold text-slate-800">Pet Friendly</div>
                <div className="text-[11px] text-gray-500 font-medium">Pets are family here</div>
              </div>
            </div>
            <div className="absolute bottom-[40%] right-[0%] bg-white rounded-xl shadow-lg border border-gray-100 p-3.5 flex items-center gap-3 z-20">
              <div className="text-teal-500"><Rocket className="w-5 h-5" /></div>
              <div>
                <div className="text-[13px] font-bold text-slate-800">Growth Focused</div>
                <div className="text-[11px] text-gray-500 font-medium">Learn, grow & thrive</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Row */}
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 mt-20 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-16 h-16 bg-teal-50 text-teal-500 rounded-full flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-2 text-base">{v.title}</h4>
                <p className="text-sm text-gray-500 font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Main Content Layout ---------------- */}
      <section id="open-positions" className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Column - Jobs */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Open Positions</h2>
            <p className="text-gray-500 font-medium text-base mb-8">
              Find the perfect role to grow your career while helping pets live their best lives.
            </p>

            <div className="space-y-4">
              {openPositions.map((job, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedJob(job)}
                  className="bg-white border border-gray-100 rounded-[24px] p-7 shadow-sm hover:shadow-lg hover:border-teal-100 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group"
                >
                  <div className="flex items-start gap-5 flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-500 flex items-center justify-center shrink-0 border border-teal-100/50 group-hover:bg-teal-500 group-hover:text-white transition-all">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-slate-900 mb-1.5 group-hover:text-teal-600 transition-colors">{job.title}</h3>
                      <div className="text-sm font-medium text-gray-400 mb-3 flex items-center flex-wrap gap-2">
                        <span>{job.department}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>{job.type}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>{job.location}</span>
                      </div>
                      <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-2xl">
                        {job.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:flex-col md:items-end gap-4 shrink-0 border-t md:border-t-0 pt-4 md:pt-0 border-gray-100">
                    <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide 
                      ${job.badge === 'On-site' ? 'bg-teal-50 text-teal-600' :
                        job.badge === 'Remote' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'}`}>
                      {job.badge}
                    </span>
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedJob(job); }}
                      className="bg-teal-500 hover:bg-teal-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors flex items-center gap-1.5 shadow-sm shadow-teal-200">
                      Apply Now <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="text-teal-500 font-bold border-2 border-teal-500 px-8 py-3.5 rounded-xl hover:bg-teal-50 transition-colors inline-flex items-center gap-2">
                View All Open Positions <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column - Sidebars */}
          <div className="lg:col-span-4 space-y-6">

            {/* Why Work */}
            <div className="bg-white rounded-[28px] shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Why Work at Mungo?</h3>
              <ul className="space-y-4">
                {whyWork.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-teal-50 p-1 rounded-full text-teal-500 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-gray-600 font-medium text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Life at Mungo */}
            <div className="bg-white rounded-[28px] shadow-sm border border-gray-100 p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-900">Life at Mungo</h3>
                <span className="text-teal-500 font-bold text-sm cursor-pointer hover:underline flex items-center gap-1">View Gallery <ChevronRight className="w-4 h-4" /></span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <img src="/Image with Blob.jpg" alt="Life" className="w-full h-28 object-cover rounded-xl" onError={(e) => { e.target.src = 'https://placedog.net/600/400?id=12' }} />
                <img src="/assets/hero.png" alt="Life" className="w-full h-28 object-cover rounded-xl" onError={(e) => { e.target.src = 'https://placedog.net/600/400?id=22' }} />
                <img src="/assets/corgi.png" alt="Life" className="w-full h-28 object-cover rounded-xl" onError={(e) => { e.target.src = 'https://placedog.net/600/400?id=32' }} />
                <img src="https://placedog.net/600/400?id=42" alt="Life" className="w-full h-28 object-cover rounded-xl" />
              </div>
            </div>

            {/* Not Finding Role */}
            <div className="bg-teal-50 rounded-[28px] border border-teal-100 p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-teal-900 mb-3">Not Finding the Right Role?</h3>
                <p className="text-teal-800/70 text-sm font-medium mb-6 leading-relaxed max-w-sm">
                  We're always looking for talented and passionate people. Send us your resume and we'll keep you in mind!
                </p>
                <button className="bg-white border-2 border-teal-500 text-teal-600 font-bold px-6 py-3.5 rounded-xl hover:bg-teal-500 hover:text-white transition-colors flex items-center gap-2">
                  Send Your Resume <Upload className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 text-teal-200/50">
                <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-5 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-12.5 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm15 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7.5 3c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Banner ---------------- */}
      <section className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 pb-20">
        <div className="bg-teal-50 rounded-[48px] px-8 sm:px-14 py-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden border border-teal-100">
          <div className="text-center md:text-left z-10 flex-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#113c34] mb-3">Ready to make tails wag?</h2>
            <p className="text-teal-800/70 font-medium text-base sm:text-lg max-w-xl">Join our mission to bring happiness to pets and pet parents everywhere.</p>
          </div>

          <div className="z-10 shrink-0">
            <button
              onClick={() => document.getElementById('open-positions').scrollIntoView({ behavior: 'smooth' })}
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-4 rounded-xl shadow-sm transition-colors flex items-center gap-2">
              Join Mungo Team <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- Footer ---------------- */}
      <Footer />
    </div>
  );
}
