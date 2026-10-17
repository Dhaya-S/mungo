import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#17201E]">
      <Navbar />
      <main className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#22947E]">404</p>
        <h1 className="mt-3 text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 max-w-md text-base leading-7 text-[#66716D]">
          The page you are looking for may have moved or is no longer available.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#2DBB9F] px-6 py-3.5 text-base font-semibold text-[#17201E] transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2DBB9F]"
        >
          Back to home
        </a>
      </main>
      <Footer />
    </div>
  )
}