import { useState } from "react";
import { UploadCloud, CheckCircle2 } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const JOB = { title: "Apply for senior product designer", meta: "Design · Bengaluru · Full-time" };
const MAX_FILE = 10 * 1024 * 1024;

const QUESTIONS = [
  { id: "why", label: "Why do you want to work at Mungo?" },
  { id: "proud", label: "Tell us about something you've built that you're proud of." },
];

const inputCls =
  "w-full rounded-xl border border-[#17201E]/[0.16] bg-white px-3.5 text-[14px] text-[#17201E] outline-none placeholder:text-[#757575] focus:border-[#2DBB9F] focus:ring-2 focus:ring-[#2DBB9F]/20";
const labelCls = "text-[13px] leading-5 text-[#17201E]";

function Card({ title, children }) {
  return (
    <div className="flex flex-col gap-[19px] rounded-3xl bg-white p-6 shadow-[0_20px_50px_rgba(23,32,30,0.06)] sm:p-11">
      <p className="text-xs font-bold uppercase tracking-[0.05em] text-[#22947E]">{title}</p>
      {children}
    </div>
  );
}

function Field({ id, label, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={labelCls}>{label}</label>
      {children}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

export default function ApplyForm() {
  const [v, setV] = useState({
    fullName: "", email: "", phone: "", portfolio: "", yearsExp: "", why: "", proud: "",
  });
  const [file, setFile] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });

  const onFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return setFile(null);
    if (f.size > MAX_FILE) {
      setErrors((x) => ({ ...x, resume: "File must be under 10MB." }));
      return setFile(null);
    }
    setErrors((x) => ({ ...x, resume: undefined }));
    setFile(f);
  };

  const validate = () => {
    const e = {};
    if (!v.fullName.trim()) e.fullName = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Enter a valid email.";
    if (!file) e.resume = "Please upload your resume.";
    if (v.portfolio && !/^https?:\/\//i.test(v.portfolio)) e.portfolio = "Link must start with https://";
    if (!confirm) e.confirm = "Please confirm before submitting.";
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    // TODO: send to your backend, e.g. fetch("/api/apply", { method: "POST", body: formData })
    setDone(true);
  };

  const filled = Object.entries({
    Name: v.fullName, Email: v.email, Phone: v.phone, Resume: file?.name,
    Portfolio: v.portfolio, Experience: v.yearsExp && `${v.yearsExp} yrs`,
  }).filter(([, val]) => val);

  return (
    <div className="min-h-screen bg-[#F5FBF9] pb-24 font-['Plus_Jakarta_Sans',sans-serif] text-[#17201E]">
      <Navbar currentPage="careers" />

      <div className="mx-auto mt-5 w-full max-w-[512px] px-4">
        {done ? (
          <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl bg-white p-11 text-center shadow-[0_20px_50px_rgba(23,32,30,0.06)]">
            <CheckCircle2 size={48} className="text-[#2DBB9F]" />
            <h1 className="text-[28px] font-semibold tracking-[-0.02em]">Application sent</h1>
            <p className="text-[#66716D]">
              Thanks, {v.fullName.split(" ")[0]}. We'll review your application for {JOB.title} and be in touch.
            </p>
            <a href="/careers/roles" className="mt-2 rounded-full bg-[#2DBB9F] px-[26px] py-3.5 text-sm font-bold text-white">
              Back to open roles
            </a>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="max-w-[512px] flex flex-col gap-[11px] text-center">
              <h1 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.016em] sm:text-[42px] sm:leading-[51px]">
                {JOB.title}
              </h1>
              <p className="text-base text-[#66716D]">{JOB.meta}</p>
            </div>

            <form onSubmit={submit} noValidate className="flex flex-col gap-6">
              <Card title="Your details">
                <Field id="fullName" label="Full name" error={errors.fullName}>
                  <input id="fullName" value={v.fullName} onChange={set("fullName")} autoComplete="name" className={`${inputCls} h-[49px]`} />
                </Field>
                <Field id="email" label="Email" error={errors.email}>
                  <input id="email" type="email" value={v.email} onChange={set("email")} autoComplete="email" className={`${inputCls} h-[49px]`} />
                </Field>
                <Field id="phone" label="Phone">
                  <input id="phone" type="tel" value={v.phone} onChange={set("phone")} autoComplete="tel" className={`${inputCls} h-[49px]`} />
                </Field>
              </Card>

              <Card title="Experience">
                <Field id="resume" label="Resume / CV" error={errors.resume}>
                  <label
                    htmlFor="resume"
                    className="flex cursor-pointer flex-col items-center gap-2.5 rounded-[14px] border border-dashed border-[#17201E]/[0.22] p-5 text-center text-sm text-[#66716D] hover:border-[#2DBB9F]"
                  >
                    <span>Upload your resume (PDF, DOC — max 10MB)</span>
                    <span className="text-[13px]">
                      <span className="rounded border border-[#17201E] bg-[#EFEFEF] px-1.5 py-px text-black">Choose File</span>{" "}
                      {file ? file.name : "No file chosen"}
                    </span>
                    <input id="resume" type="file" accept=".pdf,.doc,.docx" onChange={onFile} className="sr-only" />
                  </label>
                </Field>
                <Field id="portfolio" label="Portfolio / LinkedIn" error={errors.portfolio}>
                  <input id="portfolio" type="url" placeholder="https://" value={v.portfolio} onChange={set("portfolio")} className={`${inputCls} h-[46px] text-[13px]`} />
                </Field>
                <Field id="yearsExp" label="Years of experience">
                  <input id="yearsExp" type="number" min="0" max="60" value={v.yearsExp} onChange={set("yearsExp")} className={`${inputCls} h-[49px]`} />
                </Field>
              </Card>

              <Card title="A few more questions">
                <div className="flex flex-col gap-[21px]">
                  {QUESTIONS.map((q) => (
                    <Field key={q.id} id={q.id} label={q.label}>
                      <textarea id={q.id} value={v[q.id]} onChange={set(q.id)} className={`${inputCls} min-h-[100px] resize-y py-3`} />
                    </Field>
                  ))}
                </div>
              </Card>

              <Card title="Review">
                {filled.length ? (
                  <dl className="space-y-1.5 text-[13px] leading-[21px]">
                    {filled.map(([k, val]) => (
                      <div key={k} className="flex gap-3">
                        <dt className="w-24 shrink-0 text-[#66716D]">{k}</dt>
                        <dd className="min-w-0 break-words">{val}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="text-[13px] leading-[21px] text-[#66716D]">
                    Fill in the fields above to see a summary here before submitting.
                  </p>
                )}
                <div>
                  <label className="flex items-start gap-2.5 pt-1 text-[13px] leading-[21px] text-[#66716D]">
                    <input
                      type="checkbox"
                      checked={confirm}
                      onChange={(e) => setConfirm(e.target.checked)}
                      className="mt-1 h-[13px] w-[13px] accent-[#2DBB9F]"
                    />
                    I confirm that the information provided is accurate.
                  </label>
                  {errors.confirm && <p className="mt-1 text-xs text-red-600">{errors.confirm}</p>}
                </div>
              </Card>

              <button
                type="submit"
                className="h-[50px] w-full rounded-full bg-[#2DBB9F] text-sm font-bold text-white transition hover:bg-[#22947E]"
              >
                Submit application
              </button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}