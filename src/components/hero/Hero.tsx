import { Button } from "../ui/Button";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-purple-50/50 via-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-purple-200 rounded-full shadow-sm mb-8 animate-fade-in-up">
              <Sparkles size={16} className="text-purple-600" />
              <span className="text-sm text-purple-700 font-medium">
                ایده‌هایی که می‌توانند به کسب‌وکار تبدیل شوند
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up animate-delay-100">
              کسب‌وکار بعدی شما
              <span className="block bg-gradient-to-l from-purple-600 to-indigo-500 bg-clip-text text-transparent mt-2">
                از یک نام شروع می‌شود
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 animate-fade-in-up animate-delay-200 max-w-2xl mx-auto lg:mx-0">
              Labelhook فقط دامنه نمی‌فروشد؛ فرصت‌های کسب‌وکار آماده ارائه می‌دهد.
              هر نام، یک ایده کامل، یک مدل درآمدی و یک نقشه راه است.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up animate-delay-300">
              <Button to="/" size="lg" className="w-full sm:w-auto">
                <span>مشاهده فرصت‌های کسب‌وکار</span>
                <ArrowLeft size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
              >
                درباره Labelhook
              </Button>
            </div>
          </div>

          {/* Hero Character Image */}
          <div className="relative animate-fade-in-up animate-delay-200">
            <img
              src="/herocharacter.webp"
              alt="Labelhook Character"
              className="w-full h-auto max-w-lg mx-auto"
              loading="eager"
            />

            {/* Floating Brand Cards */}
            <div className="absolute top-4 left-4 sm:top-8 sm:left-0 animate-float">
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl shadow-lg border border-gray-100">
                <span className="w-2.5 h-2.5 rounded-full bg-[#60A5FA] shrink-0" />
                <span className="text-xs font-bold text-gray-800 whitespace-nowrap">amlaker.com</span>
              </div>
            </div>

            <div className="absolute top-12 right-0 sm:top-4 sm:right-0 animate-float-alt">
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl shadow-lg border border-gray-100">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E879F9] shrink-0" />
                <span className="text-xs font-bold text-gray-800 whitespace-nowrap">arangai.com</span>
              </div>
            </div>

            <div className="absolute bottom-16 left-0 sm:bottom-8 sm:left-2 animate-float-slow">
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl shadow-lg border border-gray-100">
                <span className="w-2.5 h-2.5 rounded-full bg-[#34D399] shrink-0" />
                <span className="text-xs font-bold text-gray-800 whitespace-nowrap">shuterai.com</span>
              </div>
            </div>

            <div className="absolute bottom-10 right-4 sm:bottom-4 sm:right-4 animate-float-fast">
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl shadow-lg border border-gray-100">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F43F5E] shrink-0" />
                <span className="text-xs font-bold text-gray-800 whitespace-nowrap">tatokar.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Counter */}
        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-3 gap-8 sm:gap-16 text-center">
            <div className="animate-fade-in-up animate-delay-100">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">۱۱</div>
              <div className="mt-1 text-sm text-gray-500">برند آماده</div>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">۱۰۰٪</div>
              <div className="mt-1 text-sm text-gray-500">ایده و استراتژی</div>
            </div>
            <div className="animate-fade-in-up animate-delay-300">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">۶</div>
              <div className="mt-1 text-sm text-gray-500">گام تا راه‌اندازی</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
