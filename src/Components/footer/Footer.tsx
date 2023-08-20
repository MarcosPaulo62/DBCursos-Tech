import {StyledSpan} from "../../styles/typography";
import {StyledContainerFooter} from "./style";
import {LinkedinLogo, InstagramLogo, YoutubeLogo} from "@phosphor-icons/react";
import {Link as ScrollLink} from "react-scroll";
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
            <Link to="/">
              <ScrollLink to="header" smooth={true} duration={500}>
                Home
              </ScrollLink>
            </Link>
          </div>
        </div>
        <div className="bdcursos-institucional">
          <StyledSpan fontSize="md">
            <strong>Institucional</strong>
          </StyledSpan>
          <div>
            <Link to="/dashboard">Administrador</Link>
            <Link to="/dashboard">Aluno</Link>
            <Link to="/dashboard">Professor</Link>
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
          <Link to="https://www.linkedin.com/company/dbc-company/mycompany/" target="_blank">
            <LinkedinLogo size={32} />
          </Link>
          <Link to="https://www.instagram.com/dbc.company/" target="_blank">
            <InstagramLogo size={32} />
          </Link>
          <Link to="https://www.youtube.com/channel/UCjTW7OUdu4WdNH-Fu27I2VQ" target="_blank">
            <YoutubeLogo size={32} />
          </Link>
          <Link to="https://www.dbccompany.com.br/" target="_blank">
            <i className="fa-brands fa-x-twitter"></i>
          </Link>
        </div>
      </div>
    </StyledContainerFooter>
  );
}
