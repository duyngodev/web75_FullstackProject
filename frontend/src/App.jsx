import "./App.css";
import Landing from "./pages/Landing.jsx";
import { Route, Routes } from "react-router-dom";
import App2 from "./App2.jsx";
import Register from "./components/duydev/Login/Register.jsx";
import Login from "./components/duydev/Login/Login.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Thêm Path to Service ở đây vì không có Header, Footer */}
        <Route path="*" element={<App2 />} />
      </Routes>
    </>
  );
}

export default App;
