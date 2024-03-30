import { ThemeProvider } from "@emotion/react";
import theme from "../components/duydev/assets/style/theme_admin.js";
import Admin from "../components/duydev/Admin/AdminComponent.jsx";

const AdminDashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Admin />
    </ThemeProvider>
  );
};

export default AdminDashboard;
