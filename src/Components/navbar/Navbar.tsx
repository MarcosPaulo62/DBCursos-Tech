import {Link as ScrollLink} from "react-scroll";
import {NavbarWrapper} from "./style";
import {Link, useNavigate} from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <NavbarWrapper>
        <ScrollLink to="initial-page" smooth={true} duration={500}>
          Home
        </ScrollLink>
        <ScrollLink to="differentials" smooth={true} duration={500}>
          Diferenciais
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500}>
          Sobre
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500}>
          Contato
        </ScrollLink>
        <button onClick={() => navigate("/login")}>Entrar</button>
      </NavbarWrapper>
    </>
  );
}
