import { AuthenticationCard } from "../../components/AuthenticationCard/AuthenticationCard";
import { LoginWrapper } from "./styles";

export function Login() {
  return (
    <LoginWrapper>
      <AuthenticationCard isLoginPage={true} />
    </LoginWrapper>
  );
}
