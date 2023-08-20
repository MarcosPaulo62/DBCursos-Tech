import { Content, Img, Paragraph } from "./style";

export const Welcome = () => {
  const cargo = localStorage.getItem("cargo");

  let text: string = "";
  switch (cargo) {
    case "admin":
      text =
        "Bem-vindo à área do Administrador! Aqui você pode fazer o cadastro e edição de alunos, cursos e professores.";
      break;
    case "professor":
      text =
        "Bem-vindo à área do Professor! Aqui você pode buscar pelos alunos da instituição e fazer o adastro de novos cursos.";
      break;
    case "aluno":
      text =
        "Bem-vindo à área do Aluno! Aqui você pode buscar pelos cursos da instituição e também pelos professores!";
      break;
    default:
      break;
  }

  return (
    <>
      <Content>
        <Paragraph>{text}</Paragraph>
        <Img
          src="welcomeicon.png"
          alt="Desenho de um capelo em cima  de um diploma"
        />
      </Content>
    </>
  );
};
