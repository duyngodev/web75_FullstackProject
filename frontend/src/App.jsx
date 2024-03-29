import "./App.css";
import Landing from "./pages/Landing.jsx";
import { Route, Routes } from "react-router-dom";
import App2 from "./App2.jsx";
import Register from "./components/duydev/Login/Register.jsx";
import Login from "./components/duydev/Login/Login.jsx";
import Admin from "./pages/Admin.jsx";
import Dashboard from "./components/duydev/admin/Dashboard.jsx";
import AdminProducts from "./components/duydev/admin/AdminProducts.jsx";
import Setting from "./components/duydev/admin/Setting.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="settings" element={<Setting />} />
        </Route>

        {/* Thêm Path to Service ở đây vì không có Header, Footer */}
        <Route path="*" element={<App2 />} />
      </Routes>
    </>
  );
}

export default App;
