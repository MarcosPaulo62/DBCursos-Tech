import { Link } from "react-router-dom";
import Logo from "../../logo/Logo";
import Navbar from "../../navbar/Navbar";
import { HeaderWrapper } from "./style";

export default function Header() {
  return (
    <>
      <HeaderWrapper id="header">
        <Link to="/">
          <Logo />
        </Link>
        <Navbar />
      </HeaderWrapper>
    </>
  );
}
