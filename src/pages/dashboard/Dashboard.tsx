import { CardHome } from "../../Components/CardHome/CardHome";
import { NavbarDashboard } from "../../Components/NavbarDashboard/NavbarDashboard";
import { Welcome } from "../../Components/Welcome/Welcome";
import EventsDashboard from "../../Components/events-dashboard/EventsDashboard";
import { DashboardWrapper } from "./styles";
import aluna from "../../assets/aluna.png";
import professor from "../../assets/professor.png";
import curso from "../../assets/curso-online.png";
import { Link } from "react-router-dom";

export function Dashboard() {
  const role = localStorage.getItem("cargo");

  return (
    <DashboardWrapper>
      <NavbarDashboard role={role ? role : ""} />
      <div className="body">
        <h2>
          Área do{" "}
          {role == "aluno"
            ? " Aluno"
            : role == "admin"
            ? " Administrador"
            : " Professor"}
        </h2>
        <div className="elementos">
          <div className="cards">
            <Welcome />
            <Link to="/dashboard/cursos">
              <CardHome cargo="Cursos" image={curso} />
            </Link>
            {(role == "professor" || role == "admin") && (
              <Link to="/dashboard/alunos">
                <CardHome cargo="Alunos" image={aluna} />
              </Link>
            )}
            {(role == "aluno" || role == "admin") && (
              <Link to="/dashboard/professores">
                <CardHome cargo="Professores" image={professor} />
              </Link>
            )}
          </div>
          <EventsDashboard />
        </div>
      </div>
    </DashboardWrapper>
  );
}
