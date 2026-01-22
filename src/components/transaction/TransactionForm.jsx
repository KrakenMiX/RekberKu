"use client";

import { useState } from "react";

export default function TransactionForm() {
  const [form, setForm] = useState({
    buyerName: "",
    buyerPhone: "",
    sellerName: "",
    sellerPhone: "",
    itemName: "",
    price: "",
    note: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">
        Informasi Transaksi
      </h2>

      <div className="space-y-4">
        <Input label="Nama Pembeli" name="buyerName" onChange={handleChange} />
        <Input label="No. Telepon Pembeli" name="buyerPhone" onChange={handleChange} />
        <Input label="Nama Penjual" name="sellerName" onChange={handleChange} />
        <Input label="No. Telepon Penjual" name="sellerPhone" onChange={handleChange} />
        <Input label="Nama Barang / Akun" name="itemName" onChange={handleChange} />
        <Input label="Harga (Rp)" name="price" type="number" onChange={handleChange} />

        <textarea
          name="note"
          rows="3"
          placeholder="Catatan (opsional)"
          onChange={handleChange}
          className="w-full rounded-lg border px-3 py-2"
        />

        <button className="w-full bg-cyan-600 text-white py-3 rounded-lg">
          Lanjutkan Transaksi
        </button>
      </div>
    </div>
  );
}

function Input({ label, name, type = "text", onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        name={name}
        type={type}
        onChange={onChange}
        className="w-full rounded-lg border px-3 py-2"
      />
    </div>
  );
}
