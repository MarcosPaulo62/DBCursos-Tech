import {iChildren} from "../../utils/interface";
import {ButtonWrapper} from "./style";

export default function Button({children}: iChildren) {
  return (
    <>
      <ButtonWrapper>{children}</ButtonWrapper>
    </>
  );
}
