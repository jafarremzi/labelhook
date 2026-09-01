import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import { Badge } from "../ui/Button";
import { ArrowLeft, Circle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={cardRef}
      to={`/brand/${product.slug}`}
      className={`group block bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        transitionDelay: `${Math.min(index * 80, 400)}ms`,
      }}
    >
      {/* Cover Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
        <img
          src={product.cover}
          alt={`کاور ${product.domain}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Top badges */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <Badge variant="custom" color={product.accent} className="backdrop-blur-sm bg-white/90">
            {product.category}
          </Badge>
          <div className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-600">
            {String(index + 1).padStart(2, "0")} / 11
          </div>
        </div>

        {/* Arrow icon on hover */}
        <div className="absolute bottom-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <ArrowLeft size={18} className="text-gray-900" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Domain */}
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
            {product.domain}
          </h3>
        </div>

        {/* Title */}
        <p className="text-base text-gray-600 mb-3 line-clamp-1">
          {product.pitch}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1.5">
            <Circle size={8} className="fill-emerald-500 text-emerald-500" />
            <span className="text-sm font-medium text-emerald-600">
              {product.status === "available" ? "آماده فروش" : "فروخته شده"}
            </span>
          </div>

          <div className="flex items-center gap-1 text-purple-600 group-hover:gap-2 transition-all">
            <span className="text-sm font-medium">مشاهده فرصت</span>
            <ArrowLeft size={16} />
          </div>
        </div>

        {/* Opportunity Score Bar */}
        {product.opportunityScore && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-gray-500">امتیاز فرصت</span>
              <span className="font-semibold text-gray-900">
                {product.opportunityScore}٪
              </span>
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: isVisible ? `${product.opportunityScore}%` : "0%",
                  backgroundColor: product.accent,
                }}
              />
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
