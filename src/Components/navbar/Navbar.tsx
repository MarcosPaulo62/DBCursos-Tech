import Button from "../buttonHeader/Button";
import Navlink from "../navlink/Navlink";
import {Link as ScrollLink} from "react-scroll";
import {NavbarWrapper} from "./style";

export default function Navbar() {
  return (
    <>
      <NavbarWrapper>
        <Navlink to="/">
          <ScrollLink to="initial-page" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </Navlink>
        <Navlink to="/">
          <ScrollLink to="differentials" smooth={true} duration={500}>
            Diferenciais
          </ScrollLink>
        </Navlink>
        <Navlink to="/">
          <ScrollLink to="about" smooth={true} duration={500}>
            Sobre
          </ScrollLink>
        </Navlink>
        <Navlink to="/">
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contato
          </ScrollLink>
        </Navlink>
        <Navlink to="/login">
          <Button>Entrar</Button>
        </Navlink>
      </NavbarWrapper>
    </>
  );
}
