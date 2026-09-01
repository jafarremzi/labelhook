import type { Product } from "../../types/product";

interface ScoreBreakdownProps {
  product: Product;
}

export default function ScoreBreakdown({ product }: ScoreBreakdownProps) {
  if (!product.scoreBreakdown) return null;

  const scores = [
    { label: "پتانسیل بازار", value: product.scoreBreakdown.market },
    { label: "قدرت برند", value: product.scoreBreakdown.brand },
    { label: "قابلیت توسعه", value: product.scoreBreakdown.scalability },
    { label: "تقاضای احتمالی", value: product.scoreBreakdown.demand },
    { label: "تمایز", value: product.scoreBreakdown.differentiation },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            تحلیل امتیاز فرصت
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            این امتیاز بر اساس عوامل مختلف بازار، برند، مقیاس‌پذیری و تمایز
            محاسبه شده است
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scores.map((score, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-purple-300 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-gray-900">{score.label}</span>
                <span
                  className="text-2xl font-bold"
                  style={{ color: product.accent }}
                >
                  {score.value}٪
                </span>
              </div>
              <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${score.value}%`,
                    backgroundColor: product.accent,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 bg-amber-50 border border-amber-200 rounded-2xl">
          <p className="text-sm text-amber-900 leading-relaxed">
            <strong>توجه:</strong> این امتیاز یک تخمین تحلیلی است و هیچ تضمینی
            برای موفقیت کسب‌وکار نیست. موفقیت نهایی به اجرا، تیم، بازار و عوامل
            دیگر بستگی دارد.
          </p>
        </div>
      </div>
    </section>
  );
}
