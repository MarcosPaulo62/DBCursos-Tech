import { StyledSpan, StyledTag, StyledTitle } from "../../styles/typography";
import { StyledCardContainer } from "./style";

export default function LandingPageCard() {
  return (
    <StyledCardContainer>
      <StyledTitle className="title" tag="h3" fontWeight={400} fontSize="md">
        <strong>Título do curso</strong>
      </StyledTitle>
      <StyledTag>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit
        nisl, laoreet eu consequat quis, vulputate at risus. Duis in neque
        venenatis augue tincidunt mollis. Duis sed euismod neque. Maecenas.
      </StyledTag>
      <StyledSpan className="footer-card" fontSize="md">
        <strong>Carga horária:</strong> xx h
      </StyledSpan>
    </StyledCardContainer>
  );
}
