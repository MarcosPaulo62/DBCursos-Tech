import Footer from "../../Components/footer/Footer";
import Header from "../../Components/header/Header";
import NotFoundComponent from "../../Components/notFound/NotFound";
import { StyledNotFoundContainer } from "./style";

export default function NotFound() {
  return (
    <StyledNotFoundContainer>
      <Header />
      <NotFoundComponent />
      <Footer />
    </StyledNotFoundContainer>
  );
}
