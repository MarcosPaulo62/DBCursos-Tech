import { NavbarDashboard } from "../../Components/NavbarDashboard/NavbarDashboard";
import { DashboardWrapper } from "./styles";
import ListagemItens from "../../Components/listagem-itens-dashboard/ListagemItens";

export function DashboardProfessores() {
  const role = localStorage.getItem("cargo");

  return (
    <DashboardWrapper>
      <NavbarDashboard role={role ? role : ""} />
      <div className="lista-container">
        <ListagemItens
          isAdmin={role == "admin" ? true : false}
          typeItems="professor"
        />
      </div>
    </DashboardWrapper>
  );
}
