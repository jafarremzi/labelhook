import { useState, useMemo } from "react";
import { products, categories } from "../../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "همه" || product.category === selectedCategory;

      const matchesSearch =
        searchQuery === "" ||
        product.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.includes(searchQuery);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-purple-500" />
            <span className="text-xs font-semibold text-purple-600 tracking-wide">
              فرصت‌های کسب‌وکار
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            برندهای آماده ساخت
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            هر برند شامل دامنه، ایده کامل کسب‌وکار، مدل درآمدی و نقشه راه است
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 max-w-xl mx-auto">
          <input
            type="search"
            placeholder="جستجوی برند، دامنه یا دسته‌بندی..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-2 min-w-max sm:justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              نتیجه‌ای یافت نشد
            </h3>
            <p className="text-gray-600 mb-6">
              برای دسته‌بندی یا جستجوی انتخابی، برندی وجود ندارد
            </p>
            <button
              onClick={() => {
                setSelectedCategory("همه");
                setSearchQuery("");
              }}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              پاک کردن فیلترها
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
