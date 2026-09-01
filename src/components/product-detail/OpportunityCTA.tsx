import type { Product } from "../../types/product";
import { ArrowLeft, Rocket } from "lucide-react";

interface OpportunityCTAProps {
  product: Product;
}

export default function OpportunityCTA({ product }: OpportunityCTAProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-white"
          style={{
            background: `linear-gradient(135deg, ${product.accent} 0%, ${product.accent}dd 100%)`,
          }}
        >
          {/* Decorative */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Rocket size={32} className="text-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              فرصت ساختنش هنوز وجود دارد
            </h2>

            <p className="text-white/90 text-lg mb-3 max-w-2xl mx-auto leading-relaxed">
              بعضی برندها فقط یک نام نیستند؛ شروع یک داستان‌اند.
            </p>

            <p className="text-white/80 text-base mb-8 max-w-xl mx-auto">
              سؤال این نیست که می‌شود ساخت یا نه؛ سؤال این است که چه کسی زودتر
              شروع می‌کند.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://t.me/labelhook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-white/90 shadow-lg transition-all w-full sm:w-auto"
              >
                <span>این برند را می‌خواهم</span>
                <ArrowLeft size={18} />
              </a>
              <a
                href="https://t.me/labelhook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                دریافت مشاوره
              </a>
            </div>

            <p className="text-white/70 text-sm mt-6">
              {product.domain} هم‌اکنون موجود است
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
