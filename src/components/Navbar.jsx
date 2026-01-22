import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-50 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-cyan-600" onClick={() => goToSection("home")}>RekberKu</h1>

        <div className="hidden md:flex gap-6 text-sm">
          <a href="#home" className="hover:text-cyan-600" onClick={() => goToSection("home")}>Home</a>
          <a href="#cara" className="hover:text-cyan-600" onClick={() => goToSection("cara")}>Cara Kerja</a>
          <a href="#keunggulan" className="hover:text-cyan-600" onClick={() => goToSection("cara")}>Keunggulan</a>
          <a href="#biaya" className="hover:text-cyan-600" onClick={() => goToSection("keunggulan")}>Biaya</a>
        </div>

        <button className="bg-cyan-600 text-white px-4 py-2 rounded-xl text-sm" onClick={() => navigate("/transaksi/role")}>
          Mulai
        </button>
      </div>
    </nav>
  );
}
