import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { productBySlug, productsByCategory } from "@/data/products";
import { categoryBySlug } from "@/data/categories";
import { INDUSTRIES } from "@/data/industries";
import {
  LightBoxSection, ProductApplications,
  ProductGallerySection, ProductInfoSection, ProductKeyFeatures,
  ProductSpecifications, RelatedProductsSection, ProductBreadcrumbSection,
  ProductCurrentlyView, ProductFinalCTA
} from "./components";

export default function ProductDetailsPage() {
  const { slug } = useParams();
  return <ProductDetails key={slug} />;
}

function ProductDetails() {
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const { category: catSlug, slug } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  const product = productBySlug(slug);
  const cat = product ? categoryBySlug(product.category) : null;

  if (!product) return <Navigate to="/products" replace />;

  const matchIndustries = catSlug
    ? INDUSTRIES.find((i) => i.id === catSlug.toLowerCase())
    : null;

  if (!matchIndustries && catSlug && product.category !== catSlug) return <Navigate to={`/products/${product.category}/${product.id}`} replace />;

  const related = productsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 6);

  return (
    <div data-testid="product-detail-page" className="pt-[72px]">
      {/* Breadcrumb */}
      <ProductBreadcrumbSection
        cat={cat}
        catSlug={catSlug}
        matchIndustries={matchIndustries}
        product={product}
      />

      <section className="container-pad pt-8 pb-16">
        <div className="grid lg:grid-cols-[40%_60%] md:grid-cols-[50%_50%]  gap-10 lg:gap-12">
          {/* GALLERY */}
          <ProductGallerySection
            activeImg={activeImg}
            product={product}
            setActiveImg={setActiveImg}
            setLightbox={setLightbox}
          />

          {/* INFO */}
          <ProductInfoSection
            product={product} />
        </div>

        {/* SPECIFICATIONS */}
        <ProductSpecifications
          product={product} />

        {/* APPLICATIONS */}
        <ProductApplications
          applications={product?.applications ?? []} />

        {/* KEY FEATURES */}
        <ProductKeyFeatures
          features={product?.features ?? []} />
      </section>

      {/* ENQUIRY FORM */}
      <ProductCurrentlyView
        product={product} />

      {/* RELATED */}
      {related.length > 0 && (
        <RelatedProductsSection
          related={related} />
      )}

      {/* FINAL CTA */}
      <ProductFinalCTA />

      {/* Lightbox */}
      <LightBoxSection
        product={product}
        activeImg={activeImg}
        lightbox={lightbox}
        setLightbox={setLightbox}
      />
    </div>
  );
}
