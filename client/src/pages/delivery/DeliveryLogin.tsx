import { useEffect, useState } from "react";
import { BikeIcon, ZapIcon } from "lucide-react";
import { heroSectionData } from "../../assets/assets";
import api from "../../config/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function DeliveryLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post("/delivery/login", { email, password });
      localStorage.setItem("delivery_token", data.token);
      localStorage.setItem("delivery_partner", JSON.stringify(data.partner));
      toast.success("Login successful!");
      navigate("/delivery");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("delivery_token")) {
      navigate("/delivery");
    }
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-emerald-950 relative items-center justify-center">
        <img
          src={heroSectionData.hero_image}
          alt=""
          className="absolute inset-0 object-cover h-full bg-center opacity-15"
        />
        <div className="relative text-center px-12">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            FreshRush Delivery Partner Portal
          </h2>
          <p className="text-emerald-100/80 font-serif text-xl max-w-sm mx-auto">
            Deliver ultra-fast fresh groceries to happy customers.
          </p>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="flex-1 flex-center px-4 py-12 bg-slate-50">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex-center gap-2 mb-4">
              <div className="size-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex-center shadow-md">
                <ZapIcon size={20} className="fill-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                Fresh<span className="text-orange-500">Rush</span>
              </span>
            </div>
            <h1 className="text-2xl font-bold text-emerald-950 mb-2">
              Delivery Partner Portal Login
            </h1>
            <p className="text-sm text-app-text-light">
              Sign in to manage your deliveries
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-app-green mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border not-focus:border-app-border text-sm transition-colors"
                placeholder="partner@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-app-green mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border not-focus:border-app-border text-sm transition-colors"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-app-green text-white font-semibold rounded-xl hover:bg-app-green-light transition-colors disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
