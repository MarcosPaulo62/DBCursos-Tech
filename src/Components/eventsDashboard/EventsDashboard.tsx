import {StyledSpan} from "../../styles/typography";
import {StyledEventsContainer} from "./style";

export default function EventsDashboard() {
  const dates = getFourFutureDates();

  function getDay(day: number) {
    return dates[day - 1].split(" ")[0];
  }

  function getMonth(day: number) {
    return dates[day - 1].split(" ")[2].toUpperCase();
  }

  function getFourFutureDates() {
    const currentDate = new Date();

    const formattedDates = [];

    for (let i = 1; i <= 4; i++) {
      const futureDate = new Date(currentDate);
      futureDate.setDate(currentDate.getDate() + i);

      const formattedDate = futureDate.toLocaleString("pt-BR", {
        day: "numeric",
        month: "short",
      });

      formattedDates.push(formattedDate.slice(0, -1));
    }

    return formattedDates;
  }

  return (
    <StyledEventsContainer>
      <StyledSpan className="title-span" fontSize="lg">
        Eventos
      </StyledSpan>
      <div className="event-container">
        <div>
          <StyledSpan className="date-day" fontSize="lg">
            {getDay(1)}
          </StyledSpan>
          <StyledSpan className="date-month" fontSize="lg">
            {getMonth(1)}
          </StyledSpan>
        </div>
        <StyledSpan className="span-up" fontSize="md">
          Gincana DBCursos
        </StyledSpan>
      </div>
      <div className="event-container">
        <div>
          <StyledSpan className="date-day" fontSize="lg">
            {getDay(2)}
          </StyledSpan>
          <StyledSpan className="date-month" fontSize="lg">
            {getMonth(2)}
          </StyledSpan>
        </div>
        <StyledSpan className="span-up" fontSize="md">
          Avaliações Trimestrais
        </StyledSpan>
      </div>
      <div className="event-container">
        <div>
          <StyledSpan className="date-day" fontSize="lg">
            {getDay(3)}
          </StyledSpan>
          <StyledSpan className="date-month" fontSize="lg">
            {getMonth(3)}
          </StyledSpan>
        </div>
        <StyledSpan className="span-up" fontSize="md">
          Avaliações Finais
        </StyledSpan>
      </div>
      <div className="event-container">
        <div>
          <StyledSpan className="date-day" fontSize="lg">
            {getDay(4)}
          </StyledSpan>
          <StyledSpan className="date-month" fontSize="lg">
            {getMonth(4)}
          </StyledSpan>
        </div>
        <StyledSpan className="span-ups" fontSize="md">
          Fim do semestre Letivo
        </StyledSpan>
      </div>
    </StyledEventsContainer>
  );
}
