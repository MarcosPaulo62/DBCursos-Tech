import { NavbarDashboard } from "../../Components/NavbarDashboard/NavbarDashboard";
import InformationCardDashboard from "../../Components/informationCardDashboard/InformationCardDashboard";
import { DashboardWrapper } from "./styles";

export function Dashboard() {
  return (
    <>
    <DashboardWrapper>
      <NavbarDashboard role="admin" />  
      <InformationCardDashboard />    
    </DashboardWrapper>
    
    </>
  );
}
