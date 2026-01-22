import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
      <section id="home" className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Transaksi Online <span className="text-cyan-600">Lebih Aman</span><br />dengan Rekening Bersama
            </h2>
            <p className="mt-6 text-gray-600">
              Kami menahan dana sementara sampai barang diterima dengan aman. Cocok untuk jual beli online tanpa rasa khawatir.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="bg-cyan-600 text-white px-6 py-3 rounded-xl flex items-center gap-2"  onClick={() => navigate("/transaksi/role")}>
                Mulai Transaksi <ArrowRight size={18} />
              </button>
              <button className="border px-6 py-3 rounded-xl" >
                <a href="#cara">Cara Kerja</a>
              </button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="bg-cyan-50 rounded-2xl p-10 flex justify-center">
              <ShieldCheck size={120} className="text-cyan-600" />
            </div>
          </motion.div>
        </div>
      </section>
  );
}
