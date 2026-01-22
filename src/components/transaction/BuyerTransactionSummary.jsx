export default function BuyerTransactionSummary() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">
        Ringkasan Transaksi
      </h2>

      <div className="space-y-3 text-sm">
        <Row label="Pembeli" value="-" />
        <Row label="Penjual" value="-" />
        <Row label="Barang / Akun" value="-" />
        <Row label="Harga" value="-" />
      </div>

      <div className="mt-6 p-4 bg-cyan-50 border border-cyan-200 rounded-lg text-sm">
        Dana akan disimpan oleh rekber sampai pembeli
        mengonfirmasi barang diterima.
      </div>

      <button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-semibold transition">
        Bayar Sekarang
      </button>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
