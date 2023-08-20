import { ArrowCircleLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { AuthenticationCard } from "../../Components/authenticationCard/AuthenticationCard";
import { SignUpAndLoginWrapper } from "../signUp/styles";

export function Login() {
  return (
    <SignUpAndLoginWrapper>
      <Link to={"/"} className="homeButton">
        <ArrowCircleLeft size={32} />
        <span>Página Inicial</span>
      </Link>
      <AuthenticationCard isLoginPage={true} />
    </SignUpAndLoginWrapper>
  );
}
