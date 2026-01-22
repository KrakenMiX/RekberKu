import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BuyerSection from "../components/transaction/BuyerSection";

export default function TransaksiPembeli() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <BuyerSection />
      <Footer />
    </div>
  );
}
