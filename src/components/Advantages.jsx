import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, CheckCircle } from "lucide-react";

export default function Advantages() {
    return(
      <section id="keunggulan" className="py-20">
        <div id="keunggulan" className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Kenapa Pilih Kami?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {["Dana aman & transparan", "Admin terpercaya", "Notifikasi real-time"].map((item, i) => (
              <div key={i} className="border rounded-2xl p-6">
                <CheckCircle className="text-cyan-600 mb-4" />
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>   
    )
}