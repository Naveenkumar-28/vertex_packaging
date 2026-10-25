import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, ArrowUpRight, ChevronRight, ArrowRight } from "lucide-react";
import { productsByCategory } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { INDUSTRIES } from "@/data/industries";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { generateImageURL } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products", mega: "products" },
  { to: "/industries", label: "Industries", mega: "industries" },
  // { to: "/infrastructure", label: "Infrastructure" },
  { to: "/quality", label: "Quality" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null); // which parent is expanded
  // const [products,setProducts]=useState([])
  const nav = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeTimer = useRef(null);

  const openMenu = (key) => {
    clearTimeout(closeTimer.current);
    setOpenMega(key);
    if (!key) setOpenSub(null);
  };

  const closeMenu = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpenMega(null);
      setOpenSub(null);
    }, 120);
  };

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <header
      data-testid="site-navbar"
      onMouseLeave={closeMenu}
      className={`fixed top-0 left-0 right-0 z-50
        }`}
    >
      {/* Background layer: blur lives here, not on the header */}
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-[72px] -z-10 transition-all duration-300 ${scrolled
          ? "bg-[#050816]/85 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
          }`}
      />
      <div className="container-pad flex items-center justify-between gap-4 h-[72px]">
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-2 group shrink-0">
          <span className="w-9 h-9 grid place-items-center">
            <img className="h-full w-full object-cover" src="/logo.png" alt="logo" />
          </span>
          <div className='leading-tight'>
            <div className='text-base font-extrabold tracking-wider'>Vertex</div>
            <div className='text-[0.675rem] font-medium text-neutral-400 -mt-0.5'>Packaging</div>
          </div>
        </Link>
        <div className=" hidden lg:flex gap-0 lg:gap-3 xl:gap-5 items-center">
          <nav className="hidden lg:flex items-center gap-0 xl:gap-1" >
            {NAV_LINKS.map((l) => (
              <div
                key={l.to}
                className="relative"
                onMouseEnter={() => openMenu(l.mega)}
              >
                <NavLink
                  to={l.to}
                  data-testid={`nav-link-${l.label.toLowerCase()}`}
                  className={({ isActive }) =>
                    `px-2.5 xl:px-4 py-2 text-[13px] xl:text-sm  tracking-wide flex items-center gap-1 transition-colors whitespace-nowrap ${isActive ? "text-primary font-bold" : "text-white/80 hover:text-white font-medium"
                    }`
                  }
                >
                  {l.label}
                  {l.mega && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                </NavLink>
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center shrink-0">
            <Link
              to="/quote"
              data-testid="nav-get-quote-btn"
              className="inline-flex items-center gap-1.5 bg-primary hover:bg-[rgb(38,136,43)] text-white font-semibold text-[13px] xl:text-sm px-4 xl:px-5 py-2.5 transition-all whitespace-nowrap shadow-[0_8px_24px_rgba(38,136,43,0.25)] hover:-translate-y-0.5"
            >
              Get Quote <ArrowUpRight className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
            </Link>
          </div>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              data-testid="mobile-menu-toggle"
              className="lg:hidden w-10 h-10 grid place-items-center text-white"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#050816] border-l border-white/10 text-white w-[300px]"
          >
            <SheetHeader>
              <SheetTitle className="text-white">
                Menu
              </SheetTitle>

              <SheetDescription className="sr-only">
                Mobile navigation menu for Vertex Packaging website
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-1 mt-8" data-testid="mobile-menu">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 text-sm font-medium border-l-2 ${isActive
                      ? "border-primary text-primary bg-white/[0.03]"
                      : "border-transparent text-white/80"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <button
                data-testid="mobile-get-quote-btn"
                onClick={() => {
                  setMobileOpen(false);
                  nav("/quote");
                }}
                className="btn-primary mt-4 mx-4 justify-center"
              >
                Get Quote <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Mega menus */}
      <AnimatePresence>
        {openMega && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => clearTimeout(closeTimer.current)}
            className="absolute left-0 right-0 top-full hidden lg:block"
            data-testid={`mega-${openMega}`}
          >

            <div className="container-pad">
              <div className="glass-strong p-8 grid grid-cols-3 gap-8">
                {openMega === "products" && (
                  <>
                    <div className="col-span-2 grid grid-cols-2 gap-2">
                      {CATEGORIES.map((c) => {
                        const products = productsByCategory(c.id)
                        const hasChildren = Array.isArray(products) && products.length > 0;

                        // 👉 Category WITH children → renders a button that toggles submenu
                        if (hasChildren) {
                          return (
                            <div
                              key={c.id}
                              className="relative"
                              onMouseEnter={() => setOpenSub(c.id)}
                              onMouseLeave={() => setOpenSub(null)}
                            >
                              <Link
                                to={`/products/${c.id}`}
                                onClick={() => {
                                  setOpenSub(null);
                                  setOpenMega(null);
                                }}
                                data-testid={`mega-product-${c.id}`}
                                className={`w-full group flex items-center gap-3 p-3 border transition-colors text-left hover:border-white/10 hover:bg-white/[0.03] ${openSub === c.id ? "border-white/10 bg-white/[0.03]" : "border-transparent"
                                  }`}
                              >
                                <div className="w-12 h-12 overflow-hidden bg-white/[0.04] shrink-0">
                                  <img src={generateImageURL(c.image, 400)} alt={c.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-semibold">{c.name}</div>
                                  <div className="text-xs text-white/50 line-clamp-1">{c.short}</div>
                                </div>
                                <ChevronRight
                                  className={`w-4 h-4 text-white/40 transition-transform ${openSub === c.id ? "rotate-90" : ""}`}
                                />
                              </Link>

                              {openSub === c.id && (
                                <div className="absolute left-full top-0 pl-2 w-56 z-50">
                                  <div className="glass-strong border border-white/10 shadow-xl max-h-[calc(100vh-200px)] overflow-y-auto overscroll-contain">
                                    {products.map((sub) => (
                                      <Link
                                        key={sub.id}
                                        to={`/products/${c.id}/${sub.id}`}
                                        onClick={() => {
                                          setOpenMega(null);
                                          setOpenSub(null);
                                        }}
                                        className="block group px-4 py-3 text-sm hover:bg-white/[0.05] border-b border-white/5 last:border-b-0"
                                      >
                                        <div className="flex gap-2 items-center justify-between">
                                          <div className="font-medium">{sub.name}</div>
                                          <ArrowRight className="w-3 h-3" />
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        }

                        // 👉 Category WITHOUT children → normal link
                        return (
                          <Link
                            key={c.id}
                            to={`/products/${c.id}`}
                            onClick={() => setOpenMega(null)}
                            data-testid={`mega-product-${c.id}`}
                            className="group flex items-center gap-3 p-3 border border-transparent hover:border-white/10 hover:bg-white/[0.03] transition-colors"
                          >
                            <div className="w-12 h-12 overflow-hidden bg-white/[0.04] shrink-0">
                              <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold">{c.name}</div>
                              <div className="text-xs text-white/50 line-clamp-1">{c.short}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="border-l border-white/10 pl-6">
                      <div className="text-xs uppercase tracking-widest text-white/40 mb-4">Featured</div>
                      <img
                        src={generateImageURL(CATEGORIES[1].image, 800)}
                        alt="featured"
                        className="w-full h-32 object-cover mb-4"
                      />
                      <div className="text-sm font-semibold">{CATEGORIES[1].name}</div>
                      <Link
                        to="/products"
                        onClick={() => setOpenMega(null)}
                        className="text-xs text-primary mt-3 inline-flex items-center gap-1 font-semibold"
                      >
                        View all categories <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </>
                )}
                {openMega === "industries" && (
                  <>
                    {INDUSTRIES.slice(0, 6).map((ind) => (
                      <Link
                        key={ind.id}
                        to={`/industries/${ind.id}`}
                        onClick={() => setOpenMega(null)}
                        data-testid={`mega-industry-${ind.id}`}
                        className="group block border border-transparent hover:border-white/10 transition-colors p-2"
                      >
                        <div className="aspect-[8/3] overflow-hidden mb-3">
                          <img src={ind.image} alt={ind.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="text-sm font-semibold">{ind.name}</div>
                        <div className="text-xs text-white/50 line-clamp-2 mt-1">{ind.short}</div>
                      </Link>)
                    )}
                  </>
                )}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
