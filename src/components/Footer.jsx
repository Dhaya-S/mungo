import React from 'react';

const COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'About Mungo', href: '/advertise-with-mungo' },
      { label: 'About Zuntra', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Investor Relations', href: '/investor-relations' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'For Providers',
    links: [
      { label: 'Partner With Mungo', href: '/partners' },
      { label: 'Provider Login', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Centre', href: '/help' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Safety & Trust', href: '/#trust' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="w-full bg-white px-6 pb-10 pt-12 lg:px-20 lg:pt-[72px]"
      style={{ fontFamily: '"Segoe UI", system-ui, -apple-system, Roboto, sans-serif' }}
    >
      <div className="mx-auto w-full max-w-[1280px] lg:px-16">
        {/* Top: brand + link columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_repeat(3,minmax(0,234.55px))]">
          {/* Brand */}
          <div className="flex flex-col items-start gap-[13.5px] pt-[13.5px]">
            <p className="text-[14.5px] font-black leading-[22px] tracking-[-0.435px] text-[#66716D]">
              MUNGO<span className="text-[#2DBB9F]">.</span>
            </p>
            <p className="text-[14.5px] leading-[22px] text-[#66716D]">Care made pawsible.</p>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h5 className="text-[12.5px] font-bold uppercase leading-[19px] tracking-[0.5px] text-[#66716D]">
                {col.title}
              </h5>
              <ul className="mt-[18px] list-none p-0">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="block py-[7px] text-[14.5px] leading-[22px] text-[#17201E] transition-colors hover:text-[#22947E]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-2 border-t border-[rgba(23,32,30,0.09)] pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-14 lg:pt-[41px]">
          <p className="text-[13px] leading-5 text-[#66716D]">© 2026 Mungo. All rights reserved.</p>
          <p className="text-[13px] leading-5 text-[#66716D]">A Zuntra company.</p>
        </div>
      </div>
    </footer>
  );
}