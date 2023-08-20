import {Link} from "react-router-dom";
import {LinkWrapper} from "./style";

interface iLink {
  to: string;
  children: React.ReactNode;
}

export default function Navlink({to, children}: iLink) {
  return (
    <LinkWrapper>
      <Link to={to} className="nav-link">
        {children}
      </Link>
    </LinkWrapper>
  );
}
