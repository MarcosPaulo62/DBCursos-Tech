import ListagemItens from "../../Components/listagemItensDashboard/ListagemItens";
import { NavbarDashboard } from "../../Components/navbarDashboard/NavbarDashboard";
import { DashboardWrapper } from "./styles";


export function DashboardCursos() {
  const role = localStorage.getItem("cargo");

  return (
    <DashboardWrapper>
      <NavbarDashboard role={role ? role : ""} data-testid="navbar-dashboard"/>
      <div className="lista-container">
        <ListagemItens
          isAdmin={role == "admin" ? true : false}
          typeItems="curso"
        />
      </div>
    </DashboardWrapper>
  );
}
