import { NavbarDashboardWrapper } from "./styles";
import Logo from "../../assets/Logo_Branco.png";
import { UserCircle, SignOut } from "@phosphor-icons/react";
import { useState } from "react";

export interface iNavbarhDashboard {
  role: string;
}

export function NavbarDashboard({ role }: iNavbarhDashboard) {
  const [page, setPage] = useState("home");
  const [userRole, setUserRole] = useState(role);

  function returnGreeting(role: string) {
    switch (role) {
      case "aluno":
        return "Olá, aluno(a)!";
      case "professor":
        return "Olá, professor(a)!";
      case "admin":
        return "Olá, admin!";
      default:
        break;
    }
  }

  return (
    <NavbarDashboardWrapper>
      <div>
        <img className="logo" src={Logo} alt="logo da DBCursos Tech" />
        <div className="greeting">
          <UserCircle size={48} />
          <span>{returnGreeting(role)}</span>
        </div>
        <div className="links">
          {userRole.toLocaleLowerCase() === "aluno" && (
            <div>
              <button
                className={page === "home" ? "onfocus" : ""}
                onClick={() => setPage("home")}
              >
                Home
              </button>
              <button
                className={page === "cursos" ? "onfocus" : ""}
                onClick={() => setPage("cursos")}
              >
                Cursos
              </button>
              <button
                className={page === "professores" ? "onfocus" : ""}
                onClick={() => setPage("professores")}
              >
                Professores
              </button>
            </div>
          )}
          {userRole.toLocaleLowerCase() === "professor" && (
            <div>
              <button
                className={page === "home" ? "onfocus" : ""}
                onClick={() => setPage("home")}
              >
                Home
              </button>
              <button
                className={page === "cursos" ? "onfocus" : ""}
                onClick={() => setPage("cursos")}
              >
                Cursos
              </button>
              <button
                className={page === "alunos" ? "onfocus" : ""}
                onClick={() => setPage("alunos")}
              >
                Alunos
              </button>
            </div>
          )}
          {userRole.toLocaleLowerCase() === "admin" && (
            <div>
              <button
                className={page === "home" ? "onfocus" : ""}
                onClick={() => setPage("home")}
              >
                Home
              </button>
              <button
                className={page === "cursos" ? "onfocus" : ""}
                onClick={() => setPage("cursos")}
              >
                Cursos
              </button>
              <button
                className={page === "alunos" ? "onfocus" : ""}
                onClick={() => setPage("alunos")}
              >
                Alunos
              </button>
              <button
                className={page === "professores" ? "onfocus" : ""}
                onClick={() => setPage("professores")}
              >
                Professores
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="logout">
        <SignOut size={32} />
        <span>Sair</span>
      </div>
    </NavbarDashboardWrapper>
  );
}
