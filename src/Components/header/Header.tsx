import Navlink from "../navlink/Navlink";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import {HeaderWrapper} from "./style";

export default function Header() {
  return (
    <>
      <HeaderWrapper id="header">
        <Navlink to="/">
          <Logo />
        </Navlink>
        <Navbar />
      </HeaderWrapper>
    </>
  );
}
