import type { Product } from "../../types/product";
import { Button, Badge } from "../ui/Button";
import { ArrowLeft, Globe, Heart } from "lucide-react";
import { useState } from "react";

interface ProductHeroProps {
  product: Product;
}

export default function ProductHero({ product }: ProductHeroProps) {
  const [favorite, setFavorite] = useState(false);

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Cover */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl aspect-[4/3]">
              <img
                src={product.cover}
                alt={`کاور ${product.domain}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <Badge variant="custom" color={product.accent} className="bg-white/90 backdrop-blur-sm">
                  {product.category}
                </Badge>
              </div>
            </div>

            {/* Floating status */}
            <div className="absolute -bottom-4 right-6 flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-emerald-600">
                هم‌اکنون موجود
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full">
                  فرصت آماده ساخت
                </span>
                <span className="text-sm text-gray-500">
                  برند شماره {String(product.id).padStart(2, "0")} از ۱۱
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
                {product.domain}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                {product.title}
              </p>

              <p className="text-gray-700 leading-relaxed text-base">
                {product.pitch}
              </p>
            </div>

            {/* Opportunity score */}
            <div className="flex items-center gap-4 p-5 bg-gradient-to-l from-purple-50 to-indigo-50 rounded-2xl border border-purple-100">
              <div className="w-20 h-20 rounded-full bg-white shadow-inner flex items-center justify-center">
                <span
                  className="text-2xl font-bold"
                  style={{ color: product.accent }}
                >
                  {product.opportunityScore}٪
                </span>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">
                  امتیاز فرصت Labelhook
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  تخمینی از پتانسیل بازار، قدرت برند و قابلیت توسعه
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-200">
              <div>
                <div className="text-sm text-gray-500 mb-1">قیمت برند</div>
                <div className="text-2xl font-bold text-gray-900">
                  {product.price
                    ? Number(product.price).toLocaleString("fa-IR") + " تومان"
                    : "دریافت قیمت"}
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => setFavorite(!favorite)}
                className="!p-3"
                aria-label="افزودن به علاقه‌مندی‌ها"
              >
                <Heart
                  size={20}
                  className={
                    favorite
                      ? "fill-red-500 text-red-500"
                      : "text-gray-400 group-hover:text-red-500"
                  }
                />
              </Button>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://t.me/labelhook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-between px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors text-center"
              >
                <span>این برند را می‌خواهم</span>
                <ArrowLeft size={18} />
              </a>
              <a
                href="https://t.me/labelhook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-purple-600 hover:text-purple-600 transition-colors text-center"
              >
                درخواست اطلاعات بیشتر
              </a>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed flex items-start gap-2">
              <Globe size={16} className="mt-0.5 shrink-0 text-gray-400" />
              <span>
                دامنه {product.domain} به همراه نام برند، ایده کسب‌وکار و تحلیل
                فرصت به شما منتقل می‌شود. تمام مراحل با قرارداد رسمی انجام
                می‌شود.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
