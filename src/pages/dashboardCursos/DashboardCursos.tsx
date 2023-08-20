import { NavbarDashboard } from "../../Components/NavbarDashboard/NavbarDashboard";
import { DashboardWrapper } from "./styles";
import ListagemItens from "../../Components/listagem-itens-dashboard/ListagemItens";

export function DashboardCursos() {
  const role = localStorage.getItem("cargo");

  return (
    <DashboardWrapper>
      <NavbarDashboard role={role ? role : ""} />
      <div className="lista-container">
        <ListagemItens
          isAdmin={role == "admin" ? true : false}
          typeItems="curso"
        />
      </div>
    </DashboardWrapper>
  );
}
