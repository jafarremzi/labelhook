import type { Product } from "../../types/product";
import { Sparkles, TrendingUp, Zap, Award } from "lucide-react";

interface WhyThisBrandProps {
  product: Product;
}

export default function WhyThisBrand({ product }: WhyThisBrandProps) {
  if (!product.whyThisBrand || product.whyThisBrand.length === 0) return null;

  const icons = [Sparkles, TrendingUp, Zap, Award];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            چرا این برند؟
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            دلایلی که {product.domain} یک فرصت ارزشمند است
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {product.whyThisBrand.map((reason, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-200 hover:border-purple-300 transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${product.accent}20` }}
                >
                  <Icon size={20} style={{ color: product.accent }} />
                </div>
                <p className="text-gray-700 leading-relaxed text-sm pt-1.5">
                  {reason}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
