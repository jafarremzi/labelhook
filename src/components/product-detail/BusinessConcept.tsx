import type { Product } from "../../types/product";
import { Users, Briefcase, Lightbulb, CheckCircle2 } from "lucide-react";

interface BusinessConceptProps {
  product: Product;
}

export default function BusinessConcept({ product }: BusinessConceptProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Business Idea */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Lightbulb size={24} className="text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  ایده کسب‌وکار
                </h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed text-base">
                  {product.description}
                </p>
                <p className="text-gray-700 leading-relaxed text-base mt-4">
                  {product.pitch}
                </p>
              </div>
            </div>

            {/* Target Audience */}
            {product.targetAudience && product.targetAudience.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <Users size={24} className="text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    مخاطبان هدف
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.targetAudience.map((audience, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200"
                    >
                      <CheckCircle2 size={18} className="text-indigo-500 shrink-0" />
                      <span className="text-sm text-gray-700">{audience}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Business Model */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 h-fit">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Briefcase size={20} className="text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                مدل درآمدی پیشنهادی
              </h3>
            </div>
            {product.businessModel && product.businessModel.length > 0 ? (
              <ul className="space-y-3">
                {product.businessModel.map((model, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: product.accent }}
                    />
                    <span className="leading-relaxed">{model}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">
                مدل درآمدی بسته به استراتژی اجرایی شما متغیر است.
              </p>
            )}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 leading-relaxed">
                این مدل‌ها پیشنهادی هستند و باید با تحلیل دقیق‌تر و آزمایش
                تنظیم شوند.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
