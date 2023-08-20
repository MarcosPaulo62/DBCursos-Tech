import {iChildren} from "../../utils/interface";
import {ButtonWrapper} from "./style";

interface iButton {
  type?: "button" | "submit" | "reset";
}

export default function Button(props: iChildren & iButton) {
  const {children, type} = props;

  return (
    <>
      <ButtonWrapper type={type}>{children}</ButtonWrapper>
    </>
  );
}
