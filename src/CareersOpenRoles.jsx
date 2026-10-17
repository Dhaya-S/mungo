import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ROLES = [
  { title: "Senior Product Designer", team: "Design", location: "Bengaluru", type: "Full-time", level: "Senior" },
  { title: "Backend Engineer", team: "Product & Engineering", location: "Bengaluru", type: "Full-time", level: "Mid" },
  { title: "Operations Associate", team: "Operations", location: "Bengaluru", type: "Full-time", level: "Entry" },
  { title: "Growth Marketing Manager", team: "Marketing & Growth", location: "Remote", type: "Full-time", level: "Mid" },
  { title: "Partnerships Lead", team: "Business & Partnerships", location: "Bengaluru", type: "Contract", level: "Senior" },
];

const uniq = (key) => [...new Set(ROLES.map((r) => r[key]))];

const FILTERS = [
  { id: "team", label: "Team", all: "All teams", options: uniq("team") },
  { id: "location", label: "Location", all: "All locations", options: uniq("location") },
  { id: "type", label: "Work type", all: "All types", options: uniq("type") },
  { id: "level", label: "Experience", all: "Any level", options: ["Entry", "Mid", "Senior"] },
];

export default function OpenRoles() {
  const [query, setQuery] = useState("");
  const [sel, setSel] = useState({ team: "", location: "", type: "", level: "" });

  const results = useMemo(
    () =>
      ROLES.filter(
        (r) =>
          r.title.toLowerCase().includes(query.trim().toLowerCase()) &&
          Object.entries(sel).every(([k, v]) => !v || r[k] === v)
      ),
    [query, sel]
  );

  const fieldCls =
    "h-11 w-full rounded-[10px] border border-[#17201E]/[0.14] bg-white px-4 text-sm text-[#17201E] outline-none focus:border-[#2DBB9F]";
  const labelCls = "mb-1.5 block text-xs tracking-[0.03em] text-[#66716D]";

  return (
    <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#17201E]">
      <Navbar currentPage="careers" />

      <main className="px-6 md:px-20">
        <div className="mx-auto max-w-[1280px]">
          <nav className="pt-5 text-[13px] text-[#66716D]">
            Careers / <span className="text-[#17201E]">Open Roles</span>
          </nav>

          <div className="mx-auto max-w-[1152px] pb-20 pt-24">
            {/* Hero */}
            <section className="flex flex-col items-center gap-4 pb-9 text-center">
              <h1 className="text-[42px] font-semibold leading-tight tracking-[-0.025em]">
                Find your next role at Mungo.
              </h1>
              <p className="max-w-[520px] text-base font-medium text-[#66716D]">
                Search open positions and find where you can make your mark.
              </p>
            </section>

            {/* Filters */}
            <section className="grid gap-4 rounded-3xl bg-[#F5FBF9] p-7 md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
              <div>
                <label htmlFor="fSearch" className={labelCls}>Search</label>
                <input
                  id="fSearch"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search roles..."
                  className={`${fieldCls} placeholder:text-[#757575]`}
                />
              </div>
              {FILTERS.map((f) => (
                <div key={f.id}>
                  <label htmlFor={`f-${f.id}`} className={labelCls}>{f.label}</label>
                  <select
                    id={`f-${f.id}`}
                    value={sel[f.id]}
                    onChange={(e) => setSel({ ...sel, [f.id]: e.target.value })}
                    className={fieldCls}
                  >
                    <option value="">{f.all}</option>
                    {f.options.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              ))}
            </section>

            {/* Results */}
            <p className="pb-4 pt-11 text-base font-medium text-[#66716D]">
              {results.length} open {results.length === 1 ? "role" : "roles"}
            </p>

            <div>
              {results.map((r) => (
                <a
                  key={r.title}
                  href="/careers/details"
                  className="group grid grid-cols-[1fr_auto] items-center gap-y-1 rounded-xl border-t border-[#17201E]/[0.09] px-[18px] py-8 last:border-b hover:bg-[#F5FBF9] md:grid-cols-[2fr_1fr_1fr_1fr_auto] md:gap-4"
                >
                  <span className="text-base font-bold">{r.title}</span>
                  <ArrowRight size={18} className="text-[#22947E] transition group-hover:translate-x-1 md:order-last" />
                  <span className="text-sm font-medium text-[#66716D]">{r.team}</span>
                  <span className="text-sm font-medium text-[#66716D]">{r.location}</span>
                  <span className="text-sm font-medium text-[#66716D]">{r.type}</span>
                </a>
              ))}
              {results.length === 0 && (
                <p className="border-t border-[#17201E]/[0.09] py-12 text-center text-[#66716D]">
                  No roles match your filters.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
