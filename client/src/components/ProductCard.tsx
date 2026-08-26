import { useNavigate } from "react-router-dom";
import type { Product } from "../types";
import { Plus, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  // const { setIsCartOpen } = useCart();
  const currency = import.meta.env.VITE_CURRENCY_SYMBOL;

  const { addToCart } = useCart();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-md transition-all duration-300 group animate-fade-in cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover p-4 group-hover:p-2 transition-all duration-300"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.discount > 0 && (
            <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full shadow-xs">
              {product.discount}% OFF
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-3.5 text-slate-800">
        <h3 className="text-sm leading-snug font-medium mb-1.5 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        {product.rating > 0 && (
          <div className="flex items-center gap-1 mb-2">
            <Star className="size-3 text-amber-500 fill-amber-500" />
            <span className="text-xs font-semibold text-slate-800">
              {product.rating}
            </span>
            <span className="text-xs text-slate-400">
              ({product.reviewCount})
            </span>
          </div>
        )}

        {/* Price + Add to cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 truncate">
            <span className="text-base font-bold text-slate-900">
              {currency}
              {product.price.toFixed(1)}
            </span>
            <span className="text-xs text-slate-500">/{product.unit}</span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-slate-400 line-through ml-1.5">
                {currency}
                {product.originalPrice.toFixed(1)}
              </span>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="size-8 rounded-full bg-emerald-700 text-white flex-center shrink-0 hover:bg-emerald-800 shadow-sm transition-colors active:scale-95"
          >
            <Plus className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
