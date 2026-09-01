import type { Product } from "../../types/product";
import { Calendar, Target, TrendingUp } from "lucide-react";

interface LaunchPlanProps {
  product: Product;
}

export default function LaunchPlan({ product }: LaunchPlanProps) {
  if (!product.launchPlan) return null;

  const plans = [
    {
      title: "۳۰ روز اول",
      subtitle: "اعتبارسنجی و پایه‌گذاری",
      icon: Calendar,
      color: "#8B5CF6",
      items: product.launchPlan.day30 || [],
    },
    {
      title: "۶۰ روز",
      subtitle: "راه‌اندازی و جذب اولیه",
      icon: Target,
      color: "#3B82F6",
      items: product.launchPlan.day60 || [],
    },
    {
      title: "۹۰ روز",
      subtitle: "رشد و بهینه‌سازی",
      icon: TrendingUp,
      color: "#10B981",
      items: product.launchPlan.day90 || [],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            برنامه ۳۰ / ۶۰ / ۹۰ روزه
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            سه ماه اول مسیر شما از صفر تا راه‌اندازی و رشد اولیه
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl border border-gray-200 p-6 hover:border-purple-300 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${plan.color}20` }}
                >
                  <plan.icon size={24} style={{ color: plan.color }} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{plan.title}</div>
                  <div className="text-sm text-gray-500">{plan.subtitle}</div>
                </div>
              </div>

              {plan.items.length > 0 ? (
                <ul className="space-y-2.5">
                  {plan.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ backgroundColor: plan.color }}
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">برنامه در حال تکمیل است</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-gradient-to-l from-purple-50 to-indigo-50 rounded-2xl border border-purple-200">
          <h3 className="font-bold text-gray-900 mb-2">
            این برنامه قابل تنظیم است
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            این برنامه یک الگوی پیشنهادی است. شما می‌توانید بر اساس منابع، تیم و
            شرایط خاص خود آن را تغییر دهید. مهم‌ترین نکته شروع کردن و یادگیری
            در مسیر است.
          </p>
        </div>
      </div>
    </section>
  );
}
