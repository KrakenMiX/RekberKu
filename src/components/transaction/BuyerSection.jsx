import BuyerCodeInput from "./BuyerCodeInput";
import BuyerTransactionSummary from "./BuyerTransactionSummary";

export default function BuyerSection() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-2">
        Hubungi Penjual
      </h1>
      <p className="text-gray-600 mb-8">
        Minta kode rekber dari penjual lalu masukkan di bawah ini
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BuyerCodeInput />
        <BuyerTransactionSummary />
      </div>
    </main>
  );
}
