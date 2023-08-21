import React from "react";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import { StyledNotFoundContainer } from "./style";
import NotFoundComponent from "../../Components/notfound/NotFound";

export default function NotFound() {
  return (
    <StyledNotFoundContainer>
      <Header />
      <NotFoundComponent />
      <Footer />
    </StyledNotFoundContainer>
  );
}
