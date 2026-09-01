import { Button, SectionTitle } from "../ui/Button";
import { Target, Compass, Rocket, CheckCircle, ArrowLeft } from "lucide-react";

const steps = [
  {
    icon: Target,
    step: "۰۱",
    title: "انتخاب برند",
    description: "از میان ۱۱ برند آماده، کسب‌وکاری که با شما هم‌خوانی دارد را پیدا کنید.",
  },
  {
    icon: Compass,
    step: "۰۲",
    title: "بررسی تحلیلی",
    description: "امتیاز فرصت، تحلیل بازار و نقشه راه راه‌اندازی را بررسی کنید.",
  },
  {
    icon: Rocket,
    step: "۰۳",
    title: "آغاز کسب‌وکار",
    description: "با داشتن دامنه، برند و ایده کامل، اولین قدم را بردارید.",
  },
];

const reasons = [
  {
    title: "تحلیل عمیق بازار",
    description: "هر برند با تحلیل تخصصی بازار و رقبا آماده شده است.",
  },
  {
    title: "نقشه راه عملی",
    description: "از روز اول تا ۹۰ روز، هر قدم برای راه‌اندازی مشخص است.",
  },
  {
    title: "مدل درآمدی",
    description: "پیشنهاد مدل درآمدی مناسب بر اساس ویژگی‌های هر کسب‌وکار.",
  },
  {
    title: "دامنه آماده",
    description: "نام تجاری به‌یادماندنی با دامنه دات‌کام بین‌المللی.",
  },
  {
    title: "عدم نیاز به ایده‌پردازی",
    description: "ایده کسب‌وکار، مخاطب هدف و استراتژی مشخص است.",
  },
  {
    title: "سرعت بالا",
    description: "برخلاف ساخت از صفر، شما با یک مزیت شروع می‌کنید.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="چطور کار می‌کند؟"
          title="از انتخاب تا راه‌اندازی"
          description="سه ساده قدم تا شروع کسب‌وکار"
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative text-center group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-0 w-full h-0.5 bg-gradient-to-l from-purple-200 to-transparent" />
              )}
              <div className="relative z-10 w-28 h-28 mx-auto mb-6 bg-white rounded-2xl shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <step.icon size={32} className="text-purple-600" />
              </div>
              <div className="absolute -top-2 -left-2 px-2 py-0.5 bg-purple-600 text-white text-xs font-bold rounded-md hidden md:block">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyLabelhook() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="چرا Labelhook؟"
          title="فرصت‌های آماده، نه فقط دامنه"
          description="هر برند در Labelhook فقط یک دامنه نیست؛ یک کسب‌وکار کامل آماده ساخت است."
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="p-6 bg-purple-50/50 rounded-2xl border border-purple-100/50 hover:border-purple-200 transition-colors"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle size={20} className="text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden">
          {/* Decorative */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              کسب‌وکار بعدی شما
              <br />
              همین‌جاست
            </h2>
            <p className="text-purple-100 text-lg mb-8 max-w-xl mx-auto">
              ایده‌های خوب کم نیستند؛ نام‌های خوب چرا. برند آماده خود را پیدا کنید و امروز شروع کنید.
            </p>
            <Button
              variant="ghost"
              size="lg"
              className="bg-white text-purple-700 hover:bg-purple-50 !shadow-lg"
              to="/"
            >
              <span>مشاهده همه فرصت‌ها</span>
              <ArrowLeft size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
