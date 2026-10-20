import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import notFoundImg from "./assets/articlenotfound-1.png";

export default function ArticleNotFound() {
  return (
    <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans']">
      <Navbar />

      <main className="border-b border-[#17201E]/[0.06]">
        <section className="mx-auto flex max-w-[1200px] flex-col-reverse items-center justify-between gap-10 px-6 py-12 md:flex-row md:px-0 md:py-[69px]">
          <div className="flex w-full max-w-[404px] flex-col gap-[13px]">
            <h1 className="text-[26.9px] font-semibold leading-[1.3] tracking-[-0.56px] text-[#17201E]">
              We couldn't find that article.
            </h1>
            <p className="max-w-[411px] text-[16px] font-medium leading-[26px] text-[#66716D]">
              The page may have moved or the article may no longer be available.
            </p>

            <div className="flex flex-wrap gap-[10px] pt-[13px]">
              <a
                href="/help"
                className="inline-flex items-center justify-center rounded-full bg-[#2DBB9F] px-[22px] py-[11px] text-[14px] font-semibold leading-[22px] text-white transition hover:brightness-95"
              >
                Back to Help Centre
              </a>
              <a
                href="/articles"
                className="inline-flex items-center justify-center rounded-full bg-[#EAF8F4] px-[22px] py-[11px] text-[14px] font-semibold leading-[22px] text-[#22947E] transition hover:bg-[#dff3ed]"
              >
                Browse all articles
              </a>
            </div>
          </div>

          <img loading="lazy" decoding="async"
            src={notFoundImg}
            alt="A puppy and kitten searching for a missing article with a magnifying glass"
            className="h-auto w-full max-w-[628px] object-contain"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}