import { AuthenticationCard } from "../../components/AuthenticationCard/AuthenticationCard";
import { SignUpAndLoginWrapper } from "./styles";

export function SignUp() {
  return (
    <SignUpAndLoginWrapper>
      <AuthenticationCard isLoginPage={false} />
    </SignUpAndLoginWrapper>
  );
}
