export default function Stats() {
  const stats = [
    {
      value: "10K+",
      label: "Transaksi Aman",
    },
    {
      value: "99.9%",
      label: "Tingkat Keberhasilan",
    },
    {
      value: "24/7",
      label: "Support Admin",
    },
    {
      value: "100%",
      label: "Dana Dijamin Sampai Deal",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Dipercaya oleh Banyak Pengguna
          </h2>
          <p className="text-gray-600 mt-3">
            Rekening bersama yang aman, transparan, dan profesional
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition"
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-600">
                {item.value}
              </div>
              <p className="mt-2 text-sm md:text-base text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
