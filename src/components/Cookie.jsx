import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'mungo_cookie_consent';

const CATEGORIES = [
  {
    id: 'preferences',
    label: 'Preferences',
    desc: 'These cookies help remember preferences and choices to make your experience more convenient.',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    desc: 'These cookies help us understand how visitors use Mungo so we can improve the website and experience.',
  },
  {
    id: 'marketing',
    label: 'Marketing',
    desc: 'These cookies may be used to support relevant marketing and advertising activity.',
  },
];

const OFF = { preferences: false, analytics: false, marketing: false };
const ALL = { preferences: true, analytics: true, marketing: true };

function readStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function persist(choices) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(choices));
  } catch {
    /* storage unavailable */
  }
  window.dispatchEvent(new CustomEvent('mungo:consent', { detail: choices }));
}

function Switch({ checked, onChange, label }) {
  return (
    <div className="flex items-center gap-3 py-2">
      <span className="w-6 text-right text-[13.8px] font-semibold leading-[22px] text-[#53627A]">
        {checked ? 'On' : 'Off'}
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={`flex h-8 w-[52px] shrink-0 items-center rounded-full border p-1 transition-colors ${
          checked ? 'justify-end border-[#2DBB9F] bg-[#2DBB9F]' : 'justify-start border-[#53627A] bg-white'
        }`}
      >
        <span className={`h-5 w-5 rounded-full ${checked ? 'bg-white' : 'bg-[#53627A]'}`} />
      </button>
    </div>
  );
}

function LearnMore({ label }) {
  return (
    <a
      href="/privacy#cookies"
      aria-label={`Learn more about ${label} cookies`}
      className="inline-flex min-h-[44px] items-center gap-1 text-[14.5px] font-semibold text-[#0D121C] underline"
    >
      Learn more <span aria-hidden="true" className="no-underline">→</span>
    </a>
  );
}

const btnBase =
  'flex min-h-[48px] min-w-[180px] items-center justify-center rounded-[14px] border px-5 py-[15px] text-[13.3px] font-semibold leading-[18px] text-[#0D121C] transition-opacity hover:opacity-85';
const btnPrimary = `${btnBase} border-[#2DBB9F] bg-[#2DBB9F]`;
const btnOutline = `${btnBase} border-[#53627A] bg-white`;

