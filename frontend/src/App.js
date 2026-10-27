import "@/App.css";
import "@/index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductCategory from "@/pages/ProductCategory";
import ProductDetails from "@/pages/ProductDetails";
import Industries from "@/pages/Industries";
// import Infrastructure from "@/pages/Infrastructure";
import Quality from "@/pages/Quality";
import Gallery from "@/pages/Gallery";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Quote from "@/pages/Quote";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/NotFound";
import AdminLogin from "@/pages/AdminLogin";
import ProtectedAdmin from "@/components/ProtectedAdmin";
import IndustryCategory from "./pages/IndustryCategory";


function App() {
  return (
    <div className="App min-h-screen bg-[#050816] text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route element={<ProtectedAdmin />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductCategory />} />
            <Route path="/products/:category/:slug" element={<ProductDetails />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:slug" element={<IndustryCategory />} />
            <Route path="/industries/:category/:slug" element={<ProductDetails />} />
            {/* <Route path="/infrastructure" element={<Infrastructure />} /> */}
            <Route path="/quality" element={<Quality />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "rgba(10, 15, 37, 0.9)",
            color: "#ffffff",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(20px)",
          },
        }}
      />
    </div>
  );
}

export default App;
