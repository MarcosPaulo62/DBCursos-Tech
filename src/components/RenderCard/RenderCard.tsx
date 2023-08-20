import { CardHome } from "../CardHome/CardHome";
import { Content } from "./style";

export const RenderCard = () => {
  localStorage.setItem("cargo", "aluno");
  const cargo = localStorage.getItem("cargo");
  let conteudo: React.ReactNode;
  if (cargo === "professor") {
    conteudo = (
      <>
        <CardHome image="curso.png" cargo="Cursos" />
        <CardHome image="aluno.png" cargo="Alunos" />
      </>
    );
  } else if (cargo === "aluno") {
    conteudo = (
      <>
        <CardHome image="curso.png" cargo="Cursos" />
        <CardHome image="professor.png" cargo="Professores" />
      </>
    );
  } else if (cargo === "admin") {
    conteudo = (
      <>
        <CardHome image="aluno.png" cargo="Alunos" />
        <CardHome image="curso.png" cargo="Cursos" />
        <CardHome image="professor.png" cargo="Professores" />
      </>
    );
  } else {
    conteudo = <h1>Ações bloqueadas</h1>;
  }
  return (
    <>
      <Content>{conteudo}</Content>
    </>
  );
};
