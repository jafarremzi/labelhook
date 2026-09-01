import type { Product } from "../../types/product";
import { ArrowLeft } from "lucide-react";

interface StickyMobileCTAProps {
  product: Product;
}

export default function StickyMobileCTA({ product }: StickyMobileCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 md:hidden">
      <div className="flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <div className="font-bold text-gray-900 text-sm truncate">
            {product.domain}
          </div>
          <div className="text-xs text-gray-500">
            {product.price
              ? Number(product.price).toLocaleString("fa-IR") + " تومان"
              : "دریافت قیمت"}
          </div>
        </div>
        <a
          href="https://t.me/labelhook"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-1.5 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
        >
          <span>این برند را می‌خواهم</span>
          <ArrowLeft size={16} />
        </a>
      </div>
    </div>
  );
}
