import {Link} from "react-router-dom";

interface iLink {
  to: string;
  children: React.ReactNode;
}

export default function Navlink({to, children}: iLink) {
  return <Link to={to}>{children}</Link>;
}
