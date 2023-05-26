import React from "react";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }: any) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/naoautorizado" />;
  }

  return children;
}
