import { ArrowCircleLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { AuthenticationCard } from "../../Components/authenticationCard/AuthenticationCard";
import { SignUpAndLoginWrapper } from "./styles";

export function SignUp() {
  return (
    <SignUpAndLoginWrapper>
      <Link to={"/"} className="homeButton">
        <ArrowCircleLeft size={32} />
        <span data-testid='initial-page-text'>Página Inicial</span>
      </Link>
      <AuthenticationCard isLoginPage={false} />
    </SignUpAndLoginWrapper>
  );
}
