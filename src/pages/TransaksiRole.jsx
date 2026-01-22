import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RoleSection from "../components/transaction/RoleSection";

export default function TransaksiRole() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <RoleSection />
      <Footer />
    </div>
  );
}
