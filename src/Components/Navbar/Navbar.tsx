import Button from "../buttonHeader/Button";
import Navlink from "../Navlink/Navlink";
import {NavbarWrapper} from "./style";

export default function Navbar() {
  return (
    <>
      <NavbarWrapper>
        <Navlink to="/">Home</Navlink>
        <Navlink to="/">
          <Button>Entrar</Button>
        </Navlink>
      </NavbarWrapper>
    </>
  );
}
