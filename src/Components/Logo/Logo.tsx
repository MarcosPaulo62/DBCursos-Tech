import {LogoWrapper} from "./style";
import whiteLogo from "../../assets/Logo_Branco.png";

export default function Logo() {
  return (
    <>
      <LogoWrapper>
        <img src={whiteLogo} alt="Logo da empresa escrito DBC Cursos Tech" />
      </LogoWrapper>
    </>
  );
}
