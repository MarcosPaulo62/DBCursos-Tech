import { NavbarDashboard } from "../../Components/NavbarDashboard/NavbarDashboard";
import { ConfirmExclusionCard } from "../../Components/confirmExclusionCard/ConfirmExclusionCard";
import { DashboardWrapper } from "./styles";

export function Dashboard() {
  return (
    <DashboardWrapper>
      <NavbarDashboard role="admin" />
      <ConfirmExclusionCard />
    </DashboardWrapper>
  );
}
