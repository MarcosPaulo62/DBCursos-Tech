import { AuthenticationCard } from "../../components/AuthenticationCard/AuthenticationCard";
import { SignUpWrapper } from "./styles";

export function SignUp() {
  return (
    <SignUpWrapper>
      <AuthenticationCard isLoginPage={false} />
    </SignUpWrapper>
  );
}
