import { ArrowRightIcon, LeafIcon } from "lucide-react";
import { heroSectionData } from "../../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[540px] mb-10 rounded-3xl flex items-center shadow-lg">
      <img
        src={heroSectionData.hero_image}
        alt="hero"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/75 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-xl xl:pl-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 backdrop-blur-md rounded-full mb-5">
            <LeafIcon className="size-3.5" /> Ultra-Fast Grocery Delivery • 15-Min Rush
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5">
            Fresh Groceries <br />
            <span className="text-orange-400 font-sans font-bold">Delivered in a Rush</span>
          </h1>

          <p className="text-base text-slate-200/90 leading-relaxed mb-8 max-w-md">
            {heroSectionData.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to={"/products"}
              className="px-7 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-amber-600 shadow-md transition-all flex-center gap-2 active:scale-[0.98]"
            >
              Shop Now <ArrowRightIcon className="size-4" />
            </Link>
            <Link
              to={"/products"}
              className="px-7 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
