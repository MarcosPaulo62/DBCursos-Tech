import {Outlet, Navigate} from "react-router-dom";

export function PrivateRoute() {
  const isTokenValid = localStorage.getItem("token");

  return isTokenValid ? <Outlet /> : <Navigate to="/login" />;
}
