import {BrowserRouter, Routes, Route, Outlet, Navigate} from "react-router-dom";
import {Login} from "./pages/login/Login";
import {SignUp} from "./pages/signUp/SignUp";
import {Dashboard} from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import {DashboardAlunos} from "./pages/dashboardAlunos/DashboardAlunos";
import {DashboardCursos} from "./pages/dashboardCursos/DashboardCursos";
import {DashboardProfessores} from "./pages/dashboardProfessores/DashboardProfessores";
import {DashboardInfo} from "./pages/dashboardInfo/DashboardInfo";
import NotFound from "./pages/notfound/NotFound";

function ProtectedRoutes() {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to={"/login"} />;
}

function TeacherArea() {
  const role = localStorage.getItem("cargo");
  return role === "aluno" || role === "admin" || role === "professor" ? <Outlet /> : <Navigate to={"/dashboard"} />;
}

function StudentArea() {
  const role = localStorage.getItem("cargo");
  return role === "professor" || role === "admin" ? <Outlet /> : <Navigate to={"/dashboard"} />;
}

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/cursos" element={<DashboardCursos />} />
          <Route path="/dashboard/curso/:idCurso" element={<DashboardInfo />} />
          <Route element={<StudentArea />}>
            <Route path="/dashboard/alunos" element={<DashboardAlunos />} />
            <Route path="/dashboard/aluno/:idAluno" element={<DashboardInfo />} />
          </Route>
          <Route element={<TeacherArea />}>
            <Route path="/dashboard/professores" element={<DashboardProfessores />} />
            <Route path="/dashboard/professor/:idProfessor" element={<DashboardInfo />} />
          </Route>
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
