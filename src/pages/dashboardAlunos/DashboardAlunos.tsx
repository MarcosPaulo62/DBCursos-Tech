import { NavbarDashboard } from "../../Components/NavbarDashboard/NavbarDashboard";
import { DashboardWrapper } from "./styles";
import ListagemItens from "../../Components/listagem-itens-dashboard/ListagemItens";

export function DashboardAlunos() {
  const role = localStorage.getItem("cargo");

  return (
    <DashboardWrapper>
      <NavbarDashboard role={role ? role : ""} />
      <div className="lista-container" data-testid="listagem-itens-component">
        <ListagemItens
          isAdmin={role == "admin" ? true : false}
          typeItems="aluno"
        />
      </div>
    </DashboardWrapper>
  );
}
