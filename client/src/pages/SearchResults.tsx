import { useEffect, useState } from "react";
import type { Product } from "../types";
import { Link, useSearchParams } from "react-router-dom";
import { Home, Search } from "lucide-react";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";
import api from "../config/api";
import toast from "react-hot-toast";

const SearchResults = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchparams] = useSearchParams();
  const query = searchparams.get("q") || "";

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    api
      .get(`/products?search=${encodeURIComponent(query)}`)
      .then((res) => setProducts(res.data.products))
      .catch((error: any) => {
        toast.error(error.response?.data?.message || error.message);
      })
      .finally(() => setLoading(false));
  }, [query]);
  return (
    <div className="min-h-screen bg-app-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-app-text-light mb-6">
          <Link to={"/"} className="hover:text-app-green transition-colors">
            <Home className="size-4" />
          </Link>
          <span>/</span>
          <span className="text-app-green font-medium">Search Results</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-emerald-950 mb-1">
            Search Results for "{query}"
          </h1>
          <p className="text-sm text-slate-500">
            {loading ? "Searching FreshRush catalog..." : `${products.length} fresh products found`}
          </p>
        </div>

        {/* Results */}
        {loading ? (
          <Loading />
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <Search className="size-16 text-slate-300 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-emerald-950 mb-2">
              No results found
            </h2>
            <p className="text-sm text-slate-500 mb-6 max-w-md mx-auto">
              We couldn't find any products matching "{query}". Try searching for apples, milk, bread, or coffee.
            </p>
            <Link
              to={"/products"}
              className="inline-flex px-6 py-3 bg-emerald-800 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl shadow-xs transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
