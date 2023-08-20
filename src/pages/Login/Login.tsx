import { AuthenticationCard } from "../../components/AuthenticationCard/AuthenticationCard";
import { SignUpAndLoginWrapper } from "../SignUp/styles";

export function Login() {
  return (
    <SignUpAndLoginWrapper>
      <AuthenticationCard isLoginPage={true} />
    </SignUpAndLoginWrapper>
  );
}
