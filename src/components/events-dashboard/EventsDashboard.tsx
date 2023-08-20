import { StyledSpan } from "../../styles/typography";
import { StyledEventsContainer } from "./style";

export default function EventsDashboard() {



  return (
    <StyledEventsContainer>
      <StyledSpan className="title-span" fontSize="lg">
        Eventos
      </StyledSpan>
      <div>
        <div>
          <StyledSpan className="date-day" fontSize="lg">
            28
          </StyledSpan>
          <StyledSpan className="date-month" fontSize="lg">
            SET
          </StyledSpan>
        </div>
        <div>
          <StyledSpan className="span-up" fontSize="md">
            Gincana
          </StyledSpan>
          <StyledSpan className="span-down" fontSize="md">
            DBCursos
          </StyledSpan>
        </div>
      </div>
      <div>
        <div>
          <StyledSpan className="date-day" fontSize="lg">
            02
          </StyledSpan>
          <StyledSpan className="date-month" fontSize="lg">
            OUT
          </StyledSpan>
        </div>
        <div>
          <StyledSpan className="span-up" fontSize="md">
            Avaliações
          </StyledSpan>
          <StyledSpan className="span-down" fontSize="md">
            Trimestrais
          </StyledSpan>
        </div>
      </div>
      <div>
        <div>
          <StyledSpan className="date-day" fontSize="lg">
            28
          </StyledSpan>
          <StyledSpan className="date-month" fontSize="lg">
            NOV
          </StyledSpan>
        </div>
        <div>
          <StyledSpan className="span-up" fontSize="md">
            Avaliações
          </StyledSpan>
          <StyledSpan className="span-down" fontSize="md">
            Finais
          </StyledSpan>
        </div>
      </div>
      <div>
        <div>
          <StyledSpan className="date-day" fontSize="lg">
            15
          </StyledSpan>
          <StyledSpan className="date-month" fontSize="lg">
            DEZ
          </StyledSpan>
        </div>
        <div>
          <StyledSpan className="span-ups" fontSize="md">
            Fim do <br />
            semestre
          </StyledSpan>
          <StyledSpan className="span-down" fontSize="md">
            Letivo
          </StyledSpan>
        </div>
      </div>
    </StyledEventsContainer>
  );
}
