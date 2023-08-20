import {StyledSpan} from "../../styles/typography";
import {StyledContainerFooter} from "./style";
import {LinkedinLogo, InstagramLogo, YoutubeLogo} from "@phosphor-icons/react";
import Navlink from "../navlink/Navlink";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <StyledContainerFooter>
      <div className="information-container">
        <div className="bdcursos-institucional">
          <StyledSpan fontSize="md">
            <strong>DBCursos Tech</strong>
          </StyledSpan>
          <div>
            <Navlink to="/">Home</Navlink>
          </div>
        </div>
        <div className="bdcursos-institucional">
          <StyledSpan fontSize="md">
            <strong>Institucional</strong>
          </StyledSpan>
          <div>
            <Navlink to="/dashboard">Administrador</Navlink>
            <Navlink to="/dashboard">Aluno</Navlink>
            <Navlink to="/dashboard">Professor</Navlink>
          </div>
        </div>
      </div>
      <div className="contacts">
        {/* <StyledSpan className="span-footer" fontSize="md">
          <strong>Inscreva-se na nossa newsletter</strong>
        </StyledSpan>
        <input type="email" placeholder="Seu email" /> */}
        <StyledSpan className="span-footer" fontSize="md">
          <strong>Nos encontre nas redes sociais</strong>
        </StyledSpan>
        <div className="social-network">
          <Link to="">
            <LinkedinLogo size={32} />
          </Link>
          <Link to="">
            <InstagramLogo size={32} />
          </Link>
          <Link to="">
            <YoutubeLogo size={32} />
          </Link>
          <Link to="">
            <i className="fa-brands fa-x-twitter"></i>
          </Link>
        </div>
      </div>
    </StyledContainerFooter>
  );
}
