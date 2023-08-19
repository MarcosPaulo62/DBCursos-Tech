import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import Navlink from "../navlink/Navlink";
import {HeaderWrapper} from "./style";

export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <Navlink to="/">
          <Logo />
        </Navlink>
        <Navbar />
      </HeaderWrapper>
    </>
  );
}
