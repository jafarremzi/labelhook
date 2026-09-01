import { Button } from "../components/ui/Button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="inline-block mb-6">
          <div className="text-5xl font-bold bg-gradient-to-l from-purple-600 to-indigo-500 bg-clip-text text-transparent">
            404
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          صفحه یافت نشد
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          صفحه‌ای که دنبال آن هستید وجود ندارد یا منتقل شده است. شاید بخواهید
          فرصت‌های کسب‌وکار را بررسی کنید.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/" size="lg">
            <Home size={18} />
            <span>صفحه اصلی</span>
          </Button>
          <Button to="/" variant="outline" size="lg">
            <Search size={18} />
            <span>مشاهده برندها</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
