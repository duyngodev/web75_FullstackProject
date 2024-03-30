import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const PrivateRoute = ({ children }) => {
  const data = JSON.parse(localStorage.getItem("user"));
  if (!data) {
    return <Navigate to="/login" />;
  } else if (!data.userRole.includes("admin")) {
    return <Navigate to="/login" />;
  } else return children;
};

export default PrivateRoute;
