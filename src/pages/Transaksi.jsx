import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import TransactionHero from "../components/transaction/TransactionHero";
import TransactionForm from "../components/transaction/TransactionForm";
import TransactionSummary from "../components/transaction/TransactionSummary";

export default function Transaksi() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-10">
        <TransactionHero />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <TransactionForm />
          <TransactionSummary />
        </div>
      </main>

      <Footer />
    </div>
  );
}
