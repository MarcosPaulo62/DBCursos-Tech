import Button from "../ButtonHeader/Button";
import Navlink from "../Navlink/Navlink";
import {NavbarWrapper} from "./style";

export default function Navbar() {
  return (
    <>
      <NavbarWrapper>
        <Navlink to="/">Home</Navlink>
        <Navlink to="/">Sobre</Navlink>
        <Navlink to="/">Cursos</Navlink>
        <Navlink to="/">
          <Button>Entrar</Button>
        </Navlink>
      </NavbarWrapper>
    </>
  );
}
