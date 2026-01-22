export default function Pricing() {
  const fees = [
    {
      title: "Transaksi Standar",
      price: "2%",
      desc: "Dari total nilai transaksi",
      features: [
        "Dana ditahan sampai deal selesai",
        "Notifikasi status transaksi",
        "Support admin",
      ],
    },
    {
      title: "Transaksi Prioritas",
      price: "3%",
      desc: "Proses lebih cepat",
      features: [
        "Prioritas verifikasi",
        "Respon admin lebih cepat",
        "Cocok untuk transaksi besar",
      ],
    },
  ];

  return (
    <div id="biaya" className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900">Biaya Layanan</h1>
          <p className="text-gray-600 mt-4">
            Transparan, tanpa biaya tersembunyi
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {fees.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border shadow-sm p-8"
            >
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <div className="text-4xl font-bold text-cyan-600 mb-2">
                {item.price}
              </div>
              <p className="text-gray-500 mb-6">{item.desc}</p>

              <ul className="space-y-3 mb-8">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-cyan-600 text-white py-3 rounded-xl font-medium hover:bg-cyan-700 transition">
                Gunakan Layanan
              </button>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="mt-16 bg-white border rounded-xl p-6 text-sm text-gray-600">
          <p>
            <strong>Catatan:</strong> Biaya dihitung setelah transaksi selesai
            dan dana berhasil diteruskan ke penjual. Tidak ada potongan di awal.
          </p>
        </div>
      </div>
    </div>
  );
}
