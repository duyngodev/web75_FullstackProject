import "./App.css";
import Landing from "./pages/Landing.jsx";
import { Route, Routes } from "react-router-dom";
import App2 from "./App2.jsx";
import Register from "./components/duydev/Login/Register.jsx";
import Login from "./components/duydev/Login/Login.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Dashboard from "./components/duydev/Admin/Dashboard.jsx";
import AdminProducts from "./components/duydev/Admin/AdminProducts.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>

        {/* Thêm Path to Service ở đây vì không có Header, Footer */}
        <Route path="*" element={<App2 />} />
      </Routes>
    </>
  );
}

export default App;
