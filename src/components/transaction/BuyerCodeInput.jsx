export default function BuyerCodeInput() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">
        Kode Rekber
      </h2>

      <input
        type="text"
        placeholder="Contoh: RKB-123456"
        className="w-full rounded-lg border px-4 py-3 mb-4 focus:outline-none focus:ring focus:ring-cyan-200"
      />

      <p className="text-sm text-gray-500">
        Kode ini diberikan oleh penjual setelah membuat transaksi.
      </p>
    </div>
  );
}
