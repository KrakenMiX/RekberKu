import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Transaksi from "./pages/Transaksi";
import TransaksiRole from "./pages/TransaksiRole";
import TransaksiPembeli from "./pages/TransaksiPembeli";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/transaksi/penjual" element={<Transaksi />} />
      <Route path="/transaksi/pembeli" element={<TransaksiPembeli />} />
      <Route path="/transaksi/role" element={<TransaksiRole />} />
      <Route path="/transaksi" element={<Navigate to="/transaksi/role" />} />
    </Routes>
  );
}

export default App;
