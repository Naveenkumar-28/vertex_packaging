import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  ArrowUpRight, ArrowRight, X, ZoomIn, Check, Home as HomeIcon, ChevronRight, Package2,
} from "lucide-react";
import { productBySlug, productsByCategory } from "@/data/products";
import { categoryBySlug } from "@/data/categories";
import SectionHeader from "@/components/SectionHeader";
import QuickEnquiryForm from "@/components/QuickEnquiryForm";
import { getFeatureIcon } from "@/data/featureIcons";
import { generateImageURL } from "@/lib/utils";
import { INDUSTRIES } from "@/data/industries";

export default function ProductDetails() {
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const { category: catSlug, slug } = useParams();

  useEffect(() => {
    setActiveImg(0);
    setLightbox(false);
    window.scrollTo({ top: 0 });
  }, [slug]);

  useEffect(() => {
    if (!lightbox) return;

    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    const onKey = (e) => e.key === "Escape" && setLightbox(false);
    document.addEventListener("keydown", onKey);

    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
      document.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);



  const product = productBySlug(slug);
  const cat = product ? categoryBySlug(product.category) : null;

  if (!product) return <Navigate to="/products" replace />;

  const matchIndustries = catSlug
    ? INDUSTRIES.find((i) => i.id === catSlug.toLowerCase())
    : null;

  if (!matchIndustries && catSlug && product.category !== catSlug) return <Navigate to={`/products/${product.category}/${product.id}`} replace />;

  const related = productsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 6);


  const images = product.images?.length ? product.images : [product.image];

  return (
    <div data-testid="product-detail-page" className="pt-[72px]">
      {/* Breadcrumb */}
      <div className="container-pad pt-8">
        {matchIndustries ? (
          <nav className="flex items-center flex-wrap gap-2 text-xs text-white/50" data-testid="breadcrumb">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 leading-none hover:text-white"
            >
              <HomeIcon className="h-3 w-3 shrink-0" />
              <span>Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3" />
              <Link to="/industries" className="hover:text-white">Industries</Link>
            </div>
            <div className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3" />
              <Link to={`/industries/${catSlug}`} className="hover:text-white capitalize">{matchIndustries?.name}</Link>
            </div>
            <div className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary font-semibold">{product.name}</span>
            </div>
          </nav>

        ) : (

          <nav className="flex items-center flex-wrap gap-2 text-xs text-white/50" data-testid="breadcrumb">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 leading-none hover:text-white"
            >
              <HomeIcon className="h-3 w-3 shrink-0" />
              <span>Home</span>
            </Link>
            <div className="flex gap-2 items-center">
              <ChevronRight className="w-3 h-3" />
              <Link to="/products" className="hover:text-white">Products</Link>
            </div>
            <div className="flex gap-2 items-center">
              <ChevronRight className="w-3 h-3" />
              <Link to={`/products/${product.category}`} className="hover:text-white">{cat?.name}</Link>
            </div>
            <div className="flex gap-2 items-center">
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary font-semibold">{product.name}</span>
            </div>
          </nav>
        )}
      </div>

      <section className="container-pad pt-8 pb-16">
        <div className="grid lg:grid-cols-[40%_60%] md:grid-cols-[50%_50%]  gap-10 lg:gap-12">
          {/* GALLERY */}
          {/* <div>
            <div className="grid grid-cols-[80px_1fr] gap-4">
              <div className="lg:flex flex-col gap-3 max-h-[600px] overflow-y-auto hidden" data-testid="thumbnails">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    data-testid={`thumb-${i}`}
                    className={`aspect-square overflow-hidden border-2 transition-colors ${activeImg === i ? "border-primary" : "border-white/10 hover:border-white/30"}`}
                  >
                    <img src={generateImageURL(img, 400)} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <motion.div
                key={activeImg}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
                className="relative aspect-[4/5] overflow-hidden bg-[#0a0f25] group"
                data-testid="main-image"
              >
                <img src={generateImageURL(images[activeImg], 1200)} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <button
                  aria-label="Zoom image"
                  className="absolute top-4 right-4 w-10 h-10 grid place-items-center bg-[#050816]/70 backdrop-blur border border-white/10"
                  onClick={() => setLightbox(true)}>
                  <ZoomIn className="w-4 h-4" />
                </button>
                //<button className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3 py-2 bg-[#050816]/70 backdrop-blur border border-white/10 text-xs" data-testid="view-360-btn">
                //  <RotateCw className="w-3.5 h-3.5" /> 360° View
                //</button> 
              </motion.div>
              <div className="flex gap-3 max-h-[200px] max-w-full" data-testid="thumbnails">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    data-testid={`thumb-${i}`}
                    className={`aspect-square overflow-hidden border-2 transition-colors ${activeImg === i ? "border-primary" : "border-white/10 hover:border-white/30"}`}
                  >
                    <img src={generateImageURL(img, 400)} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div> */}


          {/* GALLERY */}
          <div className="min-w-0">
            <div className="flex flex-col gap-4 sm:flex-row md:flex-col xl:flex-row">
              {/* MAIN IMAGE */}
              <motion.div
                key={activeImg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="relative order-1 sm:order-2 md:order-1 xl:order-2 aspect-[4/5] w-full min-w-0 overflow-hidden bg-[#0a0f25] group"
                data-testid="main-image"
              >
                <img
                  src={generateImageURL(images[activeImg], 1200)}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button
                  aria-label="Zoom image"
                  className="absolute top-4 right-4 grid h-10 w-10 place-items-center border border-white/10 bg-[#050816]/70 backdrop-blur"
                  onClick={() => setLightbox(true)}
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
              </motion.div>

              {/* THUMBNAILS */}
              <div
                className="
    thumb-scroll
    order-2 sm:order-1 md:order-2 xl:order-1
    flex gap-3 shrink-0
    flex-row overflow-x-auto overflow-y-hidden pb-2
    sm:flex-col sm:overflow-y-auto sm:overflow-x-hidden sm:pb-0 sm:max-h-[600px] sm:w-auto
    md:flex-row md:overflow-x-auto md:overflow-y-hidden md:pb-2 md:max-h-none md:w-full
    xl:flex-col xl:overflow-y-auto xl:overflow-x-hidden xl:pb-0 xl:max-h-[600px] xl:w-auto
  "
                data-testid="thumbnails"
              >
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    data-testid={`thumb-${i}`}
                    className={`h-16 w-16 shrink-0 overflow-hidden border-2 transition-colors lg:h-20 lg:w-20 
        sm:mr-1 md:mr-0 xl:mr-1 ${activeImg === i ? "border-primary" : "border-white/10 hover:border-white/30"
                      }`}
                  >
                    <img
                      src={generateImageURL(img, 400)}
                      alt={`${product.name} ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* INFO */}
          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-3 font-semibold">{product.type}</div>
            <h1 className="display text-4xl md:text-5xl font-bold mb-5 leading-tight">{product.name}</h1>
            <p className="text-white/65 text-lg leading-relaxed mb-6">{product.description}</p>

            <ul className="space-y-2.5 mb-8" data-testid="bullet-features">
              {product.features.slice(0, 4).map((f) => (
                <li key={f} className="flex items-start gap-3 text-white/85 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/quote" className="btn-primary" data-testid="info-quote-btn">
                Request Quote <ArrowUpRight className="w-4 h-4" />
              </Link>
              {/* <button className="btn-secondary" data-testid="info-datasheet-btn">
                Download Datasheet <FileDown className="w-4 h-4" />
              </button> */}
            </div>
          </div>
        </div>

        {/* SPECIFICATIONS */}
        <div className="mt-16">
          <h3 className="display text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" /> Specifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3" data-testid="specs-grid">
            {Object.entries(product.specs ?? {}).map(([k, v]) => (
              <div key={k} className="glass p-5">
                <div className="text-xs uppercase tracking-widest text-white/40 mb-2">{k.replace(/_/g, " ")}</div>
                <div className="text-base font-semibold">{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* APPLICATIONS */}
        <div className="mt-16">
          <h3 className="display text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" /> Applications
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3" data-testid="applications-grid">
            {product.applications.map((a) => (
              <div key={a} className="glass p-5 flex flex-col items-center text-center group hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 grid place-items-center bg-primary/10 text-primary border border-primary/20 mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Package2 className="w-4 h-4" />
                </div>
                <div className="text-xs font-semibold">{a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* KEY FEATURES */}
        <div className="mt-16">
          <h3 className="display text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" /> Key Features
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3" data-testid="key-features-grid">
            {product.features.map((f) => {
              const Icon = getFeatureIcon(f);
              return (
                <div key={f} className="glass p-5 group hover:border-primary/50 transition-colors flex flex-col items-center">
                  <div className="w-10 h-10 grid place-items-center bg-primary/10 text-primary border border-primary/20 mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-semibold">{f}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="container-pad py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeader
              eyebrow="Get a quote"
              title="Get Quote Now."
              subtitle={`Tell us about your ${product.name} needs. Our team will respond within 24 hours.`}
            />
            <div className="glass p-6 mb-4">
              <div className="text-xs uppercase tracking-widest text-white/40 mb-1">Currently viewing</div>
              <div className="display text-lg font-bold">{product.name}</div>
              <div className="text-xs text-white/55 mt-1">{product.type}</div>
            </div>
          </div>
          <div>
            <QuickEnquiryForm productId={product.id} productName={product.name} />
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="container-pad py-16">
          <SectionHeader eyebrow="Related products" title="You may also like." />
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1.2}
            spaceBetween={20}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={related.length > 4}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }}
            data-testid="related-slider"
          >
            {related.map((p) => (
              <SwiperSlide key={p.id}>
                <Link to={`/products/${p.category}/${p.id}`} className="group block bg-white/[0.02] border border-white/[0.06] hover:border-primary/50 transition-colors" data-testid={`related-${p.id}`}>
                  <div className="aspect-square overflow-hidden">
                    <img src={generateImageURL(p.image, 800)} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] uppercase tracking-widest text-primary mb-2 font-semibold">{p.type}</div>
                    <div className="display text-base font-bold group-hover:text-primary transition-colors">{p.name}</div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="container-pad py-20">
        <div className="glass-strong p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-orange opacity-40" />
          <div className="relative">
            <div className="text-xs uppercase tracking-widest text-primary mb-4 font-semibold">Final word</div>
            <h2 className="display text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
              Let's create packaging that <br />
              <span className="text-primary">elevates your brand.</span>
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/contact" className="btn-primary" data-testid="final-cta-experts">
                Talk to our experts <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/quote" className="btn-secondary" data-testid="final-cta-quote">
                Get a Quote <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] lightbox-overlay grid place-items-center"
            onClick={() => setLightbox(false)}
            data-testid="lightbox"
          >
            <button onClick={() => setLightbox(false)} className="absolute top-6 right-6 w-12 h-12 grid place-items-center border border-white/20 text-white hover:border-primary transition-colors duration-75" data-testid="lightbox-close">
              <X />
            </button>
            <motion.img
              initial={{ scale: 0.92 }} animate={{ scale: 1 }}
              src={generateImageURL(product.images[activeImg], 1600)} alt={product.name}
              className="max-w-[92vw] max-h-[88vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
