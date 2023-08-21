import ListagemItens from "../../Components/listagemItensDashboard/ListagemItens";
import { NavbarDashboard } from "../../Components/navbarDashboard/NavbarDashboard";
import { DashboardWrapper } from "./styles";

export function DashboardProfessores() {
  const role = localStorage.getItem("cargo");

  return (
    <DashboardWrapper>
      <NavbarDashboard role={role ? role : ""} />
      <div className="lista-container">
        <ListagemItens
          isAdmin={role === "admin" ? true : false}
          typeItems="professor"
        />
      </div>
    </DashboardWrapper>
  );
}
