import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Login} from "./pages/login/Login";
import {SignUp} from "./pages/signUp/SignUp";
import {Dashboard} from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import { DashboardAlunos } from "./pages/dashboardAlunos/DashboardAlunos";
import { DashboardCursos } from "./pages/dashboardCursos/DashboardCursos";
import { DashboardProfessores } from "./pages/dashboardProfessores/DashboardProfessores";
import { DashboardInfo } from "./pages/dashboardInfo/DashboardInfo";
import React from "react";
import NotFound from "./pages/notfound/NotFound";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/alunos" element={<DashboardAlunos />} />
        <Route path="/dashboard/cursos" element={<DashboardCursos />} />
        <Route path="/dashboard/professores" element={<DashboardProfessores />} />
        <Route path="/dashboard/professor/:idProfessor" element={<DashboardInfo />} />
        <Route path="/dashboard/aluno/:idAluno" element={<DashboardInfo />} />
        <Route path="/dashboard/curso/:idCurso" element={<DashboardInfo />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
