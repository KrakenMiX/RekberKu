import { useNavigate } from "react-router-dom";

export default function RoleSection() {
  const navigate = useNavigate();

  return (
    <main className="max-w-4xl mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-bold mb-4">
        Kamu berperan sebagai siapa?
      </h1>

      <p className="text-gray-600 mb-10">
        Pilih peranmu untuk melanjutkan transaksi rekber
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* PEMBELI */}
        <button
          onClick={() => navigate("/transaksi/pembeli")}
          className="
            p-6 rounded-2xl border bg-white text-left
            transition-all duration-200
            hover:border-cyan-600 hover:bg-cyan-50 hover:shadow-lg
          "
        >
          <h2 className="text-xl font-semibold mb-2">Saya Pembeli</h2>
          <p className="text-sm text-gray-600">
            Saya ingin membeli barang atau akun dengan aman
          </p>
        </button>

        {/* PENJUAL */}
        <button
          onClick={() => navigate("/transaksi/penjual")}
          className="
            p-6 rounded-2xl border bg-white text-left
            transition-all duration-200
            hover:border-cyan-600 hover:bg-cyan-50 hover:shadow-lg
          "
        >
          <h2 className="text-xl font-semibold mb-2">Saya Penjual</h2>
          <p className="text-sm text-gray-600">
            Saya ingin menjual barang atau akun dengan sistem rekber
          </p>
        </button>
      </div>
    </main>
  );
}
