import { CTA, FeaturedProductsSection, ClientsMarquee, GalleryPreview, HeroSection, IndustriesSection, InfrastructurePreview, ProcessTimeline, WhyChooseUs } from "./homePage/components";

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <HeroSection />

      {/* INDUSTRIES */}
      <IndustriesSection />

      {/* OUR CLIENTS */}
      <ClientsMarquee />

      {/* FEATURED PRODUCTS */}
      <FeaturedProductsSection />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* INFRASTRUCTURE PREVIEW */}
      <InfrastructurePreview />

      {/* PROCESS TIMELINE */}
      <ProcessTimeline />

      {/* GALLERY PREVIEW */}
      <GalleryPreview />

      {/* CTA */}
      <CTA />
    </div>
  );
}
