import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function HowItWorks() {
    return(
      <section id="cara" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Cara Kerja Rekber</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {["Pembeli transfer ke Rekber", "Penjual kirim barang", "Pembeli konfirmasi", "Dana diteruskan"].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="text-cyan-600 font-bold text-lg mb-2">Step {i + 1}</div>
                <p className="text-sm text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}