import { Content, Img, Paragraph } from "./style";

export const Welcome = () => {
  return (
    <>
      <Content>
        <Paragraph>
          Bem-vindo à área do Professor! Aqui você pode buscar pelos alunos da
          instituição e fazer o cadastro de novos cursos.
        </Paragraph>
        <Img
          src="welcomeicon.png"
          alt="Desenho de um capelo em cima de um diploma"
        />
      </Content>
    </>
  );
};
