import { StyledInformationCardDashboard } from "./style";
import course from "../../assets/cardprofessor.png";
import student from '../../assets/aluna 1.png'
import teacher from '../../assets/professor 1.png'
import { StyledSpan, StyledTag } from "../../styles/typography";

export default function InformationCardDashboard() {
  return (
    <>
      <StyledInformationCardDashboard>
        <img src={course} alt="" />
        <div>
          <StyledSpan className="title-information" fontSize="lg">
            <strong>Curso:</strong> Python Avançado
          </StyledSpan>
          <div className="information-periodCh">            
            <StyledSpan className="block-span" fontSize="lg">
              <strong>Périodo:</strong> Manhã
            </StyledSpan>           
            <StyledSpan className="block-span" fontSize="lg">
              <strong>Carga horária:</strong> 160h
            </StyledSpan>
          </div>
          <StyledSpan className="professor-tag" fontSize="lg">
            <strong>Professor:</strong> Gustavo Guanabara
          </StyledSpan>
          <StyledSpan className="description" fontSize="lg">
            <strong>Descrição:</strong>
          </StyledSpan>
          <StyledTag className="description">
            Descrição: Silvio Santos Ipsum Ma! Ao adquirir o carnê do Baú, você
            estará concorrendo a um prêmio de cem mil reaisam. Mah roda a
            roduamm. É namoro ou amizadeemm?m.
          </StyledTag>
          <div className="buttons">
            <button className='editar' type="submit">Editar</button>
            <button className="remover" type="submit">Remover</button>
          </div>
        </div>
      </StyledInformationCardDashboard>
    </>
  );
}
