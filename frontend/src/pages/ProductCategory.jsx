import { useState, useMemo } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowUpRight
} from "lucide-react";
import { categoryBySlug } from "@/data/categories";
import { productsByCategory } from "@/data/products";
import { ProductsHeroSection } from "./productCategoryPage/components/ProductsHeroSection";
import { BenefitsStrip } from "./productCategoryPage/components/BenefitsStrip";
import ProductsFilterSidebar from "@/components/ProductsFilterSidebar";
import ProductsList from "@/components/ProductsList";
// const FILTER_POUCHES=["Three Side Seal","Stand Up","Zip Lock"]

const PER_PAGE = 9;

export default function ProductCategory() {
  const { slug } = useParams();
  const cat = categoryBySlug(slug);

  // Hooks (always called)
  const allProducts = useMemo(() => (cat ? productsByCategory(cat.id) : []), [cat]);
  const [apps, setApps] = useState([]);
  const [mats, setMats] = useState([]);
  const [feats, setFeats] = useState([]);
  const [sort, setSort] = useState("popular");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = allProducts.filter((p) => {
      if (apps.length && !apps.includes(p.application)) return false;
      if (mats.length && !mats.includes(p.material)) return false;
      if (feats.length && !feats.every((f) =>
        p.features.includes(f) || (p.finishes || []).includes(f)
      )) return false;
      return true;
    });
    if (sort === "az") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "latest") list = [...list].reverse();
    return list;
  }, [allProducts, apps, mats, feats, sort]);

  if (!cat) return <Navigate to="/products" replace />;

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const resetFilters = () => {
    setApps([]);
    setMats([]);
    setFeats([]);
    setSort("popular");
    setPage(1);
  };

  return (
    <div data-testid="product-category-page" className="pt-[72px]">
      {/* HERO */}
      <ProductsHeroSection cat={cat} allProducts={allProducts} />

      {/* BENEFITS STRIP */}
      <BenefitsStrip cat={cat} />

      {/* PRODUCT LISTING */}
      <section id="products" className="container-pad py-12 pt-28">
        <div className="grid lg:grid-cols-[260px_1fr] gap-8 grid-cols-1">
          {/* Sidebar */}

          {/* FILTER SIDEBAR */}
          <ProductsFilterSidebar
            apps={apps}
            mats={mats}
            feats={feats}
            setFeats={setFeats}
            setMats={setMats}
            resetFilters={resetFilters}
            setApps={setApps}
          />

          {/* PRODUCT LIST */}
          <ProductsList
            current={current}
            filtered={filtered}
            page={page}
            pages={pages}
            resetFilters={resetFilters}
            setPage={setPage}
            setSort={setSort}
            sort={sort} />
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="container-pad py-16">
        <div className="glass-strong p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-orange opacity-50" />
          <div className="relative grid md:grid-cols-2 gap-6 items-center">
            <h3 className="display text-3xl md:text-4xl font-bold leading-tight">
              Need a custom <span className="text-primary">{cat.name.toLowerCase()}?</span>
            </h3>
            <div className="flex md:justify-end">
              <Link to="/quote" className="btn-primary" data-testid="category-cta-quote">
                Request a Quote <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
