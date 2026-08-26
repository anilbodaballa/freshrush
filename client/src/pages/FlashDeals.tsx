import { useEffect, useState } from "react";
import type { Product } from "../types";
import { Zap } from "lucide-react";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";
import api from "../config/api";
import toast from "react-hot-toast";

const FlashDeals = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/products/flash-deals")
      .then((res) => setProducts(res.data.products))
      .catch((error: any) =>
        toast.error(error.response.data.message || error?.message),
      )
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="min-h-screen bg-app-cream">
      {/* Banner */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-emerald-800 text-white py-12 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex-center gap-2 mb-3">
            <Zap className="size-7 fill-white text-amber-300 animate-pulse" />
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">FreshRush Flash Deals</h1>
            <Zap className="size-7 fill-white text-amber-300 animate-pulse" />
          </div>
          <p className="text-white/90 max-w-md mx-auto font-medium text-sm sm:text-base">
            Ultra-fast flash discounts on organic produce & top essentials. Limited quantity — grab them now!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <Loading />
        ) : products.length === 0 ? (
          <div className="text-center py-16">
            <Zap className="size-16 text-app-border mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-app-green mb-2">
              No deals right now
            </h2>
            <p className="text-sm text-app-text-light">
              Check back soon for amazing offers!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map(
              (product) =>
                product.stock > 0 && (
                  <ProductCard key={product.id} product={product} />
                ),
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashDeals;
