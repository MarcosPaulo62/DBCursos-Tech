import { StyledSpan } from "../../styles/typography";
import { StyledContainerFooter } from "./style";
import {
  LinkedinLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import xtwitter from "../../assets/x-twitter.svg";

export default function Footer() {
  return (
    <StyledContainerFooter>
      <div className="information-container">
        <div className="bdcursos-institucional">
          <StyledSpan fontSize="md">
            <strong>DBCursos Tech</strong>
          </StyledSpan>
          <StyledSpan fontSize="md">Home</StyledSpan>
          <StyledSpan fontSize="md">Sobre</StyledSpan>
          <StyledSpan fontSize="md">Cursos</StyledSpan>
        </div>
        <div className="bdcursos-institucional">
          <StyledSpan fontSize="md">
            <strong>Institucional</strong>
          </StyledSpan>
          <StyledSpan fontSize="md">Administrador</StyledSpan>
          <StyledSpan fontSize="md">Aluno</StyledSpan>
          <StyledSpan fontSize="md">Professor</StyledSpan>
        </div>
      </div>
      <div className="contacts">
        <StyledSpan className="span-footer" fontSize="md">
          <strong>Inscreva-se na nossa newsletter</strong>
        </StyledSpan>
        <input type="email" placeholder="Seu email" />
        <StyledSpan className="span-footer" fontSize="md">
          <strong>Nos encontre nas redes sociais</strong>
        </StyledSpan>
        <div className="social-network">
          <LinkedinLogo size={32} color="#ffffff" />
          <InstagramLogo size={32} color="#ffffff" />
          <YoutubeLogo size={32} color="#ffffff" />
          <img src={xtwitter} alt="logo xtwitter" />
        </div>
      </div>
    </StyledContainerFooter>
  );
}
