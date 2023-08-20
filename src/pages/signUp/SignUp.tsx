import { AuthenticationCard } from "../../Components/authenticationCard/AuthenticationCard";
import { SignUpAndLoginWrapper } from "./styles";

export function SignUp() {
  return (
    <SignUpAndLoginWrapper>
      <AuthenticationCard isLoginPage={false} />
    </SignUpAndLoginWrapper>
  );
}
