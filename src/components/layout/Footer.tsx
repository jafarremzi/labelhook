import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-24">
      {/* Telegram CTA Section */}
      <div className="bg-gradient-to-l from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            برای خرید یا رزرو برند، با ما در تماس باشید
          </h3>
          <p className="text-purple-100 text-base mb-8 max-w-xl mx-auto">
            سوالی دارید؟ می‌خواهید مشاوره رایگان بگیرید؟
            از طریق تلگرام پاسخگوی شما هستیم.
          </p>
          <a
            href="https://t.me/labelhook"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-700 font-bold rounded-xl hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
            <span>ارتباط در تلگرام</span>
            <ArrowLeft size={18} />
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <div className="text-2xl font-bold bg-gradient-to-l from-purple-400 to-purple-300 bg-clip-text text-transparent">
                Labelhook
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-5">
              پلتفرم ارائه و فروش برندهای آماده ساخت و دامنه‌های پرمیوم.
              ایده‌هایی که می‌توانند به کسب‌وکار تبدیل شوند.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/labelhook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-pink-600 rounded-lg text-sm text-gray-300 hover:text-white transition-all"
                aria-label="اینستاگرام Labelhook"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
                <span>@labelhook</span>
              </a>
              <a
                href="https://t.me/labelhook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-blue-600 rounded-lg text-sm text-gray-300 hover:text-white transition-all"
                aria-label="تلگرام Labelhook"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
                <span>@labelhook</span>
              </a>
            </div>
          </div>

          {/* Links - Products */}
          <div>
            <h3 className="font-semibold text-white mb-4">محصولات</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  همه برندها
                </Link>
              </li>
              <li>
                <Link to="/brand/amlaker" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  املاک
                </Link>
              </li>
              <li>
                <Link to="/brand/horarai" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  هنر و مزایده
                </Link>
              </li>
              <li>
                <Link to="/brand/arangai" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  هوش مصنوعی
                </Link>
              </li>
            </ul>
          </div>

          {/* Links - Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">ارتباط با ما</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://t.me/labelhook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  تلگرام
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/labelhook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-pink-400 transition-colors"
                >
                  اینستاگرام
                </a>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  شرایط و قوانین
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  حریم خصوصی
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Labelhook. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
