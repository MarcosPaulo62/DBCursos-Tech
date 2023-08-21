import {CardHome} from "../../Components/cardHome/CardHome";
import {NavbarDashboard} from "../../Components/navbarDashboard/NavbarDashboard";
import {Welcome} from "../../Components/welcome/Welcome";
import EventsDashboard from "../../Components/eventsDashboard/EventsDashboard";
import {DashboardWrapper} from "./styles";
import aluna from "../../assets/aluna.png";
import professor from "../../assets/professor.png";
import curso from "../../assets/curso-online.png";
import {Link} from "react-router-dom";

export function Dashboard() {
  const role = localStorage.getItem("cargo");

  return (
    <>
<<<<<<< HEAD
    <DashboardWrapper>
      <NavbarDashboard role={role ? role : ""} />
      <div className="body">
        <h2>
          Área do{" "}
          {role === "aluno"
            ? " Aluno"
            : role === "admin"
            ? " Administrador"
            : " Professor"}
        </h2>
        <div className="elementos">
          <div className="cards">
            <Welcome />
            <Link to="/dashboard/cursos">
              <CardHome cargo="Cursos" image={curso} />
            </Link>
            {(role === "professor" || role === "admin") && (
              <Link to="/dashboard/alunos">
                <CardHome cargo="Alunos" image={aluna} />
              </Link>
            )}
            {(role === "aluno" || role === "admin") && (
              <Link to="/dashboard/professores">
                <CardHome cargo="Professores" image={professor} />
              </Link>
            )}
=======
      <DashboardWrapper>
        <NavbarDashboard role={role ? role : ""} />
        <div className="body">
          <h2>Área do {role == "aluno" ? " Aluno" : role == "admin" ? " Administrador" : " Professor"}</h2>
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
              {(role == "aluno" || role == "admin" || role == "professor") && (
                <Link to="/dashboard/professores">
                  <CardHome cargo="Professores" image={professor} />
                </Link>
              )}
            </div>
            <EventsDashboard />
>>>>>>> 54ab8581a645ded46f22964bc243a9936271bfd2
          </div>
        </div>
      </DashboardWrapper>
    </>
  );
}
