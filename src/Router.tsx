import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Login} from "./pages/login/Login";
import {SignUp} from "./pages/signUp/SignUp";
import {Dashboard} from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import {PrivateRoute} from "./pages/layout/privateRoute";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
