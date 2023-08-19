import Header from "../../Components/Header/Header";
import {HeroContent, HeroWrapper} from "./style";

export default function Home() {
  return (
    <>
      <Header />
      <HeroWrapper>
        <HeroContent>
          <h1>
            DBCursos <span>Tech</span>
          </h1>
          <div>
            <p>
              O caminho <span>inteligente</span>
            </p>
            <p>
              para a sua <span>excelência</span> em TI!
            </p>
          </div>
        </HeroContent>
      </HeroWrapper>
    </>
  );
}
