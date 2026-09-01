import { Link } from "react-router-dom";
import { products } from "../../data/products";
import type { Product } from "../../types/product";
import { ArrowLeft } from "lucide-react";

interface RelatedProductsProps {
  currentProduct: Product;
}

export default function RelatedProducts({ currentProduct }: RelatedProductsProps) {
  // Get 3 related products (same category or random)
  const related = products
    .filter((p) => p.id !== currentProduct.id)
    .sort((a, b) => {
      // Prioritize same category
      const aMatch = a.category === currentProduct.category ? 1 : 0;
      const bMatch = b.category === currentProduct.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            فرصت‌های مشابه
          </h2>
          <p className="text-gray-600">
            برندهای دیگری که ممکن است به شما مناسب باشند
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((product) => (
            <Link
              key={product.id}
              to={`/brand/${product.slug}`}
              className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                <img
                  src={product.cover}
                  alt={`کاور ${product.domain}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="px-2 py-0.5 text-xs font-medium rounded-full"
                    style={{
                      backgroundColor: `${product.accent}20`,
                      color: product.accent,
                    }}
                  >
                    {product.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                  {product.domain}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.pitch}
                </p>
                <div className="flex items-center gap-1 text-purple-600">
                  <span className="text-sm font-medium">مشاهده فرصت</span>
                  <ArrowLeft size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
