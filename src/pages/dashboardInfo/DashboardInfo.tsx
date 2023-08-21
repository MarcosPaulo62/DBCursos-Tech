import { NavbarDashboard } from "../../Components/NavbarDashboard/NavbarDashboard";
import { DashboardWrapper } from "./styles";
import { Link, useLocation } from "react-router-dom";
import InformationCardDashboard from "../../Components/informationCardDashboard/InformationCardDashboard";

export function DashboardInfo() {
  const role = localStorage.getItem("cargo");

  const location = useLocation();

  const tipo = location.pathname.split('/')[2];
  const id = location.pathname.split('/')[3];

  return (
    <>
      <DashboardWrapper>
        <NavbarDashboard role={role ? role : ""} />
        <div className="body">
          <InformationCardDashboard type={tipo} id={id} />
        </div>
      </DashboardWrapper>
    </>
  );
}
