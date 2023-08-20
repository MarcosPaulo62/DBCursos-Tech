import {Link as ScrollLink} from "react-scroll";
import {NavbarWrapper} from "./style";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <NavbarWrapper>
        <Link to="/">
          <ScrollLink to="initial-page" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </Link>
        <Link to="/">
          <ScrollLink to="differentials" smooth={true} duration={500}>
            Diferenciais
          </ScrollLink>
        </Link>
        <Link to="/">
          <ScrollLink to="about" smooth={true} duration={500}>
            Sobre
          </ScrollLink>
        </Link>
        <Link to="/">
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contato
          </ScrollLink>
        </Link>
        <Link to="/login">
          <button>Entrar</button>
        </Link>
      </NavbarWrapper>
    </>
  );
}
