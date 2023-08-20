import { NavbarDashboard } from "../../components/NavbarDashboard/NavbarDashboard";
import { DashboardWrapper } from "./styles";

export function Dashboard() {
  return (
    <DashboardWrapper>
      <NavbarDashboard role="admin" />
    </DashboardWrapper>
  );
}
