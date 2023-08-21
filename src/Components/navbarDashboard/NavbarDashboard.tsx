import { SignOut, UserCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo_Branco.png";
import { NavbarDashboardWrapper } from "./styles";

export interface iNavbarhDashboard {
  role: string;
}

export function NavbarDashboard({ role }: iNavbarhDashboard) {
  const [page, setPage] = useState("");
  const userRole = role;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getPathname();
  }, []);

  function getPathname() {
    const url = location.pathname;

    if (url === "/dashboard") {
      setPage("home");
    } else if (url.includes("curso")) {
      setPage("cursos");
    } else if (url.includes("aluno")) {
      setPage("alunos");
    } else if (url.includes("professor")) {
      setPage("professores");
    } 
  }

  const userLogado = localStorage.getItem("nome");

  return (
    <NavbarDashboardWrapper >
      <div>
        <img className="logo" src={Logo} alt="logo da DBCursos Tech" onClick={() => navigate("/")} />
        <div className="greeting">
          <UserCircle size={48} />
          <span>Olá, {userLogado}!</span>
        </div>
        {userRole.toLocaleLowerCase() === "aluno" && (
          <div className="links">
            <button
              className={page === "home" ? "onfocus" : ""}
              onClick={() => {
                setPage("home");
                navigate("/dashboard");
              }}
            >
              Home
            </button>
            <button
              className={page === "cursos" ? "onfocus" : ""}
              onClick={() => {
                setPage("cursos");
                navigate("/dashboard/cursos");
              }}
            >
              Cursos
            </button>
            <button
              className={page === "professores" ? "onfocus" : ""}
              onClick={() => {
                setPage("professores");
                navigate("/dashboard/professores");
              }}
            >
              Professores
            </button>
          </div>
        )}
        {userRole.toLocaleLowerCase() === "professor" && (
          <div className="links">
            <button
              className={page === "home" ? "onfocus" : ""}
              onClick={() => {
                setPage("home");
                navigate("/dashboard");
              }}
            >
              Home
            </button>
            <button
              className={page === "cursos" ? "onfocus" : ""}
              onClick={() => {
                setPage("cursos");
                navigate("/dashboard/cursos");
              }}
            >
              Cursos
            </button>
            <button
              className={page === "alunos" ? "onfocus" : ""}
              onClick={() => {
                setPage("alunos");
                navigate("/dashboard/alunos");
              }}
            >
              Alunos
            </button>
          </div>
        )}
        {userRole.toLocaleLowerCase() === "admin" && (
          <div className="links">
            <button
              className={page === "home" ? "onfocus" : ""}
              onClick={() => {
                setPage("home");
                navigate("/dashboard");
              }}
            >
              Home
            </button>
            <button
              className={page === "cursos" ? "onfocus" : ""}
              onClick={() => {
                setPage("cursos");
                navigate("/dashboard/cursos");
              }}
            >
              Cursos
            </button>
            <button
              className={page === "alunos" ? "onfocus" : ""}
              onClick={() => {
                setPage("alunos");
                navigate("/dashboard/alunos");
              }}
            >
              Alunos
            </button>
            <button
              className={page === "professores" ? "onfocus" : ""}
              onClick={() => {
                setPage("professores");
                navigate("/dashboard/professores");
              }}
            >
              Professores
            </button>
          </div>
        )}
      </div>
      <div
        className="logout"
        onClick={() => {
          navigate("/");
          localStorage.clear();
        }}
      >
        <SignOut size={32} />
        <span>Sair</span>
      </div>
    </NavbarDashboardWrapper>
  );
}
