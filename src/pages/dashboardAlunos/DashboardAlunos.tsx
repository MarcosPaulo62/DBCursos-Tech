
import { NavbarDashboard } from "../../Components/navbarDashboard/NavbarDashboard";
import ListagemItens from "../../Components/listagemItensDashboard/ListagemItens";
import { DashboardWrapper } from "./styles";


export function DashboardAlunos() {
  const role = localStorage.getItem("cargo");

  return (
    <DashboardWrapper>
      <NavbarDashboard role={role ? role : ""} />
      <div className="lista-container">
        <ListagemItens
          isAdmin={role == "admin" ? true : false}
          typeItems="aluno"
        />
      </div>
    </DashboardWrapper>
  );
}
