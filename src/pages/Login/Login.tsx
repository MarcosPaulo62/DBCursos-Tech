import {AuthenticationCard} from "../../Components/authenticationCard/AuthenticationCard";
import {SignUpAndLoginWrapper} from "../signUp/styles";

export function Login() {
  return (
    <SignUpAndLoginWrapper>
      <AuthenticationCard isLoginPage={true} />
    </SignUpAndLoginWrapper>
  );
}
