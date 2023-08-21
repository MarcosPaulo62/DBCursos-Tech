import {
  Actions,
  Container,
  Content,
  Form,
  InputBg,
  InputMd,
  InputSm,
  Spacer,
  Title,
  Button,
  FormContent,
} from "./style";

export const ModalCadastro = () => {
  return (
    <>
      <Container>
        <Content>
          <Form>
            <FormContent>
              <Title>Cadastrar novo professor</Title>

              <InputBg
                type="text"
                placeholder="Nome do professor"
                required
              ></InputBg>
              <Spacer>
                <InputSm
                  type="number"
                  placeholder="Salário (R$)"
                  required
                ></InputSm>
                <InputMd
                  type="number"
                  placeholder="Número de CPF"
                  required
                ></InputMd>
              </Spacer>

              <InputBg
                type="text"
                placeholder="Especialidade"
                required
              ></InputBg>
            </FormContent>
            <Actions>
              <Button>Adicionar</Button>
            </Actions>
          </Form>
        </Content>
      </Container>
    </>
  );
};
