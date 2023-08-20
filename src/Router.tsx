import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Login} from "./pages/login/Login";
import {SignUp} from "./pages/signUp/SignUp";
import {Dashboard} from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
