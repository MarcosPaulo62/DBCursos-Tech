import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Navlink from "../Navlink/Navlink";
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
