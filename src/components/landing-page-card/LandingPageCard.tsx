import { StyledTag, StyledTitle } from "../../styles/typography";
import { StyledCardContainer, StyledContainerCard } from "./style";

export default function LandingPageCard() {
  return (
    <StyledContainerCard>
    <StyledCardContainer>
      <div>
      <StyledTitle className="title" tag="h3" fontWeight={400} fontSize="md">
        <strong>Instrutores Experientes</strong>
      </StyledTitle>      
      <StyledTag className="card-p">
      Nossa equipe de instrutores traz anos de experiência prática em suas respectivas áreas, oferecendo uma perspectiva valiosa sobre o mundo real.
      </StyledTag>  
      </div>    
    </StyledCardContainer>

<StyledCardContainer>
<div>
<StyledTitle className="title" tag="h3" fontWeight={400} fontSize="md">
  <strong>Abordagem Prática</strong>
</StyledTitle>      
<StyledTag className="card-p">
Acreditamos na aprendizagem prática. Nossos cursos são repletos de projetos práticos que ajudam a consolidar seu aprendizado.
</StyledTag>  
</div>    
</StyledCardContainer>

<StyledCardContainer>
      <div>
      <StyledTitle className="title" tag="h3" fontWeight={400} fontSize="md">
        <strong>Tecnologia de Ponta</strong>
      </StyledTitle>      
      <StyledTag className="card-p">
      Estamos comprometidos em manter nossos cursos atualizados com as mais recentes tendências tecnológicas para prepará-lo para o sucesso no mercado de trabalho.
      </StyledTag>  
      </div>    
    </StyledCardContainer>

  </StyledContainerCard>
  );
}