export default function CookieConsent() {
  const [view, setView] = useState('closed'); // 'closed' | 'banner' | 'settings'
  const [choices, setChoices] = useState(OFF);

  useEffect(() => {
    const stored = readStored();
    if (stored) {
      setChoices({ ...OFF, ...stored });
    } else {
      setView('banner');
    }
    // lets the footer "Cookie settings" link reopen the panel:
    // window.dispatchEvent(new Event('mungo:open-cookie-settings'))
    const open = () => setView('settings');
    window.addEventListener('mungo:open-cookie-settings', open);
    return () => window.removeEventListener('mungo:open-cookie-settings', open);
  }, []);

  const commit = (next) => {
    setChoices(next);
    persist(next);
    setView('closed');
  };

  if (view === 'closed') return null;

  return (
    <>
      {view === 'banner' && (
        <div
          role="dialog"
          aria-labelledby="cc-title"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto flex max-w-[614px] flex-col gap-2 rounded-[20px] border border-[#E7EDF2] bg-white p-6 font-['Noto_Sans',sans-serif] shadow-[0_8px_24px_rgba(13,18,28,0.08)] sm:left-auto sm:right-6 sm:mx-0 sm:w-[614px]"
        >
          <h2 id="cc-title" className="pt-1 text-[22.5px] font-semibold leading-[29px] tracking-[-0.48px] text-[#0D121C]">
            Your privacy matters.
          </h2>
          <p className="text-sm font-medium leading-6 text-[#53627A]">
            We use cookies and similar technologies to help Mungo work, understand how the website is used, and
            improve your experience. You can choose which optional cookies to allow.
          </p>
          <div className="flex gap-5 pt-1">
            <a href="/privacy#cookies" className="flex min-h-[44px] items-center text-[15px] font-semibold text-[#0D121C] underline">
              Cookie policy
            </a>
            <button
              type="button"
              onClick={() => setView('settings')}
              className="flex min-h-[44px] items-center text-[15px] font-semibold text-[#0D121C] underline"
            >
              Cookie settings
            </button>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <button type="button" className={btnPrimary} onClick={() => commit(ALL)}>
              Accept all
            </button>
            <button type="button" className={btnOutline} onClick={() => commit(OFF)}>
              Reject non-essential
            </button>
            <button type="button" className={btnOutline} onClick={() => setView('settings')}>
              Manage preferences
            </button>
          </div>
        </div>
      )}

      {view === 'settings' && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-[#0D121C]/40 p-4 font-['Noto_Sans',sans-serif]"
          onClick={(e) => e.target === e.currentTarget && setView(readStored() ? 'closed' : 'banner')}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cc-settings-title"
            className="flex max-h-[92vh] w-full max-w-[860px] flex-col gap-6 overflow-y-auto rounded-3xl bg-white p-6"
          >
            <div className="flex flex-col gap-1">
              <h2 id="cc-settings-title" className="text-[21.8px] font-bold leading-[35px] tracking-[-0.22px] text-[#0D121C]">
                Your cookie choices
              </h2>
              <p className="text-base font-medium leading-[26px] text-[#53627A]">
                Switch optional categories on or off. Nothing optional runs unless you allow it.
              </p>
            </div>

            <div className="flex flex-col">
              {/* Necessary */}
              <section className="flex flex-col justify-between gap-4 border-t border-[#E7EDF2] py-7 sm:flex-row sm:gap-6">
                <div className="flex max-w-[536px] flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold leading-[26px] tracking-[-0.2px] text-[#0D121C]">Necessary</h3>
                    <span className="rounded-full bg-[#E8F7F3] px-[10px] py-[2px] text-[13px] font-semibold leading-[21px] text-[#0F6B59]">
                      Always Active
                    </span>
                  </div>
                  <p className="text-base font-medium leading-[26px] text-[#53627A]">
                    These cookies are required for core website functionality, security and essential features. They
                    cannot be disabled through this interface.
                  </p>
                </div>
                <div className="flex shrink-0 flex-row items-start gap-4 sm:w-[150px] sm:flex-col sm:items-end sm:gap-1">
                  <span className="flex h-12 items-center gap-2 text-base font-semibold text-[#0F6B59]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="5" y="11" width="14" height="10" rx="2" />
                      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                    </svg>
                    Always active
                  </span>
                  <LearnMore label="Necessary" />
                </div>
              </section>

              {CATEGORIES.map((c) => (
                <section key={c.id} className="flex flex-col justify-between gap-4 border-t border-[#E7EDF2] py-7 sm:flex-row sm:gap-6">
                  <div className="flex max-w-[536px] flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold leading-[26px] tracking-[-0.2px] text-[#0D121C]">{c.label}</h3>
                      <span className="rounded-full border border-[#E7EDF2] bg-[#F8FAFC] px-[10px] py-[2px] text-[12.9px] font-semibold leading-[21px] text-[#53627A]">
                        Optional
                      </span>
                    </div>
                    <p className="text-base font-medium leading-[26px] text-[#53627A]">{c.desc}</p>
                  </div>
                  <div className="flex shrink-0 flex-row items-center gap-4 sm:w-[150px] sm:flex-col sm:items-end sm:gap-1">
                    <Switch
                      label={`${c.label} cookies`}
                      checked={choices[c.id]}
                      onChange={(v) => setChoices((prev) => ({ ...prev, [c.id]: v }))}
                    />
                    <LearnMore label={c.label} />
                  </div>
                </section>
              ))}
            </div>

            <div className="flex flex-col gap-3 border-t border-[#E7EDF2] pt-4">
              <div className="flex flex-wrap gap-3">
                <button type="button" className={`${btnOutline} flex-1`} onClick={() => commit(OFF)}>
                  Reject non-essential
                </button>
                <button type="button" className={`${btnPrimary} flex-1`} onClick={() => commit(choices)}>
                  Save preferences
                </button>
                <button type="button" className={`${btnOutline} flex-1`} onClick={() => commit(ALL)}>
                  Accept all
                </button>
              </div>
              <p className="text-sm font-medium leading-[22px] text-[#53627A]">
                Your choices will be saved and applied to this website.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}