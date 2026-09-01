import Hero from "../components/hero/Hero";
import ProductGrid from "../components/products/ProductGrid";
import { WhyLabelhook, HowItWorks, CTASection } from "../components/ui/HomeSections";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <WhyLabelhook />
      <HowItWorks />
      <CTASection />
    </>
  );
}
