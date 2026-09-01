import type { Product } from "../../types/product";

interface LaunchRoadmapProps {
  product: Product;
}

export default function LaunchRoadmap({ product }: LaunchRoadmapProps) {
  if (!product.roadmap || product.roadmap.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            نقشه راه راه‌اندازی
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            شش گام اصلی از ایده تا کسب‌وکار فعال
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute right-[23px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 via-purple-200 to-transparent hidden md:block" />

          <div className="space-y-8">
            {product.roadmap.map((step, i) => (
              <div key={i} className="relative flex gap-6 group">
                {/* Step number */}
                <div
                  className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-md"
                  style={{ backgroundColor: product.accent }}
                >
                  {String(step.step).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 group-hover:border-purple-300 group-hover:shadow-md transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 sm:mb-0">
                        {step.title}
                      </h3>
                      {step.duration && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-50 text-purple-700 text-sm font-medium rounded-full w-fit">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {step.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 p-6 bg-white rounded-2xl border border-gray-200">
          <p className="text-sm text-gray-600 leading-relaxed">
            این نقشه راه یک راهنمای کلی است. زمان‌بندی و اولویت‌ها بسته به منابع،
            تیم و شرایط بازار می‌تواند متفاوت باشد.
          </p>
        </div>
      </div>
    </section>
  );
}
