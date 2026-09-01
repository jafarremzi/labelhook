import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductHero from "../components/product-detail/ProductHero";
import ScoreBreakdown from "../components/product-detail/ScoreBreakdown";
import BusinessConcept from "../components/product-detail/BusinessConcept";
import LaunchRoadmap from "../components/product-detail/LaunchRoadmap";
import LaunchPlan from "../components/product-detail/LaunchPlan";
import WhyThisBrand from "../components/product-detail/WhyThisBrand";
import OpportunityCTA from "../components/product-detail/OpportunityCTA";
import RelatedProducts from "../components/product-detail/RelatedProducts";
import StickyMobileCTA from "../components/product-detail/StickyMobileCTA";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  useDocumentTitle(
    product
      ? `${product.domain} | برند آماده فروش | Labelhook`
      : "برند یافت نشد | Labelhook"
  );

  if (!product) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center px-4">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            برند یافت نشد
          </h1>
          <p className="text-gray-600 mb-8">
            برند مورد نظر شما یافت نشد. شاید منتشر نشده یا آدرس اشتباه باشد.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-700 transition-colors"
          >
            <ArrowRight size={18} />
            بازگشت به خانه
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">{/* bottom padding for mobile CTA */}
      {/* Breadcrumb */}
      <nav
        aria-label="مسیر"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4"
      >
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link to="/" className="hover:text-purple-600 transition-colors">
              خانه
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link to="/" className="hover:text-purple-600 transition-colors">
              برندها
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-900 font-medium">{product.domain}</li>
        </ol>
      </nav>

      <ProductHero product={product} />

      {/* Included assets strip */}
      {product.includedAssets && product.includedAssets.length > 0 && (
        <div className="bg-gray-50 border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              چه چیزی دریافت می‌کنید؟
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {product.includedAssets.map((asset, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                  {asset}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <ScoreBreakdown product={product} />
      <BusinessConcept product={product} />
      <LaunchPlan product={product} />
      <LaunchRoadmap product={product} />
      <WhyThisBrand product={product} />
      <OpportunityCTA product={product} />
      <RelatedProducts currentProduct={product} />
      <StickyMobileCTA product={product} />
    </div>
  );
}
