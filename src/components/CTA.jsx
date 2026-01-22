import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();
  
    return(
      <section className="py-20 bg-cyan-600 text-white text-center">
        <h3 className="text-3xl font-bold mb-6">Siap Transaksi Tanpa Takut Ditipu?</h3>
        <button className="bg-white text-cyan-600 px-8 py-3 rounded-xl font-semibold" onClick={() => navigate("/transaksi/role")}>Mulai Sekarang</button>
      </section>   
    );
}